
import type { Product, Category, Service } from './types';

export const categories: Category[] = [
  { id: 'machinery-equipment', name: 'Machinery & Equipment' },
  { id: 'consultancy-services', name: 'Consultancy & Services' },
];

export const heroImages = [
  {
    src: 'https://www.nutritionadvance.com/wp-content/uploads/2018/06/21-Healthy-Dairy-Products-From-Around-the-World.jpg',
    alt: 'A spread of healthy dairy products',
    hint: 'dairy products',
  },
  {
    src: 'https://www.debic.com/sites/default/files/2019-12/Windmolens10_optimized_2.jpg',
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
    name: 'Milk Storage Tanks',
    description: 'Professional-grade milk storage tanks in various capacities.',
    longDescription: 'High-quality stainless steel milk storage tanks with temperature control for operations of all sizes. Features easy cleaning and a hygienic design. Available capacities: 250L, 500L, 2,500L, 3,500L, 5,000L, 10,000L, 25,000L.',
    imageUrl: '/images/diary-02.png',
    imageUrls: ['/images/diary-01.png', '/images/diary-02.png'],
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
    name: 'Milk Cans',
    description: 'Durable aluminum and stainless steel milk cans.',
    longDescription: 'Durable milk cans available in aluminum and stainless steel for safe milk transportation and storage. Features food-grade materials, secure lids, easy handling, and corrosion resistance. Available capacities: 5L, 10L, 20L, 40L.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageUrls: ['https://placehold.co/600x400.png', 'https://placehold.co/600x400.png'],
    imageHint: 'milk cans',
    imageHints: ['milk cans', 'steel can'],
    categoryId: 'machinery-equipment',
    nutritionalFacts: [
        { name: 'Materials', value: 'Aluminum, Stainless Steel' },
        { name: 'Features', value: 'Food-grade, Secure lids, Easy handling, Corrosion resistant' },
    ],
  },
  {
    id: '3',
    name: 'Milk Analyzers',
    description: 'Advanced analyzers for rapid, accurate milk quality testing.',
    longDescription: 'Advanced milk analyzers for rapid, accurate milk quality testing to ensure product standards. Key features include rapid testing, multiple parameters, a digital display, and accurate results.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageUrls: ['https://placehold.co/600x400.png', 'https://placehold.co/600x400.png'],
    imageHint: 'milk analyzer',
    imageHints: ['milk analyzer', 'lab equipment'],
    categoryId: 'machinery-equipment',
    nutritionalFacts: [
        { name: 'Features', value: 'Rapid testing, Multiple parameters, Digital display, Accurate results' },
    ],
  },
  {
    id: '4',
    name: 'Milking Machines',
    description: 'Efficient and hygienic milking machines.',
    longDescription: 'Efficient milking machines designed to improve hygiene and efficiency in milking operations. Key features include a hygienic design, efficient operation, easy maintenance, and gentle on animals.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageUrls: ['https://placehold.co/600x400.png', 'https://placehold.co/600x400.png'],
    imageHint: 'milking machine',
    imageHints: ['milking machine', 'dairy farm'],
    categoryId: 'machinery-equipment',
    nutritionalFacts: [
        { name: 'Features', value: 'Hygienic design, Efficient operation, Easy maintenance, Gentle on animals' },
    ],
  },
  {
    id: '5',
    name: 'Chaff Cutters',
    description: 'Effective chaff cutters for fodder preparation.',
    longDescription: 'Effective chaff cutters for fodder preparation to support livestock feeding operations. Key features include sharp cutting blades, adjustable cut length, durable construction, and easy operation.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageUrls: ['https://placehold.co/600x400.png', 'https://placehold.co/600x400.png'],
    imageHint: 'chaff cutter',
    imageHints: ['chaff cutter', 'farm equipment'],
    categoryId: 'machinery-equipment',
    nutritionalFacts: [
        { name: 'Features', value: 'Sharp blades, Adjustable cut, Durable, Easy operation' },
    ],
  },
  {
    id: '6',
    name: 'Dairy Machinery & Spare Parts',
    description: 'General-purpose dairy machinery and spare parts.',
    longDescription: 'A full range of general-purpose dairy machinery and replacement parts to reduce downtime. We ensure quality components, wide compatibility, quick delivery, and technical support.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageUrls: ['https://placehold.co/600x400.png', 'https://placehold.co/600x400.png'],
    imageHint: 'machinery parts',
    imageHints: ['machinery parts', 'gears cogs'],
    categoryId: 'machinery-equipment',
    nutritionalFacts: [
        { name: 'Features', value: 'Quality components, Wide compatibility, Quick delivery, Technical support' },
    ],
  },
];

export const services: Service[] = [
    {
        id: 's1',
        name: 'End-to-End Business Advisory and Consultancy Services',
        description: 'Hands-on expertise and strategic support to food and dairy businesses at every stage of development.',
        imageUrl: 'https://placehold.co/600x400.png',
        imageHint: 'business meeting',
        categoryId: 'consultancy-services'
    },
    {
        id: 's2',
        name: 'Machinery Maintenance & Automation',
        description: 'Specialized preventive and corrective maintenance services combined with automation solutions.',
        imageUrl: 'https://placehold.co/600x400.png',
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
        imageUrl: 'https://placehold.co/600x400.png',
        imageHint: 'certificate quality',
        categoryId: 'consultancy-services'
    },
    {
        id: 's4',
        name: 'Business Planning and Development',
        description: 'Expert support in developing robust business plans, feasibility studies, and growth strategies.',
        imageUrl: 'https://placehold.co/600x400.png',
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
