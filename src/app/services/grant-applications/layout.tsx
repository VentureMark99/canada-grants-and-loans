import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canadian Grant Applications — Full Service",
  description:
    "We find, write, and submit grant applications on your behalf. Federal, provincial, municipal, and private grants across Canada.",
  alternates: { canonical: "https://canadagrantsandloans.com/services/grant-applications" },
  openGraph: {
    title: "Canadian Grant Applications — Full Service | Canada Grants and Loans",
    description:
      "We find, write, and submit grant applications on your behalf. Federal, provincial, municipal, and private grants across Canada.",
    url: "https://canadagrantsandloans.com/services/grant-applications",
  },
};

export default function GrantApplicationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
