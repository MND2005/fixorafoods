import Link from 'next/link';
import { Leaf } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Leaf className="h-6 w-6 text-primary mr-2" />
            <span className="font-bold text-lg font-headline">Pelwatte Product Showcase</span>
          </div>
          <nav className="flex space-x-4 mb-4 md:mb-0">
            <Link href="/" className="hover:text-primary">Products</Link>
            <Link href="/news" className="hover:text-primary">News</Link>
          </nav>
          <p className="text-sm">&copy; {new Date().getFullYear()} Pelwatte Dairy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
