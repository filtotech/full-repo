"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FileText, 
  ShieldCheck, 
  FlaskConical, 
  Package, 
  Mail, 
  CheckCircle2 
} from 'lucide-react';
import { Metadata } from 'next';

// Example Data Structure
const productData = {
  name: "Baby - LM",
  category: "Anti-allergic / Anti-asthmatic",
  genericName: "Montelukast + Levocetirizine Dihydrochloride",
  description: "Baby-LM Syrup is a pediatric formulation containing Montelukast and Levocetirizine Dihydrochloride, commonly used as supportive therapy in allergic conditions. It is specially designed for infants and young children, with a pleasant taste and easy-to-administer syrup form.This syrup is typically recommended by healthcare professionals to help manage symptoms associated with allergic rhinitis, sneezing, runny nose, watery eyes, and other allergy-related respiratory discomforts. The combination works by helping reduce allergic responses and improving breathing comfort in children.",
  composition: [
    "Calamine BP: 15% w/v",
    "Zinc Oxide BP: 5% w/v",
    "Bentonite: 3% w/v",
    "Purified Water: q.s."
  ],
  features: [
    "WHO-GMP Certified Manufacturing",
    "Long-shelf life (24 months)",
    "Tamper-evident packaging",
    "Available in 100ml and 200ml variants"
  ],
  images: [
    "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80", // Placeholder medicine bottle
    "https://images.unsplash.com/photo-1603398938378-e54eab446ddd?auto=format&fit=crop&q=80"
  ]
};

const ProductPage = () => {
  const [activeImg, setActiveImg] = useState(productData.images[0]);
   
  return (
    <div className="min-h-screen bg-white pb-20 pt-10">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Breadcrumbs */}
        <nav className="mb-8 flex text-sm text-slate-500">
          <span className="hover:text-blue-600 cursor-pointer">Products</span>
          <span className="mx-2">/</span>
          <span className="text-slate-900 font-medium">{productData.name}</span>
        </nav>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-square overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 shadow-inner"
            >
              <Image 
                src={'/Gemini_Generated_Image_3b56le3b56le3b56.png'} 
                alt={productData.name} 
                fill 
                className="object-contain p-12"
              />
            </motion.div>
            <div className="flex gap-4">
              {productData.images.map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveImg(img)}
                  className={`relative h-24 w-24 overflow-hidden rounded-xl border-2 transition-all ${activeImg === img ? 'border-blue-600' : 'border-transparent'}`}
                >
                  <Image src={img} alt="thumb" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <div className="mb-6">
              <span className="mb-2 inline-block rounded-md bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
                {productData.category}
              </span>
              <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">{productData.name}</h1>
              <p className="mt-2 text-lg font-medium text-slate-500 italic">Generic: {productData.genericName}</p>
            </div>

            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              {productData.description}
            </p>

            {/* Composition Box */}
            <div className="mb-8 rounded-2xl bg-slate-50 p-6 border border-slate-100">
              <div className="mb-4 flex items-center gap-2 font-bold text-slate-900">
                <FlaskConical size={18} className="text-blue-600" />
                <h3>Composition / Strength</h3>
              </div>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {productData.composition.map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-slate-600 italic">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Features List */}
            <div className="mb-10 space-y-3">
              {productData.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-auto flex flex-col gap-4 sm:flex-row">
              <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 active:scale-95">
                <Mail size={18} />
                Get Competitive Price
              </button>
              <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 font-bold text-slate-900 transition-all hover:bg-slate-50">
                <FileText size={18} />
                Technical Datasheet
              </button>
            </div>
          </div>
        </div>

        {/* Info Tabs / Additional Sections */}
        <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-8 border border-slate-100 rounded-2xl shadow-sm">
                <ShieldCheck className="text-blue-600 mb-4" size={32} />
                <h4 className="font-bold text-lg mb-2">Quality Assurance</h4>
                <p className="text-sm text-slate-500">Every batch undergoes rigorous HPLC testing and microbiological analysis to ensure 100% purity.</p>
            </div>
            <div className="p-8 border border-slate-100 rounded-2xl shadow-sm">
                <Package className="text-blue-600 mb-4" size={32} />
                <h4 className="font-bold text-lg mb-2">Bulk Supply</h4>
                <p className="text-sm text-slate-500">Optimized logistics for pan-India and global distribution with temperature-controlled handling.</p>
            </div>
            <div className="p-8 border border-slate-100 rounded-2xl shadow-sm">
                <FlaskConical className="text-blue-600 mb-4" size={32} />
                <h4 className="font-bold text-lg mb-2">R&D Support</h4>
                <p className="text-sm text-slate-500">Customized dosage forms and private labeling options available for institutional clients.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;