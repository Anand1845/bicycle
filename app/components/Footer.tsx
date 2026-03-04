import React from 'react';
import { Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerData = {
    topPages: ["Our Journey", "Accreditations & Certification", "Our Differentiations", "Culture", "Our Uniqueness"],
    expertises: ["Program Management", "Casting Design", "Welding", "Special Process"],
    services: ["Investment Casting", "Ceramic Core", "Gravity Die Casting", "Low Pressure Casting", "Sand Casting", "Machine and Assembly", "Plaster Mould Casting"],
    industries: ["Aerospace", "Automotive", "Energy"],
    others: ["Contact", "Corporate Address", "Plant Address", "Enquiry", "Downloads"]
  };

  return (
    <footer className="bg-[#0077be] text-white pt-12 pb-6 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1: Top Pages & Expertises */}
        <div className="space-y-12">
          <section>
            <h3 className="text-xl font-semibold mb-4 border-b border-blue-400 pb-2 inline-block min-w-30">Top Pages</h3>
            <ul className="space-y-2 text-sm opacity-90">
              {footerData.topPages.map(item => <li key={item} className="hover:underline cursor-pointer">{item}</li>)}
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-4 border-b border-blue-400 pb-2 inline-block min-w-30">Expertises</h3>
            <ul className="space-y-2 text-sm opacity-90">
              {footerData.expertises.map(item => <li key={item} className="hover:underline cursor-pointer">{item}</li>)}
            </ul>
          </section>
        </div>

        {/* Column 2: Services & Industries */}
        <div className="space-y-12">
          <section>
            <h3 className="text-xl font-semibold mb-4 border-b border-blue-400 pb-2 inline-block min-w-30">Services</h3>
            <ul className="space-y-2 text-sm opacity-90">
              {footerData.services.map(item => <li key={item} className="hover:underline cursor-pointer">{item}</li>)}
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-4 border-b border-blue-400 pb-2 inline-block min-w-30">Industries</h3>
            <ul className="space-y-2 text-sm opacity-90">
              {footerData.industries.map(item => <li key={item} className="hover:underline cursor-pointer">{item}</li>)}
            </ul>
          </section>
        </div>

        {/* Column 3: Others */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-blue-400 pb-2 inline-block min-w-30">Others</h3>
          <ul className="space-y-2 text-sm opacity-90">
            {footerData.others.map(item => <li key={item} className="hover:underline cursor-pointer">{item}</li>)}
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div className="flex flex-col items-start md:items-end">
          <div className="flex items-center gap-2 mb-6 cursor-pointer hover:underline">
            <span className="font-medium text-sm">Find us on social media</span>
            <span className="text-xs">▶</span>
          </div>
          <div className="flex gap-4">
            <Facebook className="w-6 h-6 cursor-pointer hover:text-blue-200" />
            <Twitter className="w-6 h-6 cursor-pointer hover:text-blue-200" />
            <Youtube className="w-6 h-6 cursor-pointer hover:text-blue-200" />
            <Linkedin className="w-6 h-6 cursor-pointer hover:text-blue-200" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90">
        <p>Copyright © 2021 ABI-Showatech India Limited | All rights reserved</p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Developer Notes</a>
          <a href="#" className="hover:underline">Acknowledgment</a>
          <a href="#" className="hover:underline">Site Map</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;