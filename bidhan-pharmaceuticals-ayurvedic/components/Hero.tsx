import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Leaf, FlaskConical, ArrowRight } from 'lucide-react';

const AyurvedicHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#FDFCF8] overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1B4332] clip-path-diagonal hidden lg:block opacity-5" />
      
      <div className="container mx-auto px-6 lg:px-12 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
              <ShieldCheck size={16} />
              <span>GMP & ISO Certified Manufacturing</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight mb-6">
              Ancient Wisdom. <br />
              <span className="text-emerald-800 italic font-medium">Modern Precision.</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Bidhan Pharmaceuticals introduces its Ayurvedic division—fusing 5,000 years of herbal tradition with state-of-the-art pharmaceutical excellence for holistic wellness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-emerald-800 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-emerald-900 transition-all shadow-lg hover:shadow-emerald-200/50">
                Explore Formulations
                <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 border-2 border-emerald-800 text-emerald-800 rounded-lg font-semibold hover:bg-emerald-50 transition-all">
                Our Heritage
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="flex items-center gap-2 text-slate-500">
                <Leaf size={20} className="text-emerald-700" />
                <span className="text-sm font-medium">100% Organic</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <FlaskConical size={20} className="text-emerald-700" />
                <span className="text-sm font-medium">Clinically Tested</span>
              </div>
            </div>
          </div>

          {/* Right Column: Imagery */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              {/* Replace with your actual pharmaceutical/ayurvedic image */}
              <div className="bg-slate-200 aspect-[4/5] relative">
                 <div className="absolute inset-0 flex items-center justify-center text-slate-400 italic">
                   <Image src="/ayurvedic-hero.jpg" alt="Ayurvedic Products" width={400} height={500} className="object-cover w-full h-full" />
                 </div>
              </div>
            </div>
            
            {/* Decorative Accents */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AyurvedicHero;