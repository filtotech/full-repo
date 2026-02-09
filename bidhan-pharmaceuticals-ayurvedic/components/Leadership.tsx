import React from 'react';
import { Quote } from 'lucide-react';

const Leadership = () => {
  const leaders = [
    {
      name: "Dr. Pradyut Ghosh",
      role: "Managing Director",
      quote: "Our foray into Ayurveda is not just a business expansion; it is a commitment to bringing India's timeless healing traditions to the global stage with pharmaceutical-grade integrity.",
      image: "/md-placeholder.jpg" // Replace with actual image
    },
    {
      name: "Mrs. Rajesh Sharma",
      role: "Head of R&D (Ayurveda)",
      quote: "We don't just follow recipes; we standardize extracts. Every herb is tested for bio-active markers to ensure consistent therapeutic efficacy in every batch.",
      image: "/rd-placeholder.jpg"
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAF9]">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">The Visionaries Behind Bidhan</h2>
          <div className="h-1 w-20 bg-emerald-700 mx-auto mb-6"></div>
          <p className="text-slate-600">Guided by decades of experience and a passion for holistic health.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Main Feature: Managing Director */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden shadow-xl border border-emerald-50 flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-slate-200 relative min-h-[300px]">
               {/* Image placeholder */}
               <div className="absolute inset-0 flex items-center justify-center text-slate-400 italic text-sm">
                 [MD Portrait]
               </div>
            </div>
            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative">
              <Quote className="absolute top-6 right-8 text-emerald-100 w-16 h-16 -z-0" strokeWidth={3} />
              <div className="relative z-10">
                <p className="text-xl italic text-slate-700 leading-relaxed mb-6 font-serif">
                  "{leaders[0].quote}"
                </p>
                <h3 className="text-2xl font-bold text-slate-900">{leaders[0].name}</h3>
                <p className="text-emerald-700 font-medium tracking-wide uppercase text-sm">Managing Director</p>
              </div>
            </div>
          </div>

          {/* Secondary Leader: R&D or Ops */}
          <div className="lg:col-span-5 flex flex-col justify-center p-8 md:p-12 bg-emerald-900 rounded-3xl text-white shadow-xl">
            <Quote className="text-emerald-500/30 w-12 h-12 mb-4" />
            <p className="text-lg italic text-emerald-50 mb-6 leading-relaxed">
              "{leaders[1].quote}"
            </p>
            <div>
              <h4 className="text-xl font-bold">{leaders[1].name}</h4>
              <p className="text-emerald-300 text-sm font-medium uppercase">{leaders[1].role}</p>
            </div>
          </div>

        </div>

        {/* Professional Footer for the section */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm italic">
            "At Bidhan, leadership means serving our patients with the purest nature has to offer."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Leadership;