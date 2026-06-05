import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Professional Business Plans Canada",
  description:
    "Lender-ready business plans for bank loans, investors, and immigration. Written by Canadian funding experts.",
  alternates: { canonical: "https://canadagrantsandloans.com/services/business-plans" },
  openGraph: {
    title: "Professional Business Plans Canada | Canada Grants and Loans",
    description:
      "Lender-ready business plans for bank loans, investors, and immigration. Written by Canadian funding experts.",
    url: "https://canadagrantsandloans.com/services/business-plans",
  },
};

const included = [
  "Executive Summary",
  "Company Overview & Mission",
  "Market Analysis & Competitive Landscape",
  "Products & Services Description",
  "Marketing & Sales Strategy",
  "Operational Plan",
  "Management Team Profile",
  "Financial Projections (3–5 years)",
  "Cash Flow Statements",
  "Risk Analysis & Mitigation",
];

const audiences = [
  {
    icon: <BankIcon />,
    title: "Bank & Lender Applications",
    description:
      "BDC, chartered banks, credit unions, and alternative lenders all require a business plan that demonstrates repayment capacity, market viability, and operational readiness. We write to their exact standards.",
  },
  {
    icon: <InvestorIcon />,
    title: "Investor & Startup Funding",
    description:
      "Angel investors and venture capital firms need to see a compelling story backed by solid financials. Our plans combine narrative strength with rigorous financial modelling.",
  },
  {
    icon: <ImmigrationIcon />,
    title: "Immigration Business Plans",
    description:
      "LMIA applications, the Start-Up Visa Programme, and Provincial Nominee streams each have specific documentation requirements. We write plans that satisfy IRCC and provincial immigration authorities.",
  },
  {
    icon: <StrategyIcon />,
    title: "Internal Strategy & Growth Planning",
    description:
      "A business plan isn't just for external audiences. We help established businesses document their strategy, identify new markets, and map a funded path to their next stage of growth.",
  },
];

