"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function HeroSection() {
  return (
    <>
      <Navbar />

      <section className="relative w-full h-178 overflow-hidden bg-zinc-900 flex items-center justify-center">

        {/* Animated Background */}
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/land.jpeg"
            alt="Cyclist in city"
            fill
            className="object-cover opacity-80"
            priority
          />
        </motion.div>

        {/* Animated Button */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 left-10 z-30"
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-3 font-bold uppercase 
                       hover:bg-red-600 hover:text-white 
                       transition-all duration-300"
          >
            Explore Hercules
          </motion.button>
        </motion.div>

      </section>

      <Footer />
    </>
  );
}