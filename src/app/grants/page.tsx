"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { startupGrants, existingBusinessGrants } from "@/data/grantRanges";

type Stage = "startup" | "existing";
type FilterTab = "all" | "startup" | "existing";

type Entry = {
  businessType: string;
  stage: Stage;
};

const allEntries: Entry[] = [
  ...startupGrants.map((g) => ({ businessType: g.businessType, stage: "startup" as Stage })),
  ...existingBusinessGrants.map((g) => ({ businessType: g.businessType, stage: "existing" as Stage })),
];

export default function GrantsDatabasePage() {
  const [search, setSearch] = useState("");
  const [filterTab, setFilterTab] = useState<FilterTab>("all");

  const filtered = useMemo(() => {
    let entries = allEntries;

    if (filterTab !== "all") {
      entries = entries.filter((e) => e.stage === filterTab);
    }

    const q = search.toLowerCase().trim();
    if (q) {
      entries = entries.filter((e) => e.businessType.toLowerCase().includes(q));
    }

    return [...entries].sort((a, b) => a.businessType.localeCompare(b.businessType));
  }, [search, filterTab]);

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
            Canadian Grants &amp; Funding Database
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse the business types we help secure federal, provincial, municipal, and private
            funding for — then check your eligibility.
          </p>
        </div>
      </section>

      {/* Sticky filter bar */}
      <div className="sticky top-[64px] lg:top-[80px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            {/* Search */}
            <div className="relative flex-1 min-w-0 w-full sm:w-auto">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search by business type..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs">✕</button>
              )}
            </div>

            {/* Stage toggle */}
            <div className="flex gap-1 flex-shrink-0">
              {(["all", "startup", "existing"] as FilterTab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilterTab(tab)}
                  className={`px-3 py-2 rounded text-xs font-semibold transition-colors capitalize ${
                    filterTab === tab
                      ? "bg-brand-navy text-white"
                      : "bg-brand-light text-brand-navy hover:bg-gray-200"
                  }`}
                >
                  {tab === "all" ? "All" : tab === "startup" ? "Startups" : "Existing Businesses"}
                </button>
              ))}
            </div>

          </div>

          {/* Result count */}
          <p className="text-xs text-gray-400 mt-2">
            Showing {filtered.length} of {allEntries.length} business types
          </p>
        </div>
      </div>

      {/* Cards grid */}
      <section className="bg-brand-light py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg mb-2">No results found for &ldquo;{search}&rdquo;</p>
              <button onClick={() => { setSearch(""); setFilterTab("all"); }} className="text-sm text-brand-blue font-semibold hover:underline">
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((entry, i) => (
                <GrantCard key={`${entry.stage}-${entry.businessType}-${i}`} entry={entry} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-400 leading-relaxed text-center">
            Grant programmes are subject to change; always confirm
            details directly with the administering agency. Canada Grants and Loans does not
            guarantee approval of any grant application.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Don&apos;t See Your Business Type?
          </h2>
          <p className="text-blue-200 text-sm mb-6 leading-relaxed">
            We search hundreds of programmes across federal, provincial, municipal, and private
            sources. Tell us about your business and we&apos;ll find exactly what your business qualifies for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-brand-red text-white font-semibold px-6 py-3 rounded hover:bg-red-700 transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function GrantCard({ entry }: { entry: Entry }) {
  const slug = encodeURIComponent(entry.businessType);
  return (
    <div className="bg-white rounded border border-gray-200 shadow-sm p-5 flex flex-col">
      {/* Stage badge */}
      <div className="mb-3">
        <span
          className={`inline-block text-xs font-semibold px-2.5 py-1 rounded ${
            entry.stage === "startup"
              ? "bg-blue-100 text-blue-700"
              : "bg-brand-navy text-white"
          }`}
        >
          {entry.stage === "startup" ? "Startup" : "Existing Business"}
        </span>
      </div>

      {/* Business type */}
      <h3 className="font-bold text-brand-dark text-sm leading-snug mb-4 flex-1">
        {entry.businessType}
      </h3>

      {/* CTA */}
      <Link
        href={`/contact?type=${slug}`}
        className="inline-flex items-center justify-center text-xs font-semibold text-brand-red border border-brand-red px-3 py-2 rounded hover:bg-brand-red hover:text-white transition-colors w-full text-center"
      >
        Check My Eligibility →
      </Link>
    </div>
  );
}

