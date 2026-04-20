import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import HeroSearch from "@/components/HeroSearch";
import { getAllPosts } from "@/lib/blog";

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What do you have?
          </h1>
          <p className="text-lg text-gray-600 mb-3">
            Type your ingredients. Get recipes. No life stories.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Search thousands of tested recipes. No signup. No app. Just recipes.
          </p>

          <HeroSearch />
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
          How it works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Type your ingredients
            </h3>
            <p className="text-gray-600 text-sm">
              Whatever you have in the fridge, pantry, or freezer. Comma
              separated.
            </p>
          </div>
          <div>
            <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Get matches</h3>
            <p className="text-gray-600 text-sm">
              We search thousands of tested recipes and rank by how many of your
              ingredients they use.
            </p>
          </div>
          <div>
            <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Cook with technique tips
            </h3>
            <p className="text-gray-600 text-sm">
              Every recipe comes with tips that explain why a technique works,
              not just what to do.
            </p>
          </div>
        </div>
      </section>

      <AdBanner className="max-w-4xl mx-auto px-4 mb-8" />

      {/* Latest Recipes */}
      <section className="max-w-4xl mx-auto px-4 py-8 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Latest Recipes</h2>
          <Link
            href="/blog"
            className="text-amber-600 hover:text-amber-700 text-sm font-medium"
          >
            View all &rarr;
          </Link>
        </div>
        <p className="text-gray-600 mb-6">
          Real recipes we actually cook. Technique tips included. No scrolling
          past someone&apos;s childhood memories to find the ingredient list.
        </p>

        {latestPosts.length === 0 ? (
          <p className="text-gray-500 py-8 text-center">
            New recipes coming soon.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                {post.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover"
                  />
                ) : (
                  <div className="w-full h-40 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                    <span className="text-4xl">🍳</span>
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3 text-xs text-gray-500">
                    {post.total_time > 0 && (
                      <span className="bg-gray-100 px-2 py-1 rounded-full">
                        {post.total_time} min
                      </span>
                    )}
                    {post.servings > 0 && (
                      <span className="bg-gray-100 px-2 py-1 rounded-full">
                        Serves {post.servings}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
