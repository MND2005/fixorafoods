'use client';

import { useEffect, useState } from 'react';
import { recommendProducts } from '@/ai/flows/product-recommendations';
import { ProductCard } from './ProductCard';
import { Skeleton } from './ui/skeleton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import type { Product as ProductType } from '@/lib/types';
import { categories, products } from '@/lib/data';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';

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
  const [recommendations, setRecommendations] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to find real products that match the AI recommendations
  const findMatchingProducts = (aiRecommendations: RecommendedProduct[]) => {
    const matchedProducts: ProductType[] = [];
    
    // For each AI recommendation, try to find a matching real product
    for (const rec of aiRecommendations) {
      // First try to find by exact name match
      let matchedProduct = products.find(p => 
        p.name.toLowerCase() === rec.name.toLowerCase()
      );
      
      // If not found, try partial name match
      if (!matchedProduct) {
        matchedProduct = products.find(p => 
          p.name.toLowerCase().includes(rec.name.toLowerCase()) ||
          rec.name.toLowerCase().includes(p.name.toLowerCase())
        );
      }
      
      // If still not found, try category match
      if (!matchedProduct) {
        const recCategory = categories.find(c => 
          c.name.toLowerCase() === rec.category.toLowerCase()
        );
        
        if (recCategory) {
          const categoryProducts = products.filter(p => 
            p.categoryId === recCategory.id && p.id !== product.id
          );
          
          if (categoryProducts.length > 0) {
            // Pick a random product from the same category
            matchedProduct = categoryProducts[Math.floor(Math.random() * categoryProducts.length)];
          }
        }
      }
      
      // If we found a match, add it to our recommendations
      if (matchedProduct && !matchedProducts.some(p => p.id === matchedProduct!.id)) {
        matchedProducts.push(matchedProduct);
      }
    }
    
    // If we don't have enough recommendations, add some random ones
    if (matchedProducts.length < 4) {
      const remainingSlots = 4 - matchedProducts.length;
      const availableProducts = products.filter(p => 
        !matchedProducts.some(mp => mp.id === p.id) && p.id !== product.id
      );
      
      // Shuffle and take what we need
      const shuffled = availableProducts.sort(() => 0.5 - Math.random());
      const additionalProducts = shuffled.slice(0, remainingSlots);
      matchedProducts.push(...additionalProducts);
    }
    
    // Ensure we have exactly 4 products
    return matchedProducts.slice(0, 4);
  };

  // Function to get fallback recommendations (random products from the same category)
  const getFallbackRecommendations = () => {
    const productCategory = categories.find(c => c.id === product.categoryId);
    const sameCategoryProducts = products.filter(p => 
      p.categoryId === product.categoryId && p.id !== product.id
    );
    
    // If we don't have enough products in the same category, add some from other categories
    let fallbackProducts = [...sameCategoryProducts];
    if (fallbackProducts.length < 4) {
      const otherProducts = products.filter(p => 
        p.categoryId !== product.categoryId && p.id !== product.id
      );
      fallbackProducts = [...fallbackProducts, ...otherProducts];
    }
    
    // Shuffle and take first 4
    const shuffled = fallbackProducts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  const fetchRecommendations = async () => {
    try {
      setLoading(true);
      setError(null);
      const category = categories.find(c => c.id === product.categoryId);
      const result = await recommendProducts({
        productName: product.name,
        productDescription: product.longDescription,
        productCategory: category?.name || 'Dairy',
        productImageUrl: product.imageUrls?.[0] || product.imageUrl,
      });

      if (result.recommendedProducts && result.recommendedProducts.length > 0) {
        // Try to find real products that match the AI recommendations
        const matchedProducts = findMatchingProducts(result.recommendedProducts);
        setRecommendations(matchedProducts);
      } else {
        // Use fallback recommendations if AI returns empty
        setRecommendations(getFallbackRecommendations());
      }
    } catch (e) {
      console.error('Failed to get recommendations:', e);
      // Use fallback recommendations if AI fails
      setRecommendations(getFallbackRecommendations());
      setError('Could not load AI recommendations. Showing alternative products.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecommendations();
  }, [product]);

  const handleRetry = () => {
    fetchRecommendations();
  };

  if (loading) {
    return (
      <div className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (recommendations.length === 0) {
    return (
      <div className="py-8">
        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertTitle>No Recommendations Found</AlertTitle>
          <AlertDescription>
            We couldn&apos;t find any products similar to {product.name}. Check back later as our recommendations improve!
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="py-8">
      {error && (
        <div className="mb-6">
          <Alert variant="default">
            <AlertTitle>AI Recommendations Unavailable</AlertTitle>
            <AlertDescription className="flex flex-col gap-2">
              <span>{error}</span>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm" onClick={handleRetry}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      )}
      
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {recommendations.map((recProduct) => (
            <CarouselItem key={recProduct.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div className="p-1">
                <ProductCard product={recProduct} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-6 gap-2">
          <CarouselPrevious className="static transform-none" />
          <CarouselNext className="static transform-none" />
        </div>
      </Carousel>
    </div>
  );
}