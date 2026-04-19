import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-lg font-bold text-gray-900">
              Cook<span className="text-amber-600">From</span>What
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Skip the life story. Get to the recipe.
            </p>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-amber-600 transition-colors">
              Search
            </Link>
            <Link
              href="/blog"
              className="hover:text-amber-600 transition-colors"
            >
              Recipes
            </Link>
            <Link
              href="/about"
              className="hover:text-amber-600 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} CookFromWhat. All rights reserved.
          </p>
          <p className="mt-1">
            This site contains affiliate links. We may earn a small commission
            at no extra cost to you when you purchase through our links.
          </p>
        </div>
      </div>
    </footer>
  );
}
