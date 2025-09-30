'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    };
    
    // Set initial state on client
    if (typeof window !== 'undefined') {
        handleScroll();
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Only show the header if it's scrolled or the menu is open
    if (isScrolled || isMenuOpen) {
      setIsVisible(true);
    } else {
      // Small delay to prevent flicker on load
      const timer = setTimeout(() => setIsVisible(false), 100);
      return () => clearTimeout(timer);
    }
  }, [isScrolled, isMenuOpen]);


  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchQuery = formData.get('search') as string;
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsMenuOpen(false);
    }
  };

  const handleProductsClick = (event: React.MouseEvent, category: string) => {
    event.preventDefault();
    if (category === 'Solar powered bulk milk coolers') {
      // Open the PDF link in a new tab
      window.open('https://drive.google.com/file/d/11Oyrhyianv5gZvyKa7kOlIXxm7xD0PpV/view?usp=sharing', '_blank');
    } else if (category === 'Milk analyzer') {
      // Open the Milk analyzer PDF link in a new tab
      window.open('https://drive.google.com/file/d/1ekHIS5hL8nnt6K0v3n0TghTOa-1wBn2M/view?usp=sharing', '_blank');
    } else {
      // Navigate to products page with category filter
      router.push(`/products-and-services?category=${encodeURIComponent(category)}`);
    }
    setIsMenuOpen(false);
    setIsProductsDropdownOpen(false);
  };

  const startDropdownTimer = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, 500); // 3 seconds
  };

  const clearDropdownTimer = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };

  const productCategories = [
    { name: 'Storage tank', filter: 'Storage tank' },
    { name: 'Milk can', filter: 'Milk can' },
    { name: 'Milk analyzer', filter: 'Milk analyzer' },
    { name: 'Solar powered bulk milk coolers', filter: 'Solar powered bulk milk coolers' },
  ];
  
  const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={() => setIsMenuOpen(false)}
        className={cn(
          "transition-colors hover:text-primary text-base",
          isActive ? "text-blue-900 font-semibold" : "text-foreground/80"
        )}
      >
        {children}
      </Link>
    );
  };

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0',
        isScrolled || isMenuOpen ? 'border-b border-border/40 bg-background/95 backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex h-20 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
             <Image src="/images/fixora-logo.png" alt="Fixora Logo" width={150} height={50} className="h-12 w-auto" />
          </Link>
        </div>
        
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-6 text-base font-medium">
            <Link href="/" className={cn("transition-colors hover:text-primary text-base", pathname === '/' ? "text-blue-900 font-semibold" : "text-foreground/80")} onClick={() => setIsMenuOpen(false)}>Home</Link>
            <div 
              className="relative"
              onMouseEnter={() => {
                clearDropdownTimer();
                setIsProductsDropdownOpen(true);
              }}
              onMouseLeave={() => {
                startDropdownTimer();
              }}
            >
              <Link 
                href="/products-and-services" 
                className={cn("transition-colors hover:text-primary text-base", pathname === '/products-and-services' ? "text-blue-900 font-semibold" : "text-foreground/80")}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                }}
              >
                Products & Services
              </Link>
              {isProductsDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200"
                  onMouseEnter={clearDropdownTimer}
                  onMouseLeave={startDropdownTimer}
                >
                  {productCategories.map((category) => (
                    <button
                      key={category.name}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={(e) => handleProductsClick(e, category.name)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Link href="/about" className={cn("transition-colors hover:text-primary text-base", pathname === '/about' ? "text-blue-900 font-semibold" : "text-foreground/80")} onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link href="/news" className={cn("transition-colors hover:text-primary text-base", pathname === '/news' ? "text-blue-900 font-semibold" : "text-foreground/80")} onClick={() => setIsMenuOpen(false)}>News</Link>
            <Link href="/careers" className={cn("transition-colors hover:text-primary text-base", pathname === '/careers' ? "text-blue-900 font-semibold" : "text-foreground/80")} onClick={() => setIsMenuOpen(false)}>Careers</Link>
            <Link href="/contact" className={cn("transition-colors hover:text-primary text-base", pathname === '/contact' ? "text-blue-900 font-semibold" : "text-foreground/80")} onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          </nav>
          
          <div className="flex items-center justify-end space-x-2">
            <form onSubmit={handleSearch} className="hidden w-full max-w-xs items-center md:flex">
              <div className="relative w-full">
                <Input type="search" name="search" placeholder="Search products..." className={cn("h-10 pl-10", isScrolled || isMenuOpen || pathname !== '/' ? "bg-background" : "bg-white/20 placeholder:text-white/80 text-white" )} />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </form>
            <div className="md:hidden">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className={cn(!isScrolled && !isMenuOpen && pathname === '/' && "text-white hover:text-white hover:bg-white/10")}>
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="flex flex-col p-4">
                    <Link href="/" className="flex items-center space-x-2 mb-8" onClick={() => setIsMenuOpen(false)}>
                        <Image src="/images/fixora-logo.png" alt="Fixora Logo" width={150} height={50} />
                    </Link>
                    <nav className="flex flex-col space-y-4 mb-8">
                      <Link href="/" className="text-base" onClick={() => setIsMenuOpen(false)}>Home</Link>
                      <div>
                        <h3 className="font-medium mb-2">Product Categories</h3>
                        <div className="flex flex-col space-y-2 ml-2">
                          {productCategories.map((category) => (
                            <button
                              key={category.name}
                              className="text-left text-sm text-gray-700 hover:text-blue-900"
                              onClick={(e) => handleProductsClick(e, category.name)}
                            >
                              {category.name}
                            </button>
                          ))}
                        </div>
                      </div>
                      <Link href="/about" className="text-base" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                      <Link href="/news" className="text-base" onClick={() => setIsMenuOpen(false)}>News</Link>
                      <Link href="/careers" className="text-base" onClick={() => setIsMenuOpen(false)}>Careers</Link>
                      <Link href="/contact" className="text-base" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                    </nav>
                    <form onSubmit={handleSearch} className="flex w-full items-center">
                      <div className="relative w-full">
                         <Input type="search" name="search" placeholder="Search products..." className="h-10 pl-10" />
                         <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      </div>
                    </form>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}