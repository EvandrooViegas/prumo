"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectHeroCarousel({ images, title, subtitle, dark = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlay || !images || images.length <= 1) return;
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay, images, goToNext]);

  // Resume autoplay after 8s of inactivity
  useEffect(() => {
    if (!isAutoPlay) {
      const timer = setTimeout(() => setIsAutoPlay(true), 8000);
      return () => clearTimeout(timer);
    }
  }, [isAutoPlay]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    goToPrevious();
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    goToNext();
  };

  const goToSlide = (index) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative overflow-hidden w-full group" style={{ height: "65vh", minHeight: "460px" }}>
      {/* Slides */}
      {images.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
          style={{ opacity: i === currentIndex ? 1 : 0 }}
        >
          <Image
            src={img}
            alt={`${title} — ${i + 1}`}
            fill
            className="object-cover"
            sizes="100vw"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Gradient overlay — pointer-events-none so buttons remain clickable */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,11,0,0.82)] via-[rgba(16,11,0,0.2)] to-transparent pointer-events-none" />

      {/* Title & subtitle — pointer-events-none so nav buttons stay clickable */}
      <div className="absolute inset-x-0 bottom-0 p-10 md:p-14 z-10 pointer-events-none">
        <h2
          className="font-title uppercase text-white leading-tight"
          style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)" }}
        >
          {title}
        </h2>
        <p className="text-brand-gold font-bold tracking-wider uppercase text-sm mt-3">
          {subtitle}
        </p>
      </div>

      {/* Navigation arrows — squared, matching page design */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className={`absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center transition-all duration-300 ${
              dark
                ? "bg-brand-gold/10 hover:bg-brand-gold/30 text-brand-gold"
                : "bg-white/10 hover:bg-white/25 text-white"
            } opacity-0 group-hover:opacity-100 backdrop-blur-sm`}
            aria-label="Previous image"
          >
            <ChevronLeft size={22} strokeWidth={2.5} />
          </button>

          <button
            onClick={handleNext}
            className={`absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center transition-all duration-300 ${
              dark
                ? "bg-brand-gold/10 hover:bg-brand-gold/30 text-brand-gold"
                : "bg-white/10 hover:bg-white/25 text-white"
            } opacity-0 group-hover:opacity-100 backdrop-blur-sm`}
            aria-label="Next image"
          >
            <ChevronRight size={22} strokeWidth={2.5} />
          </button>
        </>
      )}

      {/* Counter badge — top right */}
      {images.length > 1 && (
        <div className="absolute top-6 right-6 z-20">
          <span className="text-white text-[10px] font-bold tracking-[0.22em] uppercase bg-black/40 px-4 py-2 backdrop-blur-sm">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      )}

      {/* Dot indicators — bottom center */}
      {images.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? "bg-brand-gold w-6 h-1.5"
                  : "bg-white/40 hover:bg-white/60 w-3 h-1.5"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
