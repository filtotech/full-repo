import React from 'react'
// import ContactView from './ContactUsView'
import { Metadata } from 'next';
import ContactPage from '@/components/ContactUs';

export const metadata: Metadata = {
  title: 'Contact Bidhan Pharmaceuticals',
  description: 'Get in touch with Bidhan Pharmaceuticals for medical inquiries, partnership opportunities, and pharmaceutical manufacturing support.',
  keywords: ['Contact Bidhan Pharmaceuticals', 'Pharmaceutical Inquiries', 'Pharmaceuticals Partnerships', 'Medical Support', 'Pharmaceutical Manufacturing', 'Generic medicines Manufacturers in Kolkata', 
    'Pharmaceutical Exporters in Kolkata', 'Pharmaceutical Suppliers in Kolkata', 'Pharma Distributors in Kolkata',"Baby - LM syrup","Baby LM Montelukast Levocetirizine","Montelukast Levocetirizine Dihydrochloride Syrup",
    'Baby-LM Syrup', 'Allergy Relief for Children', 'Pediatric Allergy Medicine', 'Montelukast Levocetirizine Syrup', 'Children\'s Asthma Relief', 'Bidhan Pharmaceuticals Products',"Syrup for sneezing runny nose allergies",
    "Asthma management syrup for kids","Baby - LM syrup price in Kolkata","Bidhan Pharmaceuticals Kolkata","Pharmaceutical manufacturers in Kolkata","BCPlex - L syrup","BCPlex L Vitamin B Complex Lysine Zinc",
    "Vitamin B Complex Syrup with Zinc","Syrup for fatigue weakness","Immune function support syrup","Promotes healthy growth supplement","Zinc immune support medicine","Buy BCPlex-L online India","200ml vitamin syrup",
    "BCPlex - L price in West Bengal","Vitamin B complex manufacturer India","Buy vitamin syrup North Dumdum"

  ],
  openGraph: {
    title: 'Contact Bidhan Pharmaceuticals',
    description: 'Professional pharmaceutical solutions and support.',
    url: 'https://bidhanpharma.com/contact-us',
    siteName: 'Bidhan Pharmaceuticals',
    type: 'website',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Bidhan Pharmaceuticals",
  "url": "https://bidhanpharma.com",
  "logo": "https://bidhanpharma.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-6291665147",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": "en"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "OFFICE ADDRESS : ASO111, Astra Tower, New Town, Kolkata - 700161, West Bengal, India",
    "addressLocality": "Kolkata",
    "addressRegion": "West Bengal",
    "postalCode": "700161",
    "addressCountry": "IN"
  }
};
const page = () => {
  return (
    <ContactPage jsonLd={jsonLd} />
  )
}

export default page