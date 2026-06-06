import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/data/blogPosts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt.slice(0, 160),
    alternates: { canonical: `https://canadagrantsandloans.com/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | Canada Grants and Loans`,
      description: post.excerpt.slice(0, 160),
      url: `https://canadagrantsandloans.com/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.relatedSlugs);

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-10 lg:pt-24 lg:pb-14 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/blog" className="text-xs text-brand-red font-semibold hover:underline">
              ← All Articles
            </Link>
            <span className="text-gray-300">|</span>
            <span className="text-xs text-gray-400">{post.category}</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-brand-navy leading-snug mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Body + Sidebar */}
      <section className="bg-brand-light py-12 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">

            {/* Article body */}
            <article className="lg:col-span-2 bg-white rounded border border-gray-200 shadow-sm p-8 mb-8 lg:mb-0">
              <p className="text-gray-600 leading-relaxed text-base mb-8 border-l-4 border-brand-red pl-4 italic">
                {post.excerpt}
              </p>

              {post.sections.map((section) => (
                <div key={section.heading} className="mb-8">
                  <h2 className="text-xl font-bold text-brand-navy mb-4">{section.heading}</h2>
                  {section.paragraphs.map((para, i) => (
                    <p key={i} className="text-gray-700 leading-relaxed mb-4 text-sm">
                      {para}
                    </p>
                  ))}
                </div>
              ))}

              {/* Bottom CTA */}
              <div className="mt-10 bg-brand-navy rounded p-6 text-center">
                <p className="text-white font-bold text-base mb-2">
                  Ready to Apply? We&apos;ll Handle Everything.
                </p>
                <p className="text-blue-200 text-sm mb-5 leading-relaxed">
                  One package, one flat fee: $2,500. Business plan, pitch deck, and 10 grant applications — all included.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="tel:18554726875"
                    className="inline-flex items-center justify-center gap-2 bg-brand-red text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-red-700 transition-colors"
                  >
                    <PhoneIcon />
                    Call 1-855-GRANTS-5
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center border border-white text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-white hover:text-brand-navy transition-colors"
                  >
                    Send a Message
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA card */}
              <div className="bg-brand-red rounded p-6 text-center">
                <p className="text-white font-bold text-base mb-2">Get a Free Assessment</p>
                <p className="text-red-100 text-sm mb-4 leading-relaxed">
                  Find out what your business qualifies for. Free call, no obligation.
                </p>
                <a
                  href="tel:18554726875"
                  className="inline-flex items-center justify-center gap-2 bg-white text-brand-red text-sm font-semibold px-5 py-2.5 rounded hover:bg-red-50 transition-colors w-full"
                >
                  <PhoneIcon red />
                  Call 1-855-GRANTS-5
                </a>
              </div>

              {/* Pricing reminder */}
              <div className="bg-white rounded border border-gray-200 shadow-sm p-6">
                <h3 className="text-sm font-bold text-brand-navy mb-1">The Complete Package</h3>
                <p className="text-xs text-gray-500 mb-3 leading-relaxed">Business Plan + Pitch Deck + 10 Grant Applications</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">One flat fee</span>
                  <span className="text-lg font-black text-brand-navy">$2,500</span>
                </div>
                <div className="mt-4">
                  <Link
                    href="/pricing"
                    className="text-xs text-brand-red font-semibold hover:underline"
                  >
                    See what&apos;s included →
                  </Link>
                </div>
              </div>

              {/* Related articles */}
              {related.length > 0 && (
                <div className="bg-white rounded border border-gray-200 shadow-sm p-6">
                  <h3 className="text-sm font-bold text-brand-navy mb-4">Related Articles</h3>
                  <ul className="space-y-4">
                    {related.map((rel) => (
                      <li key={rel.slug}>
                        <Link
                          href={`/blog/${rel.slug}`}
                          className="text-sm font-medium text-brand-dark hover:text-brand-red transition-colors leading-snug block"
                        >
                          {rel.title}
                        </Link>
                        <p className="text-xs text-gray-400 mt-0.5">{rel.readTime}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

function PhoneIcon({ red = false }: { red?: boolean }) {
  return (
    <svg
      className={`h-4 w-4 ${red ? "text-brand-red" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
