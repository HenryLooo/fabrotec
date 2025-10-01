"use client";
import { Product } from "../types/Product";
export function ProductCard({
  product,
  onClick,
}: {
  product: Product;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 cursor-pointer overflow-hidden
           hover:-translate-y-1 hover:scale-105"
    >
      <div className="aspect-square bg-gray-100 overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
          {product.category.toUpperCase()}
        </span>
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <span className="text-2xl font-bold text-[#5D866C]">
          ${product.price}
        </span>
      </div>
    </div>
  );
}
