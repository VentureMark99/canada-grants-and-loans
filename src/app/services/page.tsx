import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Business plans, pitch decks, and full-service grant applications for Canadian startups and existing businesses.",
  alternates: { canonical: "https://canadagrantsandloans.com/services" },
  openGraph: {
    title: "Our Services | Canada Grants and Loans",
    description:
      "Business plans, pitch decks, and full-service grant applications for Canadian startups and existing businesses.",
    url: "https://canadagrantsandloans.com/services",
  },
};

const services = [
  {
    icon: <BusinessPlanIcon />,
    title: "Business Plans",
    href: "/services/business-plans",
    tagline: "For lenders, investors, immigration, and growth",
    description:
      "A professionally written business plan is one of the most powerful documents your business can have. Whether you're applying for a bank loan, attracting investors, meeting an immigration requirement, or mapping out your next phase of growth, we write business plans that meet the standards lenders and government agencies expect.",
    includes: [
      "Executive Summary",
      "Market Analysis & Competitive Landscape",
      "Financial Projections (3–5 years)",
      "Cash Flow Statements",
      "Marketing & Sales Strategy",
      "Operational Plan",
      "Management Team Profile",
      "Risk Analysis & Mitigation",
    ],
  },
  {
    icon: <PitchDeckIcon />,
    title: "Pitch Decks",
    href: "/services/pitch-decks",
    tagline: "For investors, accelerators, and presentations",
    description:
      "Your pitch deck is often the first impression you make on an investor or grant committee. We design and write pitch decks that tell your story clearly, back it up with data, and move decision-makers to act — from the opening slide to the ask.",
    includes: [
      "Problem & Solution Slides",
      "Market Size & Opportunity",
      "Business Model Slide",
      "Traction & Milestones",
      "Competitive Analysis",
      "Financial Summary",
      "Team & Advisors",
      "The Ask (funding amount & use of funds)",
      "Custom design in your brand colours",
    ],
  },
  {
    icon: <GrantIcon />,
    title: "Grant Applications",
    href: "/services/grant-applications",
    tagline: "The full-service find, write, and submit model",
    description:
      "Most Canadian businesses leave thousands of dollars in grant funding untapped — simply because they don't know it exists or don't have time to apply. We search hundreds of federal, provincial, municipal, and private grant programmes, write every word of the application, submit it on your behalf, and follow up with the agency until a decision is reached.",
    includes: [
      "Full grant search across all funding sources",
      "Federal grants (ISED, CDAP, NRC IRAP, ACOA, FedDev, etc.)",
      "Provincial grants (all 10 provinces & 3 territories)",
      "Municipal & regional grants",
      "Private & foundation grants",
      "Complete application writing & submission",
      "Agency follow-up & documentation support",
      "Unlimited revisions",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three ways we help Canadian businesses access the funding they need.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="bg-brand-light py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {services.map((svc) => (
            <div
              key={svc.href}
              className="bg-white rounded border-t-4 border-brand-navy shadow-sm overflow-hidden"
            >
              <div className="p-8 lg:p-10">
                <div className="flex items-start gap-5 mb-5">
                  <div className="text-brand-navy mt-1 flex-shrink-0">{svc.icon}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-brand-navy mb-1">{svc.title}</h2>
                    <p className="text-sm font-semibold text-brand-red uppercase tracking-wide">
                      {svc.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-brand-dark leading-relaxed mb-6">{svc.description}</p>

                <div className="mb-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                    What&apos;s Included
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {svc.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-brand-dark">
                        <CheckIcon />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={svc.href}
                  className="inline-flex items-center gap-2 bg-brand-navy text-white font-semibold px-6 py-3 rounded hover:bg-blue-900 transition-colors text-sm"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Not sure section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-brand-navy mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Many of our clients need a combination of services — a business plan and a grant
            application, or a pitch deck alongside their funding search. Call us and we&apos;ll
            assess your situation and recommend exactly what you need.
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
              className="inline-flex items-center justify-center border-2 border-brand-navy text-brand-navy font-semibold px-6 py-3 rounded hover:bg-brand-navy hover:text-white transition-colors"
            >
              Send Us a Message
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

function BusinessPlanIcon() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function PitchDeckIcon() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <polyline points="7 10 10 7 13 10 17 6" />
    </svg>
  );
}

function GrantIcon() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}
