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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Package, Star, ShoppingCart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export async function generateStaticParams() {
  const productIds = products.map((product) => ({
    id: product.id,
  }));
  const serviceIds = services.map((service) => ({
    id: service.id,
  }));
  return [...productIds, ...serviceIds];
}

export default function ProductDetailPage({ params }: { params: { id:string } }) {
  const product = products.find((p) => p.id === params.id);
  const service = services.find((s) => s.id === params.id);

  if (!product && !service) {
    notFound();
  }
  
  if (service) {
    const category = categories.find((c) => c.id === service.categoryId);
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                     <div className="relative aspect-video rounded-lg overflow-hidden border shadow-lg bg-white">
                        <Image
                        src={service.imageUrl}
                        alt={service.name}
                        data-ai-hint={service.imageHint}
                        fill
                        className="object-cover"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        {category && <Badge variant="outline">{category.name}</Badge>}
                        <h1 className="text-3xl md:text-4xl font-bold font-headline mt-2">{service.name}</h1>
                        <p className="text-lg text-muted-foreground mt-4">{service.description}</p>
                    </div>

                    {service.offerings && service.offerings.length > 0 && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Our Offerings</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {service.offerings.map((offering, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-accent" />
                                        <span>{offering}</span>
                                    </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    )}

                    {service.benefits && service.benefits.length > 0 && (
                        <Card>
                             <CardHeader>
                                <CardTitle>Benefits</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {service.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <Star className="w-5 h-5 text-accent" />
                                        <span>{benefit}</span>
                                    </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    )}
                    <Button asChild size="lg" className="w-full">
                        <Link href="/contact">
                            <ShoppingCart className="mr-2 h-5 w-5" />
                            Order Now
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
  }

  if (product) {
    const category = categories.find((c) => c.id === product.categoryId);

    return (
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <Carousel className="rounded-lg overflow-hidden border shadow-lg bg-white">
              <CarouselContent>
                {product.imageUrls.map((url, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-square relative">
                      <Image
                        src={url}
                        alt={`${product.name} image ${index + 1}`}
                        data-ai-hint={product.imageHints[index]}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          <div className="space-y-6">
            <div>
              {category && <Badge variant="outline">{category.name}</Badge>}
              <h1 className="text-3xl md:text-4xl font-bold font-headline mt-2">{product.name}</h1>
              <p className="text-lg text-muted-foreground mt-4">{product.description}</p>
            </div>
            
            <Separator />

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>{product.longDescription}</p>
            </div>

            <Button asChild size="lg" className="w-full">
              <Link href="/contact">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Order Now
              </Link>
            </Button>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Package />
                  <span>Specifications</span>
                </CardTitle>
                <CardDescription>
                  Detailed information about the product features.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    {product.nutritionalFacts.map((fact) => (
                      <TableRow key={fact.name}>
                        <TableCell className="font-medium">{fact.name}</TableCell>
                        <TableCell>{fact.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-20">
          <h2 className="text-3xl font-bold font-headline mb-8 text-center">You Might Also Like</h2>
          <ProductRecommendations product={product} />
        </div>
      </div>
    );
  }

  return notFound();
}
