import React from 'react';
import { 
  ShieldCheck, 
  Droplets, 
  Factory, 
  HardHat, 
  CheckCircle2, 
  ArrowRight,
  Menu
} from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <img 
                  src="/logo.png"   // place your logo in public folder
                  alt="Pro Coatings Logo"
                  className="h-30 w-auto object-contain mt-5 mb-3"
                />
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="text-sm font-medium hover:text-blue-600 transition">About</a>
              <a href="#waterproofing" className="text-sm font-medium hover:text-blue-600 transition">Waterproofing</a>
              <a href="#flooring" className="text-sm font-medium hover:text-blue-600 transition">Flooring</a>
              <a href="#clients" className="text-sm font-medium hover:text-blue-600 transition">Clients</a>
              <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                Contact Us
              </button>
            </div>
            <div className="md:hidden">
              <Menu className="w-6 h-6" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden mt-2">
  
             {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="/c1.jpeg"   // place image in public folder
                alt="Industrial Coating"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-3xl">
                <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-6">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                    Industrial Protection Specialist
                  </span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
                  Strength you see, <br />
                  <span className="text-white">trust you feel.</span>
                </h1>

                <p className="text-lg text-white mb-10 leading-relaxed max-w-xl">
                  Delivering specialized waterproofing, epoxy, and industrial protective coatings across diverse sectors nationwide.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-xl shadow-blue-200">
                    <span>View Solutions</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                </div>
              </div>
            </div>

          </section>

      {/* Services Grid (Brief View) */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition group">
              <Droplets className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Waterproofing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Advanced systems for roofs, basements, and water tanks to ensure structural integrity[cite: 87, 88].
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition group">
              <Factory className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Industrial Flooring</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Epoxy, PU, and anti-static coatings designed for heavy traffic and chemical resistance[cite: 119].
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition group">
              <HardHat className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Floor Polishing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Chemical densification to improve compressive strength and eliminate dusting[cite: 124, 126].
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-bold tracking-tighter mb-6 block">
                PRO<span className="text-blue-400">COATINGS</span>
              </span>
              <p className="text-slate-400 max-w-sm mb-6">
                Establishing trust as a nationwide partner for industrial, commercial, and residential applications.
              </p>
              <div className="italic text-slate-500 border-l-2 border-blue-500 pl-4 py-2">
                "The strength of the team is each individual member. The strength of each member is the team." — Phil Jackson
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Industries</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li>Automotive & Engineering </li>
                <li>Pharmaceuticals & Biotech</li>
                <li>Food & Beverages</li>
                <li>Warehouses & Hangars</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li>Industrial Waterproofing</li>
                <li>Epoxy & PU Flooring</li>
                <li>Our Growing Client Network</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:row justify-between items-center text-slate-500 text-xs">
            <p>© 2026 PRO COATINGS. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span>Environment Friendly Solutions</span>
              <span>Energy Efficient</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;