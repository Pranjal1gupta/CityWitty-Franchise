export function OrganizationStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CityWitty Franchise",
    "url": "https://franchise.citywitty.com",
    "logo": "https://franchise.citywitty.com/logo.png",
    "description": "India's leading business franchise platform with FOCO (Franchise Owned, Company Operated) model",
    "foundingDate": "2023",
    "areaServed": "IN",
    "telephone": "+91-6389202030",
    "email": "contact@citywitty.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit 316 & 317, P-3, 3rd Floor, Paramount Golf Foreste",
      "addressLocality": "Greater Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201311",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.facebook.com/citywitty",
      "https://www.instagram.com/citywitty",
      "https://www.linkedin.com/company/citywitty"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Franchise Sales",
      "telephone": "+91-6389202030",
      "email": "contact@citywitty.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CityWitty - Greater Noida Franchise Office",
    "image": "https://franchise.citywitty.com/logo.png",
    "description": "CityWitty franchise headquarters and franchise opportunity center in Greater Noida",
    "url": "https://franchise.citywitty.com",
    "telephone": "+91-6389202030",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit 316 & 317, P-3, 3rd Floor, Paramount Golf Foreste",
      "addressLocality": "Greater Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201311",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "areaServed": "IN",
    "priceRange": "₹5,00,000 - ₹50,00,000"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://franchise.citywitty.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://franchise.citywitty.com/about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "FOCO Model",
        "item": "https://franchise.citywitty.com/model"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Benefits",
        "item": "https://franchise.citywitty.com/benefits"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Contact",
        "item": "https://franchise.citywitty.com/contact"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is FOCO model?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FOCO stands for Franchise Owned, Company Operated. You provide capital and own the franchise rights, while CityWitty manages all operations, marketing, and team management."
        }
      },
      {
        "@type": "Question",
        "name": "How much investment is required?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Investment range depends on the territory and scale. Typically ranges from ₹5,00,000 to ₹50,00,000 including franchise fee and working capital."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to break even?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most franchise partners achieve break-even within 12-18 months of operation, depending on market conditions and territory size."
        }
      },
      {
        "@type": "Question",
        "name": "Is this a passive income opportunity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the FOCO model is designed as a passive income opportunity. CityWitty handles day-to-day operations while you monitor performance and growth."
        }
      },
      {
        "@type": "Question",
        "name": "Which cities is CityWitty operating in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CityWitty operates in over 50 cities across India with plans to expand further. Contact us to check availability in your preferred location."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
