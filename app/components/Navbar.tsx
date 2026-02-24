import React from 'react';
import Link from 'next/link';
import { Search, User, ShoppingCart, Heart } from 'lucide-react';

const Header = () => {
  const navLinks = [
    { name: 'Bicycles', href: '#' },
    { name: 'Accessories', href: '#' },
    { name: 'Spares & Components', href: '#' },
    { name: 'Brands', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Events', href: '#' },
  ];

  return (
    <header className="w-full border-b border-gray-200 bg-white font-sans">
      <div className="container mx-auto px-4 py-6 flex items-start justify-between gap-8">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center shrink-0">
          <h1 className="text-4xl font-black italic tracking-tighter text-red-600 leading-none">
            RIDERS INC.
          </h1>
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-black mt-1">
            Bicycles and Accessories
          </p>
        </div>

        {/* Search + Navigation Section */}
        <div className="grow max-w-2xl flex flex-col gap-4">
          
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Please enter a keyword"
              className="w-full border border-black rounded-sm py-2 px-4 pr-10 focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder-gray-400"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex items-center gap-8 overflow-x-auto no-scrollbar">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[15px] font-bold text-slate-800 hover:text-red-600 whitespace-nowrap transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-6 shrink-0 pt-2">
          <button className="hover:text-red-600 transition-colors">
            <User className="w-6 h-6" strokeWidth={1.5} />
          </button>

          {/* Wishlist Button */}
          <button className="hover:text-red-600 transition-colors">
            <Heart className="w-6 h-6" strokeWidth={1.5} />
          </button>

          {/* Cart Button */}
          <button className="hover:text-red-600 transition-colors">
            <ShoppingCart className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;