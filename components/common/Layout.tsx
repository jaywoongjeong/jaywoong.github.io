import { Navigation } from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <footer className="py-8 mt-20 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Jaeyoon Song
        </div>
      </footer>
    </div>
  );
}; 