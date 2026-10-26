import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canadian Grants Database 2026",
  description:
    "Browse the Canadian business types we help secure grants and funding for, and find out what your business qualifies for.",
  alternates: { canonical: "https://canadagrantsandloans.com/grants" },
  openGraph: {
    title: "Canadian Grants Database 2026 | Canada Grants and Loans",
    description:
      "Browse the Canadian business types we help secure grants and funding for, and find out what your business qualifies for.",
    url: "https://canadagrantsandloans.com/grants",
  },
};

export default function GrantsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
