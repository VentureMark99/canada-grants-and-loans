import Link from "next/link";

const navCol1 = [
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Grants Database", href: "/grants" },
  { label: "Pricing", href: "/pricing" },
];

const navCol2 = [
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Business Plans", href: "/services/business-plans" },
  { label: "Grant Applications", href: "/services/grant-applications" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block bg-white rounded px-3 py-2 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="Canada Grants and Loans"
                className="h-[44px] w-auto"
                width={300}
                height={44}
                loading="lazy"
              />
            </Link>
            <p className="text-sm text-blue-100 leading-relaxed">
              We Find the Money. We Write the Plan. You Get Funded.
            </p>
          </div>

          {/* Nav col 1 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {navCol1.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav col 2 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {navCol2.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-blue-100 hover:text-white transition-colors"
                >
                  Send Us a Message →
                </Link>
              </li>
              <li className="pt-2">
                <p className="text-xs text-blue-200">
                  Serving entrepreneurs<br />across all of Canada
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-200">
          <span>© 2026 Canada Grants and Loans. All rights reserved.</span>
          <span>Serving entrepreneurs across Canada.</span>
        </div>
      </div>
    </footer>
  );
}
