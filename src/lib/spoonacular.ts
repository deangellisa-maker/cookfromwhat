// Spoonacular API client with localStorage caching
// Caches search results and recipe details to reduce API calls (150/day free tier)

const API_BASE = "https://api.spoonacular.com";
const CACHE_PREFIX = "cfw_cache_";
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

// --- localStorage cache layer ---

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

function getCached<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CACHE_PREFIX + key);
    if (!raw) return null;
    const entry: CacheEntry<T> = JSON.parse(raw);
    if (Date.now() - entry.timestamp > CACHE_DURATION) {
      localStorage.removeItem(CACHE_PREFIX + key);
      return null;
    }
    return entry.data;
  } catch {
    return null;
  }
}

function setCache<T>(key: string, data: T): void {
  if (typeof window === "undefined") return;
  try {
    const entry: CacheEntry<T> = { data, timestamp: Date.now() };
    localStorage.setItem(CACHE_PREFIX + key, JSON.stringify(entry));
  } catch {
    // localStorage full or disabled — silently fail
    pruneCache();
  }
}

function pruneCache(): void {
  if (typeof window === "undefined") return;
  try {
    const keys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(CACHE_PREFIX)) keys.push(key);
    }
    // Remove oldest half
    const entries = keys
      .map((key) => {
        try {
          const raw = localStorage.getItem(key);
          const parsed = raw ? JSON.parse(raw) : null;
          return { key, timestamp: parsed?.timestamp || 0 };
        } catch {
          return { key, timestamp: 0 };
        }
      })
      .sort((a, b) => a.timestamp - b.timestamp);

    const removeCount = Math.ceil(entries.length / 2);
    for (let i = 0; i < removeCount; i++) {
      localStorage.removeItem(entries[i].key);
    }
  } catch {
    // nothing we can do
  }
}

// --- API types ---

export interface SearchResult {
  id: number;
  title: string;
  image: string;
  imageType: string;
  usedIngredientCount: number;
  missedIngredientCount: number;
  missedIngredients: {
    id: number;
    name: string;
    original: string;
    amount: number;
    unit: string;
    image: string;
  }[];
  usedIngredients: {
    id: number;
    name: string;
    original: string;
    amount: number;
    unit: string;
    image: string;
  }[];
  likes: number;
}

export interface RecipeDetail {
  id: number;
  title: string;
  image: string;
  servings: number;
  readyInMinutes: number;
  preparationMinutes: number;
  cookingMinutes: number;
  sourceName: string;
  sourceUrl: string;
  summary: string;
  instructions: string;
  analyzedInstructions: {
    name: string;
    steps: {
      number: number;
      step: string;
      ingredients: { id: number; name: string; image: string }[];
      equipment: { id: number; name: string; image: string }[];
    }[];
  }[];
  extendedIngredients: {
    id: number;
    name: string;
    nameClean: string;
    original: string;
    amount: number;
    unit: string;
    aisle: string;
    image: string;
  }[];
  diets: string[];
  dishTypes: string[];
  cuisines: string[];
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  healthScore: number;
}

export interface ComplexSearchResult {
  id: number;
  title: string;
  image: string;
  imageType: string;
  readyInMinutes?: number;
  servings?: number;
}

export interface ComplexSearchResponse {
  results: ComplexSearchResult[];
  offset: number;
  number: number;
  totalResults: number;
}

// --- API functions (called via proxy route) ---

export async function searchByIngredients(
  ingredients: string,
  number: number = 12
): Promise<SearchResult[]> {
  const cacheKey = `search_${ingredients}_${number}`;
  const cached = getCached<SearchResult[]>(cacheKey);
  if (cached) return cached;

  const res = await fetch(
    `/api/search?type=ingredients&ingredients=${encodeURIComponent(ingredients)}&number=${number}`
  );

  if (!res.ok) throw new Error("Search failed");

  const data: SearchResult[] = await res.json();
  setCache(cacheKey, data);
  return data;
}

export async function complexSearch(params: {
  query?: string;
  cuisine?: string;
  diet?: string;
  maxReadyTime?: number;
  number?: number;
}): Promise<ComplexSearchResponse> {
  const cacheKey = `complex_${JSON.stringify(params)}`;
  const cached = getCached<ComplexSearchResponse>(cacheKey);
  if (cached) return cached;

  const searchParams = new URLSearchParams();
  searchParams.set("type", "complex");
  if (params.query) searchParams.set("query", params.query);
  if (params.cuisine) searchParams.set("cuisine", params.cuisine);
  if (params.diet) searchParams.set("diet", params.diet);
  if (params.maxReadyTime)
    searchParams.set("maxReadyTime", params.maxReadyTime.toString());
  searchParams.set("number", (params.number || 12).toString());

  const res = await fetch(`/api/search?${searchParams.toString()}`);
  if (!res.ok) throw new Error("Search failed");

  const data: ComplexSearchResponse = await res.json();
  setCache(cacheKey, data);
  return data;
}

export async function getRecipeDetail(id: number): Promise<RecipeDetail> {
  const cacheKey = `recipe_${id}`;
  const cached = getCached<RecipeDetail>(cacheKey);
  if (cached) return cached;

  const res = await fetch(`/api/search?type=detail&id=${id}`);
  if (!res.ok) throw new Error("Failed to load recipe");

  const data: RecipeDetail = await res.json();
  setCache(cacheKey, data);
  return data;
}
