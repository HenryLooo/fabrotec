"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
//npm install lucide-react
//ctrl shift p >typscript restart ts server if still getting flagged by eslint
import { useState } from "react";

export function ImageCarousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="relative">
      <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative">
        <img
          src={images[index]}
          alt={`${title} image`}
          className="w-full h-full object-cover"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="hover:bg-[#5D866C] cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg transition-all hover:scale-115"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="hover:bg-[#5D866C] cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg transition-all hover:scale-115"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i === index ? "bg-[#5D866C] w-6" : "bg-[#E6D8C3]"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
              i === index
                ? "border-[#5D866C]"
                : "border-gray-200 hover:border-[#5D866C]"
            }`}
          >
            <img
              src={img}
              alt={`${title} ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
