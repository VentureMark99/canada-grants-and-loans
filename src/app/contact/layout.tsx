import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get started with a free consultation. Fill out our intake form or call 1-855-GRANTS-5. We respond within 24 hours.",
  alternates: { canonical: "https://canadagrantsandloans.com/contact" },
  openGraph: {
    title: "Contact Us | Canada Grants and Loans",
    description:
      "Get started with a free consultation. Fill out our intake form or call 1-855-GRANTS-5. We respond within 24 hours.",
    url: "https://canadagrantsandloans.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
