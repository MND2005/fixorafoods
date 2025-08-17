import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products, services, categories } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ProductRecommendations } from '@/components/ProductRecommendations';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export async function generateStaticParams() {
  const productIds = products.map((product) => ({
    id: product.id,
  }));
  const serviceIds = services.map((service) => ({
    id: service.id,
  }));
  return [...productIds, ...serviceIds];
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  const service = services.find((s) => s.id === params.id);

  if (!product && !service) {
    notFound();
  }
  
  if (service) {
    const category = categories.find((c) => c.id === service.categoryId);
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                <div>
                     <div className="relative aspect-video rounded-lg overflow-hidden border shadow-lg">
                        <Image
                        src={service.imageUrl}
                        alt={service.name}
                        data-ai-hint={service.imageHint}
                        fill
                        className="object-cover"
                        />
                    </div>
                </div>

                <div>
                    {category && <Badge variant="secondary">{category.name}</Badge>}
                    <h1 className="text-3xl md:text-4xl font-bold font-headline my-2">{service.name}</h1>
                    <p className="text-lg text-muted-foreground">{service.description}</p>
                </div>
            </div>
             {service.offerings && service.offerings.length > 0 && (
                <div className="mt-12">
                    <h2 className="text-2xl font-bold font-headline mb-4">Our Offerings</h2>
                     <div className="grid sm:grid-cols-2 gap-4">
                        {service.offerings.map((offering, index) => (
                        <div key={index} className="flex items-center">
                            <CheckCircle className="w-5 h-5 mr-3 text-primary" />
                            <span>{offering}</span>
                        </div>
                        ))}
                    </div>
                </div>
            )}
            {service.benefits && service.benefits.length > 0 && (
                 <div className="mt-12">
                    <h2 className="text-2xl font-bold font-headline mb-4">Benefits</h2>
                     <div className="grid sm:grid-cols-2 gap-4">
                        {service.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center">
                            <CheckCircle className="w-5 h-5 mr-3 text-primary" />
                            <span>{benefit}</span>
                        </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
  }


  if (product) {
    const category = categories.find((c) => c.id === product.categoryId);

    return (
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <Carousel className="rounded-lg overflow-hidden border shadow-lg">
              <CarouselContent>
                {product.imageUrls.map((url, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-square">
                      <Image
                        src={url}
                        alt={`${product.name} image ${index + 1}`}
                        data-ai-hint={product.imageHints[index]}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          <div>
            {category && <Badge variant="secondary">{category.name}</Badge>}
            <h1 className="text-3xl md:text-4xl font-bold font-headline my-2">{product.name}</h1>
            <p className="text-lg text-muted-foreground">{product.description}</p>
            <div className="mt-6 prose max-w-none">
              <p>{product.longDescription}</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold font-headline mb-4">Specifications</h2>
          <div className="border rounded-lg overflow-hidden max-w-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  <TableHead className="text-right">Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {product.nutritionalFacts.map((fact) => (
                  <TableRow key={fact.name}>
                    <TableCell className="font-medium">{fact.name}</TableCell>
                    <TableCell className="text-right">{fact.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold font-headline mb-6 text-center">You Might Also Like</h2>
          <ProductRecommendations product={product} />
        </div>
      </div>
    );
  }

  return notFound();
}
