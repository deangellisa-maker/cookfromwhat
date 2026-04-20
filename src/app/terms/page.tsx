import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms for using CookFromWhat.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-gray">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Terms of Service
      </h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: April 19, 2026</p>

      <section className="space-y-4 text-gray-700">
        <p>
          By using CookFromWhat (&quot;the site&quot;), you agree to these
          Terms of Service. If you do not agree, do not use the site.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          Use of the site
        </h2>
        <p>
          CookFromWhat provides a recipe search tool and cooking articles for
          personal, non-commercial use. You agree not to misuse the site,
          including attempting to access it in ways other than through the
          interface we provide, scraping large volumes of content, or
          interfering with its operation.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          Recipe content and results
        </h2>
        <p>
          Recipes returned by our search come from third-party sources
          (including Spoonacular and other recipe providers). We do not
          guarantee the accuracy, safety, or quality of these recipes. You
          are responsible for checking allergens, food safety, and
          ingredient freshness before cooking.
        </p>
        <p>
          Our original articles are written based on our own cooking
          experience. They are offered for informational purposes. Cooking
          carries inherent risks (heat, sharp tools, food allergens, raw
          ingredients). You assume all responsibility when following any
          recipe from this site.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          Intellectual property
        </h2>
        <p>
          Original content on CookFromWhat (articles, photography, design) is
          owned by CookFromWhat and may not be reproduced without permission.
          You may share links to our articles. Recipe content sourced from
          third parties remains the property of its respective owners.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          Affiliate links and advertising
        </h2>
        <p>
          The site contains affiliate links and advertising. See our{" "}
          <a
            href="/affiliate-disclosure"
            className="text-amber-600 hover:text-amber-700 underline"
          >
            Affiliate Disclosure
          </a>{" "}
          and{" "}
          <a
            href="/privacy"
            className="text-amber-600 hover:text-amber-700 underline"
          >
            Privacy Policy
          </a>{" "}
          for details.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          Third-party links
        </h2>
        <p>
          The site may link to third-party websites. We are not responsible
          for the content, privacy practices, or availability of these sites.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          Disclaimer of warranties
        </h2>
        <p>
          The site is provided &quot;as is&quot; and &quot;as available.&quot;
          We make no warranties, express or implied, regarding its
          availability, accuracy, or fitness for a particular purpose.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          Limitation of liability
        </h2>
        <p>
          To the fullest extent permitted by law, CookFromWhat is not liable
          for any indirect, incidental, or consequential damages arising from
          your use of the site or any recipe or information found here.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          Changes to these terms
        </h2>
        <p>
          We may update these terms from time to time. Continued use of the
          site after changes means you accept the updated terms.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          Contact
        </h2>
        <p>
          Questions? Email us at{" "}
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
