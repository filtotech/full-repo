import ProductPage from '@/components/Miazen-F2'


import { Metadata } from 'next';
// Assuming a relevant component for display:
// import ProductPage from '../../../components/Miazen-F2'; 

const productData = {
  name: "Miazen-F2",
  category: "Iron & Folic Acid Supplement (Haematinic)",
  genericName: "Ferrous Ascorbate & Folic Acid Syrup",
  description: "A potent 200ml syrup formulated to combat iron deficiency anemia and fatigue. Essential for vitality, energy, and red blood cell production. Supports overall wellness and recovery.",
  images: [
    "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80", // Placeholder medicine bottle
    "https://images.unsplash.com/photo-1603398938378-e54eab446ddd?auto=format&fit=crop&q=80"
  ]
};

// Next.js will automatically identify this for SEO
export const metadata: Metadata = {
  title: `${productData.name} Syrup | Iron Deficiency & Anemia Relief | Boost Energy`,
  description: productData.description,
  
  // MAX SEO KEYWORDS SECTION
  keywords: [
    // Core Product Keywords
    "Miazen-F2 syrup",
    "Ferrous Ascorbate Folic Acid Syrup",
    "Iron syrup for anemia",
    "Folic acid supplement for red blood cells",
    "Anemia treatment syrup",
    "Iron deficiency medicine",
    
    // Secondary & Long-Tail
    "Syrup for fatigue and weakness",
    "Essential for vitality supplement",
    "Buy Miazen-F2 online",
    "Iron boost energy wellness syrup",
    "Ferrous Ascorbate Folic Acid uses benefits",
    "Haematinic syrup India",
    "200ml iron supplement",

    // Geographical Keywords (Adjust for your specific market)
    "Miazen-F2 syrup price in Kolkata",
    "Ferrous Ascorbate syrup manufacturer India",
    "Buy iron supplement West Bengal",
  ],

  openGraph: {
    title: `${productData.name} - Boost Your Health. Live Energetic.`,
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




const page = () => {
  return (
    <ProductPage />
  )
}

export default page