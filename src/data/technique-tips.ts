// Technique tips matched to cooking methods/equipment/ingredients
// These auto-attach to Spoonacular recipe results based on keyword matching
// The differentiator: no other recipe site explains WHY a technique works

export interface TechniqueTip {
  id: string;
  title: string;
  keywords: string[]; // matched against recipe steps, equipment, ingredients
  tip: string;
}

export const techniqueTips: TechniqueTip[] = [
  {
    id: "salt-pasta-water",
    title: "Salt Your Pasta Water",
    keywords: ["pasta", "boil", "noodles", "spaghetti", "penne", "rigatoni", "linguine", "fettuccine"],
    tip: "The water should taste like the sea. About 1 tablespoon of kosher salt per quart of water. This is the only chance to season the pasta itself. No amount of sauce fixes bland noodles.",
  },
  {
    id: "rest-meat",
    title: "Rest Meat Before Cutting",
    keywords: ["steak", "chicken breast", "pork chop", "roast", "grill", "pan-sear", "sear"],
    tip: "Let meat rest for 5-10 minutes after cooking. The muscle fibers relax and reabsorb the juices. Cut too early and those juices end up on the cutting board instead of in the meat.",
  },
  {
    id: "mise-en-place",
    title: "Prep Everything Before You Start Cooking",
    keywords: ["mince", "dice", "chop", "julienne", "slice"],
    tip: "Read the recipe once, then prep all your ingredients before turning on the stove. Cooking moves fast once heat is involved. Stopping to chop garlic while your onions burn is how dishes go wrong.",
  },
  {
    id: "hot-pan-cold-oil",
    title: "Hot Pan, Cold Oil",
    keywords: ["saute", "saut\u00e9", "pan fry", "stir fry", "skillet", "frying pan"],
    tip: "Heat the pan first, then add oil. The oil should shimmer almost immediately. This creates a non-stick surface on any pan and ensures food sears instead of steaming.",
  },
  {
    id: "deglaze",
    title: "Deglaze the Pan",
    keywords: ["deglaze", "fond", "pan sauce", "wine", "broth", "stock"],
    tip: "Those brown bits stuck to the bottom of your pan after searing are called fond. They are concentrated flavor. Add liquid (wine, broth, water) to a hot pan and scrape them up. Instant sauce base.",
  },
  {
    id: "dont-crowd-pan",
    title: "Don't Crowd the Pan",
    keywords: ["brown", "sear", "crispy", "golden", "caramelize"],
    tip: "Food releases moisture when it cooks. If the pan is too full, that moisture builds up as steam and your food boils instead of browning. Cook in batches if needed. Brown comes from direct contact with hot metal, not from crowding.",
  },
  {
    id: "acid-balance",
    title: "Finish with Acid",
    keywords: ["lemon", "lime", "vinegar", "citrus"],
    tip: "A squeeze of lemon or a splash of vinegar at the end of cooking brightens every dish. Acid lifts and separates flavors the way salt enhances them. If something tastes flat, it probably needs acid, not more salt.",
  },
  {
    id: "toast-spices",
    title: "Toast Your Spices",
    keywords: ["cumin", "coriander", "paprika", "chili powder", "curry", "spice", "seasoning"],
    tip: "Dry spices bloom when heated in oil or a dry pan for 30-60 seconds. The heat releases aromatic compounds that stay locked in raw spices. You will smell the difference immediately.",
  },
  {
    id: "sharp-knife",
    title: "A Sharp Knife Is a Safe Knife",
    keywords: ["knife", "cutting board", "chop", "mince", "dice"],
    tip: "Dull knives slip off food and require more force, which means less control. A sharp knife goes where you point it. Hone your knife on a steel before every use. Sharpen it properly every few months.",
  },
  {
    id: "carry-over-cooking",
    title: "Carry-Over Cooking Is Real",
    keywords: ["oven", "roast", "bake", "internal temperature", "thermometer"],
    tip: "Food keeps cooking after you remove it from heat. The interior temperature of a roast can rise 5-10 degrees while resting. Pull meat 5 degrees before your target temp. It will coast to the finish line on its own.",
  },
  {
    id: "onion-sweat",
    title: "Sweat Onions Low and Slow",
    keywords: ["onion", "onions", "shallot", "soften"],
    tip: "Sweating means cooking onions over medium-low heat until they turn translucent and soft, about 5-7 minutes. This drives off the harsh sulfur compounds and develops sweetness. High heat browns them before they sweeten.",
  },
  {
    id: "emulsion",
    title: "Build an Emulsion for Creamy Sauces",
    keywords: ["vinaigrette", "dressing", "emulsify", "cream sauce", "butter sauce"],
    tip: "An emulsion is fat and water forced to stay mixed. Mustard, egg yolk, and starchy pasta water are natural emulsifiers. Drizzle oil slowly while whisking to build a stable emulsion. Dump it all at once and it breaks.",
  },
  {
    id: "starchy-pasta-water",
    title: "Save Your Pasta Water",
    keywords: ["pasta water", "sauce", "toss pasta"],
    tip: "The starchy water left after cooking pasta is a free sauce thickener. Ladle out a cup before draining. Add it a splash at a time to your sauce while tossing the pasta. The starch binds sauce to noodles.",
  },
  {
    id: "bloom-garlic",
    title: "Garlic Burns Fast",
    keywords: ["garlic", "minced garlic"],
    tip: "Minced garlic goes from fragrant to bitter in about 60 seconds over medium heat. Add it after onions are softened, not at the same time. Stir constantly and move to the next step the moment you smell it.",
  },
  {
    id: "dry-protein",
    title: "Pat Protein Dry Before Cooking",
    keywords: ["chicken", "fish", "salmon", "shrimp", "tofu", "protein"],
    tip: "Surface moisture is the enemy of a good sear. Pat chicken, fish, or tofu dry with paper towels before it hits the pan. Wet surfaces steam. Dry surfaces brown. The difference in texture is dramatic.",
  },
  {
    id: "low-slow-beans",
    title: "Cook Beans Low and Slow",
    keywords: ["beans", "lentils", "chickpeas", "simmer", "stew"],
    tip: "Aggressive boiling breaks bean skins and turns them to mush. A gentle simmer keeps them intact and creamy inside. If you add acid (tomatoes, vinegar) too early, the skins toughen. Add acid in the last 15 minutes.",
  },
  {
    id: "rice-ratio",
    title: "Rice Is About Ratio and Rest",
    keywords: ["rice", "rice cooker", "jasmine", "basmati", "brown rice"],
    tip: "White rice: 1 cup rice to 1.5 cups water. Bring to a boil, reduce to lowest heat, cover, 18 minutes. Then turn off heat and let it sit covered for 10 minutes. That resting period finishes the cooking with residual steam.",
  },
  {
    id: "oven-preheat",
    title: "Actually Preheat Your Oven",
    keywords: ["preheat", "oven", "bake", "roast"],
    tip: "Most ovens take 15-20 minutes to fully preheat, even after the indicator says ready. The walls and racks need to absorb heat too. Put food in a cold oven and the first 10 minutes are wasted on uneven heating.",
  },
  {
    id: "taste-as-you-go",
    title: "Taste as You Go",
    keywords: ["season", "salt", "pepper", "adjust", "taste"],
    tip: "Professional cooks taste constantly. Every time you add an ingredient, taste. Seasoning in layers builds depth. Dumping salt at the end is a rescue mission, not a technique.",
  },
  {
    id: "fresh-herbs-last",
    title: "Add Fresh Herbs at the End",
    keywords: ["basil", "cilantro", "parsley", "dill", "mint", "fresh herbs"],
    tip: "Fresh herbs lose their flavor and color when cooked too long. Stir them in during the last minute or use them as a garnish. Dried herbs can go in early because they need time to rehydrate and release flavor.",
  },
  {
    id: "mushroom-sear",
    title: "Don't Move Mushrooms",
    keywords: ["mushroom", "mushrooms"],
    tip: "Mushrooms are 90% water. When they hit a hot pan, they release moisture. Let them sit undisturbed for 3-4 minutes until the water evaporates and the bottoms turn golden brown. Stirring too early traps steam and makes them rubbery.",
  },
  {
    id: "one-pot-starch",
    title: "One-Pot Pasta Relies on Starch",
    keywords: ["one pot", "one-pot", "absorbed"],
    tip: "When pasta cooks directly in a measured amount of liquid, the released starch thickens everything into a creamy coating. Same principle as risotto. Too much liquid and you get soup. Too little and it sticks. Follow the ratio exactly.",
  },
  {
    id: "mash-to-thicken",
    title: "Mash Beans to Thicken Stew",
    keywords: ["bean stew", "white bean", "great northern", "cannellini", "navy bean"],
    tip: "Mash about a third of the cooked beans against the side of the pot. The broken starches dissolve into the broth and create body without cream, flour, or cornstarch. More than a third turns it into puree.",
  },
  {
    id: "canned-fish",
    title: "Canned Fish Is Underrated",
    keywords: ["sardine", "herring", "mackerel", "anchovy", "canned fish", "tinned fish", "kippered"],
    tip: "Canned fish is fully cooked, shelf-stable for years, and costs $2-4 per can. The smoking or curing process gives it enough flavor to anchor a whole meal. Pair with contrasting textures (crispy, crunchy, soft) to make it work.",
  },
  {
    id: "quick-pickle",
    title: "Quick Pickle for Instant Brightness",
    keywords: ["pickle", "pickled", "red onion", "rice vinegar", "quick pickle"],
    tip: "Thinly slice onion or vegetables, toss with vinegar and a pinch of salt, wait 5 minutes. The acid softens the raw bite and adds a bright, tangy crunch to any bowl or taco. No canning required.",
  },
];

// Match tips to a recipe based on its ingredients, equipment, and steps
export function matchTips(
  ingredients: string[],
  steps: string[],
  equipment: string[]
): TechniqueTip[] {
  const allText = [...ingredients, ...steps, ...equipment]
    .join(" ")
    .toLowerCase();

  const matched = techniqueTips.filter((tip) =>
    tip.keywords.some((keyword) => allText.includes(keyword.toLowerCase()))
  );

  // Return max 3 tips per recipe to keep it useful, not overwhelming
  return matched.slice(0, 3);
}
