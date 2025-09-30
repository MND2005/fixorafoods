import type { Metadata } from 'next';
import { PT_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { ChatBotWrapper } from '@/components/ChatBotWrapper';
import { AuthProvider } from '@/context/AuthContext';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

export const metadata: Metadata = {
  title: 'Fixora food solutions ( pvt) ltd',
  description: 'Healthy Foods, Happy Lives. Explore dairy products, juices, and more from Fixora food solutions ( pvt) ltd.',
  icons: {
    icon: '/images/fixora-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ptSans.variable}>
      <body className="flex flex-col min-h-screen font-body antialiased">
        <AuthProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
          <ChatBotWrapper />
        </AuthProvider>
      </body>
    </html>
  );
}