'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { products, services } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';

export default function ProductsAndServicesPage() {
  const searchParams = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filteredServices, setFilteredServices] = useState(services);

  useEffect(() => {
    const category = searchParams.get('category');
    
    if (category) {
      // Filter products based on category
      const filtered = products.filter(product => {
        // For now, we'll filter based on product name containing the category term
        // In a more robust implementation, you might want to add proper category fields
        return product.name.toLowerCase().includes(category.toLowerCase()) || 
               product.description.toLowerCase().includes(category.toLowerCase());
      });
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchParams]);

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <h1 className="text-4xl font-headline font-bold text-center mb-12">Our Products & Services</h1>
        
        <section id="products" className="mb-16">
          <h2 className="text-3xl font-headline font-bold text-center mb-10">Products</h2>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-lg text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </section>

        <section id="services">
          <h2 className="text-3xl font-headline font-bold text-center mb-10">Consultancy & Support</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <ProductCard key={service.id} product={service} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}