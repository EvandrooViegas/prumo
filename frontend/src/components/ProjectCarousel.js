"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectCarousel({ images, projectTitle, dark = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, images.length]);

  const goToPrevious = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
  };

  const resumeAutoPlay = () => {
    setTimeout(() => setIsAutoPlay(true), 8000); // Resume after 8 seconds of inactivity
  };

  useEffect(() => {
    if (!isAutoPlay) {
      resumeAutoPlay();
    }
  }, [isAutoPlay]);

  return (
    <div className="relative w-full bg-black overflow-hidden group">
      {/* Main image container */}
      <div className="relative w-full" style={{ height: "520px" }}>
        <Image
          src={images[currentIndex]}
          alt={`${projectTitle} — ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-700"
          sizes="100vw"
          priority
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

        {/* Left arrow */}
        <button
          onClick={goToPrevious}
          className={`absolute left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-300 ${
            dark
              ? "bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold"
              : "bg-white/10 hover:bg-white/20 text-white"
          } opacity-0 group-hover:opacity-100`}
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right arrow */}
        <button
          onClick={goToNext}
          className={`absolute right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-300 ${
            dark
              ? "bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold"
              : "bg-white/10 hover:bg-white/20 text-white"
          } opacity-0 group-hover:opacity-100`}
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        {/* Image counter */}
        <div className="absolute bottom-6 left-6 z-10">
          <span className="text-white text-sm font-bold tracking-widest uppercase bg-black/40 px-4 py-2 rounded">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* Dot navigation */}
      <div className="flex items-center justify-center gap-2 py-6 bg-black/50">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? `${dark ? "bg-brand-gold" : "bg-white"} w-3 h-3`
                : `${dark ? "bg-brand-gold/30 hover:bg-brand-gold/50" : "bg-white/30 hover:bg-white/50"} w-2 h-2`
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail strip */}
      <div className="bg-black px-4 py-4 overflow-x-auto">
        <div className="flex gap-3">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative shrink-0 rounded-lg overflow-hidden transition-all duration-300 border-2 ${
                index === currentIndex
                  ? `${dark ? "border-brand-gold" : "border-white"} ring-2 ${dark ? "ring-brand-gold" : "ring-white"}`
                  : `${dark ? "border-brand-gold/20 hover:border-brand-gold/50" : "border-white/20 hover:border-white/50"}`
              }`}
              style={{ width: "120px", height: "80px" }}
              aria-label={`Go to image ${index + 1}`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                fill
                className={`object-cover transition-opacity duration-300 ${
                  index === currentIndex ? "opacity-100" : "opacity-60 hover:opacity-80"
                }`}
                sizes="120px"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
