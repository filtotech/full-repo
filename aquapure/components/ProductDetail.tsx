"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShoppingCart, Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
// import { useToast } from "@/hooks/use-toast";
import { Metadata } from "next";

const productData = {
  "aquapure-classic": {
    name: "AquaPure Classic",
    price: 4.99,
    description: "Our signature mineralized water, fortified for daily vitality. Sourced from pristine deep-water springs and enriched with a precise blend of Calcium, Magnesium, and Potassium.",
    image: '/aquapure-classic.png', //"https://images.unsplash.com/photo-1548919973-5dea5846f680?auto=format&fit=crop&q=80&w=800",
    features: ["BPA Free", "Eco-friendly bottle", "Pharmaceutical Grade", "Fortified with Minerals"]
  },
  "aquapure-sport": {
    name: "AquaPure Sport",
    price: 6.99,
    description: "Enhanced with electrolytes for peak physical performance. Designed for athletes who demand the highest standards of purity and recovery support.",
    image: '/aquapure-classic.png', //"https://images.unsplash.com/photo-1548919973-5dea5846f680?auto=format&fit=crop&q=80&w=800",
    features: ["Extra Electrolytes", "Fast Hydration", "Ergonomic Grip", "Zero Calories"]
  },
  "aquapure-zen": {
    name: "AquaPure Zen",
    price: 5.99,
    description: "Infused with subtle magnesium for calming focus. The perfect companion for meditation, deep work, or winding down after a busy day.",
    image: '/aquapure-classic.png', //"https://images.unsplash.com/photo-1548919973-5dea5846f680?auto=format&fit=crop&q=80&w=800",
    features: ["Calming Magnesium", "Smooth Taste", "PH Balanced", "Deep Focus Support"]
  }
};
export const metadata : Metadata = {
  title: 'AquaPure - Fortified Mineral Water for Optimal Hydration',
};

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  // Unwrapping params using 'use' hook for Next.js 15 compatibility
  const { id } = use(params);
  const product = productData[id as keyof typeof productData];
  // const { toast } = useToast();
  const [adding, setAdding] = useState(false);

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );

  const handleAddToCart = () => {
    setAdding(true);
    setTimeout(() => {
      setAdding(false);
      // toast({
      //   title: "Added to cart",
      //   description: `${product.name} has been added to your bag.`,
      // });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="container mx-auto px-6">
        <Button variant="ghost" className="mb-8 gap-2" asChild>
          <Link href="/">
            <ArrowLeft className="w-4 h-4" /> Back to Collection
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image 
              src={'aquapure-classic.png'}//{'product.image'} 
              alt={product.name} 
              fill
              priority
              className="object-cover" 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-none">
              Bidhan Pharma Approved
            </Badge>
            <h1 className="text-5xl font-serif font-bold mb-4">{product.name}</h1>
            <p className="text-3xl font-light text-primary mb-6">${product.price}</p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4 mb-8">
              {product.features.map(feature => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="bg-primary/10 p-1 rounded-full text-primary">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="w-full rounded-full py-8 text-xl gap-3 transition-all active:scale-95"
              onClick={handleAddToCart}
              disabled={adding}
            >
              {adding ? (
                "Adding..."
              ) : (
                <>
                  <ShoppingCart className="w-6 h-6" /> Add to Bag
                </>
              )}
            </Button>

            <div className="mt-8 p-6 bg-secondary/50 rounded-2xl border flex gap-4">
              <Info className="w-6 h-6 text-primary shrink-0" />
              <p className="text-sm text-muted-foreground">
                Manufactured by <strong>Bidhan Pharmaceuticals</strong>. This product undergoes 24 rigorous purity tests before leaving our facility.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}