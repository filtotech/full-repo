"use client";

import React from 'react';
import { Pill, Info, ChevronRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: "BCPlex - L",
    category: "Vitamin Supplement",
    genericName: "Vitamin B Complex Syrup with L-Lysine & Zinc",
    description: "A comprehensive syrup for all ages that combats fatigue and weakness, supports immune function, and promotes healthy growth.",
    image: "WhatsApp Image 2026-02-04 at 14.18.50.jpeg",
    dosage: "10ml Daily",
    path: "BCPlex-L"
  },
  {
    id: 2,
    name: "Baby - LM",
    category: "Antihistamine/Leukotriene Antagonist",
    genericName: "Paracetamol BP 500mg",
    description: "Fast-acting relief from fever and mild to moderate pain. Manufactured under strict WHO-GMP guidelines for maximum safety.",
    image: "Gemini_Generated_Image_3b56le3b56le3b56.png",
    dosage: "As directed by physician",
    path: "Baby-LM"
  },
  {
    id: 3,
    name: "Miazen - F2",
    category: "Hematinics",
    genericName: "Cefixime Dispersible Tablets IP",
    description: "A potent third-generation cephalosporin antibiotic used to treat a wide variety of bacterial infections with high efficacy.",
    image: "Gemini_Generated_Image_7lazde7lazde7laz.png",
    dosage: "Prescription only",
    path: "Miazen-F2"
  }
];

const ProductsPage = () => {
  return (
    <section className="bg-slate-50 py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Product Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4">
            Reliable <span className="text-blue-600">Formulations</span> for All.
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl text-lg">
            Our medicines are tested for bio-equivalence against international benchmarks, ensuring you get global quality at local prices.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link href={`/products/${product.path}`} key={product.id}>
            <div 
              key={product.id} 
              className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-slate-900 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-blue-600">
                    <Pill size={14} />
                    <span className="text-xs font-semibold uppercase tracking-wider uppercase italic">
                      {product.genericName}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {product.description}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Standard Dosage</span>
                    <span className="text-sm font-medium text-slate-700">{product.dosage}</span>
                  </div>
                  <button className="bg-slate-900 text-white p-3 rounded-xl hover:bg-blue-600 transition-all group-hover:translate-x-1">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>

        {/* Trust Footer */}
        <div className="mt-20 text-center p-10 bg-blue-600 rounded-[3rem] text-white">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-8 h-8 opacity-50" />
              <p className="text-lg font-medium">Interested in Bulk Distribution?</p>
            </div>
            <Link href="/contact-us" className="">
            <button className="bg-white flex flex-col text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all shadow-lg">
              Partner with Bidhan <span className='text-[8px] text-black'>by sending an inquiry</span>
            </button>
            
            </Link>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;