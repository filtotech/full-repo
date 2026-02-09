// import React from 'react';
// import { Microscope, Beaker, Zap, Globe } from 'lucide-react';

//  const ResearchSection = () => {
//   const focusAreas = [
//     { title: "Complex Generics", desc: "Developing bio-equivalent versions of life-saving drugs with difficult formulations." },
//     { title: "Stability Testing", desc: "Ensuring medicine efficacy across diverse climates and storage conditions." },
//     { title: "Formulation Science", desc: "Optimizing drug delivery systems for faster absorption and fewer side effects." },
//   ];

//   return (
//     <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
//       {/* Decorative Blueprint Grid Background */}
//       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', size: '40px 40px' }} />
      
//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="flex flex-col lg:flex-row gap-16 items-center">
//           <div className="lg:w-1/2">
//             <span className="text-blue-400 font-bold tracking-widest text-sm uppercase">Innovation Hub</span>
//             <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
//               Where Science meets <span className="text-blue-400">Social Impact.</span>
//             </h2>
//             <p className="text-slate-400 text-lg mb-10 leading-relaxed">
//               Our R&D center in India is equipped with state-of-the-art analytical tools. We don't just replicate; we optimize molecules to ensure they perform at peak efficiency for patients globally.
//             </p>
            
//             <div className="space-y-6">
//               {focusAreas.map((item, i) => (
//                 <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
//                   <div className="bg-blue-600/20 p-3 rounded-xl h-fit">
//                     <Microscope className="w-6 h-6 text-blue-400" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-white text-lg">{item.title}</h4>
//                     <p className="text-slate-400 text-sm">{item.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="lg:w-1/2 relative">
//              <div className="rounded-3xl border-8 border-slate-800 overflow-hidden shadow-2xl shadow-blue-500/20">
//                 <img 
//                   src="https://images.unsplash.com/photo-1532187875605-1ef6ca3c0bb3?auto=format&fit=crop&q=80&w=800" 
//                   alt="R&D Lab" 
//                   className="w-full h-full object-cover"
//                 />
//              </div>
//              {/* Floating Badge */}
//              <div className="absolute -top-6 -left-6 bg-blue-600 p-6 rounded-2xl shadow-xl animate-bounce-slow">
//                 <Beaker className="w-8 h-8 text-white" />
//                 <p className="text-xs font-bold mt-2">Active Research</p>
//              </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default ResearchSection;
"use client";
import { motion } from "framer-motion";
import { Microscope, Globe, Zap, Beaker } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const features = [
  {
    icon: Microscope,
    title: "Complex Generics",
    description: "Developing bio-equivalent versions of life-saving drugs with difficult formulations, ensuring accessibility without compromise.",
  },
  {
    icon: Globe,
    title: "Stability Testing",
    description: "Rigorous testing methodologies ensuring medicine efficacy persists across diverse global climates and storage conditions.",
  },
  {
    icon: Zap,
    title: "Formulation Science",
    description: "Optimizing drug delivery systems for faster absorption, improved bioavailability, and significantly reduced side effects.",
  },
];

export default function ResearchSection() {
  return (
    <section id="research" className="relative bg-slate-950 py-24 lg:py-32 overflow-hidden text-white">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Content Left */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <Badge variant="outline" className="text-blue-400 border-blue-400/30 px-4 py-1.5 uppercase tracking-widest text-xs font-semibold rounded-full">
                Innovation Hub
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Where Science meets <br/>
                <span className="text-blue-500 text-glow">Social Impact.</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed max-w-xl border-l-2 border-blue-500/50 pl-6">
                Our R&D center in India is equipped with state-of-the-art analytical tools. We don't just replicate; we optimize molecules to ensure they perform at peak efficiency for patients globally.
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.5 }}
                  className="glass-card p-6 rounded-2xl flex items-start gap-5 group"
                >
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shrink-0">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Right */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative hidden md:block"
          >
            <div className="sticky top-24">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-slate-700/50 aspect-[4/5]">
                <div className="absolute inset-0 bg-slate-900/20 z-10 mix-blend-multiply" />
                {/* R&D Lab Image */}
                <Image
                  fill
                  src="/indian-pharma-lab.jpg" 
                  alt="Advanced Pharmaceutical R&D Laboratory" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Floating Badge */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute bottom-8 left-8 right-8 z-20"
                >
                  <div className="glass-panel p-4 rounded-xl flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30 animate-pulse">
                      <Beaker className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-300 uppercase tracking-wider font-semibold">Live Status</div>
                      <div className="text-white font-bold text-lg">Active Research Phase</div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative circle behind */}
              <div className="absolute -z-10 top-20 -right-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[80px]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
