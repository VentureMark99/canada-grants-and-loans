"use client";

import { useState } from "react";

type FaqItem = { q: string; a: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-brand-light transition-colors"
          >
            <span className="font-semibold text-brand-navy text-sm sm:text-base pr-4">
              {item.q}
            </span>
            <span className="flex-shrink-0 mt-0.5">
              {open === i ? (
                <svg className="h-5 w-5 text-brand-red" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-brand-navy" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              )}
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 bg-white">
              <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
