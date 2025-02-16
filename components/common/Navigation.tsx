"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { name: 'works', color: 'text-yellow-500' },
    { name: 'about', color: 'text-gray-500' },
    { name: 'contact', color: 'text-gray-500' }
  ];

  const handleClick = (section: string) => {
    setActiveSection(section);
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="flex gap-8">
      {menuItems.map((item) => (
        <button
          key={item.name}
          onClick={() => handleClick(item.name)}
          className={`${
            activeSection === item.name ? item.color : 'text-gray-400'
          } hover:text-gray-600 transition-colors`}
        >
          {item.name}
        </button>
      ))}
    </nav>
  );
} 