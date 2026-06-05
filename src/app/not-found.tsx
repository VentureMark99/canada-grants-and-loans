import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-brand-light min-h-[60vh] flex items-center justify-center py-20">
      <div className="max-w-lg mx-auto px-4 text-center">
        <p className="text-7xl font-black text-brand-red mb-4">404</p>
        <h1 className="text-2xl lg:text-3xl font-bold text-brand-navy mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-brand-navy text-white font-semibold px-6 py-3 rounded hover:bg-blue-900 transition-colors"
          >
            Go to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border-2 border-brand-navy text-brand-navy font-semibold px-6 py-3 rounded hover:bg-brand-navy hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
