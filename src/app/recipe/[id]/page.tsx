"use client";

import { useState, useEffect, use } from "react";
import { getRecipeDetail, type RecipeDetail } from "@/lib/spoonacular";
import { matchTips, type TechniqueTip } from "@/data/technique-tips";
import AdBanner from "@/components/AdBanner";

export default function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [recipe, setRecipe] = useState<RecipeDetail | null>(null);
  const [tips, setTips] = useState<TechniqueTip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await getRecipeDetail(parseInt(id));
        setRecipe(data);

        // Match technique tips
        const ingredientNames = data.extendedIngredients.map(
          (i) => i.nameClean || i.name
        );
        const stepTexts = data.analyzedInstructions.flatMap((inst) =>
          inst.steps.map((s) => s.step)
        );
        const equipmentNames = data.analyzedInstructions.flatMap((inst) =>
          inst.steps.flatMap((s) => s.equipment.map((e) => e.name))
        );
        setTips(matchTips(ingredientNames, stepTexts, equipmentNames));
      } catch {
        setError("Failed to load recipe. Try again.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="inline-block w-8 h-8 border-4 border-amber-200 border-t-amber-600 rounded-full animate-spin" />
        <p className="mt-4 text-gray-500">Loading recipe...</p>
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-600">{error || "Recipe not found."}</p>
        <a
          href="/"
          className="mt-4 inline-block text-amber-600 hover:text-amber-700"
        >
          &larr; Back to search
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Back link */}
      <button
        onClick={() => window.history.back()}
        className="text-sm text-gray-500 hover:text-amber-600 mb-4 inline-block"
      >
        &larr; Back to results
      </button>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{recipe.title}</h1>

      {/* Meta */}
      <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-6">
        {recipe.readyInMinutes && (
          <span className="bg-gray-100 px-3 py-1 rounded-full">
            {recipe.readyInMinutes} min
          </span>
        )}
        {recipe.servings && (
          <span className="bg-gray-100 px-3 py-1 rounded-full">
            Serves {recipe.servings}
          </span>
        )}
        {recipe.vegetarian && (
          <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full">
            Vegetarian
          </span>
        )}
        {recipe.vegan && (
          <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full">
            Vegan
          </span>
        )}
        {recipe.glutenFree && (
          <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
            Gluten-Free
          </span>
        )}
        {recipe.dairyFree && (
          <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
            Dairy-Free
          </span>
        )}
      </div>

      {/* Image */}
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full rounded-xl mb-8"
        />
      )}

      {/* Technique Tips - the CookFromWhat differentiator */}
      {tips.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-bold text-amber-800 mb-3">
            Technique Tips
          </h2>
          <p className="text-xs text-amber-600 mb-4">
            Tips matched to this recipe. The &ldquo;why&rdquo; behind the
            technique.
          </p>
          <div className="space-y-4">
            {tips.map((tip) => (
              <div key={tip.id}>
                <h3 className="font-semibold text-amber-900 text-sm">
                  {tip.title}
                </h3>
                <p className="text-sm text-amber-800 mt-1">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <AdBanner className="mb-8" />

      {/* Ingredients */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Ingredients</h2>
        <ul className="space-y-2">
          {recipe.extendedIngredients.map((ing, idx) => (
            <li
              key={`${ing.id}-${idx}`}
              className="flex items-start gap-3 text-gray-700"
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
              <span>{ing.original}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Instructions</h2>
        {recipe.analyzedInstructions.length > 0 ? (
          <ol className="space-y-4">
            {recipe.analyzedInstructions[0].steps.map((step) => (
              <li key={step.number} className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                  {step.number}
                </span>
                <p className="text-gray-700 leading-relaxed">{step.step}</p>
              </li>
            ))}
          </ol>
        ) : recipe.instructions ? (
          <div className="prose text-gray-700">
            {recipe.instructions
              .replace(/<[^>]*>/g, "")
              .split(/\n+/)
              .filter((line) => line.trim())
              .map((line, i) => (
                <p key={i}>{line.trim()}</p>
              ))}
          </div>
        ) : (
          <p className="text-gray-500">
            No step-by-step instructions available.{" "}
            {recipe.sourceUrl && (
              <a
                href={recipe.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-700"
              >
                View on {recipe.sourceName || "source site"} &rarr;
              </a>
            )}
          </p>
        )}
      </div>

      {/* Source credit */}
      {recipe.sourceUrl && (
        <p className="text-xs text-gray-400 mt-8">
          Recipe source:{" "}
          <a
            href={recipe.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-600"
          >
            {recipe.sourceName || recipe.sourceUrl}
          </a>
        </p>
      )}

      <AdBanner className="mt-8" />
    </div>
  );
}
