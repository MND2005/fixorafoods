'use client';

import { useState } from 'react';
import { ProductRecommendations } from '@/components/ProductRecommendations';
import { products } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function TestRecommendationsFix() {
  const [selectedProductId, setSelectedProductId] = useState(products[0]?.id || '');

  const selectedProduct = products.find(p => p.id === selectedProductId) || products[0];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold font-headline mb-8 text-center">Product Recommendations Fix Test</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Select a Product to Test Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={selectedProductId} onValueChange={setSelectedProductId}>
            <SelectTrigger className="w-full md:w-1/2">
              <SelectValue placeholder="Select a product" />
            </SelectTrigger>
            <SelectContent>
              {products.map(product => (
                <SelectItem key={product.id} value={product.id}>
                  {product.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {selectedProduct && (
        <div>
          <h2 className="text-2xl font-bold font-headline mb-6 text-center">Recommendations for: {selectedProduct.name}</h2>
          <ProductRecommendations product={selectedProduct} />
        </div>
      )}
    </div>
  );
}