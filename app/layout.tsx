import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/common/Navigation';
import { Footer } from '@/components/common/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jaewoong Jeong',
  description: 'Industrial and Systems Engineering Student @ KAIST',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white`}>
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
