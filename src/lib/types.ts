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

export interface Category {
  id: string;
  name: string;
}
