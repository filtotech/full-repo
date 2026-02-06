import React from 'react';
import { ShieldCheck, Beaker, Droplets, Waves, Activity, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-white text-slate-900 font-sans">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Waves className="absolute -bottom-10 -left-10 text-blue-400 w-96 h-96 animate-pulse" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">
            A Product of Bidhan Pharmaceuticals
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Aqua<span className="text-blue-600">Pure</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Where pharmaceutical precision meets the essence of life. 
            Engineered water, perfected for your health.
          </p>
        </div>
      </section>

      {/* Philosophy Section - Pharmaceutical Precision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
                Science in Every <span className="text-blue-600">Drop.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At AquaPure, we don’t just "package" water; we **engineer** it. Born from the 
                rigorous scientific heritage of <strong className="text-slate-800">Bidhan Pharmaceuticals</strong>, 
                every bottle of AquaPure is treated with the same stringent standards as life-saving medicine.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Pharma-Grade Standards</h4>
                    <p className="text-sm text-slate-500">Exceeding standard BIS and ISO requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    <Beaker size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Precise Fortification</h4>
                    <p className="text-sm text-slate-500">Perfectly balanced mineral profile for vitality.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="w-full h-80 bg-blue-600 rounded-2xl overflow-hidden shadow-2xl relative">
                 <div className="absolute inset-0 flex items-center justify-center text-white p-8 bg-[url('https://images.unsplash.com/photo-1523212234062-8e775330386b?auto=format&fit=crop&q=80')] bg-cover bg-center">
                    <div className="bg-slate-900/40 absolute inset-0 backdrop-blur-[2px]"></div>
                    <p className="relative z-10 text-2xl italic font-light text-center uppercase tracking-widest">
                      Precision. Purity. Performance.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Needs Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-slate-800">Designed for Every Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* General Hydration */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Daily Wellness</h3>
              <p className="text-slate-600">
                Premium mineralized water designed for everyday hydration, ensuring your body 
                functions at its peak with optimized pH levels.
              </p>
            </div>

            {/* Specialized Recovery */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Active Recovery</h3>
              <p className="text-slate-600">
                Fortified with essential electrolytes and micronutrients specifically engineered 
                to replenish athletes and high-performance individuals.
              </p>
            </div>

            {/* Clinical Trust */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Clinical Precision</h3>
              <p className="text-slate-600">
                Manufactured in pharmaceutical-grade environments to ensure zero contaminants, 
                making it the safest choice for sensitive dietary needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 container mx-auto px-6">
        <div className="bg-blue-600 rounded-[3rem] p-12 text-center text-white shadow-xl overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Pharmaceutical Difference</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              Upgrade your hydration to a product backed by decades of medical expertise. 
              Trust AquaPure—the science of thirst.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors">
              Discover Our Range
            </button>
          </div>
        </div>
      </section>
      
      <footer className="py-10 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} AquaPure by Bidhan Pharmaceuticals. All Rights Reserved.
      </footer>
    </div>
  );
};

export default AboutUs;