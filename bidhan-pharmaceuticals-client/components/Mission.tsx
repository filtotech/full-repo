import React from 'react';
import { ShieldCheck, CircleDollarSign, Microscope, Leaf } from 'lucide-react';

const MissionPhilosophy = () => {
  const values = [
    {
      icon: <CircleDollarSign className="w-6 h-6 text-blue-600" />,
      title: "True Affordability",
      description: "We believe quality healthcare shouldn't be a luxury. Our generic formulations reduce costs by up to 80% without compromising efficacy."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "Rigorous Standards",
      description: "Every tablet from Bidhan exceeds WHO-GMP standards, ensuring that 'generic' never means 'lesser quality'."
    },
    {
      icon: <Microscope className="w-6 h-6 text-blue-600" />,
      title: "R&D Driven",
      description: "Our labs focus on complex generics, bringing difficult-to-manufacture medicine to the mass market."
    },
    {
      icon: <Leaf className="w-6 h-6 text-blue-600" />,
      title: "Ethical Impact",
      description: "Rooted in transparency, our philosophy ensures medicine reaches the most vulnerable populations across the globe."
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">
              Our Core Identity
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Bridging the gap between <span className="text-blue-600">Science</span> and <span className="text-blue-600">Accessibility.</span>
            </h3>
          </div>
          <div className="pb-2">
            <p className="text-slate-600 text-lg border-l-4 border-blue-600 pl-6 max-w-md">
              Bidhan Pharmaceuticals is dedicated to dismantling the price barriers of life-saving medication.
            </p>
          </div>
        </div>

        {/* Mission & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Mission Card */}
          <div className="lg:col-span-1 bg-blue-600 rounded-3xl p-10 text-white flex flex-col justify-between shadow-xl shadow-blue-200">
            <div>
              <h4 className="text-2xl font-bold mb-6">The Mission</h4>
              <p className="text-blue-50 text-lg leading-relaxed">
                To democratize healthcare by providing high-quality, bio-equivalent generic medicines that empower patients and healthcare systems worldwide.
              </p>
            </div>
            <div className="mt-12 pt-8 border-t border-blue-500/50">
              <p className="text-sm font-medium opacity-80 italic">
                "Healing shouldn't be a financial burden."
              </p>
            </div>
          </div>

          {/* Philosophy Pillars */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((item, index) => (
              <div 
                key={index} 
                className="group p-8 bg-white rounded-3xl border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionPhilosophy;