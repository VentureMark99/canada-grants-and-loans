"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { startupGrants, existingBusinessGrants } from "@/data/grantRanges";

type Stage = "startup" | "existing";
type SortMode = "alpha" | "high" | "low";
type FilterTab = "all" | "startup" | "existing";

type Entry = {
  businessType: string;
  range: string;
  stage: Stage;
  lowAmount: number;
  highAmount: number;
};

function parseAmount(str: string): number {
  const clean = str.replace(/[$,]/g, "");
  if (clean.includes("M")) return parseFloat(clean) * 1_000_000;
  return parseInt(clean, 10) || 0;
}

function parseRange(range: string): { low: number; high: number } {
  const parts = range.split("–");
  return {
    low: parseAmount(parts[0]?.trim() ?? "0"),
    high: parseAmount(parts[1]?.trim() ?? "0"),
  };
}

const allEntries: Entry[] = [
  ...startupGrants.map((g) => {
    const { low, high } = parseRange(g.range);
    return { businessType: g.businessType, range: g.range, stage: "startup" as Stage, lowAmount: low, highAmount: high };
  }),
  ...existingBusinessGrants.map((g) => {
    const { low, high } = parseRange(g.range);
    return { businessType: g.businessType, range: g.range, stage: "existing" as Stage, lowAmount: low, highAmount: high };
  }),
];

export default function GrantsDatabasePage() {
  const [search, setSearch] = useState("");
  const [filterTab, setFilterTab] = useState<FilterTab>("all");
  const [sort, setSort] = useState<SortMode>("alpha");

  const filtered = useMemo(() => {
    let entries = allEntries;

    if (filterTab !== "all") {
      entries = entries.filter((e) => e.stage === filterTab);
    }

    const q = search.toLowerCase().trim();
    if (q) {
      entries = entries.filter((e) => e.businessType.toLowerCase().includes(q));
    }

    return [...entries].sort((a, b) => {
      if (sort === "alpha") return a.businessType.localeCompare(b.businessType);
      if (sort === "high") return b.highAmount - a.highAmount;
      return a.lowAmount - b.lowAmount;
    });
  }, [search, filterTab, sort]);

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
            Canadian Grants &amp; Funding Database
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse grant funding ranges by business type. Updated June 2026. Amounts reflect
            combined federal, provincial, municipal, and private programmes.
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

            {/* Sort */}
            <div className="flex-shrink-0">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortMode)}
                className="text-xs border border-gray-200 rounded px-3 py-2 text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white"
              >
                <option value="alpha">Sort: Alphabetical</option>
                <option value="high">Sort: Funding High → Low</option>
                <option value="low">Sort: Funding Low → High</option>
              </select>
            </div>
          </div>

          {/* Result count */}
          <p className="text-xs text-gray-400 mt-2">
            Showing {filtered.length} of {allEntries.length} programmes
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
            Amounts reflect combined federal, provincial, municipal, and private-sector grant
            programmes available as of June 2026. Programmes are subject to change; always confirm
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
            sources. Call us and we&apos;ll find exactly what your business qualifies for.
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
      <h3 className="font-bold text-brand-dark text-sm leading-snug mb-3 flex-1">
        {entry.businessType}
      </h3>

      {/* Funding range */}
      <p className="text-xl font-bold text-green-700 mb-4">{entry.range}</p>

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

function PhoneIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
