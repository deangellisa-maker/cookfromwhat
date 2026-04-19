import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import AdBanner from "@/components/AdBanner";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Back link */}
      <a
        href="/blog"
        className="text-sm text-gray-500 hover:text-amber-600 mb-4 inline-block"
      >
        &larr; All recipes
      </a>

      {/* Article header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">{post.title}</h1>
        <div className="flex flex-wrap gap-3 text-sm text-gray-500">
          {post.total_time > 0 && (
            <span className="bg-gray-100 px-3 py-1 rounded-full">
              {post.total_time} min total
            </span>
          )}
          {post.prep_time > 0 && (
            <span className="bg-gray-100 px-3 py-1 rounded-full">
              {post.prep_time} min prep
            </span>
          )}
          {post.cook_time > 0 && (
            <span className="bg-gray-100 px-3 py-1 rounded-full">
              {post.cook_time} min cook
            </span>
          )}
          {post.servings > 0 && (
            <span className="bg-gray-100 px-3 py-1 rounded-full">
              Serves {post.servings}
            </span>
          )}
        </div>
      </header>

      <AdBanner className="mb-8" />

      {/* Article content */}
      <article className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {post.content}
        </ReactMarkdown>
      </article>

      <AdBanner className="mt-8" />

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          Published{" "}
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
          by {post.author}
        </p>
        <a
          href="/blog"
          className="text-amber-600 hover:text-amber-700 text-sm font-medium mt-2 inline-block"
        >
          &larr; More recipes
        </a>
      </div>
    </div>
  );
}
