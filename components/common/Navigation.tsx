"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navigation = () => {
  const pathname = usePathname();
  
  const links = [
    { href: '/', label: 'Home' },
    { href: '/publications', label: 'Publications' },
    { href: '/projects', label: 'Projects' },
    { href: '/posts', label: 'Posts' },
    { href: '/about', label: 'About' },
    { href: '/cv', label: 'CV' },
    { href: '/tidbits', label: 'Tidbits' },
    { href: '/research', label: 'Research' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-center py-4 gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`py-2 text-sm font-medium transition-colors ${
                pathname === href 
                  ? 'text-blue-500' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}; 