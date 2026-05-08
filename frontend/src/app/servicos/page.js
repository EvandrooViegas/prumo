"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/components/LanguageProvider";
import { IMAGES } from "@/lib/images";

export default function ServicosPage() {
  const { t } = useLanguage();
  const images = [IMAGES.surveyorPortrait, IMAGES.worker, IMAGES.crane];

  return (
    <>
      <PageHero
        title={t.services.heroTitle.toUpperCase()}
        subtitle={t.services.heroSubtitle}
        image={IMAGES.heroPages}
        testId="servicos-hero"
      />

      <section
        className="bg-brand-light py-20 md:py-28"
        data-testid="servicos-content"
      >
        <div className="container mx-auto px-6 lg:px-10 space-y-8">
          {/* Top row: service 1 (large left) + service 2 (smaller right) */}
          <div className="grid lg:grid-cols-3 gap-6">
            <ServiceTile
              service={t.services.list[0]}
              image={images[0]}
              index={0}
              tall
              className="lg:col-span-2"
            />
            <ServiceTile
              service={t.services.list[1]}
              image={images[1]}
              index={1}
            />
          </div>

          {/* Bottom row: side card (no image) + service 3 large right */}
          <div className="grid lg:grid-cols-3 gap-6">
            <aside
              className="bg-brand-gray p-8 lg:p-10 flex flex-col justify-between min-h-[420px]"
              data-testid="servicos-side-card"
            >
              <p className="text-brand-dark/80 text-[15px] leading-relaxed">
                {t.services.sideCardCopy}
              </p>
              <Link
                href="/orcamento"
                className="mt-8 inline-flex items-center gap-2 text-brand-dark text-xs font-bold tracking-[0.18em] uppercase border-b-2 border-brand-dark pb-1 self-start hover:text-brand-goldDark hover:border-brand-goldDark transition-colors"
                data-testid="servicos-side-cta"
              >
                {t.cta.contact} <ArrowRight size={14} />
              </Link>
            </aside>

            <ServiceTile
              service={t.services.list[2]}
              image={images[2]}
              index={2}
              tall
              className="lg:col-span-2"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceTile({ service, image, index, tall, className = "" }) {
  return (
    <article
      className={`relative ${tall ? "min-h-[420px]" : "min-h-[420px]"} overflow-hidden group ${className}`}
      data-testid={`servicos-tile-${index}`}
    >
      <Image
        src={image}
        alt={service.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 1024px) 100vw, 66vw"
      />
      <div className="absolute inset-0 tile-overlay" />
      <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9 text-white">
        <h3
          className="font-title uppercase text-3xl tracking-wide"
          data-testid={`servicos-tile-title-${index}`}
        >
          {service.title}
        </h3>
        <p className="mt-3 text-white/85 text-sm leading-relaxed max-w-xl">
          {service.desc}
        </p>
        <ul className="mt-3 text-white/85 text-sm space-y-1 list-disc pl-5">
          {service.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
