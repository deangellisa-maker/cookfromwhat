import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How CookFromWhat handles your data and privacy.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-gray">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: April 19, 2026</p>

      <section className="space-y-4 text-gray-700">
        <p>
          CookFromWhat (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
          respects your privacy. This policy explains what information we
          collect, how we use it, and the choices you have.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          Information we collect
        </h2>
        <p>
          <strong>Email addresses.</strong> If you sign up for our newsletter,
          we collect the email address you provide so we can send you recipes.
          We do not sell or share your email address.
        </p>
        <p>
          <strong>Search queries.</strong> When you use our ingredient search,
          the ingredients you enter are sent to our recipe provider
          (Spoonacular) to return matching recipes. We do not store these
          queries against your identity.
        </p>
        <p>
          <strong>Usage data.</strong> Our hosting provider (Vercel) and
          analytics tools may automatically collect standard log data such as
          IP address, browser type, pages visited, and timestamps. This data
          is used to monitor site performance and improve the service.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          Cookies and advertising
        </h2>
        <p>
          We use cookies to make the site work and to understand how visitors
          use it.
        </p>
        <p>
          Third-party vendors, including Google, use cookies to serve ads
          based on a user&apos;s prior visits to this website and other sites.
          Google&apos;s use of advertising cookies enables it and its partners
          to serve ads based on visits to our site and other sites on the
          internet.
        </p>
        <p>
          You may opt out of personalized advertising by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            className="text-amber-600 hover:text-amber-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&apos;s Ads Settings
          </a>
          . You can also opt out of a third-party vendor&apos;s use of cookies
          for personalized advertising by visiting{" "}
          <a
            href="https://www.aboutads.info/choices/"
            className="text-amber-600 hover:text-amber-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.aboutads.info
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          Affiliate links
        </h2>
        <p>
          Some links on our site are affiliate links, including Amazon
          Associates links. We may earn a commission on qualifying purchases
          at no additional cost to you. See our{" "}
          <a
            href="/affiliate-disclosure"
            className="text-amber-600 hover:text-amber-700 underline"
          >
            Affiliate Disclosure
          </a>{" "}
          for details.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          How we use your information
        </h2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Provide and operate the recipe search service</li>
          <li>Send newsletter emails you have subscribed to</li>
          <li>Measure and improve site performance</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          Your choices
        </h2>
        <p>
          You can unsubscribe from our newsletter at any time using the link
          at the bottom of any email we send. You can disable cookies in your
          browser settings, though some parts of the site may not work as
          intended.
        </p>
        <p>
          To request deletion of your email from our newsletter list, contact
          us at the email below.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          Children&apos;s privacy
        </h2>
        <p>
          CookFromWhat is not directed to children under 13, and we do not
          knowingly collect personal information from children under 13.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          Changes to this policy
        </h2>
        <p>
          We may update this policy from time to time. When we do, we will
          revise the &quot;Last updated&quot; date at the top of this page.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          Contact
        </h2>
        <p>
          Questions about this policy? Email us at{" "}
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
