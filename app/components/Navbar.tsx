import React from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, User, ChevronDown, Store } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { name: 'SINGLE SPEED', hasDropdown: true },
    { name: 'CITY BIKES', hasDropdown: true },
    { name: 'E-BIKES', hasDropdown: true },
    { name: 'GRAVEL BIKES', hasDropdown: true },
    { name: 'ALL BIKES', hasDropdown: false },
    { name: 'ACCESSORIES', hasDropdown: true },
  ];

  return (
    <nav className="bg-[#222222] text-white px-6 py-4 flex items-center justify-between font-sans">
      {/* Logo Section */}
      <div className="flex flex-col leading-tight">
        <span className="text-xl font-black tracking-tighter italic">PURE CYCLES</span>
        <span className="text-[10px] tracking-[0.2em] font-medium text-gray-400">
          LOS ANGELES, CALIF.
        </span>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            href="#" 
            className="flex items-center text-xs font-bold tracking-widest hover:text-gray-400 transition-colors"
          >
            {item.name}
            {item.hasDropdown && <ChevronDown className="ml-1 w-3 h-3" />}
          </Link>
        ))}
      </div>

      {/* Utility Icons */}
      <div className="flex items-center space-x-6">
        <button className="hover:text-gray-400 transition-colors">
          <User size={20} strokeWidth={1.5} />
        </button>
        <button className="hover:text-gray-400 transition-colors">
          <Search size={20} strokeWidth={1.5} />
        </button>
        <button className="hover:text-gray-400 transition-colors">
          <ShoppingCart size={20} strokeWidth={1.5} />
        </button>
        <button className="hover:text-gray-400 transition-colors">
            <Store size={20} strokeWidth={1.5} />
          </button>
      </div>
    </nav>
  );
};

export default Navbar;