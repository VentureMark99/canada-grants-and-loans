"use client";

import { useState } from "react";
import Link from "next/link";

const steps = [
  {
    n: "01",
    title: "We Identify Every Grant You Qualify For",
    desc: "We assess your business — industry, stage, location, headcount, and project type — and match you against hundreds of active federal, provincial, municipal, and private grant programmes.",
  },
  {
    n: "02",
    title: "We Write a Compelling Application",
    desc: "Our writers craft a complete, compliant application tailored to each programme's specific criteria, language, and scoring rubric. No generic templates — every application is written from scratch.",
  },
  {
    n: "03",
    title: "We Submit and Follow Up",
    desc: "We handle all submissions directly with the administering agency and proactively follow up to confirm receipt, track status, and address any questions that arise.",
  },
  {
    n: "04",
    title: "We Support You Through the Process",
    desc: "If the agency requests additional documentation, clarification, or a site visit, we're with you at every step — drafting responses and keeping your application on track.",
  },
];

const grantTypes = [
  {
    icon: <FederalIcon />,
    title: "Federal Grants",
    desc: "ISED, CDAP, NRC IRAP, ACOA, FedDev Ontario, WD, PacifiCan, CanNor, and other federal programmes spanning innovation, hiring, export, and digital adoption.",
  },
  {
    icon: <ProvincialIcon />,
    title: "Provincial Grants",
    desc: "Province-specific programmes across all 10 provinces and 3 territories — from Ontario's WSIB and NOHFC to Alberta Innovates, Futurpreneur, and BC's Small Business funding streams.",
  },
  {
    icon: <MunicipalIcon />,
    title: "Municipal & Regional Grants",
    desc: "City economic development funds, BIA programmes, and regional economic development agencies that most businesses overlook entirely.",
  },
  {
    icon: <PrivateIcon />,
    title: "Private & Foundation Grants",
    desc: "Industry associations, corporate foundations, and private grant programmes — including sector-specific awards available to businesses that don't qualify for government funding.",
  },
];

const checklist = [
  "Registered Canadian business (sole proprietorship, partnership, or corporation)",
  "Operating in Canada (any province or territory)",
  "Canadian citizen or permanent resident owner",
  "Project has a clear business purpose (expansion, equipment, hiring, technology, etc.)",
  "Willing to contribute some personal or business funds to the project",
  "Business is in good standing (taxes and filings up to date, if applicable)",
];

function EligibilityWidget() {
  const [checked, setChecked] = useState<boolean[]>(new Array(checklist.length).fill(false));

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  const allChecked = checked.every(Boolean);

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm max-w-2xl mx-auto">
      <div className="bg-brand-navy px-6 py-4">
        <h3 className="text-white font-bold">Do You Qualify? Check These Common Requirements:</h3>
        <p className="text-blue-200 text-sm mt-0.5">
          Tick each box that applies to your business.
        </p>
      </div>
      <div className="divide-y divide-gray-100">
        {checklist.map((item, i) => (
          <label
            key={item}
            className="flex items-start gap-4 px-6 py-4 cursor-pointer hover:bg-brand-light transition-colors"
          >
            <div className="flex-shrink-0 mt-0.5">
              <input
                type="checkbox"
                checked={checked[i]}
                onChange={() => toggle(i)}
                className="w-5 h-5 rounded border-gray-300 text-brand-navy accent-brand-navy cursor-pointer"
              />
            </div>
            <span className={`text-sm leading-relaxed ${checked[i] ? "text-brand-navy font-medium" : "text-gray-600"}`}>
              {item}
            </span>
          </label>
        ))}
      </div>

      {allChecked && (
        <div className="mx-6 mb-6 mt-2 bg-green-50 border border-green-200 rounded-lg px-5 py-4 flex items-start gap-3">
          <svg className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="text-green-800 font-semibold text-sm">
              You likely qualify for multiple grant programmes.
            </p>
            <p className="text-green-700 text-sm mt-0.5">
              Contact us for a free assessment and we&apos;ll identify exactly which grants are available for your business.
            </p>
          </div>
        </div>
      )}

      {!allChecked && (
        <div className="px-6 py-4 bg-brand-light border-t border-gray-100">
          <p className="text-xs text-gray-400">
            {checked.filter(Boolean).length} of {checklist.length} criteria checked
          </p>
        </div>
      )}
    </div>
  );
}

