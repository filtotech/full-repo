import React from 'react';
import { Target, Award, Users, Sprout } from 'lucide-react';
import Leadership from './Leadership';
const AboutUs = () => {
  const stats = [
    { label: 'Years of Pharma Excellence', value: '25+', icon: <Award className="text-emerald-600" /> },
    { label: 'Ayurvedic Formulations', value: '150+', icon: <Sprout className="text-emerald-600" /> },
    { label: 'Happy Families Served', value: '1M+', icon: <Users className="text-emerald-600" /> },
    { label: 'Quality Check Points', value: '12+', icon: <Target className="text-emerald-600" /> },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Visual Storytelling */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                 <div className="bg-slate-200 aspect-square flex items-center justify-center text-slate-400 italic">
                   
                 </div>
              </div>
              <div className="bg-emerald-800 rounded-2xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">100%</h3>
                <p className="text-emerald-100 text-sm">Natural Ingredients sourced from sustainable farms across India.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                <div className="bg-slate-200 aspect-[3/4] flex items-center justify-center text-slate-400 italic">
                  
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-emerald-700 font-bold tracking-widest uppercase text-sm mb-4">
              The Bidhan Legacy
            </h4>
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 leading-snug">
              Bridging the Gap Between <br />
              <span className="italic">Tradition & Technology</span>
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              At Bidhan Pharmaceuticals Pvt. Ltd., we believe that true healing happens when the purity of nature meets the precision of science. Our new Ayurvedic division is the culmination of decades of pharmaceutical expertise and a deep-seated respect for the Vedas.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Every formulation is crafted in our state-of-the-art facility, ensuring that the bioactive compounds of ancient herbs are preserved through modern cold-processing techniques. We don't just manufacture medicine; we curate wellness.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-100">
              {stats.map((stat, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <Leadership />
    </section>
  );
};

export default AboutUs;