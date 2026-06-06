import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Grants & Funding Resources",
  description:
    "Guides and tips for Canadian entrepreneurs applying for grants, loans, and funding programmes.",
  alternates: { canonical: "https://canadagrantsandloans.com/blog" },
  openGraph: {
    title: "Grants & Funding Resources | Canada Grants and Loans Blog",
    description:
      "Guides and tips for Canadian entrepreneurs applying for grants, loans, and funding programmes.",
    url: "https://canadagrantsandloans.com/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
            Resources & Guides
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Practical guidance on Canadian grants, business plans, and funding — written by the
            people who do this every day.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="bg-brand-light py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow"
              >
                {/* Category bar */}
                <div className="bg-brand-navy px-5 py-3">
                  <span className="text-xs font-semibold text-blue-200 uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-base font-bold text-brand-navy leading-snug mb-3 flex-1">
                    {post.title}
                  </h2>

                  <p className="text-sm text-gray-600 leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-brand-red hover:underline"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Have a Specific Question?
          </h2>
          <p className="text-blue-200 mb-8 leading-relaxed">
            Call us directly and we&apos;ll answer your question about grants, business plans, or
            the application process — at no charge and no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:18554726875"
              className="inline-flex items-center justify-center gap-2 bg-brand-red text-white font-semibold px-6 py-3 rounded hover:bg-red-700 transition-colors"
            >
              <PhoneIcon />
              Call 1-855-GRANTS-5
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

function PhoneIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
