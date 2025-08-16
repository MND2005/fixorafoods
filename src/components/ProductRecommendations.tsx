'use client';

import { useEffect, useState } from 'react';
import { recommendProducts } from '@/ai/flows/product-recommendations';
import { ProductCard } from './ProductCard';
import { Skeleton } from './ui/skeleton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import type { Product as ProductType } from '@/lib/types';
import { categories } from '@/lib/data';

interface ProductRecommendationsProps {
  product: ProductType;
}

interface RecommendedProduct {
  name: string;
  description: string;
  imageUrl: string;
  category: string;
}

export function ProductRecommendations({ product }: ProductRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<RecommendedProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getRecommendations() {
      try {
        setLoading(true);
        setError(null);
        const category = categories.find(c => c.id === product.categoryId);
        const result = await recommendProducts({
          productName: product.name,
          productDescription: product.longDescription,
          productCategory: category?.name || 'Dairy',
          productImageUrl: product.imageUrl,
        });

        if (result.recommendedProducts) {
          setRecommendations(result.recommendedProducts);
        }
      } catch (e) {
        console.error('Failed to get recommendations:', e);
        setError('Could not load recommendations at this time.');
      } finally {
        setLoading(false);
      }
    }
    getRecommendations();
  }, [product]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-48 w-full rounded-lg" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-muted-foreground">{error}</div>;
  }
  
  if (recommendations.length === 0) {
    return null;
  }

  // Convert recommended products to a format ProductCard can use
  const recommendationCards = recommendations.map((rec, index) => {
    const matchedCategory = categories.find(c => c.name.toLowerCase() === rec.category.toLowerCase())
    const imageHint = rec.name.toLowerCase().split(' ').slice(0,2).join(' ');
    return {
        id: `rec-${index}`,
        name: rec.name,
        description: rec.description,
        longDescription: rec.description,
        imageUrl: rec.imageUrl,
        imageUrls: [rec.imageUrl],
        imageHint: imageHint,
        imageHints: [imageHint],
        categoryId: matchedCategory?.id || 'milk',
        nutritionalFacts: []
    }
  })

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {recommendationCards.map((recProduct) => (
          <CarouselItem key={recProduct.id} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <ProductCard product={recProduct} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
