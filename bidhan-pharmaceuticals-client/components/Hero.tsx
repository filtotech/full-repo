"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Changes every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className=" top-0 h-[90vh] w-full overflow-hidden bg-black">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="relative h-full w-full"
          >
            <Image
              src={HERO_IMAGES[index]}
              alt="Company Banner"
              fill
              priority
              className="object-cover brightness-[0.4]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

     {/* Content Overlay */}
<div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-md">
      Trusted • Affordable • Quality Assured
    </span>

    <h1 className="mb-6 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
      Innovating Medicine for a <br />
      <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
        Healthier Tomorrow
      </span>
    </h1>

    <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 md:text-xl">
      We develop, manufacture, and deliver high-quality pharmaceutical solutions
      that improve patient outcomes and support healthcare providers worldwide.
    </p>

    <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
      <button className="flex items-center justify-center rounded-lg bg-white px-8 py-4 font-semibold text-black transition-all hover:bg-gray-200">
        Explore Our Products
        <ChevronRight className="ml-2 h-5 w-5" />
      </button>
      <button className="rounded-lg border border-white/30 bg-white/5 px-8 py-4 font-semibold backdrop-blur-sm transition-all hover:bg-white/10">
        Our Research & Quality
      </button>
    </div>
  </motion.div>
</div>


      {/* Decorative Gradient Bottom */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black to-transparent z-20" />
    </section>
  );
};

export default HeroSection;