export default function BusinessPlansPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-red mb-3">
              Services / Business Plans
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-5">
              Professional Business Plans That Get Approved
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Whether you&apos;re applying for a bank loan, securing investment, or fulfilling an
              immigration requirement, we write business plans that meet lender and government
              standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:3653864272"
                className="inline-flex items-center justify-center gap-2 bg-brand-red text-white font-semibold px-6 py-3 rounded hover:bg-red-700 transition-colors"
              >
                <PhoneIcon />
                Call 365-386-4272
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
              What&apos;s Included in Every Business Plan
            </h2>
            <p className="text-gray-500 text-center mb-10">
              Every plan we write covers all the sections lenders, investors, and government
              agencies expect.
            </p>
            <div className="bg-white rounded border border-gray-200 divide-y divide-gray-100">
              {included.map((item, i) => (
                <div key={item} className="flex items-center gap-4 px-6 py-4">
                  <span className="w-7 h-7 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium text-brand-dark">{item}</span>
                  <CheckIcon className="ml-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-brand-navy mb-2 text-center">
            Who It&apos;s For
          </h2>
          <p className="text-gray-500 text-center mb-10">
            We write business plans for every stage and every purpose.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {audiences.map((a) => (
              <div key={a.title} className="bg-brand-light rounded p-6 border border-gray-200">
                <div className="text-brand-navy mb-3">{a.icon}</div>
                <h3 className="font-bold text-brand-navy mb-2">{a.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Excerpt */}
      <section className="bg-brand-light py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-brand-navy mb-2 text-center">
            Sample Executive Summary
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Here is an example of the quality and format our business plans deliver.
          </p>

          <div className="relative bg-white border-2 border-brand-navy rounded overflow-hidden shadow-sm">
            {/* SAMPLE watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <span
                className="text-gray-200 font-black text-7xl lg:text-8xl tracking-widest rotate-[-30deg]"
                style={{ opacity: 0.35 }}
              >
                SAMPLE
              </span>
            </div>

            {/* Header bar */}
            <div className="bg-brand-navy px-6 py-3 flex items-center justify-between">
              <span className="text-white text-sm font-semibold tracking-wide">
                BUSINESS PLAN — EXECUTIVE SUMMARY
              </span>
              <span className="text-blue-200 text-xs">Prepared by Canada Grants and Loans</span>
            </div>

            <div className="px-8 py-7 font-mono text-sm text-brand-dark space-y-4 leading-relaxed">
              <div>
                <p className="font-bold text-brand-navy mb-1">1.0 EXECUTIVE SUMMARY</p>
                <p className="mb-3">
                  Maple Ridge Manufacturing Inc. (&ldquo;the Company&rdquo;) is a federally
                  incorporated Canadian corporation established in 2021, headquartered in Hamilton,
                  Ontario. The Company designs and manufactures precision-engineered components for
                  the automotive and clean energy sectors, with operations serving clients across
                  Ontario, Quebec, and Alberta.
                </p>
                <p className="mb-3">
                  The Company is seeking <strong>$750,000</strong> in term financing to fund the
                  acquisition of two CNC machining units, the expansion of its 8,000 sq. ft.
                  facility to 14,500 sq. ft., and the hiring of six additional full-time skilled
                  trades positions. The financing will be applied as follows:
                </p>
                <ul className="list-none pl-4 space-y-1 mb-3">
                  <li>— Capital Equipment (CNC Units): $480,000</li>
                  <li>— Facility Expansion (leasehold improvements): $195,000</li>
                  <li>— Working Capital Reserve: $75,000</li>
                </ul>
                <p className="mb-3">
                  Revenue for the fiscal year ended December 31, 2025 was <strong>$2.1M</strong>,
                  representing year-over-year growth of 34%. Current contracted backlog stands at
                  $890,000 across three anchor clients. Pro forma projections indicate revenue of
                  $3.4M in Year 1 post-expansion, growing to $5.8M by Year 3, with EBITDA margins
                  improving from 14% to 21% as fixed costs are absorbed across higher output
                  volumes.
                </p>
                <p className="text-gray-400 italic text-xs">
                  [Continues: Company Overview, Market Analysis, Financial Projections...]
                </p>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            Sample only. All figures and company details are illustrative.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-brand-navy mb-2 text-center">
            Pricing
          </h2>
          <p className="text-gray-500 text-center mb-10">
            One all-inclusive package. No hidden fees.
          </p>

          <div className="bg-brand-light border-2 border-brand-navy rounded-lg overflow-hidden shadow-sm">
            <div className="bg-brand-navy px-8 py-5 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">Comprehensive Package</h3>
                <p className="text-blue-200 text-sm mt-0.5">
                  Business Plan + Pitch Deck — everything in one
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
                  "Comprehensive business plan (full sections, professional format)",
                  "20+ slide pitch deck with custom design and financial slides",
                  "Financial projections (3-year) with cash flow statements",
                  "Investor-ready format meeting lender & government standards",
                  "Executive summary, market analysis, risk analysis",
                  "Unlimited revisions until you are satisfied",
                  "Priority turnaround",
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
            Ready to Get Your Business Plan Written?
          </h2>
          <p className="text-blue-200 mb-8 leading-relaxed">
            Call us to discuss your requirements and we&apos;ll get started right away.
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
    </>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`h-4 w-4 text-brand-red flex-shrink-0 mt-0.5 ${className}`} viewBox="0 0 20 20" fill="currentColor">
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

function BankIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="22" x2="21" y2="22" />
      <line x1="6" y1="18" x2="6" y2="11" />
      <line x1="10" y1="18" x2="10" y2="11" />
      <line x1="14" y1="18" x2="14" y2="11" />
      <line x1="18" y1="18" x2="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </svg>
  );
}

function InvestorIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  );
}

function ImmigrationIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function StrategyIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}
