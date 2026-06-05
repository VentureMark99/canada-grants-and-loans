import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "One package. One price. $2,500 covers your business plan, pitch deck, and 10 grant applications — written and submitted on your behalf. No hidden fees.",
  alternates: { canonical: "https://canadagrantsandloans.com/pricing" },
  openGraph: {
    title: "Pricing | Canada Grants and Loans",
    description:
      "One package. One price. $2,500 covers your business plan, pitch deck, and 10 grant applications — written and submitted on your behalf. No hidden fees.",
    url: "https://canadagrantsandloans.com/pricing",
  },
};

const packageIncludes = [
  {
    category: "Business Plan",
    items: [
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
      "Investor-ready and lender-ready format",
      "Delivered in PDF and editable formats",
    ],
  },
  {
    category: "Pitch Deck",
    items: [
      "20+ slide pitch deck with custom design",
      "Problem, Solution & Market Opportunity slides",
      "Business Model & Revenue Strategy",
      "Financial Summary & Projections slides",
      "Team & Advisors slide",
      "The Ask — funding amount and use of funds",
      "Delivered in PDF and editable formats",
    ],
  },
  {
    category: "Grant Applications",
    items: [
      "10 grant applications — written and submitted on your behalf",
      "Complete grant search: federal, provincial, municipal, and private programmes",
      "Eligibility assessment for each programme",
      "Every application written to the programme's specific criteria",
      "All applications submitted on your behalf",
      "Follow-up with administering agencies",
      "Support through any additional documentation requests",
      "Summary report of all programmes searched",
    ],
  },
];

const alwaysIncluded = [
  "Unlimited revisions on all deliverables",
  "Priority turnaround",
  "Dedicated point of contact throughout",
  "No hourly charges",
  "No hidden fees",
  "No success fees",
];

const faqs = [
  {
    q: "Does the $2,500 really cover everything — the business plan, pitch deck, AND 10 grant applications?",
    a: "Yes. One flat fee of $2,500 covers all three: your comprehensive business plan, your professionally designed pitch deck, and 10 full grant applications written and submitted on your behalf. There are no add-ons, no tiers, and no extra charges at any point.",
  },
  {
    q: "Are there any additional fees after I pay the $2,500?",
    a: "No. The $2,500 fee is fully all-inclusive. It covers research, writing, design, revisions, submission, and follow-up. There are no hourly charges, revision fees, or surcharges of any kind. What you see is what you pay.",
  },
  {
    q: "What counts as one of the 10 grant applications?",
    a: "Each separate grant programme we write and submit an application to counts as one application. We identify the 10 best-fit programmes for your business and project, write a tailored application for each one, and submit them all on your behalf.",
  },
  {
    q: "What if fewer than 10 grant programmes are available for my business?",
    a: "We search hundreds of federal, provincial, municipal, and private programmes. In cases where fewer than 10 are a strong fit, we will not pad your applications with poor matches — we will apply to every programme you genuinely qualify for and explain our assessment in detail.",
  },
  {
    q: "Do you offer refunds?",
    a: "Our fee covers the professional services we deliver — research, writing, design, and submission. Once work has commenced, fees are not refundable, as significant time and expertise are invested from day one. We stand behind the quality of our work and offer unlimited revisions to ensure you are satisfied with every deliverable.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Please call us at 365-386-4272 to discuss payment options. We work with clients to find arrangements that fit their situation.",
  },
  {
    q: "How long does it take to complete everything?",
    a: "Business plans are typically delivered within 7–10 business days. Pitch decks within 5–7 business days. Grant applications are submitted on a rolling basis as they are completed — most within 10–15 business days. The full package is typically complete within 3–4 weeks from your intake call.",
  },
  {
    q: "Do you guarantee grant approval?",
    a: "No. Grant approval is determined solely by the government or organisation administering the programme. We guarantee professionally written, fully compliant applications — but approval decisions are made by third parties and depend on programme criteria, budget availability, and competition from other applicants.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
            One Package. Everything Included.
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No tiers. No add-ons. No confusion. One flat fee covers your business plan, pitch deck,
            and 10 grant applications — written and submitted on your behalf.
          </p>
        </div>
      </section>

      {/* Pricing card */}
      <section className="bg-brand-light py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border-2 border-brand-navy shadow-lg overflow-hidden">

            {/* Card header */}
            <div className="bg-brand-navy px-8 py-10 text-center">
              <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-3">
                The Complete Package
              </p>
              <div className="flex items-end justify-center gap-2 mb-3">
                <span className="text-6xl lg:text-7xl font-black text-white">$2,500</span>
                <span className="text-blue-200 text-base mb-3">all-inclusive</span>
              </div>
              <p className="text-blue-100 text-sm max-w-lg mx-auto leading-relaxed">
                Business Plan + Pitch Deck + 10 Grant Applications.
                Everything written and submitted for one flat fee.
              </p>
            </div>

            {/* Checklist body */}
            <div className="px-8 py-10">
              <div className="grid lg:grid-cols-3 gap-8 mb-10">
                {packageIncludes.map((section) => (
                  <div key={section.category}>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
                      <h3 className="text-sm font-bold text-brand-navy uppercase tracking-wide">
                        {section.category}
                      </h3>
                    </div>
                    <ul className="space-y-2.5">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-brand-dark">
                          <CheckIcon />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Always included strip */}
              <div className="border-t border-gray-100 pt-8 mb-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-navy mb-4 text-center">
                  Always Included
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {alwaysIncluded.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-brand-dark">
                      <CheckIcon highlight />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <a
                  href="tel:3653864272"
                  className="flex items-center justify-center gap-2 bg-brand-red text-white font-semibold px-6 py-3.5 rounded hover:bg-red-700 transition-colors flex-1 text-base"
                >
                  <PhoneIcon />
                  Call to Get Started
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center border-2 border-brand-navy text-brand-navy font-semibold px-6 py-3.5 rounded hover:bg-brand-navy hover:text-white transition-colors flex-1 text-base"
                >
                  Send a Message
                </Link>
              </div>
            </div>
          </div>

          {/* Reassurance note */}
          <p className="text-center text-xs text-gray-400 mt-6 leading-relaxed">
            Not sure if this is right for you? Call us at{" "}
            <a href="tel:3653864272" className="font-semibold text-brand-navy hover:underline">
              365-386-4272
            </a>{" "}
            — free consultation, no obligation.
          </p>
        </div>
      </section>

      {/* Not sure CTA */}
      <section className="bg-brand-navy py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-blue-200 leading-relaxed mb-8">
            Call{" "}
            <a href="tel:3653864272" className="text-white font-bold hover:underline">
              365-386-4272
            </a>{" "}
            and we&apos;ll walk you through exactly what the package covers for your specific
            business — at no obligation.
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
            Common questions about what&apos;s included and how it works.
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
