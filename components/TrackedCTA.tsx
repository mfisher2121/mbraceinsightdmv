'use client';

interface TrackedCTAProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  eventLabel: string;
  eventCategory?: string;
}

export default function TrackedCTA({ 
  href, 
  children, 
  className = '', 
  eventLabel,
  eventCategory = 'Conversion'
}: TrackedCTAProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        event_category: eventCategory,
        event_label: eventLabel,
      });
    }
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}

