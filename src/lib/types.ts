export interface NutritionalFact {
  name: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  imageUrls: string[];
  imageHint: string;
  imageHints: string[];
  categoryId: string;
  nutritionalFacts: NutritionalFact[];
}

export interface Service {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    imageHint: string;
    categoryId: string;
    offerings?: string[];
    benefits?: string[];
}


export interface Category {
  id: string;
  name: string;
}
