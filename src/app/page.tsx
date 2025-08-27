'use client'

import * as React from 'react';
import Image from 'next/image';
import { products, heroImages, services } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Lightbulb, ShieldCheck, Heart, Wrench, FileText, Briefcase, CheckCircle } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

export default function Home() {
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-screen text-white">
        <Carousel
          plugins={[plugin.current]}
          className="absolute inset-0 w-full h-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {heroImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-screen">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    data-ai-hint={image.hint}
                    layout="fill"
                    objectFit="cover"
                    priority={index === 0}
                    className="z-0"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center p-4">
          <div className="bg-black/30 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-lg max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-lg">
              Welcome to Fixora Food Solutions (Pvt) Ltd
            </h1>
            <p className="text-xl md:text-2xl mt-2 drop-shadow-md font-body">"Healthy Foods, Happy Lives"</p>
            <p className="text-lg md:text-xl max-w-2xl my-8 drop-shadow-md">
              At Fixora Food Solutions (Pvt) Ltd, we are committed to nourishing lives through a wide range of trusted, nutritious, and high-quality products and services. Driven by Industry 4.0 technology, we deliver excellence from farm to table and beyond.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
              <Link href="/products-and-services">Explore Products & Services</Link>
            </Button>
          </div>
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
                  <ShieldCheck className="w-10 h-10 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold">Safety First</h3>
                    <p className="text-muted-foreground mt-1">Ensuring the highest safety standards in all our products and services.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Heart className="w-10 h-10 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold">Nutritional Excellence</h3>
                    <p className="text-muted-foreground mt-1">Delivering products that contribute to healthy and balanced nutrition.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Lightbulb className="w-10 h-10 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold">Continuous Innovation</h3>
                    <p className="text-muted-foreground mt-1">Embracing new technologies and methods to improve our offerings.</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products-and-services" className="py-12 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-10">Our Products & Services</h2>
          
          <h3 className="text-2xl font-headline font-bold text-center mb-6">Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>

          <div className="mt-20">
             <h3 className="text-2xl font-headline font-bold text-center mb-10">Consultancy & Support</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <Card key={service.id} className="flex flex-col">
                        <CardHeader>
                            <Briefcase className="w-10 h-10 text-accent mb-2" />
                            <CardTitle>{service.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">{service.description}</p>
                            {service.offerings && (
                                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                                    {service.offerings.map((offering, index) => (
                                        <li key={index} className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-accent" />{offering}</li>
                                    ))}
                                </ul>
                            )}
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full">
                                <Link href={`/products/${service.id}`}>View Details</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
