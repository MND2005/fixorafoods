'use client';

import * as React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { categories } from '@/lib/data';
import type { Product, Service } from '@/lib/types';

interface ProductCardProps {
  product: Product | Service;
}

export function ProductCard({ product }: ProductCardProps) {
  const category = categories.find((c) => c.id === product.categoryId);
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const isService = product.categoryId === 'consultancy-services';
  const imageClassName = isService ? "object-cover" : "object-contain";

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
                    <div className="aspect-square relative w-full bg-white">
                      <Image
                        src={url}
                        alt={`${product.name} image ${index + 1}`}
                        data-ai-hint={product.imageHints ? product.imageHints[index] : ''}
                        fill
                        className={imageClassName}
                      />
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-2 -translate-y-1/2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </Button>
            </CarouselPrevious>
            <CarouselNext className="absolute top-1/2 right-2 -translate-y-1/2">
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </CarouselNext>
          </Carousel>
        ) : (
             <Link href={`/products/${product.id}`} className="block">
              <div className="aspect-square relative w-full bg-white">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  data-ai-hint={product.imageHint}
                  fill
                  className={imageClassName}
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
