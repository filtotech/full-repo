//  import React from 'react'
//  import Image from 'next/image'
//  import Link from 'next/link';
//  import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { ShoppingCart, Droplet, ShieldCheck, Zap } from "lucide-react";
//  const Navbar = () => {
//     const products = [
//   {
//     id: "aquapure-classic",
//     name: "AquaPure Classic",
//     price: 9.0,
//     description: "Our signature mineralized water, fortified for daily vitality.",
//     image: "https://images.unsplash.com/photo-1548919973-5dea5846f680?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     id: "aquapure-sport",
//     name: "AquaPure Sport",
//     price: 14.0,
//     description: "Enhanced with electrolytes for peak physical performance.",
//     image: "https://images.unsplash.com/photo-1559839914-17aae19cea0e?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     id: "aquapure-zen",
//     name: "AquaPure Zen",
//     price: 19.0,
//     description: "Infused with subtle magnesium for calming focus.",
//     image: "https://images.unsplash.com/photo-1523362628744-0c100150b504?auto=format&fit=crop&q=80&w=800"
//   }
// ];
//    return (
//      <nav className="fixed top-0 h-20 w-full z-50 glass bg-white/80 backdrop-blur-md border-b-2 border-b-black">
//   <div className="container mx-auto px-6 py-4 flex justify-between items-center h-full">
    
//     {/* Logo and Tagline Container */}
//     <Link href="/" className="flex flex-col items-start leading-tight p-2">
//     <div className="flex flex-col items-start leading-tight">
//       <Image
//         src="/aquapure-logo-final.png"
//         alt="AquaPure Logo"
//         width={140} // Adjusted for better navbar fit
//         height={40}  // Height should be proportional
//         className=""
//         priority
//       />
//       <span className="text-[10px] font-semibold text-primary/80 uppercase tracking-tighter mt-1 absolute translate-y-17 bg-gradient-to-r from-neutral-600 to-green-400 bg-clip-text text-transparent font-bold text-4xl -translate-x-5">
//         A Product of Bidhan Pharmaceuticals Pvt. Ltd.
//       </span>
//     </div>
//     </Link>

//     {/* Navigation Links */}
//     <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
//   {/* PRODUCT DROPDOWN START */}
//   <div className="relative group">
//     <Link 
//       href="/products" 
//       className="hover:text-primary transition-colors font-semibold font-mono flex items-center gap-1 py-2"
//     >
//       Products
//       {/* Small arrow icon that rotates on hover */}
//       <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//       </svg>
//     </Link>

//     {/* Dropdown Menu */}
//     <div className="absolute left-0 top-full w-64 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
//       <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden p-2">
//         <Link href="/products/aquapure-classic" className="flex flex-col p-4 hover:bg-gray-50 rounded-xl transition-colors">
//           <span className="text-gray-900 font-bold lowercase first-letter:uppercase">AquaPure-Classic</span>
//           <span className="text-[10px] text-gray-400 normal-case">For Normal Hydration</span>
//         </Link>
//         <Link href="/products/aquapure-sport" className="flex flex-col p-4 hover:bg-gray-50 rounded-xl transition-colors">
//           <span className="text-gray-900 font-bold lowercase first-letter:uppercase">AquaPure-Sport</span>
//           <span className="text-[10px] text-gray-400 normal-case">For Atheletic Enthusiast</span>
//         </Link>
//         <Link href="/products/aquapure-zen" className="flex flex-col p-4 hover:bg-gray-50 rounded-xl transition-colors">
//           <span className="text-gray-900 font-bold lowercase first-letter:uppercase">AquaPure-Zen</span>
//           <span className="text-[10px] text-gray-400 normal-case">Premium Hydration Experience</span>
//         </Link>
//       </div>
//     </div>
//   </div>
//   {/* PRODUCT DROPDOWN END */}

//   <Link href="/about-us" className="hover:text-primary transition-colors font-semibold font-mono py-2">About</Link>
//   <Link href="/contact-us" className="hover:text-primary transition-colors font-semibold font-mono py-2">Contact</Link>
//   <Link href="/bidhan" className="hover:text-primary transition-colors font-semibold font-mono py-2">Bidhan Pharma</Link>
// </div>
//     {/* <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
     
//     </div> */}
//  {/* <Link href="products" className="hover:text-primary transition-colors font-semibold font-mono">Products</Link>
//       <Link href="about-us" className="hover:text-primary transition-colors font-semibold font-mono">About</Link>
//       <Link href="contact-us" className="hover:text-primary transition-colors font-semibold font-mono">Contact</Link>
//       <Link href="bidhan" className="hover:text-primary transition-colors font-semibold font-mono">Bidhan Pharma</Link> */}
//     {/* Cart Button */}
//     {/* <Link href="/checkout" passHref>
//       <Button variant="outline" className="gap-2 rounded-full">
//         <ShoppingCart className="w-4 h-4" />
//         Cart (0)
//       </Button>
//     </Link> */}
    
//   </div>
// </nav>
//    )
//  }
 
//  export default Navbar
 

"use client"; // Required for useState in Next.js App Router

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react"; // Added Menu and X icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
    { name: "Bidhan Pharma", href: "/bidhan" },
  ];

  const products = [
    { name: "AquaPure-Classic", desc: "For Normal Hydration", href: "/products/aquapure-classic" },
    { name: "AquaPure-Sport", desc: "For Athletic Enthusiast", href: "/products/aquapure-sport" },
    { name: "AquaPure-Zen", desc: "Premium Hydration Experience", href: "/products/aquapure-zen" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b-2 border-b-black min-h-[5rem]">
      <div className="container mx-auto px-6 flex justify-between items-center h-20">
        
        {/* Logo and Tagline */}
        <Link href="/" className="flex flex-col items-start leading-tight py-2 group pt-2">
          <Image
            src="/aquapure-logo-final.png"
            alt="AquaPure Logo"
            width={140}
            height={40}
            priority
            className='pt-4'
          />
          {/* Tagline: Adjusted positioning to be responsive */}
          <span className="sm:text-[5px] -translate-y-7 -translate-x-10 font-bold uppercase tracking-tighter mt-1 bg-gradient-to-r from-neutral-600 to-green-600 bg-clip-text text-transparent md:text-sm">
            A Product of Bidhan Pharmaceuticals Pvt. Ltd.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          {/* Products Dropdown */}
          <div className="relative group">
            <Link href="/products" className="hover:text-primary transition-colors font-semibold font-mono flex items-center gap-1 py-2">
              Products <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="absolute left-0 top-full w-64 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
              <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden p-2">
                {products.map((p) => (
                  <Link key={p.href} href={p.href} className="flex flex-col p-4 hover:bg-gray-50 rounded-xl transition-colors">
                    <span className="text-gray-900 font-bold lowercase first-letter:uppercase">{p.name}</span>
                    <span className="text-[10px] text-gray-400 normal-case">{p.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary transition-colors font-semibold font-mono py-2">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Burger Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden bg-white border-b-2 border-black transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 pt-2 pb-8 space-y-4 flex flex-col uppercase font-mono font-semibold tracking-widest">
          <p className="text-gray-400 text-[10px] mt-4">Products</p>
          {products.map((p) => (
            <Link key={p.href} href={p.href} onClick={() => setIsOpen(false)} className="pl-4 text-sm hover:text-primary">
              {p.name}
            </Link>
          ))}
          <hr className="border-gray-100" />
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="py-2 hover:text-primary">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;