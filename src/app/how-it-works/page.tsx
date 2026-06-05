import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Our simple 5-step process: intake call, research, writing, your review, and submission. No jargon, no surprises.",
  alternates: { canonical: "https://canadagrantsandloans.com/how-it-works" },
  openGraph: {
    title: "How It Works | Canada Grants and Loans",
    description:
      "Our simple 5-step process: intake call, research, writing, your review, and submission. No jargon, no surprises.",
    url: "https://canadagrantsandloans.com/how-it-works",
  },
};

const steps = [
  {
    n: "01",
    title: "Free Intake Call",
    timeline: "Same day or next business day",
    body: "We start with a no-obligation call to understand your business, your goals, and what type of funding you're seeking. No jargon, no pressure — just a straightforward conversation about where you are and where you want to go.",
    icon: <PhoneStepIcon />,
  },
  {
    n: "02",
    title: "Research & Discovery",
    timeline: "2–5 business days",
    body: "We research your industry, your province, and your specific project to identify every grant, loan, and funding programme available to you. For business plans and pitch decks, we gather everything we need to represent your business accurately and compellingly.",
    icon: <SearchStepIcon />,
  },
  {
    n: "03",
    title: "Writing & Development",
    timeline: "5–10 business days depending on service",
    body: "Our team writes your business plan, pitch deck, or grant application — built to the standards of the funding body you're applying to. We write to impress lenders, investors, and grant adjudicators. Every document is original, tailored, and professionally formatted.",
    icon: <WriteStepIcon />,
  },
  {
    n: "04",
    title: "Your Review",
    timeline: "1–3 business days for revisions",
    body: "We send you the completed document for review. You request any changes — structural, factual, or stylistic — and we revise until you're fully satisfied. Unlimited revisions are included in every package.",
    icon: <ReviewStepIcon />,
  },
  {
    n: "05",
    title: "Submission & Follow-Up",
    timeline: "Submission same day as your approval",
    body: "For grant applications, we submit directly and follow up with the administering agency on your behalf. For business plans and pitch decks, we deliver the final files in both PDF and editable formats, ready to present to any lender or investor.",
    icon: <SubmitStepIcon />,
  },
];

