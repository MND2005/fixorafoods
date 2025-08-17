'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Leaf, Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { href: '/', label: 'Products' },
    { href: '/about', label: 'About Us' },
    { href: '/news', label: 'News' },
    { href: '/careers', label: 'Careers' },
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
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'border-b border-border/40 bg-background/80 backdrop-blur-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
            <Leaf className="h-7 w-7 text-primary" />
            <span className="font-bold text-lg font-headline">Fixora food solutions</span>
          </Link>
        </div>
        
        <nav className="hidden items-center space-x-8 text-sm font-medium md:flex">
          {navLinks.map(link => <NavLink key={link.href} href={link.href}>{link.label}</NavLink>)}
        </nav>
        
        <div className="flex items-center justify-end space-x-2">
          <form onSubmit={handleSearch} className="hidden w-full max-w-xs items-center md:flex">
            <div className="relative w-full">
              <Input type="search" name="search" placeholder="Search products..." className="h-10 pl-10" />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </form>
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col p-4">
                  <Link href="/" className="flex items-center space-x-2 mb-8" onClick={() => setIsMenuOpen(false)}>
                    <Leaf className="h-7 w-7 text-primary" />
                    <span className="font-bold text-lg">Fixora food solutions</span>
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
    </header>
  );
}
