"use client";

import React, { useState, useEffect } from "react";

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
    bio: "affordability and efficacy in our pharmaceutical solutions is the mission and philosophy on which Bidhan Pharmaceuticals was founded.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jordan Smith",
    role: "Senior Developer",
    bio: "Turning complex problems into elegant code solutions.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Taylor Chen",
    role: "Product Manager",
    bio: "Bridging the gap between user needs and technical goals.",
    image: "https://via.placeholder.com/150",
  },
];

export default function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === team.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-50 flex flex-col items-center">
      <div className="max-w-4xl w-full px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Meet Our Team</h2>
        
        <div className="relative overflow-hidden bg-white rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-500 ease-in-out border border-gray-100">
          {/* Animated Card Content */}
          <div 
            key={team[currentIndex].id}
            className="flex flex-col md:flex-row items-center gap-8 animate-in fade-in slide-in-from-right-4 duration-700"
          >
            <img
              src={team[currentIndex].image}
              alt={team[currentIndex].name}
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
            />
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-gray-900">
                {team[currentIndex].name}
              </h3>
              <p className="text-blue-600 font-medium mb-4">
                {team[currentIndex].role}
              </p>
              <p className="text-gray-600 italic">
                "{team[currentIndex].bio}"
              </p>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {team.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-600 w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}