const faqs = [
  {
    q: "How much does it cost?",
    a: "All our services are offered at one clear, all-inclusive price of $2,500. This covers your comprehensive business plan, pitch deck, or grant application — with no hidden fees, no hourly charges, and no surprises. Call us for details on exactly what's included for your specific situation.",
  },
  {
    q: "How long does it take?",
    a: "Most business plans are delivered within 7–10 business days from the time we have all required information. Pitch decks are typically completed within 5–7 business days. Grant application timelines vary depending on the programme — some require more supporting documentation than others. Rush delivery is available.",
  },
  {
    q: "Do you guarantee grant approval?",
    a: "No. Grant approval is determined solely by the government agency or organisation administering the programme. We guarantee a professionally written, fully compliant application — but approval decisions are made by third parties and depend on programme criteria, budget availability, and competition from other applicants.",
  },
  {
    q: "What types of grants do you find?",
    a: "We search federal, provincial, municipal, and private grant programmes across all of Canada. This includes programmes administered by ISED, NRC IRAP, ACOA, FedDev Ontario, WD, PacifiCan, provincial ministries, municipal economic development offices, industry associations, and private foundations.",
  },
  {
    q: "Do I have to pay if my grant application is rejected?",
    a: "Our fee covers the research, writing, and submission of your application — not the grant outcome. Like any professional service, our fees are charged for the work we perform, regardless of the third-party decision. We do everything in our power to give your application the best possible chance of success.",
  },
  {
    q: "Can you write a business plan for immigration purposes?",
    a: "Yes. We write business plans specifically for immigration purposes, including LMIA applications, the Start-Up Visa Programme, and Provincial Nominee Programme business streams. These plans are formatted to meet IRCC and provincial immigration authority requirements.",
  },
  {
    q: "Can you help an existing business, not just startups?",
    a: "Absolutely. We work with businesses at every stage — from idea to established enterprise. Our grant database includes hundreds of programmes specifically for existing businesses looking to expand operations, upgrade equipment, hire new staff, adopt technology, or transition to greener practices.",
  },
  {
    q: "What information do I need to provide?",
    a: "We'll walk you through our intake questionnaire on your first call. Generally, we need your business details (legal name, structure, location, industry), a description of your project or goals, basic financial information (revenue, employees, years in business), and your intended use of funds.",
  },
  {
    q: "Do you serve all provinces and territories?",
    a: "Yes. We work with clients across all 10 provinces and 3 territories. Our grant research covers federal programmes available nationwide as well as provincial and municipal programmes specific to your region.",
  },
  {
    q: "How do I get started?",
    a: "Call us at 365-386-4272 or fill out our contact form at /contact. We'll get back to you within one business day — usually the same day — to schedule your free intake call.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
            How Canada Grants and Loans Works
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple, transparent process — from your first call to funding in hand.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-brand-light py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className={`bg-white rounded border border-gray-200 shadow-sm overflow-hidden flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Coloured accent panel */}
              <div className="bg-brand-navy lg:w-56 flex-shrink-0 flex flex-col items-center justify-center py-8 px-6 text-center">
                <div className="text-white mb-3">{step.icon}</div>
                <p className="text-4xl font-black text-white">{step.n}</p>
              </div>

              {/* Content */}
              <div className="flex-1 p-8">
                <h2 className="text-xl font-bold text-brand-navy mb-3">{step.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{step.body}</p>
                <div className="inline-flex items-center gap-2 bg-brand-light border border-gray-200 rounded px-4 py-2 text-xs font-semibold text-brand-navy">
                  <ClockIcon />
                  Timeline: {step.timeline}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline summary bar */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-brand-navy mb-2 text-center">
            Estimated Timeline at a Glance
          </h2>
          <p className="text-gray-500 text-center mb-10 text-sm">
            From first call to final delivery — most projects complete in 2–3 weeks.
          </p>

          {/* Desktop timeline */}
          <div className="hidden lg:block">
            <div className="flex items-start">
              {[
                { n: "01", label: "Free Call", days: "Day 1" },
                { n: "02", label: "Research", days: "Days 2–6" },
                { n: "03", label: "Writing", days: "Days 7–16" },
                { n: "04", label: "Your Review", days: "Days 17–19" },
                { n: "05", label: "Submission", days: "Day 20" },
              ].map((t, i, arr) => (
                <div key={t.n} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-sm mb-2">
                      {t.n}
                    </div>
                    <p className="text-xs font-semibold text-brand-navy text-center">{t.label}</p>
                    <p className="text-xs text-gray-400 text-center mt-0.5">{t.days}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="h-0.5 bg-brand-navy flex-1 mx-1 mb-6" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="lg:hidden space-y-3">
            {[
              { n: "01", label: "Free Call", days: "Day 1" },
              { n: "02", label: "Research & Discovery", days: "Days 2–6" },
              { n: "03", label: "Writing & Development", days: "Days 7–16" },
              { n: "04", label: "Your Review", days: "Days 17–19" },
              { n: "05", label: "Submission & Follow-Up", days: "Day 20" },
            ].map((t) => (
              <div key={t.n} className="flex items-center gap-4 bg-brand-light rounded px-4 py-3">
                <div className="w-9 h-9 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {t.n}
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-navy">{t.label}</p>
                  <p className="text-xs text-gray-400">{t.days}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-light py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-brand-navy mb-2 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Everything you need to know before getting started.
          </p>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-blue-200 mb-8 leading-relaxed">
            Call us today and we&apos;ll book your free intake call — no obligation, no pressure.
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
              Fill Out Our Contact Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Icons ─────────────────────────────────────────────────────── */

function PhoneStepIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function SearchStepIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function WriteStepIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

function ReviewStepIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function SubmitStepIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
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
