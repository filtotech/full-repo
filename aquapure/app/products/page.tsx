"use client";
import Link from 'next/link';
import React from 'react';

const products = [
  {
    id: 1,
    tag: "Best Seller",
    name: "AquaPure-Classic",
    description: "Aquapure's Classic variant suitable for normal and non-athletic consumption.",
    price: 299.00,
    rating: 5,
    reviews: 128,
    image: "aquapure-classic.png"
  },
  {
    id: 2,
    tag: "New Arrival",
    name: "Aquapure-Sport",
    description: "Aquapure's Sport variant, enriched with electrolytes for enhanced hydration during physical activities.",
    price: 349.00,
    rating: 4,
    reviews: 85,
    image: "aquapure-classic.png"
  },
  {
    id: 3,
    tag: "Premium",
    name: "Aquapure-Zen",
    description: "Crystal clear optics for the modern photographer.",
    price: 199.00,
    rating: 5,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=600"
  }
];

export default function ProductGrid() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-3">
            The 2026 Collection
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Curated Excellence
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Experience the perfect blend of form and function. Each piece is crafted 
            with precision and backed by our lifetime warranty.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product?.name.toLowerCase()}`} className="group bg-white rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 flex flex-col">
            <div 
              key={product.id} 
              className="group bg-white rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-gray-100">
                <div className="absolute top-5 left-5 z-10">
                  <span className="bg-white/90 backdrop-blur-md text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm uppercase tracking-wider">
                    {product.tag}
                  </span>
                </div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xl font-medium text-gray-900">${product.price}</p>
                </div>

                {/* Star Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-4 h-4 fill-current ${i >= product.rating ? 'text-gray-200' : ''}`} 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-tighter">
                    ({product.reviews} Reviews)
                  </span>
                </div>

                <p className="text-gray-500 mb-8 flex-grow leading-relaxed">
                  {product.description}
                </p>

                <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
            </Link>
          ))}
        </div>
        

        {/* Trust Bar */}
        <div className="mt-20 flex flex-wrap justify-center gap-12 border-t border-gray-200 pt-12">
          <div className="flex items-center gap-3 text-gray-400 font-medium">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Free Shipping
          </div>
          <div className="flex items-center gap-3 text-gray-400 font-medium">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            Secure Checkout
          </div>
          <div className="flex items-center gap-3 text-gray-400 font-medium">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
            30-Day Returns
          </div>
        </div>
      </div>
    </div>
  );
}