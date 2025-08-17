'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Product, Service } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { categories } from '@/lib/data';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface ProductCardProps {
  product: Product | Service;
}

export function ProductCard({ product }: ProductCardProps) {
  const category = categories.find((c) => c.id === product.categoryId);
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const isService = 'benefits' in product;

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        { 'imageUrls' in product && product.imageUrls && product.imageUrls.length > 1 ? (
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {product.imageUrls.map((url, index) => (
                <CarouselItem key={index}>
                  <Link href={`/products/${product.id}`} className="block">
                    <div className="aspect-square relative w-full">
                      <Image
                        src={url}
                        alt={`${product.name} image ${index + 1}`}
                        data-ai-hint={product.imageHints ? product.imageHints[index] : ''}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
             <Link href={`/products/${product.id}`} className="block">
              <div className="aspect-square relative w-full">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  data-ai-hint={product.imageHint}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
        )}
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        {category && <Badge variant="secondary" className="mb-2">{category.name}</Badge>}
        <CardTitle className="text-lg font-bold font-headline leading-tight">
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </CardTitle>
        <p className="text-muted-foreground text-sm mt-2">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={`/products/${product.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
