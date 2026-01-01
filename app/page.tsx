import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import TrackedCTA from "@/components/TrackedCTA";

export const metadata = {
  title: 'AI SEO for Local Businesses in DC, Maryland & Virginia | Mbrace Insight',
  description: 'Boost your visibility in Google\'s AI Overviews and Maps. Mbrace Insight helps DMV businesses dominate local search using automation and AI SEO.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            AI-Powered Local SEO for <span className="text-blue-600">DMV Businesses</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Dominate Google Maps, AI Overviews, and local search in DC, Maryland, and Virginia with automation-driven SEO systems.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <TrackedCTA
              href="/free-tool"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg text-lg"
              eventLabel="DMV Audit Form Start (Hero)"
            >
              🚀 Get 5 AI Quick Wins in 60 Seconds
            </TrackedCTA>
            <TrackedCTA
              href="https://calendly.com/mbraceinsight/strategy-call"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition text-lg"
              eventLabel="Book Strategy Call (Hero)"
            >
              📅 Book Strategy Call
            </TrackedCTA>
          </div>
        </div>
      </section>

      {/* PROOF / STATS SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-lg text-gray-600 mb-8">
            Trusted by contractors, law firms, and medical practices across the DMV
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap text-gray-500">
            <div className="px-6 py-3 border border-gray-200 rounded-lg">HVAC Services</div>
            <div className="px-6 py-3 border border-gray-200 rounded-lg">Legal Firms</div>
            <div className="px-6 py-3 border border-gray-200 rounded-lg">Medical Practices</div>
            <div className="px-6 py-3 border border-gray-200 rounded-lg">Home Services</div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Comprehensive AI SEO Services for DMV Businesses
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI SEO Optimization",
                desc: "Rank in AI Overviews and featured snippets using schema markup and content automation.",
              },
              {
                title: "Local Maps SEO",
                desc: "Dominate Google Business Profile and Local Service Ads results for high-intent local searches.",
              },
              {
                title: "Competitor Gap Analysis",
                desc: "Identify what top DMV competitors rank for and how to outrank them with strategic optimization.",
              },
              {
                title: "Automation Workflows",
                desc: "Automate GBP updates, review velocity, and reporting with AI-powered tools and systems.",
              },
              {
                title: "Market Intelligence Reports",
                desc: "Get quarterly insights into AI search trends and keyword gaps specific to the DMV market.",
              },
              {
                title: "AI Content Clusters",
                desc: "Build authority through educational and local SEO content clusters optimized for AI search.",
              },
            ].map((service, i) => (
              <div 
                key={i} 
                className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POV / DIFFERENTIATOR SECTION */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            The Future of SEO is AI-Driven
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            The future of SEO is structured, automated, and AI-driven. I help local DMV businesses become visible in AI search results — before competitors even realize what happened.
          </p>
          <p className="text-lg text-blue-200 mb-10">
            Gain early-mover advantage with structured automation and data-driven insights that put you ahead of the competition.
          </p>
          <TrackedCTA
            href="/free-tool"
            className="inline-block bg-white text-blue-900 font-semibold px-10 py-4 rounded-lg hover:bg-blue-50 transition shadow-lg text-lg"
            eventLabel="DMV Audit (Differentiator Section)"
          >
            Get My Free DMV Market Intelligence Report
          </TrackedCTA>
        </div>
      </section>

      {/* FREE TOOL CTA SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Get 5 AI Quick Wins for Your Business
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Discover your local visibility score and top keyword gaps in 60 seconds.
          </p>
          <TrackedCTA
            href="/free-tool"
            className="inline-block bg-blue-600 text-white font-semibold px-10 py-4 rounded-lg hover:bg-blue-700 transition shadow-lg text-lg"
            eventLabel="Start Free Audit (Free Tool Section)"
          >
            Start Free Audit →
          </TrackedCTA>
        </div>
      </section>

      {/* CASE STUDY / PROOF SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-xl p-10 shadow-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">✅</span>
              <h3 className="text-2xl font-bold text-gray-900">Real Results for DMV Businesses</h3>
            </div>
            <div className="pl-12">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                DMV HVAC Client: +150% Google Maps Visibility in 90 Days
              </h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                Using AI schema implementation, review automation, and structured data optimization, we helped a local HVAC company in Northern Virginia achieve a 150% increase in Google Maps visibility and rankings within 90 days.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Automated Google Business Profile updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Structured schema markup for local services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Review velocity optimization and automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>AI Overview optimization for HVAC searches</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What is AI SEO?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                AI SEO uses automation and structured data to make your business visible in Google's AI Overviews and generative engines. It combines schema markup, content automation, and data-driven optimization to help businesses rank in AI-powered search results before competitors catch up.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What areas do you serve?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We serve businesses across DC, Maryland, and Northern Virginia (the DMV region). Whether you're in Washington DC, Bethesda, Arlington, Alexandria, or anywhere in the DMV metro area, we can help optimize your local search presence.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How long does it take to see results?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Most businesses see visibility improvements within 30–60 days. However, AI Overview rankings and Google Maps improvements can appear sooner with proper schema implementation and automation workflows. Quick wins from schema markup often appear within 2-4 weeks.
              </p>
            </div>
            <div className="pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How does your free audit tool work?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our free DMV Market Intelligence Report analyzes your business's current local search visibility, identifies keyword gaps, and provides 5 actionable AI SEO quick wins. The audit takes about 60 seconds to complete and delivers immediate insights you can implement right away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <CTASection />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}

