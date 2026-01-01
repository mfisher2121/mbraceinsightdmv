'use client';
import Script from 'next/script';

export default function Schema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mbrace Insight",
    "url": "https://mbraceinsight.com",
    "email": "mfisher@mbraceinsight.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Washington",
      "addressRegion": "DC",
      "addressCountry": "US"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AI SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI SEO uses automation and structured data to make your business visible in Google's AI Overviews and generative engines. It combines schema markup, content automation, and data-driven optimization to help businesses rank in AI-powered search results."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve businesses across DC, Maryland, and Northern Virginia (the DMV region)."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most businesses see visibility improvements within 30–60 days. However, AI Overview rankings and Google Maps improvements can appear sooner with proper schema implementation and automation workflows."
        }
      }
    ]
  };

  return (
    <>
      <Script id="schema-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="schema-faqpage" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
