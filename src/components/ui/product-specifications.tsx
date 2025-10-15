'use client';

import { motion } from 'framer-motion';
import { Product } from '@/types';
import { CheckCircle, Star, Shield, Award, Zap } from 'lucide-react';

interface ProductSpecificationsProps {
  product: Product;
}

const certificationIcons = {
  'NIJ': Shield,
  'MIL-STD': Award,
  'TCCC': CheckCircle,
  'CoTCCC': CheckCircle,
  'ANSI': Star,
  'IPX': Zap
};

export function ProductSpecifications({ product }: ProductSpecificationsProps) {
  const getCertificationIcon = (spec: string) => {
    for (const [cert, Icon] of Object.entries(certificationIcons)) {
      if (spec.includes(cert)) {
        return Icon;
      }
    }
    return CheckCircle;
  };

  const isCertification = (key: string, value: string) => {
    const certKeys = ['Standards', 'Protection Level', 'Rating', 'Compliance'];
    const certValues = ['NIJ', 'MIL-STD', 'TCCC', 'CoTCCC', 'ANSI', 'IPX'];
    return certKeys.some(ck => key.includes(ck)) || certValues.some(cv => value.includes(cv));
  };

  const getSpecificationColor = (key: string, value: string) => {
    if (isCertification(key, value)) {
      return 'text-green-400 bg-green-400/10 border-green-400/20';
    }
    if (key.includes('Weight') || key.includes('Dimensions')) {
      return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
    }
    if (key.includes('Material') || key.includes('Color')) {
      return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
    }
    return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
  };

  return (
    <div className="space-y-6">
      {/* Key Features */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
          <Zap className="h-5 w-5 text-od-tan-300" />
          Key Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {product.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-2 text-sm text-gray-300"
            >
              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Specifications */}
      {product.specifications && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <Award className="h-5 w-5 text-od-tan-300" />
            Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {Object.entries(product.specifications).map(([key, value], index) => {
              const isCert = isCertification(key, value);
              const Icon = isCert ? getCertificationIcon(value) : CheckCircle;
              
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`p-3 rounded-lg border ${getSpecificationColor(key, value)}`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    <span className="font-medium text-sm">{key}</span>
                  </div>
                  <div className="text-sm opacity-90">
                    {value}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tags */}
      {product.tags && product.tags.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <Star className="h-5 w-5 text-od-tan-300" />
            Features & Applications
          </h3>
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-3 py-1 bg-od-green-700 text-od-tan-300 text-xs rounded-full border border-od-green-600 hover:bg-od-green-600 transition-colors"
              >
                {tag.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </motion.span>
            ))}
          </div>
        </div>
      )}

      {/* Professional Applications */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
          <Shield className="h-5 w-5 text-od-tan-300" />
          Professional Applications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {getProfessionalApplications(product).map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-3 bg-od-green-700/50 border border-od-green-600 rounded-lg"
            >
              <h4 className="font-medium text-white text-sm mb-1">{app.title}</h4>
              <p className="text-xs text-gray-300">{app.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function getProfessionalApplications(product: Product) {
  const applications = [];
  
  // Determine applications based on product category and tags
  if (product.category === 'combat' || product.tags?.includes('military')) {
    applications.push({
      title: 'Military Operations',
      description: 'Combat-proven equipment for active duty personnel and special operations units.'
    });
  }
  
  if (product.tags?.includes('law-enforcement') || product.category === 'self-defense') {
    applications.push({
      title: 'Law Enforcement',
      description: 'Professional-grade gear for police officers, SWAT teams, and federal agents.'
    });
  }
  
  if (product.category === 'medical' || product.tags?.includes('tccc')) {
    applications.push({
      title: 'Emergency Medical',
      description: 'TCCC-compliant medical supplies for combat medics and emergency responders.'
    });
  }
  
  if (product.category === 'survival' || product.tags?.includes('field-operations')) {
    applications.push({
      title: 'Field Operations',
      description: 'Essential equipment for search and rescue, disaster response, and wilderness operations.'
    });
  }
  
  if (product.tags?.includes('tactical') || product.tags?.includes('molle')) {
    applications.push({
      title: 'Tactical Operations',
      description: 'Modular gear systems for specialized tactical units and security professionals.'
    });
  }
  
  // Default applications if none match
  if (applications.length === 0) {
    applications.push({
      title: 'Professional Use',
      description: 'High-quality equipment designed for demanding professional applications.'
    });
  }
  
  return applications.slice(0, 4); // Limit to 4 applications
}
