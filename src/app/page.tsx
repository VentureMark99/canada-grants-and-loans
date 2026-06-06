import type { Metadata } from "next";
import Link from "next/link";
import GrantLookup from "@/components/GrantLookup";

export const metadata: Metadata = {
  title: "Canada Grants and Loans | Business Plans, Pitch Decks & Grant Applications",
  description:
    "We find the money, write the plan, and submit the application. Serving Canadian entrepreneurs and businesses across all provinces.",
  alternates: { canonical: "https://canadagrantsandloans.com" },
  openGraph: {
    title: "Canada Grants and Loans | Business Plans, Pitch Decks & Grant Applications",
    description:
      "We find the money, write the plan, and submit the application. Serving Canadian entrepreneurs and businesses across all provinces.",
    url: "https://canadagrantsandloans.com",
  },
};

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────── */}
      <section className="bg-white pt-16 pb-12 lg:pt-24 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Copy */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-6">
                Get the Funding Your Business Deserves
              </h1>
              <p className="text-lg text-brand-dark leading-relaxed mb-8 max-w-xl">
                Canada Grants and Loans writes your business plan, builds your pitch deck, finds
                your grants, and submits your applications — so you can focus on running your
                business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:18554726875"
                  className="inline-flex items-center justify-center gap-2 bg-brand-red text-white font-semibold px-6 py-3.5 rounded hover:bg-red-700 transition-colors text-base"
                >
                  <PhoneIcon />
                  Call Us Now — 1-855-GRANTS-5
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center border-2 border-brand-navy text-brand-navy font-semibold px-6 py-3.5 rounded hover:bg-brand-navy hover:text-white transition-colors text-base"
                >
                  See Our Services
                </Link>
              </div>
            </div>

            {/* SVG Graphic */}
            <div className="flex justify-center lg:justify-end">
              <HeroGraphic />
            </div>
          </div>

          {/* Trust bar */}
          <div className="mt-14 pt-8 border-t border-gray-100">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-brand-navy">
              {[
                "Serving All Canadian Provinces",
                "Federal, Provincial, Municipal & Private Grants",
                "Business Plans",
                "Pitch Decks",
                "Grant Applications",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. SERVICES OVERVIEW ─────────────────────────────────── */}
      <section className="bg-brand-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
              Everything You Need to Get Funded
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<BusinessPlanIcon />}
              title="Business Plans"
              description="We write investor-ready business plans that clearly communicate your vision, market opportunity, and financial projections to lenders and grant adjudicators."
              href="/services/business-plans"
            />
            <ServiceCard
              icon={<PitchDeckIcon />}
              title="Pitch Decks"
              description="Our pitch decks are built to win — compelling narratives, clean design, and data-driven slides that move investors and grant committees to say yes."
              href="/services/pitch-decks"
            />
            <ServiceCard
              icon={<GrantIcon />}
              title="Grant Applications"
              description="We research hundreds of federal, provincial, municipal, and private grant programmes and write and submit complete applications on your behalf."
              href="/services/grant-applications"
            />
          </div>
        </div>
      </section>

      {/* ── 3. HOW IT WORKS (mini) ───────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
              Simple Process. Real Results.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Free Consultation",
                desc: "Tell us about your business and goals. We assess your funding profile at no cost.",
              },
              {
                step: "02",
                title: "We Research & Write",
                desc: "Our team identifies the best grants and programmes, then writes every word of your application.",
              },
              {
                step: "03",
                title: "You Review & Approve",
                desc: "We walk you through every document before anything is submitted — you stay in control.",
              },
              {
                step: "04",
                title: "We Submit & Follow Up",
                desc: "We handle all submissions and follow-ups with grant agencies on your behalf.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-brand-navy text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {step}
                </div>
                <h3 className="text-base font-bold text-brand-navy mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/how-it-works"
              className="text-brand-blue font-semibold hover:text-brand-navy transition-colors"
            >
              See the full process →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. GRANT SPOTLIGHT ───────────────────────────────────── */}
      <section className="bg-brand-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
              Grant Spotlight — June 2026
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded border-l-4 border-brand-red shadow-sm p-8">
              <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-red mb-1">
                    Featured Grant
                  </p>
                  <h3 className="text-xl font-bold text-brand-navy">
                    Canada Digital Adoption Program (CDAP)
                  </h3>
                </div>
                <div className="bg-brand-light rounded px-4 py-2 text-center flex-shrink-0">
                  <p className="text-xs text-gray-500 mb-0.5">Up To</p>
                  <p className="text-2xl font-bold text-brand-navy">$15,000</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                <span className="font-semibold text-brand-dark">Who qualifies:</span> Small
                businesses adopting digital tools — including e-commerce, point-of-sale, inventory
                management, and cybersecurity solutions.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-brand-red text-white font-semibold px-6 py-3 rounded hover:bg-red-700 transition-colors text-sm"
              >
                Find Out If You Qualify
              </Link>
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">
              We search hundreds of federal, provincial, municipal, and private grants to find the
              best fit for your business.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. GRANT FUNDING RANGES ──────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
              How Much Could Your Business Qualify For?
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Browse estimated grant funding ranges by business type. Amounts reflect combined
              federal, provincial, municipal, and private programmes available as of June 2026.
            </p>
          </div>
          <GrantLookup />
        </div>
      </section>

      {/* ── 6. FINAL CTA ─────────────────────────────────────────── */}
      <section className="bg-brand-red py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5">
            Ready to Find Out What Your Business Qualifies For?
          </h2>
          <p className="text-red-100 text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Call us today or fill out our quick intake form. We&apos;ll review your file and let you
            know exactly which grants and funding programmes are available for your business — at no
            obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:18554726875"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-red font-bold px-7 py-3.5 rounded hover:bg-gray-100 transition-colors text-base"
            >
              <PhoneIconRed />
              Call 1-855-GRANTS-5
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-7 py-3.5 rounded hover:bg-white hover:text-brand-red transition-colors text-base"
            >
              Start Your Application
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Sub-components ─────────────────────────────────────────────── */

function ServiceCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="bg-white rounded shadow-sm border-t-4 border-brand-navy p-8 flex flex-col">
      <div className="text-brand-navy mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-brand-navy mb-3">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-6">{description}</p>
      <Link
        href={href}
        className="text-sm font-semibold text-brand-red hover:text-red-700 transition-colors"
      >
        Learn More →
      </Link>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="h-5 w-5 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function PhoneIconRed() {
  return (
    <svg
      className="h-5 w-5 flex-shrink-0 text-brand-red"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function BusinessPlanIcon() {
  return (
    <svg
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
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
    <svg
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <polyline points="7 10 10 7 13 10 17 6" />
    </svg>
  );
}

function GrantIcon() {
  return (
    <svg
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v2M12 16v2M9.5 9.5a2.5 2.5 0 015 0c0 1.5-2.5 2-2.5 4" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function HeroGraphic() {
  return (
    <svg
      width="420"
      height="300"
      viewBox="0 0 420 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-sm lg:max-w-md"
      aria-hidden="true"
    >
      {/* Background card */}
      <rect x="10" y="10" width="400" height="280" rx="12" fill="#F5F6F8" />

      {/* Grid lines */}
      <line x1="50" y1="240" x2="380" y2="240" stroke="#E2E8F0" strokeWidth="1" />
      <line x1="50" y1="190" x2="380" y2="190" stroke="#E2E8F0" strokeWidth="1" />
      <line x1="50" y1="140" x2="380" y2="140" stroke="#E2E8F0" strokeWidth="1" />
      <line x1="50" y1="90" x2="380" y2="90" stroke="#E2E8F0" strokeWidth="1" />

      {/* Bars */}
      <rect x="65" y="185" width="44" height="55" rx="3" fill="#2E6DA4" opacity="0.6" />
      <rect x="130" y="155" width="44" height="85" rx="3" fill="#1B3A5C" opacity="0.75" />
      <rect x="195" y="120" width="44" height="120" rx="3" fill="#2E6DA4" />
      <rect x="260" y="75" width="44" height="165" rx="3" fill="#CC1515" />
      <rect x="325" y="95" width="44" height="145" rx="3" fill="#1B3A5C" />

      {/* Trend line */}
      <polyline
        points="87,178 152,148 217,112 282,68 347,88"
        stroke="#CC1515"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="87" cy="178" r="4" fill="#CC1515" />
      <circle cx="152" cy="148" r="4" fill="#CC1515" />
      <circle cx="217" cy="112" r="4" fill="#CC1515" />
      <circle cx="282" cy="68" r="4" fill="#CC1515" />
      <circle cx="347" cy="88" r="4" fill="#CC1515" />

      {/* Label badge */}
      <rect x="248" y="38" width="96" height="24" rx="5" fill="#CC1515" />
      <text
        x="296"
        y="54"
        textAnchor="middle"
        fill="white"
        fontSize="11"
        fontWeight="700"
        fontFamily="Inter, sans-serif"
      >
        UP TO $1M+
      </text>

      {/* X-axis */}
      <line x1="50" y1="240" x2="390" y2="240" stroke="#CBD5E1" strokeWidth="1.5" />

      {/* Axis labels */}
      <text x="87" y="258" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="Inter, sans-serif">Year 1</text>
      <text x="152" y="258" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="Inter, sans-serif">Year 2</text>
      <text x="217" y="258" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="Inter, sans-serif">Year 3</text>
      <text x="282" y="258" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="Inter, sans-serif">Year 4</text>
      <text x="347" y="258" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="Inter, sans-serif">Year 5</text>

      {/* Title */}
      <text x="210" y="35" textAnchor="middle" fill="#1B3A5C" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">
        Funding Growth Potential
      </text>
    </svg>
  );
}
