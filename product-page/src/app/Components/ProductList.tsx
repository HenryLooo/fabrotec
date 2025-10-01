"use client";
import { Filter, ArrowUpDown } from "lucide-react";
//npm install lucide-react
//ctrl shift p >typscript restart ts server if still getting flagged by eslint
import { Product } from "../types/Product";
import { ProductCard } from "./ProductCard";

interface Props {
  products: Product[];
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (c: string) => void;
  sortOrder: "asc" | "desc" | "none";
  setSortOrder: (o: "asc" | "desc" | "none") => void;
  onSelectProduct: (p: Product) => void;
}

export function ProductList({
  products,
  categories,
  selectedCategory,
  setSelectedCategory,
  sortOrder,
  setSortOrder,
  onSelectProduct,
}: Props) {
  const toggleSort = () =>
    setSortOrder(
      sortOrder === "none" ? "asc" : sortOrder === "asc" ? "desc" : "none"
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5D866C] to-[#F5F5F0] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#F5F5F0] mb-2">
            Product Catalog
          </h1>
          <p className="text-[#F5F5F0] text-lg">
            Discover our collection of {products.length} amazing products
          </p>
        </header>

        {/* Filters + Sort */}
        <div className="bg-[#F5F5F0] rounded-xl shadow-md p-4 mb-8 flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-600" />
            <span className="font-medium text-gray-700">Filter:</span>
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5D866C] bg-white cursor"
          >
            <option value="all">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c.toUpperCase()}
              </option>
            ))}
          </select>

          <div className="flex items-center gap-2 ml-auto">
            <ArrowUpDown size={20} className="text-gray-600" />
            <span className="font-medium text-gray-700">Sort by Price:</span>
            <button
              onClick={toggleSort}
              className="px-4 py-2 bg-[#5D866C] hover:bg-[#C2A68C] text-[#F5F5F0] rounded-lg font-medium transition-colors"
            >
              {sortOrder === "none" && "None"}
              {sortOrder === "asc" && "↑ Low to High"}
              {sortOrder === "desc" && "↓ High to Low"}
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onClick={() => onSelectProduct(p)}
            />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
