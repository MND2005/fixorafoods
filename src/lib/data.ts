
import type { Product, Category, Service } from './types';

export const categories: Category[] = [
  { id: 'machinery-equipment', name: 'Machinery & Equipment' },
  { id: 'consultancy-services', name: 'Consultancy & Services' },
];

export const heroImages = [
  {
    src: '/images/hero1.png',
    alt: 'A spread of healthy dairy products',
    hint: 'dairy products',
  },
  {
    src: '/images/hero2.png',
    alt: 'Modern dairy processing facility',
    hint: 'dairy factory',
  },
  {
    src: '/images/hero3.png',
    alt: 'Automated milking machine in operation',
    hint: 'milking machine',
  },
 
]

export const products: Product[] = [
  {
    id: '1',
    name: 'Milk Storage Tank - 300L',
    description: 'Steel Single Phase 300 L Bulk Milk Cooler, For Bmc',
    longDescription: 'Steel Single Phase 300 L Bulk Milk Cooler, For Bmc',
    imageUrl: '/images/diary-01.png',
    imageUrls: ['/images/diary-01.png'],
    imageHint: 'storage tank',
    imageHints: ['storage tank', 'milk tank'],
    categoryId: 'machinery-equipment',
    nutritionalFacts: [
      { name: 'Construction', value: 'Stainless Steel' },
      { name: 'Features', value: 'Temperature control, Easy cleaning, Hygienic design' },
    ],
  },
  {
    id: '2',
    name: 'Milk Storage Tank - 1000L',
    description: 'Steel Single Phase 1000 L Bulk Milk Cooler, For Bmc',
    longDescription: 'Steel Single Phase 1000 L Bulk Milk Cooler, For Bmc',
    imageUrl: '/images/diary-02.png',
    imageUrls: ['/images/diary-02.png'],
    imageHint: 'milk cans',
    imageHints: ['milk cans', 'steel can'],
    categoryId: 'machinery-equipment',
    nutritionalFacts: [
        { name: 'Construction', value: 'Stainless Steel' },
        { name: 'Features', value: 'Temperature control, Easy cleaning, Hygienic design' },
    ],
  },
  {
    id: '3',
    name: 'Milk Storage Tank - 3500L',
    description: 'Steel Single Phase 3500 L Bulk Milk Cooler, For Bmc',
    longDescription: 'Steel Single Phase 3500 L Bulk Milk Cooler, For Bmc',
    imageUrl: '/images/diary-03.png',
    imageUrls: ['/images/diary-03.png'],
    imageHint: 'milk cans',
    imageHints: ['milk cans', 'steel can'],
    categoryId: 'machinery-equipment',
    nutritionalFacts: [
        { name: 'Construction', value: 'Stainless Steel' },
        { name: 'Features', value: 'Temperature control, Easy cleaning, Hygienic design' },
    ],
  },
  {
    id: '4',
    name: 'Milk Storage Tank - 2000L',
    description: 'Steel Single Phase 2000 L Bulk Milk Cooler, For Bmc',
    longDescription: 'Steel Single Phase 2000 L Bulk Milk Cooler, For Bmc',
    imageUrl: '/images/diary-04.png',
    imageUrls: ['/images/diary-04.png'],
    imageHint: 'milk cans',
    imageHints: ['milk cans', 'steel can'],
    categoryId: 'machinery-equipment',
    nutritionalFacts: [
        { name: 'Construction', value: 'Stainless Steel' },
        { name: 'Features', value: 'Temperature control, Easy cleaning, Hygienic design' },
    ],
  },
  {
  id: '5',
  name: 'Milk Storage Tank - 5000L',
  description: 'Steel Single Phase 5000 L Bulk Milk Cooler, For Bmc',
  longDescription: 'Steel Single Phase 5000 L Bulk Milk Cooler, For Bmc',
  imageUrl: '/images/diary-05.png',
  imageUrls: ['/images/diary-05.png'],
  imageHint: 'milk cans',
  imageHints: ['milk cans', 'steel can'],
  categoryId: 'machinery-equipment',
  nutritionalFacts: [
      { name: 'Construction', value: 'Stainless Steel' },
      { name: 'Features', value: 'Temperature control, Easy cleaning, Hygienic design' },
  ],
},
  {
    id: '6',
    name: 'Milk Can - 10.57 Gallon',
    description: '10.57 Gallon Stainless Steel Milk Can',
    longDescription: '10.57 Gallon Stainless Steel Milk Can',
    imageUrl: '/images/diary-06.png',
    imageUrls: ['/images/diary-06.png'],
    imageHint: 'machinery parts',
    imageHints: ['machinery parts', 'gears cogs'],
    categoryId: 'machinery-equipment',
    nutritionalFacts: [
        { name: 'Construction', value: 'Stainless Steel' },
        { name: 'Features', value: 'Food-grade materials, Secure lids, Easy handling, Corrosion resistant' },
    ],
  },
  {
    id: '7',
    name: 'Milk Can',
    description: 'Aluminium Milk Can',
    longDescription: 'Aluminium Milk Can',
    imageUrl: '/images/diary-07.png',
    imageUrls: ['/images/diary-07.png'],
    imageHint: 'machinery parts',
    imageHints: ['machinery parts', 'gears cogs'],
    categoryId: 'machinery-equipment',
    nutritionalFacts: [
        { name: 'Construction', value: 'Aluminium' },
        { name: 'Features', value: 'Food-grade materials, Secure lids, Easy handling, Corrosion resistant' },
    ],
  },
  {
    id: '8',
    name: 'Milk Analyzer',
    description: 'Kurien IoT Bond Milk Collection Unit',
    longDescription: 'We are a leading of kurien iot bond milk collection unit, ultra scan kurien twinsonic milk analyzer with stirrer, ultrascan kurien milk analyzer with thermal printer and iot, ultra scan kurien iot bond pos milk collection unit, kurien mamcu pos mobile automatic milk collection unit and kurien mamcu mobile automatic milk collection unit from Ambala, India.',
    imageUrl: '/images/diary-08.png',
    imageUrls: ['/images/diary-08.png'],
    imageHint: 'machinery parts',
    imageHints: ['machinery parts', 'gears cogs'],
    categoryId: 'machinery-equipment',
    nutritionalFacts: [
        { name: 'Machine Body Material', value: 'Stainless Steel' },
        { name: 'Capacity', value: '40 sample/hour' },
        { name: 'Usage/Application', value: 'Laboratory Use' },
        { name: 'Test Time', value: '30 Second' },
        { name: 'Analyzer Accessories', value: 'With DP Unit' },
        { name: 'Accuracy', value: '0.1' },
        { name: 'Automation Grade', value: 'Automatic' },
        { name: 'Printer Support', value: 'Yes' },
        { name: 'Country of Origin', value: 'Made in India' },
    ],
  },
  {
    id: '9',
    name: 'Cream Separator',
    description: 'Cream Separator 165 LPH,300 LPH Dual Operated, 300 LPH FLOOR MODEL, 1200 LPH SS COVERING ONLINE',
    longDescription: 'Providing you the best range of cream separator 165 lph dual operated, cream separator 300 lph dual operated, cream separator 300 lph floor model, cream separator 600 lph dual operated, cream separator 90 lph electric operated and cream separator 90 lph hand operated with effective & timely delivery.',
    imageUrl: '/images/diary-09.png',
    imageUrls: ['/images/diary-09.png'],
    imageHint: 'machinery parts',
    imageHints: ['machinery parts', 'gears cogs'],
    categoryId: 'machinery-equipment',
    nutritionalFacts: [
        { name: 'Production Capacity', value: '165 LPH, 300 LPH, 1200 LPH' },
        { name: 'No. Of Discs', value: '20 - 22' },
        { name: 'Bowl Material', value: 'Mild Steel' },
        { name: 'Milk Tank', value: 'Aluminum' },
        { name: 'Automation Grade', value: 'Automatic' },
        { name: 'Type', value: 'Dual' },
        { name: 'Tank Capacity', value: '25 Litres' },
        { name: 'Brand', value: 'HT' },
        { name: 'Usage/Application', value: 'Milk Separation' },
        { name: 'Country of Origin', value: 'Made in India' },
    ],
  },
  {
    id: '10',
    name: 'Alcohol Gun',
    description: 'Alcohol Gun For Dairy And Milk Testing',
    longDescription: 'Our range of products include alcohol gun for dairy and milk testing.',
    imageUrl: '/images/diary-10.png',
    imageUrls: ['/images/diary-10.png'],
    imageHint: 'machinery parts',
    imageHints: ['machinery parts', 'gears cogs'],
    categoryId: 'machinery-equipment',
    nutritionalFacts: [
        { name: 'Test Time', value: '3 Sec' },
        { name: 'Weight', value: '1.5 Kg' },
        { name: 'Brand', value: 'HT' },
        { name: 'Usage', value: 'Milk Testing' },
        { name: 'Packing Type', value: 'Box' },
        { name: 'Material', value: 'Stainless Steel' },
        { name: 'Country of Origin', value: 'Made in India' },
    ],
  },
  {
    id: '11',
    name: 'Milk Butyrometer',
    description: 'Milk Butyrometer 0-10% ISI Mark',
    longDescription: 'We are a leading of milk butyrometer 0-10% isi mark, cheese butyrometer 0-40% with weighing cup and 2 rubber stoppers, long neck 0-0.5% skim milk butyrometer, milk butyrometer 0 - 8%, milk butyrometer 0-10% double tested and ice cream butyrometer 0-20% (volumetric method) from Ambala, India.',
    imageUrl: '/images/diary-11.png',
    imageUrls: ['/images/diary-11.png'],
    imageHint: 'machinery parts',
    imageHints: ['machinery parts', 'gears cogs'],
    categoryId: 'machinery-equipment',
    nutritionalFacts: [
        { name: 'Usage/Application', value: 'Laboratory' },
        { name: 'Material', value: 'Glass' },
        { name: 'Model No', value: 'HTMB-2' },
        { name: 'Percent Scale', value: '0-10%' },
        { name: 'Testing capacity', value: '0.125 corresponds to 1% fat' },
        { name: 'Brand', value: 'HT' },
        { name: 'The basis of graduation', value: '10.75 ml' },
        { name: 'Packaging Type', value: 'Box' },
        { name: 'Country of Origin', value: 'Made in India' },
    ],
  },
];

