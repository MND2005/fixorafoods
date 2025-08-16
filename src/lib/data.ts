import type { Product, Category } from './types';

export const categories: Category[] = [
  { id: 'machinery-equipment', name: 'Machinery & Equipment' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Milk Storage Tanks',
    description: 'Professional-grade milk storage tanks in various capacities.',
    longDescription: 'High-quality stainless steel milk storage tanks with temperature control for operations of all sizes. Features easy cleaning and a hygienic design. Available capacities: 250L, 500L, 2,500L, 3,500L, 5,000L, 10,000L, 25,000L.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'storage tank',
    categoryId: 'machinery-equipment',
    nutritionalFacts: [],
  },
  {
    id: '2',
    name: 'Milk Cans',
    description: 'Durable aluminum and stainless steel milk cans.',
    longDescription: 'Durable milk cans available in aluminum and stainless steel for safe milk transportation and storage. Features food-grade materials, secure lids, easy handling, and corrosion resistance. Available capacities: 5L, 10L, 20L, 40L.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'milk cans',
    categoryId: 'machinery-equipment',
    nutritionalFacts: [],
  },
  {
    id: '3',
    name: 'Milk Analyzers',
    description: 'Advanced analyzers for rapid, accurate milk quality testing.',
    longDescription: 'Advanced milk analyzers for rapid, accurate milk quality testing to ensure product standards. Key features include rapid testing, multiple parameters, a digital display, and accurate results.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'milk analyzer',
    categoryId: 'machinery-equipment',
    nutritionalFacts: [],
  },
  {
    id: '4',
    name: 'Milking Machines',
    description: 'Efficient and hygienic milking machines.',
    longDescription: 'Efficient milking machines designed to improve hygiene and efficiency in milking operations. Key features include a hygienic design, efficient operation, easy maintenance, and gentle on animals.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'milking machine',
    categoryId: 'machinery-equipment',
    nutritionalFacts: [],
  },
  {
    id: '5',
    name: 'Chaff Cutters',
    description: 'Effective chaff cutters for fodder preparation.',
    longDescription: 'Effective chaff cutters for fodder preparation to support livestock feeding operations. Key features include sharp cutting blades, adjustable cut length, durable construction, and easy operation.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'chaff cutter',
    categoryId: 'machinery-equipment',
    nutritionalFacts: [],
  },
  {
    id: '6',
    name: 'Dairy Machinery & Spare Parts',
    description: 'General-purpose dairy machinery and spare parts.',
    longDescription: 'A full range of general-purpose dairy machinery and replacement parts to reduce downtime. We ensure quality components, wide compatibility, quick delivery, and technical support.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'machinery parts',
    categoryId: 'machinery-equipment',
    nutritionalFacts: [],
  },
];


export const newsArticles = [
  {
    id: '1',
    title: 'Pelwatte Dairy Expands its Product Line',
    date: '2024-07-15',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'dairy products',
    summary: 'We are excited to announce the launch of our new range of artisanal cheeses, crafted with the same dedication to quality and freshness you expect from Pelwatte.',
  },
  {
    id: '2',
    title: 'Sustainability Initiatives at Pelwatte Farms',
    date: '2024-06-28',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'green farming',
    summary: 'Learn about our commitment to sustainable farming practices, including water conservation and renewable energy, to protect our beautiful Sri Lankan environment.',
  },
  {
    id: '3',
    title: 'Pelwatte Awarded "Best Dairy Provider 2024"',
    date: '2024-05-10',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'award trophy',
    summary: 'We are honored to be recognized for our excellence in dairy production. This award is a testament to the hard work of our farmers and employees.',
  },
];
