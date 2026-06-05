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

      {/* Table */}
      <div className="overflow-x-auto rounded border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-brand-navy text-white">
              <th className="text-left px-4 py-3 font-semibold">Business Type</th>
              <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Funding Range</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={3} className="text-center py-10 text-gray-400">
                  No results found for &ldquo;{search}&rdquo;
                </td>
              </tr>
            ) : (
              filtered.map((item, idx) => (
                <tr
                  key={item.businessType}
                  className={idx % 2 === 0 ? "bg-white" : "bg-brand-light"}
                >
                  <td className="px-4 py-3 font-medium text-brand-dark">{item.businessType}</td>
                  <td className="px-4 py-3 text-brand-navy font-semibold whitespace-nowrap">
                    {item.range}
                  </td>
                  <td className="px-4 py-3 text-right whitespace-nowrap">
                    <Link
                      href="/contact"
                      className="inline-block text-xs font-semibold text-brand-red border border-brand-red px-3 py-1.5 rounded hover:bg-brand-red hover:text-white transition-colors"
                    >
                      Check My Eligibility
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-400 mt-4 leading-relaxed">
        Amounts reflect combined federal, provincial, municipal, and private grant programmes available
        as of June 2026. Programmes subject to change. Contact Canada Grants and Loans for a
        customised funding assessment.
      </p>
    </div>
  );
}
