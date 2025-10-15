'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, X, ChevronDown } from 'lucide-react';
import { Button } from './button';

interface ProductFiltersProps {
  onFiltersChange: (filters: FilterState) => void;
  categories: string[];
  brands: string[];
}

export interface FilterState {
  category: string[];
  brand: string[];
  priceRange: [number, number];
  inStock: boolean | null;
  rating: number | null;
  tags: string[];
}

const priceRanges = [
  { label: 'Under $50', value: [0, 50] as [number, number] },
  { label: '$50 - $100', value: [50, 100] as [number, number] },
  { label: '$100 - $200', value: [100, 200] as [number, number] },
  { label: '$200 - $500', value: [200, 500] as [number, number] },
  { label: 'Over $500', value: [500, 10000] as [number, number] },
];

const commonTags = [
  'military-grade',
  'tactical',
  'molle',
  'waterproof',
  'tccc',
  'ballistic',
  'field-operations',
  'law-enforcement',
  'combat-medic',
  'survival',
  'emergency'
];

export function ProductFilters({ onFiltersChange, categories, brands }: ProductFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    category: [],
    brand: [],
    priceRange: [0, 10000],
    inStock: null,
    rating: null,
    tags: []
  });

  const updateFilters = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFiltersChange(updatedFilters);
  };

  const toggleArrayFilter = (key: 'category' | 'brand' | 'tags', value: string) => {
    const currentArray = filters[key];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    updateFilters({ [key]: newArray });
  };

  const clearFilters = () => {
    const clearedFilters: FilterState = {
      category: [],
      brand: [],
      priceRange: [0, 10000],
      inStock: null,
      rating: null,
      tags: []
    };
    setFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  const activeFiltersCount = [
    ...filters.category,
    ...filters.brand,
    ...filters.tags,
    filters.inStock !== null ? 1 : 0,
    filters.rating !== null ? 1 : 0,
    filters.priceRange[0] !== 0 || filters.priceRange[1] !== 10000 ? 1 : 0
  ].reduce((sum, count) => sum + count, 0);

  return (
    <div className="bg-gradient-to-br from-od-green-800 via-od-green-700 to-od-green-800 border border-od-green-600/50 rounded-lg shadow-lg">
      {/* Filter Header */}
      <div 
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gradient-to-r hover:from-od-green-700/50 hover:via-od-green-600/30 hover:to-od-green-700/50 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-od-tan-300" />
          <span className="font-semibold text-white">Filters</span>
          {activeFiltersCount > 0 && (
            <span className="bg-gradient-to-r from-od-tan-500 to-od-tan-600 text-od-green-800 text-xs px-2 py-1 rounded-full shadow-sm">
              {activeFiltersCount}
            </span>
          )}
        </div>
        <ChevronDown 
          className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </div>

      {/* Filter Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 space-y-6 border-t border-od-green-600/50">
              {/* Clear Filters */}
              {activeFiltersCount > 0 && (
                <div className="flex justify-end">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Clear All
                  </Button>
                </div>
              )}

              {/* Categories */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.category.includes(category)}
                        onChange={() => toggleArrayFilter('category', category)}
                        className="rounded border-od-green-600 bg-od-green-700 text-od-tan-500 focus:ring-od-tan-500"
                      />
                      <span className="text-sm text-gray-300 capitalize">
                        {category.replace('-', ' ')}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-3">Brands</h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.brand.includes(brand)}
                        onChange={() => toggleArrayFilter('brand', brand)}
                        className="rounded border-od-green-600 bg-od-green-700 text-od-tan-500 focus:ring-od-tan-500"
                      />
                      <span className="text-sm text-gray-300">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-3">Price Range</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range.label} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="priceRange"
                        checked={filters.priceRange[0] === range.value[0] && filters.priceRange[1] === range.value[1]}
                        onChange={() => updateFilters({ priceRange: range.value })}
                        className="border-od-green-600 bg-od-green-700 text-od-tan-500 focus:ring-od-tan-500"
                      />
                      <span className="text-sm text-gray-300">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Stock Status */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-3">Availability</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="stock"
                      checked={filters.inStock === true}
                      onChange={() => updateFilters({ inStock: true })}
                      className="border-od-green-600 bg-od-green-700 text-od-tan-500 focus:ring-od-tan-500"
                    />
                    <span className="text-sm text-gray-300">In Stock</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="stock"
                      checked={filters.inStock === false}
                      onChange={() => updateFilters({ inStock: false })}
                      className="border-od-green-600 bg-od-green-700 text-od-tan-500 focus:ring-od-tan-500"
                    />
                    <span className="text-sm text-gray-300">Out of Stock</span>
                  </label>
                </div>
              </div>

              {/* Rating */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-3">Minimum Rating</h3>
                <div className="space-y-2">
                  {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                    <label key={rating} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        checked={filters.rating === rating}
                        onChange={() => updateFilters({ rating })}
                        className="border-od-green-600 bg-od-green-700 text-od-tan-500 focus:ring-od-tan-500"
                      />
                      <span className="text-sm text-gray-300">
                        {rating}+ stars
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-3">Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {commonTags.map((tag) => (
                    <label key={tag} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.tags.includes(tag)}
                        onChange={() => toggleArrayFilter('tags', tag)}
                        className="rounded border-od-green-600 bg-od-green-700 text-od-tan-500 focus:ring-od-tan-500"
                      />
                      <span className="text-xs text-gray-300 capitalize">
                        {tag.replace('-', ' ')}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
