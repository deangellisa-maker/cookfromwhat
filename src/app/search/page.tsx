"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { searchByIngredients, type SearchResult } from "@/lib/spoonacular";
import RecipeCard from "@/components/RecipeCard";
import AdBanner from "@/components/AdBanner";

function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [ingredients, setIngredients] = useState(
    searchParams.get("ingredients") || ""
  );

  const doSearch = async (query: string) => {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    try {
      const data = await searchByIngredients(query);
      setResults(data);
      if (data.length === 0) {
        setError("No recipes found. Try different ingredients.");
      }
    } catch {
      setError(
        "Something went wrong. Try again in a moment."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const q = searchParams.get("ingredients");
    if (q) {
      setIngredients(q);
      doSearch(q);
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ingredients.trim()) return;
    router.push(`/search?ingredients=${encodeURIComponent(ingredients.trim())}`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Search bar */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-3">
          <label htmlFor="search-ingredients" className="sr-only">
            Search by ingredients
          </label>
          <input
            id="search-ingredients"
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="chicken, garlic, lemon..."
            className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      {/* Results header */}
      {searchParams.get("ingredients") && !loading && results.length > 0 && (
        <p className="text-sm text-gray-500 mb-6">
          {results.length} recipes found for &ldquo;
          {searchParams.get("ingredients")}&rdquo;
          <span className="ml-2 text-xs text-gray-400">(cached for 24 hours)</span>
        </p>
      )}

      {/* Loading */}
      {loading && (
        <div className="text-center py-16">
          <div className="inline-block w-8 h-8 border-4 border-amber-200 border-t-amber-600 rounded-full animate-spin" />
          <p className="mt-4 text-gray-500">Searching recipes...</p>
        </div>
      )}

      {/* Error */}
      {error && !loading && (
        <div className="text-center py-16">
          <p className="text-gray-600">{error}</p>
        </div>
      )}

      {/* Results grid */}
      {!loading && results.length > 0 && (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                image={recipe.image}
                usedCount={recipe.usedIngredientCount}
                missedCount={recipe.missedIngredientCount}
                missedIngredients={recipe.missedIngredients}
              />
            ))}
          </div>

          <AdBanner className="mt-8" />
        </>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-5xl mx-auto px-4 py-16 text-center text-gray-500">
          Loading...
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
