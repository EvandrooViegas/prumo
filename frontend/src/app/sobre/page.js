"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/components/LanguageProvider";
import { IMAGES } from "@/lib/images";

export default function SobrePage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={t.about.heroTitle.toUpperCase()} subtitle={t.about.heroSubtitle} image={IMAGES.heroes.about} objectPosition="center 30%" testId="sobre-hero" />

      {/* MISSION & VISION */}
      <section className="bg-brand-light py-20 md:py-28" data-testid="sobre-mission-section">
        <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow">{t.about.eyebrowMission}</span>
            <h2 className="font-title uppercase text-4xl md:text-5xl mt-5 text-brand-dark">{t.about.titleMission}</h2>
            <div className="mt-8 space-y-8">
              <div className="border-l-4 border-brand-gold pl-6">
                <h3 className="font-title uppercase text-2xl text-brand-dark tracking-wide">{t.nav.about === "About us" ? "Mission" : "Missão"}</h3>
                <p className="mt-3 text-brand-dark/70 text-[15px] leading-relaxed">{t.about.missionText}</p>
              </div>
              <div className="border-l-4 border-brand-dark pl-6">
                <h3 className="font-title uppercase text-2xl text-brand-dark tracking-wide">{t.nav.about === "About us" ? "Vision" : "Visão"}</h3>
                <p className="mt-3 text-brand-dark/70 text-[15px] leading-relaxed">{t.about.visionText}</p>
              </div>
            </div>
            <Link href="/orcamento" className="mt-10 btn-gold" data-testid="sobre-cta">{t.cta.contact} <ArrowRight size={16} /></Link>
          </div>
          <div className="space-y-5">
            {/* Main image: wide construction/site shot */}
            <div className="relative overflow-hidden" style={{ height: "460px" }}>
              <Image src={IMAGES.about.main} alt="PRUMO — equipa em obra" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              <div className="absolute inset-0 tile-overlay" />
            </div>
            <div className="grid grid-cols-2 gap-5">
              {/* Portrait site shot — vertical orientation fills nicely */}
              <div className="relative overflow-hidden" style={{ height: "260px" }}>
                <Image src={IMAGES.about.secondary} alt="Gestão de obra" fill className="object-cover" sizes="(max-width:1024px) 50vw, 25vw" />
              </div>
              {/* Second portrait shot */}
              <div className="relative overflow-hidden" style={{ height: "260px" }}>
                <Image src={IMAGES.about.portrait} alt="Construção civil" fill className="object-cover" sizes="(max-width:1024px) 50vw, 25vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white py-20 md:py-28" data-testid="sobre-values-section">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="eyebrow">{t.about.eyebrowValues}</span>
            <h2 className="font-title uppercase text-4xl md:text-5xl mt-5 text-brand-dark">{t.about.titleValues}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.about.values.map((v, i) => (
              <div key={i} className="bg-brand-light border border-brand-gray p-7 hover:border-brand-gold transition-colors duration-300" data-testid={`sobre-value-${i}`}>
                <div className="w-10 h-10 bg-brand-gold flex items-center justify-center mb-4">
                  <span className="font-title text-brand-dark text-xl">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-title uppercase text-xl text-brand-dark tracking-wider">{v.title}</h3>
                <p className="text-brand-dark/65 text-sm leading-relaxed mt-3">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS — background is a wide construction shot */}
      <section className="relative bg-brand-dark text-white py-24 md:py-32 grain overflow-hidden" data-testid="sobre-numbers-section">
        <div className="absolute inset-0 opacity-15">
          <Image src={IMAGES.about.numbersBg} alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <div className="text-center mb-14">
            <span className="eyebrow-dark">{t.about.eyebrowNumbers}</span>
            <h2 className="font-title uppercase text-4xl md:text-5xl mt-5">{t.about.titleNumbers}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.about.stats.map((s, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 text-center hover:border-brand-gold transition-colors" data-testid={`sobre-stat-${i}`}>
                <div className="font-title text-brand-gold text-4xl md:text-5xl">{s.value}</div>
                <div className="font-title uppercase text-white text-lg tracking-wider mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
