'use client';

import TrackedCTA from './TrackedCTA';

export default function CTASection() {
  return (
    <section className="bg-blue-50 py-16 mt-24 rounded-lg">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Dominate Local Search?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Get your free DMV market intelligence report and discover your AI SEO quick wins.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <TrackedCTA
            href="/free-tool"
            className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 transition shadow-md"
            eventLabel="Get 5 AI Quick Wins (CTA Section)"
          >
            🚀 Get 5 AI Quick Wins
          </TrackedCTA>
          <TrackedCTA
            href="https://calendly.com/mbraceinsight/strategy-call"
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-md font-semibold hover:bg-blue-50 transition"
            eventLabel="Book Strategy Call (CTA Section)"
          >
            📅 Book Strategy Call
          </TrackedCTA>
        </div>
      </div>
    </section>
  );
}

