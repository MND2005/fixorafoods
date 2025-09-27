'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TestPages() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold font-headline mb-8 text-center">Page Testing</h1>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>About Page Test</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Test if the About page loads correctly:</p>
            <Button asChild>
              <Link href="/about">Go to About Page</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Careers Page Test</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Test if the Careers page loads correctly:</p>
            <Button asChild>
              <Link href="/careers">Go to Careers Page</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          If both pages load correctly, the issue has been resolved.
        </p>
      </div>
    </div>
  );
}