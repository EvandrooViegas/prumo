"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
        image={IMAGES.heroes.bim}
        objectPosition="center 50%"
        testId="bim-hero"
      />

      {/* ── INTRO — text left, tall image bleeds to the right edge ───────── */}
      <section className="bg-white overflow-hidden" data-testid="bim-intro">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_45%] gap-0 items-stretch">

            {/* Text column — padded normally */}
            <div className="py-24 md:py-32 pr-0 lg:pr-16">
              <span className="eyebrow">{b.eyebrow}</span>
              <h2 className="font-title uppercase text-5xl md:text-6xl mt-5 text-brand-dark leading-[0.9]">
                {b.title}
              </h2>
              <p className="mt-8 text-brand-dark/70 text-[15px] leading-relaxed">{b.intro}</p>
              <p className="mt-5 text-brand-dark/70 text-[15px] leading-relaxed">{b.why}</p>
              <Link href="/orcamento" className="mt-10 btn-gold">
                {t.cta.contact} <ArrowRight size={16} />
              </Link>
            </div>

            {/* Image column — no padding, stretches full section height */}
            <div className="relative hidden lg:block" style={{ minHeight: "640px" }}>
              <Image
                src={IMAGES.bim.intro}
                alt="Ministério da Justiça — BIM"
                fill
                className="object-cover object-top"
                sizes="45vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── MODELS + COORDINATION — 3-col: image | divider | two paras ───── */}
      <section className="bg-brand-dark text-white py-24 md:py-32 grain" data-testid="bim-models">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[45%_1px_1fr] gap-0 lg:gap-10 items-start">

            {/* Image */}
            <div className="relative overflow-hidden mb-10 lg:mb-0" style={{ height: "520px" }}>
              <Image
                src={IMAGES.bim.models}
                alt="Modelação BIM"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 45vw"
              />
            </div>

            {/* Vertical divider — desktop only */}
            <div className="hidden lg:block w-px bg-white/10 self-stretch" />

            {/* Two paragraphs stacked */}
            <div className="space-y-10 lg:pl-4">
              <div>
                <p className="text-brand-gold text-[10px] font-bold tracking-[0.28em] uppercase mb-4">
                  {t.nav.about === "About us" ? "3D Models" : "Modelos 3D"}
                </p>
                <p className="text-white/85 text-[15px] leading-relaxed">{b.models}</p>
              </div>
              <div className="border-t border-white/10 pt-10">
                <p className="text-brand-gold text-[10px] font-bold tracking-[0.28em] uppercase mb-4">
                  {t.nav.about === "About us" ? "Coordination" : "Coordenação"}
                </p>
                <p className="text-white/85 text-[15px] leading-relaxed">{b.coordination}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLASH + OPENBIM — light bg, text bleeds left, image right ─────── */}
      <section className="bg-brand-light overflow-hidden" data-testid="bim-clash">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_45%] gap-0 items-stretch">

            {/* Text */}
            <div className="py-24 md:py-32 pr-0 lg:pr-16 space-y-10">
              <div>
                <p className="text-brand-gold text-[10px] font-bold tracking-[0.28em] uppercase mb-4">
                  Clash Detection
                </p>
                <p className="text-brand-dark/75 text-[15px] leading-relaxed">{b.clash}</p>
              </div>
              <div className="border-t border-brand-gray pt-10">
                <p className="text-brand-gold text-[10px] font-bold tracking-[0.28em] uppercase mb-4">
                  OpenBIM
                </p>
                <p className="text-brand-dark/75 text-[15px] leading-relaxed">{b.openBim}</p>
              </div>
            </div>

            {/* Image — full height, no padding */}
            <div className="relative hidden lg:block" style={{ minHeight: "560px" }}>
              <Image
                src={IMAGES.sumol.hero}
                alt="Clash Detection — coordenação"
                fill
                className="object-cover"
                sizes="45vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4D/5D — cinematic full-bleed band with text over image ────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "520px" }} data-testid="bim-4d5d">
        <Image
          src={IMAGES.etar.hero}
          alt="Planeamento 4D/5D"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Left-to-right gradient so text is readable on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(16,11,0,0.92)] via-[rgba(16,11,0,0.65)] to-transparent" />
        <div className="relative z-10 container mx-auto px-6 lg:px-10 flex items-center py-24" style={{ minHeight: "520px" }}>
          <div className="max-w-lg">
            <p className="text-brand-gold text-[10px] font-bold tracking-[0.28em] uppercase mb-6">
              4D / 5D
            </p>
            <p className="text-white/90 text-[16px] leading-relaxed">{b.dimensions}</p>
          </div>
        </div>
      </section>

      {/* ── TEAM + CLOSING — dark, image spans full height on right ──────── */}
      <section className="bg-brand-dark text-white overflow-hidden" data-testid="bim-team">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_40%] gap-0 items-stretch">

            {/* Text */}
            <div className="py-24 md:py-32 pr-0 lg:pr-16 space-y-8">
              <div>
                <p className="text-brand-gold text-[10px] font-bold tracking-[0.28em] uppercase mb-6">
                  PRUMO SOALHEIRO
                </p>
                <p className="text-white/85 text-[15px] leading-relaxed">{b.team}</p>
              </div>
              <div className="border-t border-white/10 pt-8">
                {/* Closing statement gets larger treatment */}
                <p className="text-white/70 text-[17px] leading-relaxed italic">{b.closing}</p>
              </div>
              <Link href="/orcamento" className="btn-gold mt-4">
                {t.cta.contact} <ArrowRight size={16} />
              </Link>
            </div>

            {/* Image 5 — portrait, full height */}
            <div className="relative hidden lg:block">
              <Image
                src={IMAGES.justice.gallery[0]}
                alt="PRUMO — BIM em obra"
                fill
                className="object-cover"
                sizes="40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-brand-gold py-16">
        <div className="container mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="font-title uppercase text-4xl md:text-5xl text-brand-dark leading-tight">
              {t.nav.about === "About us"
                ? "Digitalise your next project"
                : "Digitalize o seu próximo projeto"}
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
