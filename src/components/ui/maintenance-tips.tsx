'use client';

import { motion } from 'framer-motion';
import { Wrench, Droplets, Shield, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

const maintenanceTips = [
  {
    category: 'General Care',
    icon: Wrench,
    tips: [
      {
        title: 'Regular Inspection',
        description: 'Inspect all gear monthly for wear, damage, or corrosion. Check zippers, buckles, and stress points.',
        frequency: 'Monthly',
        importance: 'high'
      },
      {
        title: 'Proper Storage',
        description: 'Store gear in cool, dry places away from direct sunlight. Use breathable storage bags.',
        frequency: 'After each use',
        importance: 'high'
      },
      {
        title: 'Documentation',
        description: 'Keep maintenance logs for warranty claims and service history tracking.',
        frequency: 'Ongoing',
        importance: 'medium'
      }
    ]
  },
  {
    category: 'Waterproofing',
    icon: Droplets,
    tips: [
      {
        title: 'DWR Treatment',
        description: 'Reapply DWR (Durable Water Repellent) coating every 6-12 months or when water no longer beads.',
        frequency: '6-12 months',
        importance: 'high'
      },
      {
        title: 'Seam Sealing',
        description: 'Check and re-seal seams on tents and rain gear annually or after heavy use.',
        frequency: 'Annually',
        importance: 'high'
      },
      {
        title: 'Zipper Care',
        description: 'Clean zippers regularly and apply zipper lubricant to maintain smooth operation.',
        frequency: 'Monthly',
        importance: 'medium'
      }
    ]
  },
  {
    category: 'Protective Gear',
    icon: Shield,
    tips: [
      {
        title: 'Ballistic Testing',
        description: 'Have body armor professionally inspected annually. Replace after 5 years or if damaged.',
        frequency: 'Annually',
        importance: 'critical'
      },
      {
        title: 'Helmet Inspection',
        description: 'Check helmet shell for cracks, dents, or delamination. Replace suspension system every 2 years.',
        frequency: 'Monthly',
        importance: 'critical'
      },
      {
        title: 'Plate Carrier Care',
        description: 'Clean MOLLE webbing and buckles regularly. Check for fraying or loose stitching.',
        frequency: 'After each use',
        importance: 'high'
      }
    ]
  },
  {
    category: 'Medical Equipment',
    icon: CheckCircle,
    tips: [
      {
        title: 'Expiration Dates',
        description: 'Check all medical supplies monthly. Replace expired items immediately.',
        frequency: 'Monthly',
        importance: 'critical'
      },
      {
        title: 'Sterilization',
        description: 'Keep medical supplies in sterile packaging. Replace if packaging is compromised.',
        frequency: 'Before each use',
        importance: 'critical'
      },
      {
        title: 'Training Updates',
        description: 'Maintain current TCCC certification and practice with your medical kit regularly.',
        frequency: 'Annually',
        importance: 'high'
      }
    ]
  }
];

const importanceColors = {
  critical: 'text-red-400 bg-red-400/10 border-red-400/20',
  high: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
  medium: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  low: 'text-green-400 bg-green-400/10 border-green-400/20'
};

const importanceIcons = {
  critical: AlertTriangle,
  high: AlertTriangle,
  medium: Clock,
  low: CheckCircle
};

export function MaintenanceTips() {
  return (
    <div className="bg-gradient-to-br from-od-green-800 via-od-green-700 to-od-green-800 border border-od-green-600/50 rounded-lg p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <Wrench className="h-6 w-6 text-od-tan-300" />
        <h2 className="text-2xl font-bold text-white">Gear Maintenance Guide</h2>
      </div>
      
      <p className="text-gray-300 mb-8">
        Proper maintenance ensures your tactical gear performs when you need it most. 
        Follow these guidelines to maximize equipment lifespan and reliability.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {maintenanceTips.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="bg-gradient-to-br from-od-green-900 via-od-green-800 to-od-green-900 border border-od-green-600/50 rounded-lg p-4 shadow-md"
          >
            <div className="flex items-center gap-2 mb-4">
              <category.icon className="h-5 w-5 text-od-tan-300" />
              <h3 className="text-lg font-semibold text-white">{category.category}</h3>
            </div>
            
            <div className="space-y-3">
              {category.tips.map((tip, tipIndex) => {
                const ImportanceIcon = importanceIcons[tip.importance as keyof typeof importanceIcons];
                return (
                  <motion.div
                    key={tip.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (tipIndex * 0.05) }}
                    className={`p-3 rounded-lg border ${importanceColors[tip.importance as keyof typeof importanceColors]}`}
                  >
                    <div className="flex items-start gap-3">
                      <ImportanceIcon className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-white text-sm">{tip.title}</h4>
                          <span className="text-xs opacity-75">{tip.frequency}</span>
                        </div>
                        <p className="text-xs opacity-90 leading-relaxed">
                          {tip.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Reference */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 bg-gradient-to-br from-od-green-900 via-od-green-800 to-od-green-900 border border-od-green-600/50 rounded-lg p-4 shadow-md"
      >
        <h3 className="text-lg font-semibold text-white mb-3">Quick Reference</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-red-400" />
            <span className="text-gray-300">Critical</span>
          </div>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-orange-400" />
            <span className="text-gray-300">High Priority</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-yellow-400" />
            <span className="text-gray-300">Regular</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span className="text-gray-300">Routine</span>
          </div>
        </div>
      </motion.div>

      {/* Professional Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-6 bg-gradient-to-r from-od-tan-500/10 via-od-tan-400/5 to-od-tan-500/10 border border-od-tan-500/20 rounded-lg p-4 shadow-md"
      >
        <h3 className="text-lg font-semibold text-od-tan-300 mb-2">Professional Services</h3>
        <p className="text-sm text-gray-300 mb-3">
          For complex repairs or certification requirements, our certified technicians provide:
        </p>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>• Ballistic armor inspection and certification</li>
          <li>• Professional gear cleaning and restoration</li>
          <li>• Custom modifications and upgrades</li>
          <li>• Warranty service and repairs</li>
        </ul>
      </motion.div>
    </div>
  );
}
