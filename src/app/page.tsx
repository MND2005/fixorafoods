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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-lg">
            Machinery for Modern Dairy
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 drop-shadow-md">
            High-quality, durable, and efficient machinery and equipment to optimize dairy operations.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
            <Link href="#products-and-services">Explore Products & Services</Link>
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

      <section id="products-and-services" className="py-12 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-10">Our Products & Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>

          <div className="mt-20">
             <h3 className="text-3xl md:text-4xl font-headline font-bold text-center mb-10">Consultancy & Support</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                    <CardHeader>
                        <Briefcase className="w-10 h-10 text-primary mb-2" />
                        <CardTitle>End-to-End Business Advisory</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Hands-on expertise and strategic support to food and dairy businesses at every stage of development.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <Wrench className="w-10 h-10 text-primary mb-2" />
                        <CardTitle>Machinery Maintenance & Automation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Specialized preventive and corrective maintenance services combined with automation solutions.</p>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-primary" />Preventive maintenance</li>
                            <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-primary" />Corrective repairs</li>
                            <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-primary" />Automation solutions</li>
                            <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-primary" />Performance optimization</li>
                        </ul>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <FileText className="w-10 h-10 text-primary mb-2" />
                        <CardTitle>Quality Certification Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Guidance and assistance in obtaining relevant quality standards and certifications.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <Briefcase className="w-10 h-10 text-primary mb-2" />
                        <CardTitle>Business Planning and Development</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Expert support in developing robust business plans, feasibility studies, and growth strategies.</p>
                    </CardContent>
                </Card>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
