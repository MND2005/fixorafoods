'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Leaf, Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const router = useRouter();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchQuery = formData.get('search') as string;
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">Leo Foods</span>
          </Link>
        </div>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          <Link href="/" className="transition-colors hover:text-primary">
            Products
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            About Us
          </Link>
          <Link href="/news" className="transition-colors hover:text-primary">
            News
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <form onSubmit={handleSearch} className="hidden w-full max-w-sm items-center md:flex">
            <Input type="search" name="search" placeholder="Search products..." className="h-9" />
            <Button type="submit" variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </form>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col p-4 space-y-4">
                  <Link href="/" className="flex items-center space-x-2 mb-4">
                    <Leaf className="h-6 w-6 text-primary" />
                    <span className="font-bold">Leo Foods</span>
                  </Link>
                  <nav className="flex flex-col space-y-2">
                    <Link href="/" className="transition-colors hover:text-primary">
                      Products
                    </Link>
                    <Link href="/about" className="transition-colors hover:text-primary">
                      About Us
                    </Link>
                    <Link href="/news" className="transition-colors hover:text-primary">
                      News
                    </Link>
                  </nav>
                  <form onSubmit={handleSearch} className="flex w-full items-center">
                    <Input type="search" name="search" placeholder="Search..." className="h-9" />
                    <Button type="submit" variant="ghost" size="icon">
                      <Search className="h-4 w-4" />
                    </Button>
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