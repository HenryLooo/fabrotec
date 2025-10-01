"use client";
import { ChevronLeft } from "lucide-react";
//npm install lucide-react
//ctrl shift p >typscript restart ts server if still getting flagged by eslint
import { Product } from "../types/Product";
import { ImageCarousel } from "../ImageCarousel";

export function ProductDetail({
  product,
  onBack,
}: {
  product: Product;
  onBack: () => void;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5D866C] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onBack}
          className="mb-6 px-4 py-2 bg-[#F5F5F0] hover:bg-[#E6D8C3] cursor-pointer rounded-lg shadow hover:shadow-md transition-shadow flex items-center gap-2 text-gray-700"
        >
          <ChevronLeft size={20}/> Back to
          Products
        </button>

        <div className="bg-[#F5F5F0] rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10">
            {/* Carousel */}
            <ImageCarousel images={product.images} title={product.title} />

            {/* Details */}
            <div className="flex flex-col">
              <span className="inline-block px-3 py-1 bg-[#C2A68C] text-[#F5F5F0] rounded-full text-sm font-medium mb-3 w-fit">
                {product.category.toUpperCase()}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>
              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl font-bold text-[#5D866C]">
                    ${product.price}
                  </span>
                </div>
                {product.stock > 0 ? (
                  <span className="px-4 py-2 bg-[#5D866C] text-white rounded-lg font-semibold">
                    ✓ In Stock ({product.stock} available)
                  </span>
                ) : (
                  <span className="px-4 py-2 bg-red-100 text-red-800 rounded-lg font-semibold">
                    Out of Stock
                  </span>
                )}
              </div>
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  Description
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
              <button className="cursor-pointer w-full bg-[#C2A68C] hover:bg-[#5D866C] text-white font-semibold py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl mt-auto">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
