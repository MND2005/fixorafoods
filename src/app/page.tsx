import Image from 'next/image';
import { products, categories } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[50vh] md:h-[70vh] text-white">
        <Image
          src="https://placehold.co/1600x900.png"
          alt="Happy cows in a green pasture"
          data-ai-hint="dairy farm"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center p-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-lg">
            Freshness You Can Taste
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 drop-shadow-md">
            Discover the wholesome goodness of Pelwatte Dairy products, made with love from the finest Sri Lankan milk.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
            <Link href="#products">Explore Products</Link>
          </Button>
        </div>
      </section>

      <section id="products" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-10">Our Products</h2>
          {categories.map((category) => (
            <div key={category.id} className="mb-12">
              <h3 className="text-2xl font-bold font-headline mb-6 border-b-2 border-primary pb-2">
                {category.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products
                  .filter((p) => p.categoryId === category.id)
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
