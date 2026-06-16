"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/components/LanguageProvider";
import { IMAGES } from "@/lib/images";

export default function BimPage() {
  const { t } = useLanguage();
  const b = t.bim;

  return (
    <>
      <PageHero
        title={b.heroTitle}
        subtitle={b.heroSubtitle}
        image={IMAGES.siteWide1}
        objectPosition="center 50%"
        testId="bim-hero"
      />

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32" data-testid="bim-intro">
        <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="eyebrow">{b.eyebrow}</span>
            <h2 className="font-title uppercase text-5xl md:text-6xl mt-5 text-brand-dark leading-[0.93]">
              {b.title}
            </h2>
            <p className="mt-7 text-brand-dark/70 text-[15px] leading-relaxed">{b.intro}</p>
            <p className="mt-5 text-brand-dark/70 text-[15px] leading-relaxed">{b.why}</p>
            <Link href="/orcamento" className="mt-10 btn-gold">
              {t.cta.contact} <ArrowRight size={16} />
            </Link>
          </div>

          {/* Staggered image pair */}
          <div className="grid grid-cols-2 gap-5">
            <div className="relative overflow-hidden" style={{ height: "500px" }}>
              <Image
                src={IMAGES.justiceP1}
                alt="BIM — modelo digital"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative overflow-hidden mt-14" style={{ height: "500px" }}>
              <Image
                src={IMAGES.siteWide5}
                alt="BIM — coordenação"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 SERVICE CARDS ───────────────────────────────────────────────── */}
      <section className="bg-brand-light py-24 md:py-32" data-testid="bim-services">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {b.services.map((s, i) => (
              <div
                key={i}
                className="bg-white border border-brand-gray p-8 hover:border-brand-gold transition-colors duration-300"
                data-testid={`bim-service-${i}`}
              >
                <div className="w-10 h-10 bg-brand-gold flex items-center justify-center mb-5">
                  <span className="font-title text-brand-dark text-lg">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-title uppercase text-2xl text-brand-dark tracking-wide">{s.title}</h3>
                <p className="text-brand-dark/65 text-sm leading-relaxed mt-4">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DETAIL SECTIONS ───────────────────────────────────────────────── */}
      <section className="bg-brand-dark text-white py-24 md:py-32 grain" data-testid="bim-detail">
        <div className="container mx-auto px-6 lg:px-10">

          {/* Models + image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden" style={{ height: "480px" }}>
              <Image
                src={IMAGES.siteWide4}
                alt="Modelos BIM"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h3 className="font-title uppercase text-3xl md:text-4xl text-brand-gold leading-tight">
                {b.services[0].title}
              </h3>
              <p className="mt-6 text-white/75 text-[15px] leading-relaxed">{b.models}</p>
              <p className="mt-5 text-white/75 text-[15px] leading-relaxed">{b.coordination}</p>
            </div>
          </div>

          <div className="border-t border-white/10 mt-16 pt-16 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-title uppercase text-3xl md:text-4xl text-brand-gold leading-tight">
                {b.services[1].title}
              </h3>
              <p className="mt-6 text-white/75 text-[15px] leading-relaxed">{b.clash}</p>
              <p className="mt-5 text-white/75 text-[15px] leading-relaxed">{b.openBim}</p>
            </div>
            <div className="relative overflow-hidden" style={{ height: "480px" }}>
              <Image
                src={IMAGES.siteWide3}
                alt="Clash Detection"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="border-t border-white/10 mt-16 pt-16 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden" style={{ height: "480px" }}>
              <Image
                src={IMAGES.siteWide6}
                alt="4D 5D BIM"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h3 className="font-title uppercase text-3xl md:text-4xl text-brand-gold leading-tight">
                {b.services[3].title}
              </h3>
              <p className="mt-6 text-white/75 text-[15px] leading-relaxed">{b.dimensions}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM + CLOSING ────────────────────────────────────────────────── */}
      <section className="bg-brand-light py-24 md:py-32" data-testid="bim-team">
        <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="eyebrow">PRUMO SOALHEIRO</span>
            <h2 className="font-title uppercase text-5xl md:text-6xl mt-5 text-brand-dark leading-[0.93]">
              {t.nav.about === "About us" ? "Our team" : "A nossa equipa"}
            </h2>
            <p className="mt-7 text-brand-dark/70 text-[15px] leading-relaxed">{b.team}</p>
            <p className="mt-5 text-brand-dark/70 text-[15px] leading-relaxed">{b.closing}</p>

            <ul className="mt-8 space-y-3">
              {b.services.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-dark/75 text-[15px]">
                  <CheckCircle size={18} className="text-brand-gold shrink-0 mt-0.5" />
                  <span><strong className="font-bold text-brand-dark">{s.title}</strong> — {s.desc}</span>
                </li>
              ))}
            </ul>

            <Link href="/orcamento" className="mt-10 btn-gold">
              {t.cta.contact} <ArrowRight size={16} />
            </Link>
          </div>

          {/* Image trio */}
          <div className="space-y-5">
            <div className="relative overflow-hidden" style={{ height: "280px" }}>
              <Image src={IMAGES.siteWide2} alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="relative overflow-hidden" style={{ height: "220px" }}>
                <Image src={IMAGES.siteTall1} alt="" fill className="object-cover" sizes="(max-width:1024px) 50vw, 25vw" />
              </div>
              <div className="relative overflow-hidden" style={{ height: "220px" }}>
                <Image src={IMAGES.siteTall2} alt="" fill className="object-cover" sizes="(max-width:1024px) 50vw, 25vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-brand-gold py-16">
        <div className="container mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="font-title uppercase text-4xl md:text-5xl text-brand-dark leading-tight">
              {t.nav.about === "About us" ? "Digitalise your next project" : "Digitalize o seu próximo projeto"}
            </h2>
            <p className="mt-3 text-brand-dark/70 text-base">
              {t.nav.about === "About us"
                ? "Get in touch and find out how BIM can transform your project."
                : "Fale connosco e descubra como o BIM pode transformar o seu projeto."}
            </p>
          </div>
          <Link
            href="/orcamento"
            className="bg-brand-dark text-white inline-flex items-center gap-3 px-10 py-5 font-bold tracking-[0.12em] uppercase text-sm hover:bg-brand-dark/80 transition-colors shrink-0"
          >
            {t.cta.contact} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
