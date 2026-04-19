"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">
            Cook<span className="text-amber-600">From</span>What
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-amber-600 transition-colors">
            Search
          </Link>
          <Link href="/blog" className="hover:text-amber-600 transition-colors">
            Recipes
          </Link>
          <Link
            href="/about"
            className="hover:text-amber-600 transition-colors"
          >
            About
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="flex flex-col px-4 py-3 gap-3 text-sm font-medium text-gray-600">
            <Link
              href="/"
              className="hover:text-amber-600"
              onClick={() => setMenuOpen(false)}
            >
              Search
            </Link>
            <Link
              href="/blog"
              className="hover:text-amber-600"
              onClick={() => setMenuOpen(false)}
            >
              Recipes
            </Link>
            <Link
              href="/about"
              className="hover:text-amber-600"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
