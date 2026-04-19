import Link from "next/link";

interface RecipeCardProps {
  id: number;
  title: string;
  image: string;
  usedCount?: number;
  missedCount?: number;
  readyInMinutes?: number;
  servings?: number;
  missedIngredients?: { name: string }[];
}

export default function RecipeCard({
  id,
  title,
  image,
  usedCount,
  missedCount,
  readyInMinutes,
  servings,
  missedIngredients,
}: RecipeCardProps) {
  return (
    <Link
      href={`/recipe/${id}`}
      className="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="aspect-video relative overflow-hidden bg-gray-100">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No image
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors line-clamp-2">
          {title}
        </h3>
        <div className="mt-2 flex flex-wrap gap-2 text-xs">
          {usedCount !== undefined && (
            <span className="bg-green-50 text-green-700 px-2 py-1 rounded-full">
              {usedCount} ingredients matched
            </span>
          )}
          {missedCount !== undefined && missedCount > 0 && (
            <span className="bg-amber-50 text-amber-700 px-2 py-1 rounded-full">
              {missedCount} missing
            </span>
          )}
          {readyInMinutes && (
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              {readyInMinutes} min
            </span>
          )}
          {servings && (
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              Serves {servings}
            </span>
          )}
        </div>
        {missedIngredients && missedIngredients.length > 0 && (
          <p className="mt-2 text-xs text-gray-500">
            Need: {missedIngredients.map((i) => i.name).join(", ")}
          </p>
        )}
      </div>
    </Link>
  );
}
