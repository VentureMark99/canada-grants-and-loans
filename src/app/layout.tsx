import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://canadagrantsandloans.com"),
  title: {
    default: "Canada Grants and Loans | Business Plans, Pitch Decks & Grant Applications",
    template: "%s | Canada Grants and Loans",
  },
  description:
    "We find the money, write the plan, and submit the application. Serving Canadian entrepreneurs and businesses across all provinces.",
  robots: { index: true, follow: true },
  openGraph: {
    siteName: "Canada Grants and Loans",
    locale: "en_CA",
    type: "website",
    images: [{ url: "/logo.png", width: 400, height: 120, alt: "Canada Grants and Loans" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={inter.className}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
