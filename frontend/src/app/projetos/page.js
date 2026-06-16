"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/components/LanguageProvider";
import { IMAGES } from "@/lib/images";

// ─── Project image sets ────────────────────────────────────────────────────────

// Ministry of Justice — 10 images (portraits + landscapes)
const justiceImages = {
  hero:    IMAGES.justiceL1,   // 1080×1920 — full-bleed hero
  side1:   IMAGES.justiceL2,   // 1080×1920
  side2:   IMAGES.justiceL3,   // 1599×899 wide
  gallery: [
    IMAGES.justiceP1,  // 899×1599
    IMAGES.justiceP2,  // 899×1599
    IMAGES.justiceP3,  // 899×1599
    IMAGES.justiceP4,  // 899×1599
    IMAGES.justiceP5,  // 899×1599
    IMAGES.justiceP6,  // 900×1600
    IMAGES.justiceP7,  // 900×1600
  ],
};

// Sumol + Compal — 4 dedicated images
const sumolImages = {
  hero:    IMAGES.sumol1,   // 1501×944
  side1:   IMAGES.sumol2,   // 1501×944
  side2:   IMAGES.sumol3,   // 1501×944
  gallery: [
    IMAGES.sumol4,           // 1599×899
    IMAGES.siteWide3,        // 1600×1200 — facade/scaffold context
    IMAGES.siteWide6,        // 1600×1200
  ],
};

// ETAR da Guia — use infrastructure/wide construction shots
const etarImages = {
  hero:    IMAGES.siteWide4,  // 1600×1200
  side1:   IMAGES.siteWide1,  // 1600×1200
  side2:   IMAGES.siteWide5,  // 1600×1200
  gallery: [
    IMAGES.siteWide2,         // 1600×1200
    IMAGES.siteWide7,         // 1600×1200
    IMAGES.siteWide8,         // 1201×780
    IMAGES.siteTall1,         // 1200×1600
  ],
};

export default function ProjetosPage() {
  const { t } = useLanguage();
  const isEn = t.nav.about === "About us";

  return (
    <>
      <PageHero
        title={t.projects.heroTitle.toUpperCase()}
        subtitle={t.projects.heroSubtitle}
        image={IMAGES.heroProjects}
        objectPosition="center 60%"
        testId="projetos-hero"
      />

      {/* ── PROJECT 1: MINISTRY OF JUSTICE ────────────────────────────────── */}
      <ProjectSection
        project={t.projects.list[0]}
        images={justiceImages}
        tag={t.projects.tagPrimary}
        bgClass="bg-brand-light"
        textClass="text-brand-dark"
        subTextClass="text-brand-dark/70"
        borderClass="border-brand-gray"
        isEn={isEn}
        featured
      />

      {/* ── PROJECT 2: SUMOL + COMPAL ──────────────────────────────────────── */}
      <ProjectSection
        project={t.projects.list[1]}
        images={sumolImages}
        tag={t.projects.tag}
        bgClass="bg-brand-dark"
        textClass="text-white"
        subTextClass="text-white/70"
        borderClass="border-white/10"
        isEn={isEn}
        dark
      />

      {/* ── PROJECT 3: ETAR DA GUIA ────────────────────────────────────────── */}
      <ProjectSection
        project={t.projects.list[2]}
        images={etarImages}
        tag={t.projects.tag}
        bgClass="bg-brand-light"
        textClass="text-brand-dark"
        subTextClass="text-brand-dark/70"
        borderClass="border-brand-gray"
        isEn={isEn}
      />

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-brand-gold py-16">
        <div className="container mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="font-title uppercase text-4xl md:text-5xl text-brand-dark leading-tight">
              {isEn ? "Have a project in mind?" : "Tem um projeto em mente?"}
            </h2>
            <p className="mt-3 text-brand-dark/70 text-[15px]">
              {isEn
                ? "Get in touch and let us show you what we can do."
                : "Contacte-nos e deixe-nos mostrar o que podemos fazer."}
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

// ─── Reusable project section ─────────────────────────────────────────────────
function ProjectSection({ project, images, tag, bgClass, textClass, subTextClass, borderClass, isEn, featured, dark }) {
  const labelColor  = dark ? "text-white/40"  : "text-brand-dark/45";
  const goldTag     = featured ? "bg-brand-gold text-brand-dark" : "bg-white/10 text-white";

  return (
    <section className={`${bgClass} py-24 md:py-32`}>
      <div className="container mx-auto px-6 lg:px-10">

        {/* Header row */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <span className={`${dark ? "bg-white/10 text-white" : "bg-brand-gold text-brand-dark"} text-[10px] font-bold tracking-[0.22em] uppercase px-5 py-2.5`}>
            {tag}
          </span>
          <span className={`text-[10px] font-bold tracking-[0.22em] uppercase border-2 ${dark ? "border-white/20 text-white/60" : "border-brand-dark/20 text-brand-dark/50"} px-4 py-2`}>
            {project.area}
          </span>
        </div>

        {/* Full-bleed hero image with title overlay */}
        <div className="relative overflow-hidden w-full" style={{ height: "65vh", minHeight: "460px" }}>
          <Image
            src={images.hero}
            alt={project.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority={featured}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,11,0,0.80)] via-[rgba(16,11,0,0.2)] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-10 md:p-14">
            <h2 className="font-title uppercase text-white leading-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
              {project.title}
            </h2>
            <p className="text-brand-gold font-bold tracking-wider uppercase text-sm mt-3">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Info + 2 side images */}
        <div className="mt-10 grid lg:grid-cols-2 gap-10">
          <div>
            <p className={`${subTextClass} text-[15px] leading-relaxed`}>{project.desc}</p>
            <div className={`mt-8 border-t ${borderClass} pt-8`}>
              <p className={`${labelColor} text-[11px] font-bold tracking-[0.22em] uppercase`}>
                {isEn ? "Areas of intervention" : "Áreas de intervenção"}
              </p>
              <p className={`${subTextClass} text-sm leading-relaxed mt-3`}>{project.areas}</p>
            </div>
            <Link href="/orcamento" className="mt-10 btn-gold">
              {isEn ? "Get in touch" : "Entrar em contacto"} <ArrowRight size={16} />
            </Link>
          </div>
          <div className="space-y-5">
            <div className="relative overflow-hidden" style={{ height: "260px" }}>
              <Image src={images.side1} alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            </div>
            <div className="relative overflow-hidden" style={{ height: "260px" }}>
              <Image src={images.side2} alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>

        {/* Gallery grid */}
        <div className={`mt-6 grid gap-3 ${images.gallery.length === 3 ? "grid-cols-3" : "grid-cols-2 md:grid-cols-4"}`}>
          {images.gallery.map((img, i) => (
            <div key={i} className="relative overflow-hidden group" style={{ height: "260px" }}>
              <Image
                src={img}
                alt={`${project.title} — ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width:768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
