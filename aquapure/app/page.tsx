import Image from "next/image";
import Hero from "@/components/Hero";
import { Metadata } from "next";
const productData = {
  name: "Baby - LM",
  category: "Anti-allergic / Anti-asthmatic",
  genericName: "Montelukast + Levocetirizine Dihydrochloride",
  description: "A premium syrup formulated for the effective relief of skin irritation, itching, and minor inflammatory conditions. Manufactured under strict WHO-GMP guidelines.",
  images: [
    "/Gemini_Generated_Image_3b56le3b56le3b56.png",
  ]
};
// Next.js will automatically identify this for SEO
// import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AquaPure | Premium Mineralized & Electrolyte Enhanced Water",
  description: "Discover AquaPure's premium bottled water collection: Classic Mineralized for daily vitality, Sport with electrolytes, and Zen infused with magnesium for focus.",
  
  // MAX SEO KEYWORDS SECTION
  keywords: [
    // Brand Keywords
    "AquaPure water",
    "AquaPure Classic",
    "AquaPure Sport electrolytes",
    "AquaPure Zen magnesium water",
    
    // Category Keywords
    "premium mineralized water",
    "electrolyte enhanced bottled water",
    "magnesium infused water for focus",
    "best bottled water for athletes",
    "alkaline mineral water brands",
    
    // Intent-Based & Long-Tail
    "buy mineral water online",
    "water for physical performance",
    "natural hydration for daily vitality",
    "calming magnesium drinks",
    "healthy bottled water delivery",
    "AquaPure price and benefits"
  ],

  openGraph: {
    title: "AquaPure - Hydration Reimagined",
    description: "From daily vitality to peak performance and calming focus, find the perfect AquaPure blend for your lifestyle.",
    url: 'https://yourdomain.com', // Replace with your actual URL
    siteName: 'AquaPure Hydration',
    images: [
      {
        url: "https://images.unsplash.com/photo-1548919973-5dea5846f680?auto=format&fit=crop&q=80&w=800",
        width: 800,
        height: 600,
        alt: "AquaPure Classic Mineralized Water",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AquaPure | Pure Hydration for Every Goal",
    description: "Daily vitality, sport performance, and zen focus. Explore the AquaPure collection.",
    images: ["https://images.unsplash.com/photo-1548919973-5dea5846f680?auto=format&fit=crop&q=80&w=800"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
export default function Home() {
  return (
    <Hero />
    
  );
}
