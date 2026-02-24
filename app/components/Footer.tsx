import Link from 'next/link';
import { FaInstagram, FaFacebookF } from 'react-icons/fa'; // Install react-icons
import { FaThreads, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        
        {/* Brand Section */}
        <div className="lg:col-span-1">
          <h2 className="text-3xl font-black italic tracking-tighter mb-6">
            GEEKAY
          </h2>
          <p className="text-sm leading-relaxed text-gray-300 mb-8 max-w-xs">
            Geekay Bikes is dedicated to providing high-quality products to its customers at affordable prices while maintaining the highest standards of customer service since 1961. Since then we have never stopped making improvements to our products. We sell our products under our flagship brand "GEEKAY".
          </p>
          <div className="flex gap-4 pt-4 border-t border-zinc-800">
            <Link href="#" className="hover:text-red-500 transition-colors">
                <FaInstagram size={24} />
            </Link>

            <Link href="#" className="hover:text-red-500 transition-colors">
                <FaFacebookF size={24} />
            </Link>

            <Link href="#" className="hover:text-red-500 transition-colors">
                <FaXTwitter size={24} />
            </Link>

            <Link href="#" className="hover:text-red-500 transition-colors">
                <FaThreads size={24} />
            </Link>
            </div>
          </div>

        {/* About Us */}
        <div>
          <h3 className="font-bold text-lg mb-6 uppercase">About Us</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="#" className="hover:text-white transition-colors">OUR STORY</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">BLOGS</Link></li>
          </ul>
        </div>

        {/* Collection */}
        <div>
          <h3 className="font-bold text-lg mb-6 uppercase">Collection</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="#" className="hover:text-white transition-colors uppercase">Mountain Bikes</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors uppercase">Kids Cycles</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors uppercase">Electric Bikes</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors uppercase">Electric Cycle Kits</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors uppercase">Hybrid Bicycles</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors uppercase">Ladies Cycles</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors uppercase">Men's Cycles</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors uppercase">Fat Tyre Cycles</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors uppercase">Geared Cycles</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors uppercase">City Cycle</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors uppercase">700C Cycle</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-bold text-lg mb-6 uppercase">Help</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="#" className="hover:text-white transition-colors uppercase">Shipping & Return</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors uppercase">Terms & Conditions</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors uppercase">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors uppercase">Register/Claim Warranty</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors uppercase">Frequently Asked Questions (FAQs)</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors uppercase">Influencer Program</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors uppercase">Become a Dealer</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors uppercase">Register a Complaint</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-bold text-lg mb-6 uppercase">Connect</h3>
          <div className="space-y-6 text-sm">
            <div>
              <p className="text-gray-400 uppercase mb-1">Contact Us</p>
              <p className="font-bold">Assemblies & Service :</p>
              <p className="text-gray-300 font-medium">+91 826-481-9999</p>
            </div>
            <div>
              <p className="font-bold">Sales Enquiry :</p>
              <p className="text-gray-300 font-medium">+91 826-481-9999</p>
            </div>
            <div>
              <p className="font-bold">Enquiry</p>
              <p className="text-gray-300 font-medium lowercase">care@geekaybikes.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="mt-16 pt-8 border-t border-zinc-900 text-center text-xs text-gray-500">
        <p>© 2026 Geekay Bikes All Rights Reserved. Terms & Conditions</p><br/>
        <p>Developed By D.W Innovation Pvt.Ltd.</p>
      </div>
    </footer>
  );
}