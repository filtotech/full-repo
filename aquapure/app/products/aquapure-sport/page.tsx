// import ProductPage from '@/components/SingularProduct'
// import { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'AquaPure-Classic | Best-Selling Packaged Water',
//   description: 'Stay hydrated with AquaPure-Classic. Our best-selling purified water is designed for daily, balanced hydration. Perfect for home or office. Order now for $9.00!',
//   keywords: ['AquaPure Classic', 'Purified Water', 'Daily Hydration', 'Best Selling Bottled Water','Best Packaged Drinking Water in Kolkata', 'Buy Packaged Drinking Water Online',
//     'Packaged Drinking Water', 'Distributor of Packaged Drinking Water','Order Packaged Drinking Water', 'Water for Home', 'Water for Office', 'Hydration Solution', 'AquaPure Products',
//     'Premium Packaged Drinking Water', 'Bulk Distributor and Supplier of Packaged Drinking Water in Kolkata', 'Best Packaged Drinking Water in India', 'AquaPure Classic Benefits',
//   ],
//   openGraph: {
//     title: 'AquaPure-Classic: The Gold Standard for Daily Hydration',
//     description: 'Refresh your day with our best-selling Classic variant. Rated 5/5 stars by over 128 customers.',
//     url: 'https://aquapure-bay.vercel.app/products/aquapure-classic', // Replace with your actual domain
//     siteName: 'AquaPure',
//     images: [
//       {
//         url: '/aquapure-classic.png', // Ensure this path matches your public folder
//         width: 1200,
//         height: 630,
//         alt: 'AquaPure-Classic Premium Water',
//       },
//     ],
//     locale: 'en_US',
//     type: 'website',
//   },
//   organizationalSchema : {
//   "@context": "https://schema.org",
//   "@type": "Organization",
//   "name": "AquaPure",
//   "url": "https://aquapure-bay.vercel.app",
//   "sameAs": [
//     "https://www.facebook.com/profile.php?id=61587861983859",
//     "https://x.com/AquaPure_Bidhan",
//     "https://www.linkedin.com/in/aquapure-bidhan-30231a3ab/"
//   ]
// },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'AquaPure-Classic | Premium Daily Water',
//     description: 'The perfect balance for your daily hydration. Get it now for $9.00.',
//     images: ['/aquapure-classic.png'],
//   },
// }
// const page = () => {
//   return (
//     <ProductPage name={"aquapure-classic"} />
//   )
// }

// export default page

import ProductPage from '@/components/SingularProduct'
import { Metadata } from 'next'

// 1. Correct Next.js Metadata Export
export const metadata: Metadata = {
  title: 'AquaPure-Sport | Best-Selling Packaged Water in Kolkata',
  description: 'Stay hydrated with AquaPure-Sport. Our best-selling purified water is designed for daily, balanced hydration. Perfect for home or office. Order now for $9.00!',
  keywords: [
    'AquaPure Sport', 'Purified Water', 'Daily Hydration', 'Best Selling Bottled Water',
    'Best Packaged Drinking Water in Kolkata', 'Buy Packaged Drinking Water Online',
    'Packaged Drinking Water', 'Distributor of Packaged Drinking Water', 'Order Packaged Drinking Water',
    'Water for Home', 'Water for Office', 'Hydration Solution', 'AquaPure Products',
    'Premium Packaged Drinking Water', 'Bulk Distributor and Supplier of Packaged Drinking Water in Kolkata',
    'Best Packaged Drinking Water in India', 'AquaPure Sport Benefits',
  ],
  openGraph: {
    title: 'AquaPure-Sport: The Gold Standard for Daily Hydration',
    description: 'Refresh your day with our best-selling Sport variant. Rated 5/5 stars by over 128 customers.',
    url: 'https://aquapure-bay.vercel.app/products/aquapure-sport',
    siteName: 'AquaPure',
    images: [
      {
        url: '/aquapure-classic.png',
        width: 1200,
        height: 630,
        alt: 'AquaPure-Sport Electrolysed Packaged Drinking Water',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AquaPure-Sport | Premium Daily Water',
    description: 'The perfect balance for your daily hydration. Get it now for $9.00.',
    images: ['/aquapure-classic.png'],
    site: '@AquaPure_Bidhan', // Added your Twitter handle for better branding
  },
}

const page = () => {
  // 2. Correct way to add Schema: Structured Data as a JSON-LD script
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product", // Changed to Product since this is a product page
    "name": "AquaPure-Sport Electrolysed Packaged Drinking Water",
    "image": "https://aquapure-bay.vercel.app/aquapure-classic.png",
    "description": "Aquapure's Sport variant suitable for normal and non-athletic consumption.",
    "brand": {
      "@type": "Brand",
      "name": "AquaPure"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://aquapure-bay.vercel.app/products/aquapure-sport",
      "priceCurrency": "USD",
      "price": "9.00",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "128"
    }
  }

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AquaPure",
    "url": "https://aquapure-bay.vercel.app/products/aquapure-sport",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61587861983859",
      "https://x.com/AquaPure_Bidhan",
      "https://www.linkedin.com/in/aquapure-bidhan-30231a3ab/"
    ]
  }

  return (
    <>
      {/* This injects the SEO data into Google's Knowledge Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      
      <ProductPage name={"aquapure-sport"} />
    </>
  )
}

export default page