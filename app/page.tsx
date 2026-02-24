import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HeroSection() {
  return (
    <>
    <Navbar/>
    <section className="relative w-full h-180 overflow-hidden bg-zinc-900 flex items-center justify-center">
      
      {/* 1. Background Image with Motion Blur Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/land.jpeg" // Replace with your image path
          alt="Cyclist in city"
          fill
          className="object-cover opacity-80"
          priority
        />
      </div>

      {/* Optional: Branding Footer */}
      <div className="absolute bottom-10 left-10 z-30">
        <button className="bg-white text-black px-8 py-3 font-bold uppercase hover:bg-red-600 hover:text-white transition-colors">
          Explore Hercules
        </button>
      </div>

    </section>
    <Footer/>
    </>
  );
}