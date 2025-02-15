"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/types/navigation';

export const Navigation = () => {
  const pathname = usePathname();
  
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-center py-4 gap-6">
          {NAV_LINKS.map(({ href, label }) => (
            <NavLink 
              key={href}
              href={href}
              label={label}
              isActive={pathname === href}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
}

const NavLink = ({ href, label, isActive }: NavLinkProps) => (
  <Link
    href={href}
    className={`py-2 text-sm font-medium transition-colors ${
      isActive 
        ? 'text-blue-500' 
        : 'text-gray-600 hover:text-gray-900'
    }`}
  >
    {label}
  </Link>
); 