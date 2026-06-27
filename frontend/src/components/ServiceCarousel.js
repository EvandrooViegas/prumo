"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ServiceCarousel({ images, title, autoFlipInterval = 4000 }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, autoFlipInterval);
    return () => clearInterval(timer);
  }, [autoPlay, images.length, autoFlipInterval]);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-full group" data-testid="service-carousel">
      {/* Main image container */}
      <div className="relative w-full h-full overflow-hidden bg-brand-dark">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`${title} - Slide ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 66vw"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/30 via-transparent to-brand-dark/30 opacity-40 pointer-events-none" />

        {/* Premium top gradient */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/10 hover:bg-brand-gold hover:text-brand-dark text-white backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/10 hover:bg-brand-gold hover:text-brand-dark text-white backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Slide counter - only show if multiple images */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/40 text-white text-xs font-bold px-3 py-1.5 backdrop-blur-sm rounded-full z-10">
            {current + 1} / {images.length}
          </div>
        )}

        {/* Bottom indicator bar with gradient */}
        {images.length > 1 && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold via-brand-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </div>

      {/* Thumbnail indicators - only show if multiple images */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-brand-gold w-5"
                  : "bg-white/40 w-1.5 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