export default function GrantApplicationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-red mb-3">
              Services / Grant Applications
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-5">
              We Find the Grants. We Write the Application. We Submit It.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Most Canadian businesses leave thousands of dollars in grant funding untapped —
              simply because they don&apos;t know it exists or don&apos;t have time to apply. We
              handle the entire process.
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
                Get a Free Grant Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-brand-light py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-brand-navy mb-2 text-center">
            How Our Grant Service Works
          </h2>
          <p className="text-gray-500 text-center mb-12">
            A fully managed process — from discovery to submission to follow-up.
          </p>
          <div className="max-w-3xl mx-auto space-y-6">
            {steps.map((step) => (
              <div
                key={step.n}
                className="bg-white rounded border border-gray-200 flex items-start gap-5 p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center text-base font-bold flex-shrink-0">
                  {step.n}
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grant Types */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-brand-navy mb-2 text-center">
            Grant Types We Cover
          </h2>
          <p className="text-gray-500 text-center mb-10">
            We leave no funding source unchecked.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {grantTypes.map((g) => (
              <div
                key={g.title}
                className="bg-brand-light rounded p-6 border border-gray-200 text-center"
              >
                <div className="text-brand-navy flex justify-center mb-3">{g.icon}</div>
                <h3 className="font-bold text-brand-navy mb-2">{g.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Widget */}
      <section className="bg-brand-light py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-brand-navy mb-2 text-center">
            Check Your Eligibility
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Most Canadian businesses qualify for more funding than they realise.
          </p>
          <EligibilityWidget />
          <p className="text-center mt-6">
            <Link
              href="/contact"
              className="text-sm font-semibold text-brand-blue hover:text-brand-navy transition-colors"
            >
              Not sure about some items? Contact us for a free assessment →
            </Link>
          </p>
        </div>
      </section>

      {/* Stat Block */}
      <section className="bg-brand-navy py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-white mb-1">500+</p>
              <p className="text-blue-200 text-sm">Grant programmes searched</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-1">All</p>
              <p className="text-blue-200 text-sm">13 provinces & territories covered</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-1">June</p>
              <p className="text-blue-200 text-sm">2026 — updated monthly</p>
            </div>
          </div>
          <p className="text-center text-blue-300 text-xs mt-8">
            Hundreds of grant programmes searched across federal, provincial, municipal, and private
            sources — every month, updated for June 2026.
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
            Part of The Complete Package — one flat fee, everything included.
          </p>

          <div className="bg-brand-light border-2 border-brand-navy rounded-lg overflow-hidden shadow-sm">
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
                  "10 grant applications — written and submitted on your behalf",
                  "Full grant search across federal, provincial, municipal, and private programmes",
                  "Business plan and pitch deck included in the same package",
                  "Follow-up with administering agencies until decisions are reached",
                  "Support through any additional documentation requests",
                  "Unlimited revisions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-brand-dark">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded p-4">
            <p className="text-xs text-yellow-800 leading-relaxed">
              <strong>Disclaimer:</strong> Grant approval is determined solely by the administering
              government agency or organisation. Canada Grants and Loans does not guarantee approval
              of any application.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-red py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Ready to Start Your Grant Search?
          </h2>
          <p className="text-red-100 mb-8 leading-relaxed">
            Call us today and we&apos;ll identify every grant your business qualifies for — at no
            obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:3653864272"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-red font-bold px-6 py-3 rounded hover:bg-gray-100 transition-colors"
            >
              <PhoneIconRed />
              Call 365-386-4272
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-6 py-3 rounded hover:bg-white hover:text-brand-red transition-colors"
            >
              Start Your Application
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

function PhoneIconRed() {
  return (
    <svg className="h-4 w-4 text-brand-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function FederalIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function ProvincialIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function MunicipalIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="22" x2="21" y2="22" />
      <rect x="2" y="9" width="4" height="13" />
      <rect x="18" y="9" width="4" height="13" />
      <rect x="7" y="4" width="10" height="18" />
      <line x1="10" y1="9" x2="10" y2="9" />
      <line x1="14" y1="9" x2="14" y2="9" />
      <line x1="10" y1="14" x2="10" y2="14" />
      <line x1="14" y1="14" x2="14" y2="14" />
    </svg>
  );
}

function PrivateIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}
