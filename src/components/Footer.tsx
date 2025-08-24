import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-sky-500/30 backdrop-blur-lg text-foreground border-t border-white/20 shadow-lg">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
               <Image src="/images/fixora-logo.png" alt="Fixora Logo" width={150} height={50} />
            </div>
            <p className="text-muted-foreground max-w-md">
              At Leo Foods (Pvt) Limited, we are committed to nourishing lives through a wide range of trusted, nutritious, and high-quality products and services.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 font-headline">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <Link href="/products-and-services" className="hover:text-primary transition-colors">Products & Services</Link>
              <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
              <Link href="/careers" className="hover:text-primary transition-colors">Careers</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
            </nav>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 font-headline">Contact Info</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-primary" />
                <span>127/10, Mattegoda, Kottawa, Sri Lanka</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a href="mailto:info@leofoods.com" className="hover:text-primary transition-colors">info@leofoods.com</a>
              </div>
              <div className="mt-4">
                 <h4 className="font-semibold text-foreground mb-2">Coming Soon</h4>
                 <p className="text-sm">Our online store is under construction!</p>
              </div>
            </div>
          </div>

        </div>
        
        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Fixora Foods (Pvt) Limited. All rights reserved. | Healthy Foods, Happy Lives</p>
        </div>
      </div>
    </footer>
  );
}
