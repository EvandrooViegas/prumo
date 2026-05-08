// Reusable hero section used by all sub-pages (Sobre nós, Serviços, Projetos, Orçamento)
// Big Anton title centred over a darkened construction image.
import Image from "next/image";

export default function PageHero({
  title,
  subtitle,
  image = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80",
  testId = "page-hero",
}) {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      data-testid={testId}
    >
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 container mx-auto px-6 lg:px-10 pt-32 pb-16 text-center">
        <h1
          className="font-title text-white uppercase text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight animate-fade-up"
          data-testid="page-hero-title"
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-6 max-w-2xl mx-auto text-white/85 text-base md:text-lg leading-relaxed animate-fade-up"
            style={{ animationDelay: "120ms" }}
            data-testid="page-hero-subtitle"
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
