import './globals.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Schema from '@/components/Schema';

export const metadata = {
  title: 'Mbrace Insight | AI SEO & Local Marketing Automation DMV',
  description: 'Dominate Google Maps, AI Overviews, and local search in DC, Maryland, and Virginia using AI-driven SEO systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-gray-900">
        <GoogleAnalytics />
        {children}
        <Schema />
      </body>
    </html>
  );
}