export const services: Service[] = [
    {
        id: 's1',
        name: 'End-to-End Business Advisory and Consultancy Services',
        description: 'Hands-on expertise and strategic support to food and dairy businesses at every stage of development.',
        imageUrl: '/images/business-consultancy-services.png',
        imageHint: 'business meeting',
        categoryId: 'consultancy-services'
    },
    {
        id: 's2',
        name: 'Machinery Maintenance & Automation',
        description: 'Specialized preventive and corrective maintenance services combined with automation solutions.',
        imageUrl: '/images/Robotics.png',
        imageHint: 'industrial automation',
        categoryId: 'consultancy-services',
        offerings: [
            'Preventive maintenance',
            'Corrective repairs',
            'Automation solutions',
            'Performance optimization'
        ],
        benefits: [
            'Reduced downtime',
            'Increased efficiency',
            'Cost savings',
            'Improved reliability'
        ]
    },
    {
        id: 's3',
        name: 'Quality Certification Support',
        description: 'Guidance and assistance in obtaining relevant quality standards and certifications.',
        imageUrl: '/images/quality.png',
        imageHint: 'certificate quality',
        categoryId: 'consultancy-services'
    },
    {
        id: 's4',
        name: 'Business Planning and Development',
        description: 'Expert support in developing robust business plans, feasibility studies, and growth strategies.',
        imageUrl: '/images/busi-dev.png',
        imageHint: 'business planning',
        categoryId: 'consultancy-services'
    },
    {
        id: 's5',
        name: 'Business development consultancy services',
        description: 'Providing expert guidance to help your business grow and thrive in the competitive food industry.',
        imageUrl: 'https://resourcewebsite.singoo.cc/wp-content/uploads/2021/04/service-1-1.jpg',
        imageHint: 'business development',
        categoryId: 'consultancy-services'
    },
    {
        id: 's6',
        name: 'Engineering consultancy services',
        description: 'Specialized engineering consultancy for factory automation and enhancing efficiency.',
        imageUrl: 'https://www.debic.com/en/system/images/files/000/017/634/17634/09042021_DEBIC_WEBSITE_2021_SCHOOL_OF_EXCELLENCE_1280X581_BANNER.jpg?1618491761',
        imageHint: 'factory automation',
        categoryId: 'consultancy-services'
    }
]


export const newsArticles = [];

