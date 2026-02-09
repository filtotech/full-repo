import AboutUs from '@/components/AboutUs';
import ContactPage from '@/components/ContactUs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Bidhan Pharmaceuticals | Global Pharma Support',
  description: 'Get in touch with Bidhan Pharmaceuticals for medical inquiries, partnership opportunities, and pharmaceutical manufacturing support.',
  openGraph: {
    title: 'Contact Bidhan Pharmaceuticals',
    description: 'Professional pharmaceutical solutions and support.',
    url: 'https://bidhanpharma.com/contact',
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
    <>
      {/* 2. Standard way to inject JSON-LD in Next.js App Router */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutUs />
    </>
  )
}

export default page
