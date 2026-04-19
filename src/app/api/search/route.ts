import { NextRequest, NextResponse } from "next/server";

// Proxy route so the Spoonacular API key never reaches the browser
const API_KEY = process.env.SPOONACULAR_API_KEY || "";
const API_BASE = "https://api.spoonacular.com";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") || "ingredients";

  if (!API_KEY) {
    return NextResponse.json(
      { error: "Spoonacular API key not configured" },
      { status: 500 }
    );
  }

  try {
    let url: string;

    if (type === "ingredients") {
      const ingredients = searchParams.get("ingredients") || "";
      const number = searchParams.get("number") || "12";
      url = `${API_BASE}/recipes/findByIngredients?ingredients=${encodeURIComponent(ingredients)}&number=${number}&ranking=1&ignorePantry=true&apiKey=${API_KEY}`;
    } else if (type === "complex") {
      const params = new URLSearchParams();
      params.set("apiKey", API_KEY);
      params.set("addRecipeInformation", "true");
      const query = searchParams.get("query");
      const cuisine = searchParams.get("cuisine");
      const diet = searchParams.get("diet");
      const maxReadyTime = searchParams.get("maxReadyTime");
      const number = searchParams.get("number") || "12";
      if (query) params.set("query", query);
      if (cuisine) params.set("cuisine", cuisine);
      if (diet) params.set("diet", diet);
      if (maxReadyTime) params.set("maxReadyTime", maxReadyTime);
      params.set("number", number);
      url = `${API_BASE}/recipes/complexSearch?${params.toString()}`;
    } else if (type === "detail") {
      const id = searchParams.get("id");
      if (!id) {
        return NextResponse.json(
          { error: "Recipe ID required" },
          { status: 400 }
        );
      }
      url = `${API_BASE}/recipes/${id}/information?includeNutrition=false&apiKey=${API_KEY}`;
    } else {
      return NextResponse.json(
        { error: "Invalid search type" },
        { status: 400 }
      );
    }

    const res = await fetch(url);

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Spoonacular API error:", res.status, errorText);
      return NextResponse.json(
        { error: "Spoonacular API error" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Search API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
