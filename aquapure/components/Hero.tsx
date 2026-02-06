"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Droplet, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";
// Assuming heroWater is in your /public folder. 
// If it's in a specific directory, import it or use the string path.
import heroWater from "../../public/hero-water.png"; 

const products = [
  {
    id: "aquapure-classic",
    name: "AquaPure Classic",
    price: 9.0,
    description: "Our signature mineralized water, fortified for daily vitality.",
    image: "https://images.unsplash.com/photo-1548919973-5dea5846f680?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "aquapure-sport",
    name: "AquaPure Sport",
    price: 14.0,
    description: "Enhanced with electrolytes for peak physical performance.",
    image: "https://images.unsplash.com/photo-1559839914-17aae19cea0e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "aquapure-zen",
    name: "AquaPure Zen",
    price: 19.0,
    description: "Infused with subtle magnesium for calming focus.",
    image: "https://images.unsplash.com/photo-1523362628744-0c100150b504?auto=format&fit=crop&q=80&w=800"
  }
];


export default function Hero() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
    
      <hr />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-l from-blue-500 from-20% to-transparent to-50%">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-8xl font-serif font-bold leading-tight mb-6">
              Purity <br />
              <span className="text-primary italic z-[50]">Redefined. One Water</span><br /> doesnot fit all
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Experience the pinnacle of hydration with AquaPure. Mineralized, fortified, and crafted with pharmaceutical precision.
            </p>
            <Button size="lg" className="rounded-full px-8 py-6 text-lg" asChild>
              <Link href="#products">Shop Now</Link>
            </Button>
          </motion.div>
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <Image 
              src={'/bottle.png'} 
              alt="Premium Bottle" 
              width={400}
              height={400}
              priority
              className="relative z-10 w-full max-w-md h-auto animate-float" 
            />
          </motion.div>
        </div>

        {/* Product Grid */}
      </section>
      <section id="products" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Collection</h2>
            <p className="text-muted-foreground">Select the hydration that fits your lifestyle.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/product/${product.id}`}>
                  <Card className="group cursor-pointer overflow-hidden border-none shadow-lg hover:shadow-xl transition-all rounded-3xl">
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <Image 
                        src={'/aquapure-classic.png'}//{product.image} 
                        alt={product.name}
                        width={80}
                        height={90}
                        // quality={99}
                        // fill
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" 
                      />
                    </div>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-primary">₹ {product.price}</span>
                        <Button variant="ghost" className="rounded-full group-hover:bg-primary group-hover:text-white">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bidhan Pharma Section */}
      <section id="bidhan" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="uppercase tracking-[0.3em] text-sm opacity-80 mb-4 block">Pharmaceutical Grade</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Manufactured by Bidhan Pharmaceuticals Pvt. Ltd.
              </h2>
              <p className="text-lg opacity-90 mb-8 leading-relaxed">
                AquaPure is not just water; it's a wellness product. Developed in state-of-the-art laboratories at Bidhan Pharmaceuticals, every drop is fortified with essential minerals for optimal health.
              </p>
              <Button variant="secondary" className="rounded-full" asChild>
                <a href="https://aquapure.bidhanpharma.com" target="_blank" rel="noopener noreferrer">Visit Bidhan Pharma</a>
              </Button>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/10 border-none text-white">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <ShieldCheck className="w-10 h-10 mb-4 text-accent" />
                  <h3 className="font-bold mb-2">Safety First</h3>
                  <p className="text-sm opacity-80">Rigorous clinical testing standards</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-none text-white">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Zap className="w-10 h-10 mb-4 text-accent" />
                  <h3 className="font-bold mb-2">Fortified</h3>
                  <p className="text-sm opacity-80">Rich in essential minerals</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      
      

      {/* Footer */}
      {/* <footer className="py-12 border-t">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Droplet className="text-primary w-6 h-6" />
            <span className="text-xl font-bold tracking-tight">AquaPure</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 Bidhan Pharmaceuticals. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm hover:text-primary">Privacy</Link>
            <Link href="/terms" className="text-sm hover:text-primary">Terms</Link>
          </div>
        </div>
      </footer> */}
    </div>
  );
}