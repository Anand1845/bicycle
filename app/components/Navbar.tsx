import React from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { name: 'Who we are', active: true },
    { name: 'Why Us', active: false },
    { name: 'What we do', hasDropdown: true },
    { name: 'How we do it', active: false },
    { name: 'Whom we serve', hasDropdown: true },
    { name: 'Contact us', active: false },
    { name: 'Downloads', active: false },
  ];

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm font-sans">

      {/* Logo Section */}
      <div className="group relative flex items-center cursor-pointer overflow-hidden">
        
        {/* Logo Image */}
        <img
          src="/sanlogo.jpeg"   // <-- put your logo image inside public folder
          alt="Logo"
          className="h-32 w-auto z-10"
        />

        {/* Blue Fill Animation (Bottom to Top) */}
        <div className="absolute bottom-0 left-0 w-full h-0 bg-[#0070BB] 
                        group-hover:h-full transition-all duration-400 ease-in-out">
        </div>
      </div>


      {/* Navigation Links */}
      {/* Navigation Links */}
<div className="flex items-center space-x-1 mt-3">
  {navLinks.map((link) => (
    <div
      key={link.name}
      className="relative group overflow-hidden cursor-pointer"
    >
      {/* Blue Fill Background */}
      <div className="absolute bottom-0 left-0 w-full h-0 
                      bg-[#0070BB] 
                      group-hover:h-full 
                      transition-all duration-300 ease-in-out 
                      z-0">
      </div>

      {/* Text Content */}
      <div
        className={`relative flex items-center px-5 py-6 text-sm font-medium transition-colors duration-300 z-10
          ${
            link.active
              ? 'bg-[#0070BB] text-white'
              : 'text-gray-800 group-hover:text-white'
          }`}
      >
        {link.name}
        {link.hasDropdown && (
          <ChevronDown className="ml-1 w-4 h-4" />
        )}
      </div>
    </div>
  ))}
</div>
    </nav>
  );
};

export default Navbar;