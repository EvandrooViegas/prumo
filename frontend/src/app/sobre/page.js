"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/components/LanguageProvider";
import { IMAGES } from "@/lib/images";

export default function SobrePage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        title={t.about.heroTitle.toUpperCase()}
        subtitle={t.about.heroSubtitle}
        image={IMAGES.heroPages}
        testId="sobre-hero"
      />

      {/* MISSION */}
      <section
        className="bg-brand-light py-20 md:py-28"
        data-testid="sobre-mission-section"
      >
        <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow">{t.about.eyebrowMission}</span>
            <h2 className="font-title uppercase text-5xl md:text-6xl mt-5 text-brand-dark">
              {t.about.titleMission}
            </h2>
            <p className="mt-6 max-w-md text-brand-dark/70 text-[15px] leading-relaxed">
              {t.about.missionText}
            </p>
            <div className="mt-8 relative h-[420px] overflow-hidden">
              <Image
                src={IMAGES.about}
                alt="Worker on site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 tile-overlay" />
            </div>
          </div>

          <div className="space-y-6">
            {t.about.pillars.map((p, i) => (
              <div
                key={i}
                className="bg-white border border-brand-gray p-7 lg:p-9"
                data-testid={`sobre-pillar-${i}`}
              >
                <h3 className="font-title uppercase tracking-wider text-2xl text-brand-dark text-center pb-4 border-b border-brand-gray/60">
                  {`${t.nav.about === "About us" ? "Mission" : "Missão"} ${i + 1}`}
                </h3>
                <p className="mt-5 text-brand-dark/70 text-[14.5px] leading-relaxed text-center">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section
        className="relative bg-brand-dark text-white py-20 md:py-28 grain"
        data-testid="sobre-numbers-section"
      >
        <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-start relative z-10">
          <div>
            <span className="eyebrow-dark">{t.about.eyebrowNumbers}</span>
            <h2 className="font-title uppercase text-5xl md:text-6xl mt-5 leading-[0.95]">
              {t.about.titleNumbers}
            </h2>
          </div>
          <div className="space-y-5">
            {t.about.stats.map((s, i) => (
              <div
                key={i}
                className="bg-brand-gray text-brand-dark p-6 lg:p-7"
                data-testid={`sobre-stat-${i}`}
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-title text-3xl text-brand-goldDark">
                    {s.value}
                  </span>
                  <span className="font-title uppercase text-2xl tracking-wide">
                    {s.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
