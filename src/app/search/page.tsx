'use client';

import { useState, useMemo, Suspense } from 'react';
import { products } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import { Skeleton } from '@/components/ui/skeleton';

function SearchResults() {
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold font-headline mb-2">Search Results</h1>
      <p className="text-muted-foreground mb-8">
        {filteredProducts.length > 0
          ? `Showing ${filteredProducts.length} results for "${query}"`
          : `No results found for "${query}"`}
      </p>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg">Try searching for something else.</p>
        </div>
      )}
    </div>
  );
}


function SearchLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
       <Skeleton className="h-10 w-1/3 mb-2" />
       <Skeleton className="h-6 w-1/4 mb-8" />
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-2">
                <Skeleton className="h-48 w-full" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-10 w-full mt-2" />
            </div>
        ))}
       </div>
    </div>
  )
}

export default function SearchPage() {
    return (
        <Suspense fallback={<SearchLoading />}>
            <SearchResults />
        </Suspense>
    )
}
