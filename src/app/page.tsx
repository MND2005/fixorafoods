'use client'

import * as React from 'react';
import Image from 'next/image';
import { products, heroImages } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Lightbulb, ShieldCheck, Heart } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay';

export default function Home() {
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-screen text-white">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    data-ai-hint={image.hint}
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center p-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-lg">
            Machinery for Modern Dairy
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 drop-shadow-md">
            High-quality, durable, and efficient machinery and equipment to optimize dairy operations.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
            <Link href="#products">Explore Products</Link>
          </Button>
        </div>
      </section>

      <section id="about" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">About Fixora food solutions ( pvt) ltd</h2>
              <p className="text-muted-foreground mb-6">
                Fixora food solutions ( pvt) ltd was founded with a clear mission: to deliver safe, nutritious, and innovative food solutions to every household. With a strong Sri Lankan heritage and a future-forward mindset, we proudly serve a growing range of products across the dairy, beverages, spices, and processed food categories.
              </p>
              <Button asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-6">
               <div className="flex items-start space-x-4">
                  <ShieldCheck className="w-10 h-10 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold">Safety First</h3>
                    <p className="text-muted-foreground mt-1">Ensuring the highest safety standards in all our products and services.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Heart className="w-10 h-10 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold">Nutritional Excellence</h3>
                    <p className="text-muted-foreground mt-1">Delivering products that contribute to healthy and balanced nutrition.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Lightbulb className="w-10 h-10 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold">Continuous Innovation</h3>
                    <p className="text-muted-foreground mt-1">Embracing new technologies and methods to improve our offerings.</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-12 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-10">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
