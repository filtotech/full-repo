import React from 'react';
import { Heart, ShieldCheck, Zap, Microscope } from 'lucide-react'; // Optional: install lucide-react

const PhilosophySection = () => {
  const principles = [
    {
      title: "Patient-Centric Care",
      description: "Every formulation is designed with the end-user's well-being as our primary compass.",
      icon: <Heart className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: "Uncompromising Quality",
      description: "Adhering to global standards to ensure safety, efficacy, and consistency in every batch.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: "Scientific Innovation",
      description: "Leveraging cutting-edge research to solve complex healthcare challenges.",
      icon: <Microscope className="w-6 h-6 text-emerald-600" />,
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Motto Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Our Motto
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-slate-900 italic serif">
            "Purity in Process, Excellence in Care."
          </p>
          <div className="h-1 w-20 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Core Philosophy Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {principles.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100"
            >
              <div className="bg-emerald-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 max-w-2xl mx-auto">
            At <strong>Bidhan Pharmaceuticals</strong>, our philosophy isn't just a statement—it's the foundation of every life we touch and every product we create.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;