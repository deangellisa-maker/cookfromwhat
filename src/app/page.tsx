"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AdBanner from "@/components/AdBanner";

export default function HomePage() {
  const [ingredients, setIngredients] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ingredients.trim()) return;
    const params = new URLSearchParams();
    params.set("ingredients", ingredients.trim());
    router.push(`/search?${params.toString()}`);
  };

  const quickSearches = [
    "chicken, rice, garlic",
    "pasta, tomatoes, basil",
    "eggs, cheese, bread",
    "ground beef, potatoes, onion",
    "salmon, lemon, broccoli",
    "beans, rice, cumin",
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What do you have?
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Type your ingredients. Get recipes. No life stories.
          </p>

          <form onSubmit={handleSearch} className="space-y-4">
            <div className="relative">
              <label htmlFor="ingredients-input" className="sr-only">
                Enter your ingredients
              </label>
              <input
                id="ingredients-input"
                type="text"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="chicken, garlic, lemon, olive oil..."
                className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white"
              />
            </div>

            <button
              type="submit"
              className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors text-lg"
            >
              Find Recipes
            </button>
          </form>

          {/* Quick searches */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {quickSearches.map((q) => (
              <button
                key={q}
                onClick={() => {
                  setIngredients(q);
                  const params = new URLSearchParams();
                  params.set("ingredients", q);
                  router.push(`/search?${params.toString()}`);
                }}
                className="px-3 py-1.5 text-sm bg-white border border-gray-200 rounded-full hover:border-amber-400 hover:text-amber-700 transition-colors text-gray-600"
              >
                {q}
              </button>
            ))}
          </div>
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

      {/* Recent articles teaser */}
      <section className="max-w-4xl mx-auto px-4 py-8 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Latest Recipes</h2>
          <a
            href="/blog"
            className="text-amber-600 hover:text-amber-700 text-sm font-medium"
          >
            View all &rarr;
          </a>
        </div>
        <p className="text-gray-600">
          Real recipes we actually cook. Technique tips included. No scrolling
          past someone&apos;s childhood memories to find the ingredient list.
        </p>
      </section>
    </div>
  );
}
