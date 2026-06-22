// Reusable hero used by all sub-pages — full viewport, image-forward.
// Each page passes its own unique image so they all look distinct.
import Image from "next/image";

export default function PageHero({
  title,
  subtitle,
  image,
  // objectPosition lets callers fine-tune what part of the image is centred
  objectPosition = "center",
  testId = "page-hero",
}) {
  return (
    <section
      className="relative flex items-end overflow-hidden"
      style={{ minHeight: "85vh" }}
      data-testid={testId}
    >
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover"
        style={{ objectPosition }}
        sizes="100vw"
      />
      {/* Stronger gradient bottom-up so text is always readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,11,0,0.92)] via-[rgba(16,11,0,0.45)] to-[rgba(16,11,0,0.2)]" />

      <div className="relative z-10 w-full container mx-auto px-6 lg:px-10 pb-20 pt-40">
        <h1
          className="font-title text-white uppercase leading-[0.9] tracking-tight animate-fade-up"
          style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)" }}
          data-testid="page-hero-title"
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-7 max-w-2xl text-white/80 text-base md:text-lg leading-relaxed animate-fade-up"
            style={{ animationDelay: "130ms" }}
            data-testid="page-hero-subtitle"
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
