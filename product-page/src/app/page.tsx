"use client";
import React, { useState, useEffect, useMemo } from "react";
import { ProductList } from "./Components/ProductList";
import { ProductDetail } from "./Components/ProductDetails";
import type { Product } from "./types/Product";

export default function ProductPageApp() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "none">("none");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/products?limit=25"); //change limit to liking
      const data = await res.json();
      setProducts(data.products);
      setCategories(
        Array.from(
          new Set(data.products.map((p: Product) => p.category))
        ) as string[]
      );
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];
    if (selectedCategory !== "all")
      result = result.filter((p) => p.category === selectedCategory);
    if (sortOrder === "asc") result.sort((a, b) => a.price - b.price);
    if (sortOrder === "desc") result.sort((a, b) => b.price - a.price);
    return result;
  }, [products, selectedCategory, sortOrder]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br to-[#F5F5F0] from-[#E6D8C3] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#5D866C] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading products...</p>
        </div>
      </div>
    );
  }

  return selectedProduct ? (
    <ProductDetail
      product={selectedProduct}
      onBack={() => setSelectedProduct(null)}
    />
  ) : (
    <ProductList
      products={filteredAndSortedProducts}
      categories={categories}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      sortOrder={sortOrder}
      setSortOrder={setSortOrder}
      onSelectProduct={setSelectedProduct}
    />
  );
}
