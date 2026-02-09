"use client";

import React, { useState, useEffect } from "react";
import { Target, Users, Award, Zap, ShieldCheck } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const team: TeamMember[] = [
  {
    id: 1,
    name: "Pradyut Ghosh",
    role: "MD & Founder",
    bio: "Affordability and efficacy in our pharmaceutical solutions is the mission and philosophy on which Bidhan Pharmaceuticals was founded.",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    id: 2,
    name: "Dr. Ananya Sharma",
    role: "Head of R&D",
    bio: "Overseeing our formulation labs to ensure every generic drug matches the bioavailability of global benchmarks.",
    image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    id: 3,
    name: "Rajesh Mehta",
    role: "Operations Director",
    bio: "Optimizing our supply chain to deliver high-quality medicine to the most remote corners at the lowest cost.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
  },
];

const stats = [
  { label: "Molecules Developed", value: "150+" },
  { label: "Global Partners", value: "40+" },
  { label: "Annual Reach", value: "5M+", sub: "Patients" },
  { label: "Quality Awards", value: "12" },
];

export default function AboutUsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === team.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      {/* SECTION 1: COMPANY STORY */}
      <section className="relative py-24 px-6">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual Block */}
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img 
                  src="/pahrma_labs.jpg" 
                  alt="Modern Pharmaceutical Lab" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-sm font-medium uppercase tracking-widest opacity-80">Est. 2010</p>
                  <p className="text-2xl font-semibold">Bidhan Pharmaceuticals</p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-xl text-green-600">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold">WHO-GMP</p>
                    <p className="text-slate-500 text-sm">Certified Facilities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Block */}
            <div className="space-y-8">
              <div>
                <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold">
                  OUR STORY
                </span>
                <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                  Democratizing health through <span className="text-blue-600">innovation.</span>
                </h2>
                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                  Bidhan Pharmaceuticals was founded on a simple premise: life-saving medicine should not be a financial privilege. We specialize in high-quality generic formulations that bridge the gap between clinical excellence and mass accessibility.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="bg-slate-100 p-2 rounded-lg h-fit text-blue-600"><Target size={20} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Precision Focus</h4>
                    <p className="text-slate-500 text-sm">High-barrier generics and complex delivery systems.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-slate-100 p-2 rounded-lg h-fit text-blue-600"><ShieldCheck size={20} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Quality First</h4>
                    <p className="text-slate-500 text-sm">Bio-equivalent standards that match global innovators.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Ribbon */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 px-8 bg-slate-900 rounded-[2rem] shadow-xl">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center border-r last:border-0 border-slate-700/50">
                <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: TEAM CAROUSEL */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Leadership</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900">The Minds Behind Bidhan</h3>
          
          <div className="relative bg-white rounded-3xl shadow-lg border border-slate-200 p-8 md:p-12 min-h-[350px] flex flex-col justify-center">
            <div 
              key={team[currentIndex].id}
              className="flex flex-col md:flex-row items-center gap-10 animate-in fade-in slide-in-from-bottom-4 duration-700"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-200 rounded-full blur-xl opacity-30 animate-pulse" />
                <img
                  src={team[currentIndex].image}
                  alt={team[currentIndex].name}
                  className="relative w-40 h-40 rounded-2xl object-cover shadow-lg grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl font-bold text-slate-900">{team[currentIndex].name}</h3>
                <p className="text-blue-600 font-semibold mb-6">{team[currentIndex].role}</p>
                <p className="text-slate-600 text-lg italic leading-relaxed">
                  "{team[currentIndex].bio}"
                </p>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-10">
              {team.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    index === currentIndex ? "bg-blue-600 w-8" : "bg-slate-300 w-2 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}