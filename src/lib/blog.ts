import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src/content/blog");

export interface BlogPostMeta {
  title: string;
  slug: string;
  description: string;
  keywords: string[];
  date: string;
  author: string;
  image: string;
  prep_time: number;
  cook_time: number;
  total_time: number;
  servings: number;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));

  const posts = files
    .map((filename) => {
      const filePath = path.join(CONTENT_DIR, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        title: data.title || "",
        slug: data.slug || filename.replace(".md", ""),
        description: data.description || "",
        keywords: data.keywords || [],
        date: data.date ? String(data.date) : "",
        author: data.author || "CookFromWhat",
        image: data.image || "",
        prep_time: data.prep_time || 0,
        cook_time: data.cook_time || 0,
        total_time: data.total_time || 0,
        servings: data.servings || 0,
      } as BlogPostMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(CONTENT_DIR)) return null;

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));

  for (const filename of files) {
    const filePath = path.join(CONTENT_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    const postSlug = data.slug || filename.replace(".md", "");
    if (postSlug === slug) {
      return {
        title: data.title || "",
        slug: postSlug,
        description: data.description || "",
        keywords: data.keywords || [],
        date: data.date ? String(data.date) : "",
        author: data.author || "CookFromWhat",
        image: data.image || "",
        prep_time: data.prep_time || 0,
        cook_time: data.cook_time || 0,
        total_time: data.total_time || 0,
        servings: data.servings || 0,
        content,
      };
    }
  }

  return null;
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));

  return files.map((filename) => {
    const filePath = path.join(CONTENT_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return data.slug || filename.replace(".md", "");
  });
}
