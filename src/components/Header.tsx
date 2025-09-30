'use client';

import { useState, useEffect } from 'react';
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

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products-and-services', label: 'Products & Services' },
    { href: '/about', label: 'About Us' },
    { href: '/news', label: 'News' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact Us' },
  ];
  
  const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={() => setIsMenuOpen(false)}
        className={cn(
          "transition-colors hover:text-primary",
          isActive ? "text-primary font-semibold" : "text-foreground/80"
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
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
             <Image src="/images/fixora-logo.png" alt="Fixora Logo" width={150} height={50} className="h-12 w-auto" />
          </Link>
        </div>
        
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(link => <NavLink key={link.href} href={link.href}>{link.label}</NavLink>)}
          </nav>
          
          <div className="flex items-center justify-end space-x-2">
            <form onSubmit={handleSearch} className="hidden w-full max-w-xs items-center md:flex">
              <div className="relative w-full">
                <Input type="search" name="search" placeholder="Search..." className={cn("h-10 pl-10", isScrolled || isMenuOpen || pathname !== '/' ? "bg-background" : "bg-white/20 placeholder:text-white/80 text-white" )} />
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
                      {navLinks.map(link => <NavLink key={link.href} href={link.href}>{link.label}</NavLink>)}
                    </nav>
                    <form onSubmit={handleSearch} className="flex w-full items-center">
                      <div className="relative w-full">
                         <Input type="search" name="search" placeholder="Search..." className="h-10 pl-10" />
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
