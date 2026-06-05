import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canadian Grants Database 2026",
  description:
    "Browse grant funding ranges for 300+ Canadian business types. Updated June 2026. Find out what your business qualifies for.",
  alternates: { canonical: "https://canadagrantsandloans.com/grants" },
  openGraph: {
    title: "Canadian Grants Database 2026 | Canada Grants and Loans",
    description:
      "Browse grant funding ranges for 300+ Canadian business types. Updated June 2026. Find out what your business qualifies for.",
    url: "https://canadagrantsandloans.com/grants",
  },
};

export default function GrantsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
