'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';

interface AuditResult {
  wisdom_score: number;
  tier: string;
  quickWins: string[];
  businessName?: string;
}

export default function FreeToolPage() {
  const [formData, setFormData] = useState({
    businessName: '',
    website: '',
    city: '',
    serviceType: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    // Track form submission in GA
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'audit_form_submit', {
        event_category: 'Conversion',
        event_label: 'DMV Audit Form Submission',
        value: 1,
      });
    }

    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setResult(data);
      
      // Track successful audit completion
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'audit_completed', {
          event_category: 'Conversion',
          event_label: 'DMV Audit Completed',
          value: data.wisdom_score || 0,
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to process audit. Please try again.');
      
      // Track error
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'audit_error', {
          event_category: 'Error',
          event_label: 'DMV Audit Error',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getTierColor = (tier: string) => {
    if (tier.includes('High') || tier.includes('Top')) return 'text-green-600 bg-green-50';
    if (tier.includes('Mid')) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get 5 AI Quick Wins for Your DMV Business
          </h1>
          <p className="text-xl text-gray-600">
            Discover your local visibility score and top keyword gaps in 60 seconds
          </p>
        </div>

        {!result ? (
          /* Form */
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., ABC HVAC Services"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                  Website URL *
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  required
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="https://yourbusiness.com"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                  City or ZIP Code *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Washington, DC or 20001"
                />
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Service Type *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a service type</option>
                  <option value="HVAC">HVAC Services</option>
                  <option value="Legal">Legal Services</option>
                  <option value="Medical">Medical Practice</option>
                  <option value="Home Services">Home Services</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your@email.com"
                />
                <p className="mt-1 text-sm text-gray-500">
                  We'll send your audit results here
                </p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing your business visibility... running AI Audit...
                  </span>
                ) : (
                  '🚀 Get My 5 AI Quick Wins'
                )}
              </button>
            </form>
          </div>
        ) : (
          /* Results */
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your DMV SEO Audit Results
              </h2>
              <div className="inline-flex items-center gap-4 px-6 py-4 rounded-lg bg-gray-50">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Wisdom Score</div>
                  <div className="text-4xl font-bold text-blue-600">{result.wisdom_score}</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Tier</div>
                  <div className={`px-4 py-2 rounded-lg font-semibold ${getTierColor(result.tier)}`}>
                    {result.tier}
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Your Top 5 AI SEO Quick Wins
              </h3>
              <ol className="space-y-4">
                {result.quickWins.map((win, index) => (
                  <li key={index} className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <span className="text-gray-800 text-lg pt-1">{win}</span>
                  </li>
                ))}
              </ol>
            </div>

            {result.wisdom_score < 70 && (
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  You're Missing Key Local Visibility Signals
                </h4>
                <p className="text-gray-700 mb-4">
                  Book a strategy call — I'll walk you through your 3 fastest fixes to improve your visibility score.
                </p>
                <a
                  href="https://calendly.com/mbraceinsight/strategy-call"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'cta_click', {
                        event_category: 'Conversion',
                        event_label: 'Book Strategy Call (Low Score)',
                      });
                    }
                  }}
                >
                  📅 Book Your Free Strategy Call
                </a>
              </div>
            )}

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <p className="text-gray-700 mb-4">
                A detailed report has been sent to <strong>{formData.email}</strong>
              </p>
              <button
                onClick={() => {
                  setResult(null);
                  setFormData({
                    businessName: '',
                    website: '',
                    city: '',
                    serviceType: '',
                    email: '',
                  });
                }}
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Run Another Audit →
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}

