import { Metadata } from 'next';
import ProductPage from '../../../components/Baby-LM'; 

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
export const metadata: Metadata = {
  title: `${productData.name} Syrup | Pediatric Allergy & Asthma Relief`,
  description: productData.description,
  
  // MAX SEO KEYWORDS SECTION
  keywords: [
    // Core Product Keywords
    "Baby - LM syrup",
    "Baby LM Montelukast Levocetirizine",
    "Montelukast Levocetirizine Dihydrochloride Syrup",
    "Pediatric allergy medicine",
    "Allergy relief syrup for children",
    
    // Secondary & Long-Tail
    "Treatment of allergic rhinitis in children",
    "Syrup for sneezing runny nose allergies",
    "Asthma management syrup for kids",
    "Syrup for hay fever symptoms",
    "Levocetirizine and Montelukast combination syrup",
    "Baby - LM uses benefits side effects",
    "Allergy medicine",
    // Geographical Keywords
    "Baby - LM syrup",
    "Baby - LM syrup price in Kolkata",
    "Bidhan Pharmaceuticals Kolkata",
    "Pharmaceutical manufacturers in Kolkata"
  ],

  openGraph: {
    title: `${productData.name} - Science • Care • Trust`,
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

export default function Page() {
  return <ProductPage  />;
}