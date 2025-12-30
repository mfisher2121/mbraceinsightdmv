'use client';
import Script from 'next/script';

export default function Schema() {
  const schema = {
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
  return <Script id="schema-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
