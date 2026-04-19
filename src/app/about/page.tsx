import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "CookFromWhat is a recipe search tool and cooking blog. We skip the life story and get straight to the recipe.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        About CookFromWhat
      </h1>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Every home cook knows the feeling. You search for a recipe and end up
          scrolling past 12 paragraphs about someone&apos;s trip to Tuscany
          before you find the ingredient list.
        </p>

        <p>
          CookFromWhat exists because we got tired of that. We built a recipe
          search tool that starts with what you actually have in your kitchen and
          finds recipes that match. No accounts. No subscriptions. No life
          stories.
        </p>

        <p>
          Our blog articles are recipes we actually cook. Each one includes
          technique tips that explain why something works, not just what to do.
          Knowing that you should deglaze the pan is useful. Knowing that the
          brown bits stuck to the bottom are concentrated flavor that dissolves
          when you add liquid is what makes you a better cook.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
          How the search works
        </h2>

        <p>
          Type the ingredients you have. We search thousands of tested recipes
          and rank them by how many of your ingredients they use. Each result
          shows what you already have and what you would need to pick up. Filter
          by cook time if you are short on it.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
          Technique tips
        </h2>

        <p>
          This is the part no other recipe site does. We maintain a library of
          cooking technique tips and automatically match them to recipes based on
          the ingredients and methods involved. A pasta recipe gets a note about
          salting water and saving starchy pasta water. A steak recipe gets a
          note about resting meat and carry-over cooking. These tips are short,
          practical, and explain the science behind the step.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
          Affiliate links
        </h2>

        <p>
          Some links on this site are affiliate links. If you buy something
          through one of those links, we earn a small commission at no extra cost
          to you. We only link to products we actually use or would recommend.
          This is how we keep the site free.
        </p>
      </div>
    </div>
  );
}
