"use client";
import { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800',
];

const reviews = [
  { id: 1, name: "Sarah J.", rating: 5, text: "The noise cancellation is a game changer for my commute. Worth every penny.", date: "2 days ago" },
  { id: 2, name: "Marcus V.", rating: 4, text: "Incredible sound stage, though the ear pads took a day to break in. Sleek design.", date: "1 week ago" },
  { id: 3, name: "Elena R.", rating: 5, text: "Battery life is actually better than advertised. I only charge them once a week!", date: "2 weeks ago" },
];

export default function ProductPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Product Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row mb-16">
          
          {/* Left Side: Product Details */}
          <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">
              Premium Sound
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Aura Pro <br/>Headphones
            </h1>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-md">
              Engineered with the new H2 chip, providing smarter noise cancellation and deeply immersive spatial audio.
            </p>
            
            <div className="flex items-baseline mb-10">
              <span className="text-4xl font-medium text-gray-900">$299.00</span>
              <span className="ml-3 text-gray-400 line-through text-lg font-light">$399.00</span>
            </div>

            <button className="w-full md:w-max bg-gray-900 text-white py-4 px-12 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-200">
              Add to Bag
            </button>
          </div>

          {/* Right Side: Animated Gallery */}
          <div className="md:w-1/2 relative h-[400px] md:h-auto overflow-hidden bg-[#f9f9f9]">
            {images.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`Product view ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              />
            ))}
            
            {/* Minimal Indicators */}
            <div className="absolute bottom-8 right-8 flex space-x-3">
              {images.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1 transition-all duration-500 ${
                    i === currentIndex ? 'w-8 bg-gray-900' : 'w-4 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="border-t border-gray-200 pt-16">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Verified Reviews</h2>
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
                <span className="ml-3 text-gray-600 font-medium text-sm underline">4.9 average based on 128 reviews</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">{review.date}</p>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}