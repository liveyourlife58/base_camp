import { Product } from '@/types';

export const products: Product[] = [
  // Camping Gear
  {
    id: '1',
    name: 'Tactical 4-Person Command Tent',
    description: 'Military-grade tactical tent engineered for extreme operational conditions. Features advanced waterproof coating, reinforced stress points, and rapid deployment design for field operations.',
    price: 299.99,
    originalPrice: 349.99,
    image: '/images/placeholder.svg',
    images: ['/images/placeholder.svg', '/images/placeholder.svg', '/images/placeholder.svg'],
    category: 'camping',
    subcategory: 'shelter',
    brand: 'Base Camp',
    inStock: true,
    stockQuantity: 15,
    rating: 4.8,
    reviewCount: 127,
    features: [
      'Waterproof 3000mm coating with DWR treatment',
      'Rapid 5-minute deployment system',
      'Aircraft-grade aluminum poles with shock cord',
      '360° mesh ventilation with privacy panels',
      'MOLLE-compatible gear storage pockets',
      'Reinforced stress points and corner patches',
      'UV-resistant fabric with fade protection',
      'Guy line tensioners for wind stability'
    ],
    specifications: {
      'Capacity': '4 people + gear',
      'Weight': '8.5 lbs (3.9 kg)',
      'Dimensions': '96" x 84" x 48" (244 x 213 x 122 cm)',
      'Material': '70D Ripstop Nylon with PU coating',
      'Season': '3-season (all-weather)',
      'Water Resistance': '3000mm hydrostatic head',
      'Wind Rating': '35 mph sustained',
      'Packed Size': '24" x 6" x 6"',
      'Color': 'OD Green, Coyote Brown, Black'
    },
    tags: ['tactical', 'shelter', 'military-grade', 'waterproof', 'rapid-deploy', 'field-operations'],
    isNew: false,
    isFeatured: true,
    isOnSale: true
  },
  {
    id: '2',
    name: 'Military-Grade Sleeping Bag',
    description: 'Extreme cold weather sleeping bag rated for -20°F. Military specification materials and construction.',
    price: 189.99,
    image: '/images/placeholder.svg',
    category: 'camping',
    subcategory: 'sleeping',
    brand: 'Base Camp',
    inStock: true,
    stockQuantity: 23,
    rating: 4.9,
    reviewCount: 89,
    features: [
      'Rated for -20°F',
      'Military-grade materials',
      'Compression sack included',
      'Durable zipper system',
      'Moisture-wicking lining'
    ],
    tags: ['sleeping', 'cold-weather', 'military', 'extreme'],
    isNew: true,
    isFeatured: true
  },
  {
    id: '3',
    name: 'Tactical Assault Pack 65L',
    description: 'Professional-grade tactical backpack engineered for military and law enforcement operations. Features full MOLLE webbing system, hydration compatibility, and modular organization for mission-critical gear.',
    price: 159.99,
    image: '/images/placeholder.svg',
    category: 'camping',
    subcategory: 'packs',
    brand: 'Base Camp',
    inStock: true,
    stockQuantity: 18,
    rating: 4.7,
    reviewCount: 156,
    features: [
      '65L main compartment with compression straps',
      'Full MOLLE webbing system (PALS compatible)',
      'Hydration bladder compatible (3L capacity)',
      'Padded shoulder straps with load distribution',
      'Multiple access points (top, front, side)',
      'Reinforced stress points and corner patches',
      'Quick-release buckles for rapid deployment',
      'Admin panel with organization pockets',
      'Daisy chain attachment points',
      'Water-resistant zippers with storm flaps'
    ],
    specifications: {
      'Capacity': '65L (3967 cubic inches)',
      'Weight': '4.2 lbs (1.9 kg)',
      'Dimensions': '22" x 12" x 8" (56 x 30 x 20 cm)',
      'Material': '1000D Cordura Nylon',
      'MOLLE Rows': '12 rows x 2 columns',
      'Hydration': '3L bladder compatible',
      'Color': 'OD Green, Coyote Brown, Black',
      'Load Rating': '50 lbs maximum',
      'Warranty': 'Lifetime against defects'
    },
    tags: ['tactical', 'assault-pack', 'military', 'molle', 'hydration', 'field-operations'],
    isFeatured: true
  },

  // Survival Gear
  {
    id: '4',
    name: 'Tactical Survival Kit - 72 Hour',
    description: 'Military-specification 72-hour survival kit designed for extreme conditions. Contains essential tools, supplies, and equipment for emergency situations and field operations.',
    price: 89.99,
    image: '/images/placeholder.svg',
    category: 'survival',
    subcategory: 'kits',
    brand: 'Base Camp',
    inStock: true,
    stockQuantity: 31,
    rating: 4.6,
    reviewCount: 203,
    features: [
      '72-hour MRE food supply (3,600 calories)',
      'Water purification tablets (50 tablets)',
      'Emergency shelter (mylar blanket + tarp)',
      'Comprehensive first aid supplies',
      'Multi-tool with 15 functions',
      'Fire starting kit (ferro rod + tinder)',
      'Signal mirror and whistle',
      'Paracord (50 feet)',
      'Emergency radio with hand crank',
      'LED headlamp with extra batteries'
    ],
    specifications: {
      'Duration': '72 hours minimum',
      'Weight': '3.2 lbs (1.5 kg)',
      'Dimensions': '10" x 8" x 4" (25 x 20 x 10 cm)',
      'Food': '3,600 calories (3 MREs)',
      'Water': 'Purification for 25 gallons',
      'Shelter': 'Emergency bivy + 8x10 tarp',
      'Radio': 'AM/FM/Weather bands',
      'Battery Life': '72 hours continuous use',
      'Temperature Range': '-20°F to 120°F'
    },
    tags: ['survival', 'tactical', '72-hour', 'emergency', 'military-spec', 'field-operations'],
    isFeatured: true
  },
  {
    id: '5',
    name: 'Tactical Ferro Rod Fire Starter',
    description: 'Military-grade ferrocerium rod fire starter with waterproof magnesium block. Engineered for extreme conditions and reliable ignition in all weather environments.',
    price: 24.99,
    image: '/images/placeholder.svg',
    category: 'survival',
    subcategory: 'fire',
    brand: 'Base Camp',
    inStock: true,
    stockQuantity: 45,
    rating: 4.8,
    reviewCount: 78,
    features: [
      'Ferrocerium rod (12,000+ strikes)',
      'Waterproof magnesium block',
      'Stainless steel striker with lanyard',
      'Works in wet/windy conditions',
      'Compact tactical design',
      'Temperature range: -40°F to 200°F',
      'Sparks at 3,000°F',
      'Lifetime durability guarantee'
    ],
    specifications: {
      'Rod Length': '4 inches (10 cm)',
      'Rod Diameter': '0.25 inches (6.4 mm)',
      'Material': 'Ferrocerium alloy',
      'Striker': 'Stainless steel with paracord',
      'Weight': '2.1 oz (60 g)',
      'Temperature': '3,000°F spark temperature',
      'Strikes': '12,000+ ignitions',
      'Waterproof': 'IPX7 rated',
      'Warranty': 'Lifetime'
    },
    tags: ['fire-starter', 'ferro-rod', 'tactical', 'survival', 'waterproof', 'military-grade'],
    isNew: true
  },

  // Combat Gear
  {
    id: '6',
    name: 'Tactical Plate Carrier System',
    description: 'Military-specification plate carrier with modular MOLLE design, quick-release system, and ballistic plate compatibility. Engineered for law enforcement and military operations.',
    price: 199.99,
    image: '/images/placeholder.svg',
    category: 'combat',
    subcategory: 'protection',
    brand: 'Base Camp',
    inStock: true,
    stockQuantity: 12,
    rating: 4.9,
    reviewCount: 67,
    features: [
      'Full MOLLE webbing system (PALS compatible)',
      'Quick-release buckles (Cobra or ITW)',
      'Adjustable cummerbund system',
      'Ballistic plate compatible (Level IIIA/IV)',
      'Professional-grade construction',
      'Drag handle for casualty extraction',
      'Shoulder strap adjustment system',
      'Admin panel with organization pockets',
      'Side plate compatibility',
      'Hydration bladder compatible'
    ],
    specifications: {
      'Plate Size': '10" x 12" (SAPI/ESAPI compatible)',
      'Material': '1000D Cordura Nylon',
      'MOLLE Rows': '8 rows x 2 columns',
      'Weight': '2.8 lbs (1.3 kg)',
      'Size Range': 'XS-XXL adjustable',
      'Plate Rating': 'NIJ Level IIIA/IV',
      'Color': 'OD Green, Coyote Brown, Black',
      'Warranty': 'Lifetime against defects',
      'Standards': 'MIL-STD compliant'
    },
    tags: ['plate-carrier', 'tactical', 'protection', 'military', 'molle', 'ballistic', 'law-enforcement'],
    isFeatured: true
  },
  {
    id: '7',
    name: 'Tactical Ballistic Helmet',
    description: 'Military-grade ballistic helmet with NVG mount, communication system compatibility, and advanced impact protection. Designed for law enforcement and military operations.',
    price: 349.99,
    image: '/images/placeholder.svg',
    category: 'combat',
    subcategory: 'protection',
    brand: 'Base Camp',
    inStock: true,
    stockQuantity: 8,
    rating: 4.7,
    reviewCount: 34,
    features: [
      'NIJ Level IIIA ballistic protection',
      'NVG mount (ANVIS compatible)',
      'Communication system compatibility',
      '4-point adjustable suspension system',
      'Lightweight composite shell',
      'MOLLE attachment points',
      'Chin strap with quick-release',
      'Ventilation system',
      'Side rail compatibility',
      'Anti-fog coating'
    ],
    specifications: {
      'Protection Level': 'NIJ Level IIIA',
      'Material': 'Aramid composite shell',
      'Weight': '2.9 lbs (1.3 kg)',
      'Size Range': 'XS-XXL (6 sizes)',
      'NVG Mount': 'ANVIS compatible',
      'Communication': 'Peltor/3M compatible',
      'Vents': '8 ventilation ports',
      'Color': 'OD Green, Coyote Brown, Black',
      'Standards': 'MIL-STD-662F',
      'Warranty': '5 years'
    },
    tags: ['ballistic-helmet', 'tactical', 'protection', 'military', 'nvg-mount', 'law-enforcement'],
    isNew: true
  },

  // Self Defense
  {
    id: '8',
    name: 'Tactical Weapon Light',
    description: 'High-performance tactical flashlight with strobe function, weapon mount capability, and advanced LED technology. Designed for law enforcement and tactical operations.',
    price: 79.99,
    image: '/images/placeholder.svg',
    category: 'self-defense',
    subcategory: 'tools',
    brand: 'Base Camp',
    inStock: true,
    stockQuantity: 27,
    rating: 4.5,
    reviewCount: 142,
    features: [
      '1,200 lumens maximum output',
      'Tactical strobe function (10Hz)',
      'Weapon mount compatible (Picatinny rail)',
      'Rechargeable 18650 battery',
      'IPX8 waterproof rating',
      'Crenulated bezel for striking',
      'Momentary and constant-on modes',
      'Low battery indicator',
      'Aircraft-grade aluminum body',
      'Anti-roll design'
    ],
    specifications: {
      'Output': '1,200 lumens (max)',
      'Runtime': '2.5 hours (high), 50 hours (low)',
      'Beam Distance': '200 meters',
      'Battery': '18650 rechargeable',
      'Material': 'Aircraft-grade aluminum',
      'Length': '5.2 inches (13.2 cm)',
      'Weight': '4.2 oz (119 g)',
      'Waterproof': 'IPX8 (2 meters)',
      'Mount': 'Picatinny rail compatible',
      'Warranty': '5 years'
    },
    tags: ['tactical-light', 'weapon-light', 'self-defense', 'strobe', 'rechargeable', 'law-enforcement'],
    isFeatured: true
  },
  {
    id: '9',
    name: 'Personal Alarm System',
    description: 'Compact personal alarm with 130dB siren and GPS tracking capability.',
    price: 39.99,
    image: '/images/placeholder.svg',
    category: 'self-defense',
    subcategory: 'alarms',
    brand: 'Base Camp',
    inStock: true,
    stockQuantity: 52,
    rating: 4.3,
    reviewCount: 89,
    features: [
      '130dB siren',
      'GPS tracking',
      'Smartphone app',
      'Long battery life',
      'Compact design'
    ],
    tags: ['alarm', 'personal-safety', 'gps', 'emergency'],
    isNew: true
  },

  // Medical Kits
  {
    id: '10',
    name: 'Tactical Trauma Medical Kit',
    description: 'Military-specification trauma medical kit with advanced hemorrhage control, airway management, and emergency medical supplies. Designed for combat casualty care and emergency response.',
    price: 149.99,
    image: '/images/placeholder.svg',
    category: 'medical',
    subcategory: 'trauma',
    brand: 'Base Camp',
    inStock: true,
    stockQuantity: 19,
    rating: 4.9,
    reviewCount: 95,
    features: [
      '2x CAT Gen 7 tourniquets (CoTCCC approved)',
      'Hemostatic gauze (QuikClot Combat Gauze)',
      'Chest seals (HyFin Vent)',
      'Nasal pharyngeal airways (28Fr)',
      'Emergency blanket (mylar)',
      'Trauma shears (7.25")',
      'Pressure dressing (Israeli bandage)',
      'Burn dressing (hydrogel)',
      'Gloves (nitrile, size L)',
      'Medical tape and markers'
    ],
    specifications: {
      'Contents': 'TCCC-compliant trauma supplies',
      'Weight': '2.1 lbs (0.95 kg)',
      'Dimensions': '8" x 6" x 3" (20 x 15 x 8 cm)',
      'Tourniquets': '2x CAT Gen 7',
      'Hemostatic': 'QuikClot Combat Gauze',
      'Airway': '28Fr NPA with lube',
      'Chest Seals': 'HyFin Vent (2-pack)',
      'Standards': 'TCCC guidelines compliant',
      'Expiration': '5-year shelf life',
      'Training': 'TCCC course recommended'
    },
    tags: ['trauma-kit', 'medical', 'tactical', 'tccc', 'hemorrhage-control', 'combat-medic'],
    isFeatured: true
  },
  {
    id: '11',
    name: 'IFAK Individual First Aid Kit',
    description: 'Military-specification Individual First Aid Kit designed for personal carry and emergency response. Compact, lightweight, and TCCC-compliant for field operations.',
    price: 89.99,
    image: '/images/placeholder.svg',
    category: 'medical',
    subcategory: 'individual',
    brand: 'Base Camp',
    inStock: true,
    stockQuantity: 24,
    rating: 4.7,
    reviewCount: 67,
    features: [
      'Compact MOLLE-compatible pouch',
      'CAT Gen 7 tourniquet',
      'Hemostatic gauze (QuikClot)',
      'Chest seal (HyFin Vent)',
      'Pressure dressing (Israeli bandage)',
      'Trauma shears (5.5")',
      'Emergency blanket',
      'Medical gloves and tape',
      'Quick-access design',
      'Refillable components'
    ],
    specifications: {
      'Contents': 'TCCC-compliant IFAK supplies',
      'Weight': '1.2 lbs (0.54 kg)',
      'Dimensions': '6" x 4" x 2" (15 x 10 x 5 cm)',
      'Pouch': 'MOLLE-compatible',
      'Tourniquet': 'CAT Gen 7',
      'Hemostatic': 'QuikClot Combat Gauze',
      'Chest Seal': 'HyFin Vent',
      'Standards': 'TCCC guidelines',
      'Expiration': '5-year shelf life',
      'Training': 'TCCC course recommended'
    },
    tags: ['ifak', 'individual-first-aid', 'tactical', 'tccc', 'molle', 'combat-medic'],
    isNew: true
  }
];

export const categories = [
  {
    id: 'camping',
    name: 'Field Operations',
    description: 'Military-grade camping and field equipment for tactical operations',
    icon: '🏕️',
    productCount: 3
  },
  {
    id: 'survival',
    name: 'Survival & Navigation',
    description: 'Critical survival tools, navigation equipment, and emergency gear',
    icon: '🛡️',
    productCount: 2
  },
  {
    id: 'combat',
    name: 'Tactical Protection',
    description: 'Professional combat gear, body armor, and tactical protection systems',
    icon: '⚔️',
    productCount: 2
  },
  {
    id: 'self-defense',
    name: 'Personal Security',
    description: 'Personal protection tools, tactical lights, and self-defense equipment',
    icon: '🔒',
    productCount: 2
  },
  {
    id: 'medical',
    name: 'Combat Medical',
    description: 'TCCC-compliant medical supplies, trauma kits, and emergency medical equipment',
    icon: '🏥',
    productCount: 2
  }
];

export const featuredProducts = products.filter(product => product.isFeatured);
export const newProducts = products.filter(product => product.isNew);
export const saleProducts = products.filter(product => product.isOnSale);
