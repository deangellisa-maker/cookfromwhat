import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "How CookFromWhat uses affiliate links and advertising to keep the site free.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-gray">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Affiliate Disclosure
      </h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: April 19, 2026</p>

      <section className="space-y-4 text-gray-700">
        <p>
          CookFromWhat is free to use, and we intend to keep it that way. To
          cover hosting and recipe data costs, we rely on two revenue sources:
          advertising and affiliate links.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          Amazon Associates
        </h2>
        <p>
          CookFromWhat is a participant in the Amazon Services LLC Associates
          Program, an affiliate advertising program designed to provide a
          means for sites to earn advertising fees by advertising and linking
          to Amazon.com.
        </p>
        <p>
          When you click an Amazon link on our site and make a qualifying
          purchase, we may earn a small commission at no additional cost to
          you.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          Other affiliate programs
        </h2>
        <p>
          We also participate in affiliate programs with other retailers and
          brands, which may include Instacart, Walmart, and kitchen equipment
          brands. Any affiliate link we use follows the same rule: you pay
          the same price, and we may earn a small commission if you buy.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          How we choose what to link to
        </h2>
        <p>
          We only link to products we would actually use or buy ourselves.
          We do not accept money to feature a product in a recipe or article.
          If a brand has paid to be featured, we will say so clearly in that
          specific post.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          Advertising
        </h2>
        <p>
          We run display advertising through Google AdSense. Ads are served
          by Google and its partners based on your browsing activity and
          interests. See our{" "}
          <a
            href="/privacy"
            className="text-amber-600 hover:text-amber-700 underline"
          >
            Privacy Policy
          </a>{" "}
          for more information about advertising cookies and how to opt out
          of personalized ads.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          FTC compliance
        </h2>
        <p>
          This disclosure is provided in accordance with the Federal Trade
          Commission&apos;s 16 CFR Part 255: Guides Concerning the Use of
          Endorsements and Testimonials in Advertising.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          Questions
        </h2>
        <p>
          If you have questions about how we use affiliate links or
          advertising, email us at{" "}
          <a
            href="mailto:hello@cookfromwhat.com"
            className="text-amber-600 hover:text-amber-700 underline"
          >
            hello@cookfromwhat.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}
