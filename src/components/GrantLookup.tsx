"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { startupGrants, existingBusinessGrants, type GrantEntry } from "@/data/grantRanges";

type Tab = "startups" | "existing";

export default function GrantLookup() {
  const [activeTab, setActiveTab] = useState<Tab>("startups");
  const [search, setSearch] = useState("");

  const data: GrantEntry[] = activeTab === "startups" ? startupGrants : existingBusinessGrants;

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return data;
    return data.filter((item) => item.businessType.toLowerCase().includes(q));
  }, [search, data]);

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => { setActiveTab("startups"); setSearch(""); }}
          className={`px-5 py-2.5 rounded text-sm font-semibold transition-colors ${
            activeTab === "startups"
              ? "bg-brand-navy text-white"
              : "bg-white text-brand-navy border border-brand-navy hover:bg-brand-light"
          }`}
        >
          Startups
        </button>
        <button
          onClick={() => { setActiveTab("existing"); setSearch(""); }}
          className={`px-5 py-2.5 rounded text-sm font-semibold transition-colors ${
            activeTab === "existing"
              ? "bg-brand-navy text-white"
              : "bg-white text-brand-navy border border-brand-navy hover:bg-brand-light"
          }`}
        >
          Existing Businesses
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="11" cy="11" r="8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Search by business type (e.g. bakery, tech, construction…)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        )}
      </div>

      {/* Result count */}
      <p className="text-xs text-gray-500 mb-3">
        Showing {filtered.length} of {data.length} business types
      </p>

      {/* List */}
      <div className="rounded border border-gray-200 divide-y divide-gray-200 overflow-hidden">
        {/* Header row — hidden on mobile */}
        <div className="hidden sm:grid sm:grid-cols-[1fr_auto_auto] bg-brand-navy text-white text-sm font-semibold">
          <span className="px-4 py-3">Business Type</span>
          <span className="px-4 py-3 whitespace-nowrap">Funding Range</span>
          <span className="px-4 py-3" />
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-10 text-gray-400 bg-white text-sm">
            No results found for &ldquo;{search}&rdquo;
          </div>
        ) : (
          filtered.map((item, idx) => (
            <div
              key={item.businessType}
              className={`flex flex-col sm:grid sm:grid-cols-[1fr_auto_auto] sm:items-center gap-2 sm:gap-0 px-4 py-3 text-sm ${
                idx % 2 === 0 ? "bg-white" : "bg-brand-light"
              }`}
            >
              <span className="font-medium text-brand-dark">{item.businessType}</span>
              <span className="text-brand-navy font-semibold sm:px-4">{item.range}</span>
              <span className="sm:pl-4">
                <Link
                  href="/contact"
                  className="inline-block text-xs font-semibold text-brand-red border border-brand-red px-3 py-1.5 rounded hover:bg-brand-red hover:text-white transition-colors whitespace-nowrap"
                >
                  Check My Eligibility
                </Link>
              </span>
            </div>
          ))
        )}
      </div>

      <p className="text-xs text-gray-400 mt-4 leading-relaxed">
        Amounts reflect combined federal, provincial, municipal, and private grant programmes available
        as of June 2026. Programmes subject to change. Contact Canada Grants and Loans for a
        customised funding assessment.
      </p>
    </div>
  );
}
