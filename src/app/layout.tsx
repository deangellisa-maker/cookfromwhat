import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "CookFromWhat - Skip the life story. Get to the recipe.",
    template: "%s | CookFromWhat",
  },
  description:
    "Search recipes by ingredients you already have. No life stories, no scrolling past 12 paragraphs. Just recipes.",
  keywords: [
    "recipe search",
    "cook from ingredients",
    "easy recipes",
    "what to cook",
    "pantry recipes",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "CookFromWhat",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* AdSense - uncomment when approved */}
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        /> */}
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900 font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
