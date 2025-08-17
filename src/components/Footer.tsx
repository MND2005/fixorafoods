import Link from 'next/link';
import { Leaf } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-blue-300/20 backdrop-blur-lg text-foreground border-t border-white/20 shadow-lg">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Leaf className="h-6 w-6 text-primary mr-2" />
            <span className="font-bold text-lg font-headline">Fixora food solutions ( pvt) ltd</span>
          </div>
          <nav className="flex flex-wrap justify-center space-x-4 mb-4 md:mb-0">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/products-and-services" className="hover:text-primary transition-colors">Products & Services</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
            <Link href="/news" className="hover:text-primary transition-colors">News</Link>
            <Link href="/careers" className="hover:text-primary transition-colors">Careers</Link>
          </nav>
          <p className="text-sm">&copy; {new Date().getFullYear()} Fixora food solutions ( pvt) ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
