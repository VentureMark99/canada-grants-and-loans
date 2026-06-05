import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "One all-inclusive price of $2,500 for business plans, pitch decks, and grant applications. No hidden fees. Serving all of Canada.",
  alternates: { canonical: "https://canadagrantsandloans.com/pricing" },
  openGraph: {
    title: "Pricing | Canada Grants and Loans",
    description:
      "One all-inclusive price of $2,500 for business plans, pitch decks, and grant applications. No hidden fees. Serving all of Canada.",
    url: "https://canadagrantsandloans.com/pricing",
  },
};

const businessPlanIncludes = [
  "Comprehensive business plan (full length, no page limit)",
  "Executive Summary",
  "Market Analysis & Competitive Landscape",
  "Products & Services Description",
  "Marketing & Sales Strategy",
  "Operational Plan",
  "Management Team Profile",
  "Full 5-year Financial Projections",
  "Cash Flow Statements",
  "Risk Analysis & Mitigation",
  "Investor-ready format",
  "20+ slide pitch deck with custom design and financial slides",
  "Unlimited revisions",
  "Priority turnaround",
  "Delivered in PDF and editable formats",
];

const grantIncludes = [
  "Complete grant search — federal, provincial, municipal, and private programmes",
  "Eligibility assessment for your business and project",
  "Full application written to the programme's criteria",
  "Application submitted on your behalf",
  "Follow-up with the administering agency",
  "Support through any additional documentation requests",
  "Unlimited revisions before submission",
  "Delivered with a summary of all programmes searched",
];

const faqs = [
  {
    q: "Is the pitch deck really included with the business plan at no extra cost?",
    a: "Yes, absolutely. The $2,500 Comprehensive Package covers both your full business plan and a 20+ slide pitch deck with custom design and financial slides. There is no separate fee for the pitch deck — it is included as part of one all-inclusive package.",
  },
  {
    q: "Are there any additional fees after I pay the $2,500?",
    a: "No. Our $2,500 fee is all-inclusive. It covers research, writing, design, revisions, and delivery. There are no hourly charges, revision fees, or surcharges for rush delivery requests (subject to availability). What you see is what you pay.",
  },
  {
    q: "What if I need both a business plan AND a grant application?",
    a: "If you need both services, each is priced at $2,500. Many clients start with a business plan and then move on to grant applications once their plan is in hand — since a strong business plan is often a required attachment for grant submissions. Call us and we'll walk you through the best approach for your situation.",
  },
  {
    q: "Do you offer refunds?",
    a: "Our fee covers the professional service we deliver — research, writing, and submission. Once work has commenced, fees are not refundable, as significant time and expertise are invested from day one. We stand behind the quality of our work and offer unlimited revisions to ensure you are satisfied with every deliverable.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Please call us at 365-386-4272 to discuss payment options. We work with clients to find arrangements that fit their situation.",
  },
  {
    q: "Can I upgrade my package after starting?",
    a: "Yes. If you begin with a grant application and later decide you also need a business plan, or vice versa, simply call us and we will set that up as a separate engagement at the same flat rate.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
            Straightforward Pricing. One Package. Everything Included.
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No tiers, no confusion, no hidden fees. One all-inclusive price for each service. Not
            sure which service you need?{" "}
            <a href="tel:3653864272" className="text-brand-red font-semibold hover:underline">
              Call us and we&apos;ll help.
            </a>
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-brand-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Business Plan + Pitch Deck */}
            <div className="bg-white rounded-lg border-2 border-brand-navy shadow-sm overflow-hidden flex flex-col">
              <div className="bg-brand-navy px-8 py-6">
                <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-1">
                  Most Popular
                </p>
                <h2 className="text-2xl font-bold text-white mb-1">
                  Business Plan + Pitch Deck
                </h2>
                <p className="text-blue-200 text-sm">One package. Both deliverables included.</p>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-4xl font-black text-white">$2,500</span>
                  <span className="text-blue-200 text-sm mb-1">all-inclusive</span>
                </div>
              </div>

              <div className="px-8 py-6 flex-1 flex flex-col">
                <ul className="space-y-3 flex-1">
                  {businessPlanIncludes.map((item) => {
                    const isHighlight = item.startsWith("20+");
                    return (
                      <li key={item} className={`flex items-start gap-3 text-sm ${isHighlight ? "font-semibold text-brand-navy" : "text-brand-dark"}`}>
                        <CheckIcon highlight={isHighlight} />
                        <span>
                          {isHighlight ? (
                            <><span className="text-brand-red">INCLUDED: </span>{item}</>
                          ) : item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-8 space-y-3">
                  <a
                    href="tel:3653864272"
                    className="flex items-center justify-center gap-2 bg-brand-red text-white font-semibold px-6 py-3 rounded hover:bg-red-700 transition-colors w-full"
                  >
                    <PhoneIcon />
                    Call to Get Started
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center border-2 border-brand-navy text-brand-navy font-semibold px-6 py-3 rounded hover:bg-brand-navy hover:text-white transition-colors w-full"
                  >
                    Send a Message
                  </Link>
                </div>
              </div>
            </div>

            {/* Grant Application */}
            <div className="bg-white rounded-lg border-2 border-gray-200 shadow-sm overflow-hidden flex flex-col">
              <div className="bg-brand-navy px-8 py-6">
                <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-1">
                  Full Service
                </p>
                <h2 className="text-2xl font-bold text-white mb-1">Grant Application</h2>
                <p className="text-blue-200 text-sm">
                  Full-service. We find it, write it, and submit it.
                </p>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-4xl font-black text-white">$2,500</span>
                  <span className="text-blue-200 text-sm mb-1">per application</span>
                </div>
              </div>

              <div className="px-8 py-6 flex-1 flex flex-col">
                <ul className="space-y-3 flex-1">
                  {grantIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-brand-dark">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded p-4">
                  <p className="text-xs text-yellow-800 leading-relaxed">
                    <strong>Note:</strong> Each $2,500 fee covers one grant application. If multiple
                    grants are identified and you wish to apply to several, each application is
                    priced separately.
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <a
                    href="tel:3653864272"
                    className="flex items-center justify-center gap-2 bg-brand-red text-white font-semibold px-6 py-3 rounded hover:bg-red-700 transition-colors w-full"
                  >
                    <PhoneIcon />
                    Call to Get Started
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center border-2 border-brand-navy text-brand-navy font-semibold px-6 py-3 rounded hover:bg-brand-navy hover:text-white transition-colors w-full"
                  >
                    Send a Message
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Not sure CTA block */}
      <section className="bg-brand-navy py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-blue-200 leading-relaxed mb-8">
            Every business is different. Call{" "}
            <a href="tel:3653864272" className="text-white font-bold hover:underline">
              365-386-4272
            </a>{" "}
            and we&apos;ll tell you exactly which service fits your situation — at no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:3653864272"
              className="inline-flex items-center justify-center gap-2 bg-brand-red text-white font-semibold px-6 py-3 rounded hover:bg-red-700 transition-colors"
            >
              <PhoneIcon />
              Call 365-386-4272
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

      {/* Pricing FAQ */}
      <section className="bg-brand-light py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-brand-navy mb-2 text-center">
            Pricing Questions
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Common questions about our fees and what&apos;s included.
          </p>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}

function CheckIcon({ highlight = false }: { highlight?: boolean }) {
  return (
    <svg
      className={`h-4 w-4 flex-shrink-0 mt-0.5 ${highlight ? "text-brand-navy" : "text-brand-red"}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
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
