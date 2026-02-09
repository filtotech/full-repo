import React from 'react'
import ProductPage from '@/components/BCPlex-L'
import { Metadata } from 'next';
// Assuming a relevant component for display:
// import ProductPage from '../../../components/BCPlexLPage'; 

const productData = {
  name: "BCPlex - L",
  category: "Vitamin Supplement / General Wellness",
  genericName: "Vitamin B Complex Syrup with L-Lysine & Zinc",
  description: "A comprehensive syrup for all ages that combats fatigue and weakness, supports immune function, and promotes healthy growth. Formulated with essential B Vitamins, Lysine, and Zinc for daily vitality.",
  images:[
    "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80", // Placeholder medicine bottle
  ]
};
  

// Next.js will automatically identify this for SEO
export const metadata: Metadata = {
  title: `${productData.name} Syrup | Energy & Immune Support | All Ages`,
  description: productData.description,
  
  // MAX SEO KEYWORDS SECTION
  keywords: [
    // Core Product Keywords
    "BCPlex - L syrup",
    "BCPlex L Vitamin B Complex Lysine Zinc",
    "Vitamin B Complex Syrup with Zinc",
    "Syrup for fatigue weakness",
    "Immune function support syrup",
    "Promotes healthy growth supplement",
    
    // Secondary & Long-Tail
    "B Plex L syrup uses benefits",
    "Best Vitamin B supplement for all ages",
    "L-Lysine appetite stimulant syrup",
    "Zinc immune support medicine",
    "Buy BCPlex-L online India",
    "200ml vitamin syrup",
    
    // Geographical Keywords (Adjust for your specific market)
    "BCPlex - L price in West Bengal",
    "Vitamin B complex manufacturer India",
    "Buy vitamin syrup North Dumdum",
  ],

  openGraph: {
    title: `${productData.name} - For All Ages!`,
    description: productData.description,
    images: [{ url: productData.images[0] }],
    type: 'website',
    locale: 'en_IN', // Targets India specifically
  },

  // Added Robots tag to ensure Google indexes this clearly
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// export default function Page() {
//   return <ProductPage />;
// }

const page = () => {
  return (
    <ProductPage />
  )
}

export default page