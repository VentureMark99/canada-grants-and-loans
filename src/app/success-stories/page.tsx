import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Real results for Canadian businesses. See how we've helped clients secure grants, loans, and investor funding.",
  alternates: { canonical: "https://canadagrantsandloans.com/success-stories" },
  openGraph: {
    title: "Success Stories | Canada Grants and Loans",
    description:
      "Real results for Canadian businesses. See how we've helped clients secure grants, loans, and investor funding.",
    url: "https://canadagrantsandloans.com/success-stories",
  },
};

const caseStudies = [
  {
    id: 1,
    business: "Northern Roots Bakery",
    location: "Thunder Bay, ON",
    stage: "Existing Business",
    service: "Grant Application",
    amount: "$48,500",
    programme: "FedNor Business Scale-Up & Productivity",
    quote:
      "We had no idea this programme even existed. Canada Grants and Loans found it, wrote the entire application, and handled all the follow-up. Three months later we had $48,500 to buy a new commercial oven and expand our production line.",
    name: "Sandra K.",
    title: "Owner, Northern Roots Bakery",
    tags: ["Food & Beverage", "Equipment Upgrade", "FedNor"],
  },
  {
    id: 2,
    business: "Brightline Tech Solutions",
    location: "Mississauga, ON",
    stage: "Startup",
    service: "Business Plan + Pitch Deck",
    amount: "$750,000",
    programme: "Seed round closed with institutional investor",
    quote:
      "We'd been trying to raise money for eight months with a mediocre deck and a business plan we wrote ourselves. Two weeks after getting our new plan and pitch deck from Canada Grants and Loans, we closed our seed round. The quality was night and day.",
    name: "Marcus T.",
    title: "CEO, Brightline Tech Solutions",
    tags: ["Technology", "Seed Funding", "Pitch Deck"],
  },
  {
    id: 3,
    business: "Coastal Catch Seafood Co.",
    location: "Halifax, NS",
    stage: "Existing Business",
    service: "Grant Application",
    amount: "$62,000",
    programme: "ACOA Business Development Program",
    quote:
      "ACOA applications are long and complicated. I tried to do it myself the year before and got rejected. Canada Grants and Loans wrote it properly, explained everything clearly, and we were approved on the first attempt. Completely worth every penny of the fee.",
    name: "Darren F.",
    title: "Owner, Coastal Catch Seafood Co.",
    tags: ["Food Processing", "ACOA", "Atlantic Canada"],
  },
  {
    id: 4,
    business: "Greenshift Logistics",
    location: "Calgary, AB",
    stage: "Existing Business",
    service: "Business Plan + Grant Application",
    amount: "$95,000",
    programme: "Emission Reduction Alberta + BDC Financing",
    quote:
      "We needed a business plan for our BDC loan application and a separate grant for our fleet electrification project. Canada Grants and Loans handled both. The business plan got us the loan, and the grant covered nearly a third of our EV conversion costs.",
    name: "Priya M.",
    title: "Director of Operations, Greenshift Logistics",
    tags: ["Clean Tech", "Transportation", "Alberta"],
  },
];

export default function SuccessStoriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
            Real Businesses. Real Results.
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Canadian entrepreneurs who got funded, closed deals, and moved their businesses forward
            — with help from Canada Grants and Loans.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-brand-navy py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: "$2.1M+", label: "Funding secured for clients" },
              { value: "200+", label: "Applications submitted" },
              { value: "All 13", label: "Provinces & territories served" },
              { value: "14 days", label: "Average turnaround time" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-black text-white mb-1">{stat.value}</p>
                <p className="text-xs text-blue-200 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-brand-light py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {caseStudies.map((cs, i) => (
            <div
              key={cs.id}
              className={`bg-white rounded border border-gray-200 shadow-sm overflow-hidden flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Accent panel */}
              <div className="bg-brand-navy lg:w-64 flex-shrink-0 flex flex-col justify-center px-8 py-10 text-center">
                <p className="text-4xl font-black text-brand-red mb-1">{cs.amount}</p>
                <p className="text-xs text-blue-200 leading-snug mb-4">{cs.programme}</p>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-white">{cs.business}</p>
                  <p className="text-xs text-blue-200">{cs.location}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="inline-block bg-blue-800 text-blue-100 text-xs px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold bg-brand-light border border-gray-200 text-brand-navy px-2.5 py-1 rounded">
                      {cs.stage}
                    </span>
                    <span className="text-xs font-semibold bg-brand-red text-white px-2.5 py-1 rounded">
                      {cs.service}
                    </span>
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed text-base italic mb-6 border-l-4 border-brand-red pl-4">
                    &ldquo;{cs.quote}&rdquo;
                  </blockquote>
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-navy">{cs.name}</p>
                  <p className="text-xs text-gray-500">{cs.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-white py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-400 text-center leading-relaxed">
            Results vary by business, programme, and project. Canada Grants and Loans does not
            guarantee grant approval or investment outcomes. Client names are representative; specific
            identifying details may be paraphrased for privacy.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-red py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-red-100 mb-8 leading-relaxed">
            Call us today. Your free intake call takes 20 minutes and costs you nothing. We&apos;ll
            tell you exactly what your business qualifies for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:3653864272"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-red font-semibold px-6 py-3 rounded hover:bg-red-50 transition-colors"
            >
              <PhoneIcon />
              Call 365-386-4272
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-brand-red transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
