import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipes",
  description:
    "Real recipes we actually cook. Technique tips included. No life stories.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Recipes</h1>
      <p className="text-gray-600 mb-8">
        Every recipe here is something we actually made. Each one includes
        technique tips that explain why things work, not just what to do.
      </p>

      {posts.length === 0 && (
        <p className="text-gray-500 py-8">
          Articles coming soon. Check back shortly.
        </p>
      )}

      <div className="space-y-6">
        {posts.map((post, idx) => (
          <div key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mt-2 text-sm">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-3 text-xs text-gray-500">
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
                    {post.date && (
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
            {/* Ad between every 3 articles */}
            {(idx + 1) % 3 === 0 && <AdBanner className="mt-6" />}
          </div>
        ))}
      </div>
    </div>
  );
}
