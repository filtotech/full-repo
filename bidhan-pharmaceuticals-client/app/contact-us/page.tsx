import React from 'react'
import ContactView from './ContactUsView'
import { Metadata } from 'next';
import ContactPage from '@/components/ContactUs';

export const metadata: Metadata = {
  title: 'Contact Bidhan Pharmaceuticals',
  description: 'Get in touch with Bidhan Pharmaceuticals for medical inquiries, partnership opportunities, and pharmaceutical manufacturing support.',
  keywords: ['Contact Bidhan Pharmaceuticals', 'Pharmaceutical Inquiries', 'Pharma Partnerships', 'Medical Support', 'Pharmaceutical Manufacturing', 'Generic medicines Manufacturers in Kolkata', 
    'Pharmaceutical Exporters in Kolkata', 'Pharmaceutical Suppliers in Kolkata', 'Pharma Distributors in Kolkata',
    'Baby-LM Syrup', 'Allergy Relief for Children', 'Pediatric Allergy Medicine', 'Montelukast Levocetirizine Syrup', 'Children\'s Asthma Relief', 'Bidhan Pharmaceuticals Products',

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
    "telephone": "+91-XXX-XXXXXXX",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": "en"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Office Street",
    "addressLocality": "Kolkata",
    "addressRegion": "West Bengal",
    "postalCode": "700XXX",
    "addressCountry": "IN"
  }
};
const page = () => {
  return (
    <ContactPage jsonLd={jsonLd} />
  )
}

export default page