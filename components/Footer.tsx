export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mbrace Insight</h3>
            <p className="text-gray-400">
              AI-powered local SEO and marketing automation for DMV businesses.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/free-tool" className="hover:text-white transition">
                  Free Audit Tool
                </a>
              </li>
              <li>
                <a href="/ai-seo" className="hover:text-white transition">
                  AI SEO Services
                </a>
              </li>
              <li>
                <a href="https://calendly.com/mbraceinsight/strategy-call" className="hover:text-white transition">
                  Book a Call
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:mfisher@mbraceinsight.com" className="hover:text-white transition">
                  mfisher@mbraceinsight.com
                </a>
              </li>
              <li className="text-gray-400">
                Serving DC, Maryland & Virginia
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Mbrace Insight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

