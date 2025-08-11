import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products, categories } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ProductRecommendations } from '@/components/ProductRecommendations';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const category = categories.find((c) => c.id === product.categoryId);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="rounded-lg overflow-hidden border shadow-lg">
          <div className="relative aspect-square">
            <Image
              src={product.imageUrl}
              alt={product.name}
              data-ai-hint={product.imageHint}
              fill
              className="object-cover"
            />
          </div>
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
        <h2 className="text-2xl font-bold font-headline mb-4">Nutritional Information</h2>
        <div className="border rounded-lg overflow-hidden max-w-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nutrient</TableHead>
                <TableHead className="text-right">Value per 100g</TableHead>
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
