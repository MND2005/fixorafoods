
import type { Product, Category, Service } from './types';

export const categories: Category[] = [
  { id: 'machinery-equipment', name: 'Machinery & Equipment' },
  { id: 'consultancy-services', name: 'Consultancy & Services' },
];

export const heroImages = [
  {
    src: 'https://www.debic.com/sites/default/files/2019-12/Windmolens10_optimized_2.jpg',
    alt: 'A spread of healthy dairy products',
    hint: 'dairy products',
  },
  {
    src: 'https://resourcewebsite.singoo.cc/attached/20231014070737_89975.jpg',
    alt: 'Modern dairy processing facility',
    hint: 'dairy factory',
  },
  {
    src: 'https://www.icsc.co.nz/admin/resources/kroger-img7-w800h600@2x.jpg',
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
    }
]


export const newsArticles = [
  {
    id: '1',
    title: 'Fixora food solutions ( pvt) ltd Expands its Product Line',
    date: '2024-07-15',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'dairy products',
    summary: 'We are excited to announce the launch of our new range of artisanal cheeses, crafted with the same dedication to quality and freshness you expect from Fixora food solutions ( pvt) ltd.',
  },
  {
    id: '2',
    title: 'Sustainability Initiatives at Fixora food solutions ( pvt) ltd Farms',
    date: '2024-06-28',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'green farming',
    summary: 'Learn about our commitment to sustainable farming practices, including water conservation and renewable energy, to protect our beautiful Sri Lankan environment.',
  },
  {
    id: '3',
    title: 'Fixora food solutions ( pvt) ltd Awarded "Best Dairy Provider 2024"',
    date: '2024-05-10',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'award trophy',
    summary: 'We are honored to be recognized for our excellence in dairy production. This award is a testament to the hard work of our farmers and employees.',
  },
];
