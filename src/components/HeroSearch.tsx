"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const quickSearches = [
  "chicken, rice, garlic",
  "pasta, tomatoes, basil",
  "eggs, cheese, bread",
  "ground beef, potatoes, onion",
  "salmon, lemon, broccoli",
  "beans, rice, cumin",
];

export default function HeroSearch() {
  const [ingredients, setIngredients] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ingredients.trim()) return;
    const params = new URLSearchParams();
    params.set("ingredients", ingredients.trim());
    router.push(`/search?${params.toString()}`);
  };

  return (
    <>
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
    </>
  );
}
