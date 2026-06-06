import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investor-Ready Pitch Decks",
  description:
    "Professional pitch decks for Canadian entrepreneurs. Clear, compelling, and built to close funding.",
  alternates: { canonical: "https://canadagrantsandloans.com/services/pitch-decks" },
  openGraph: {
    title: "Investor-Ready Pitch Decks | Canada Grants and Loans",
    description:
      "Professional pitch decks for Canadian entrepreneurs. Clear, compelling, and built to close funding.",
    url: "https://canadagrantsandloans.com/services/pitch-decks",
  },
};

const included = [
  "Problem & Solution Slides",
  "Market Size & Opportunity",
  "Business Model",
  "Traction & Milestones",
  "Product / Service Overview",
  "Competitive Analysis",
  "Financial Summary",
  "Team & Advisors",
  "The Ask (funding amount & use of funds)",
  "Custom Design in Your Brand Colours",
];

const industries = [
  "Tech & SaaS",
  "Food & Beverage",
  "Health & Wellness",
  "Construction & Trades",
  "Retail & E-Commerce",
  "Professional Services",
  "Clean Energy",
  "Any Industry",
];

export default function PitchDecksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-red mb-3">
              Services / Pitch Decks
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-5">
              Pitch Decks That Command Attention and Close Deals
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We design and write investor-ready pitch decks that clearly communicate your vision,
              market opportunity, and financials — from the opening slide to the ask.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:18554726875"
                className="inline-flex items-center justify-center gap-2 bg-brand-red text-white font-semibold px-6 py-3 rounded hover:bg-red-700 transition-colors"
              >
                <PhoneIcon />
                Call 1-855-472-6875
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-brand-navy text-brand-navy font-semibold px-6 py-3 rounded hover:bg-brand-navy hover:text-white transition-colors"
              >
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-brand-light py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-navy mb-2 text-center">
              What&apos;s Included in Every Pitch Deck
            </h2>
            <p className="text-gray-500 text-center mb-10">
              Every slide deck we produce tells a complete, compelling funding story.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {included.map((item, i) => (
                <div
                  key={item}
                  className="bg-white border border-gray-200 rounded px-5 py-4 flex items-center gap-4"
                >
                  <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-brand-dark">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Slide Preview Mockup */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-brand-navy mb-2 text-center">
            What a Winning Pitch Deck Looks Like
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Clean layout, strong hierarchy, data-backed slides designed to move decision-makers.
          </p>

          {/* Slide strip mockup */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { label: "01", title: "Problem" },
              { label: "02", title: "Solution" },
              { label: "03", title: "Market" },
              { label: "04", title: "Financials" },
              { label: "05", title: "The Ask" },
            ].map((slide) => (
              <div
                key={slide.label}
                className="aspect-[4/3] bg-brand-navy rounded flex flex-col items-center justify-center relative overflow-hidden shadow"
              >
                <div className="absolute top-2 left-2 text-xs text-blue-300 font-mono">
                  {slide.label}
                </div>
                <div className="w-8 h-0.5 bg-brand-red mb-2" />
                <span className="text-white font-bold text-sm">{slide.title}</span>
                <div className="w-6 h-0.5 bg-blue-400 mt-2 opacity-50" />
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">
            Illustrative slide layout. Final design uses your brand colours and assets.
          </p>
        </div>
      </section>

      {/* Industries Served */}
      <section className="bg-brand-light py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-brand-navy mb-2 text-center">
            Industries We Serve
          </h2>
          <p className="text-gray-500 text-center mb-10">
            We&apos;ve written pitch decks for businesses across every sector in Canada.
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {industries.map((ind) => (
              <span
                key={ind}
                className={`px-5 py-2.5 rounded text-sm font-semibold ${
                  ind === "Any Industry"
                    ? "bg-brand-red text-white"
                    : "bg-white text-brand-navy border border-gray-200"
                }`}
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Turnaround */}
      <section className="bg-white py-14 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-brand-light rounded p-6 text-center border border-gray-200">
              <div className="text-brand-navy mb-2">
                <ClockIcon />
              </div>
              <h3 className="font-bold text-brand-navy mb-1">Standard Turnaround</h3>
              <p className="text-2xl font-bold text-brand-navy">7–10</p>
              <p className="text-sm text-gray-500">business days</p>
            </div>
            <div className="bg-brand-red rounded p-6 text-center">
              <div className="text-white mb-2">
                <BoltIcon />
              </div>
              <h3 className="font-bold text-white mb-1">Rush Available</h3>
              <p className="text-sm text-red-100">
                Need it faster? Call us and we&apos;ll discuss priority delivery options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-brand-light py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-brand-navy mb-2 text-center">
            Pricing
          </h2>
          <p className="text-gray-500 text-center mb-10">
            The pitch deck is included in our Comprehensive Package — no separate fee.
          </p>

          <div className="bg-white border-2 border-brand-navy rounded-lg overflow-hidden shadow-sm">
            <div className="bg-brand-navy px-8 py-5 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">The Complete Package</h3>
                <p className="text-blue-200 text-sm mt-0.5">
                  Business Plan + Pitch Deck + 10 Grant Applications
                </p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-white">$2,500</p>
                <p className="text-blue-200 text-xs">all-inclusive</p>
              </div>
            </div>
            <div className="px-8 py-6">
              <ul className="space-y-3">
                {[
                  "20+ slide pitch deck with custom design in your brand colours",
                  "Financial summary and projections slides",
                  "Full business plan included — no extra charge",
                  "10 grant applications — written and submitted on your behalf",
                  "Competitive analysis and market opportunity slides",
                  "The Ask slide with funding breakdown",
                  "Unlimited revisions until you are satisfied",
                  "Priority turnaround available",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-brand-dark">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Ready to Build Your Pitch Deck?
          </h2>
          <p className="text-blue-200 mb-8 leading-relaxed">
            Call us to discuss your pitch and we&apos;ll get started right away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:18554726875"
              className="inline-flex items-center justify-center gap-2 bg-brand-red text-white font-semibold px-6 py-3 rounded hover:bg-red-700 transition-colors"
            >
              <PhoneIcon />
              Call 1-855-472-6875
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-brand-navy transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4 text-brand-red flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="h-8 w-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg className="h-8 w-8 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
