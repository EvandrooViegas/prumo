"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/components/LanguageProvider";
import { IMAGES } from "@/lib/images";

// Load flipbook only on client — pdf.js uses browser APIs
const PdfFlipbook = dynamic(() => import("@/components/PdfFlipbook"), { ssr: false });

export default function ProjetosPage() {
  const { t } = useLanguage();
  const isEn = t.nav.about === "About us";

  return (
    <>
      <PageHero
        title={t.projects.heroTitle.toUpperCase()}
        subtitle={t.projects.heroSubtitle}
        image={IMAGES.heroes.projects}
        objectPosition="center 60%"
        testId="projetos-hero"
      />

      {/* ── PROJECT 1: MINISTRY OF JUSTICE ────────────────────────────────── */}
      <ProjectSection
        project={t.projects.list[0]}
        hero={IMAGES.justice.hero}
        side1={IMAGES.justice.facadeWide}
        side2={IMAGES.justice.roof}
        gallery={IMAGES.justice.gallery}
        tag={t.projects.tagPrimary}
        isEn={isEn}
        dark={false}
        featured
      />

      {/* ── PROJECT 2: SUMOL + COMPAL ──────────────────────────────────────── */}
      <ProjectSection
        project={t.projects.list[1]}
        hero={IMAGES.sumol.hero}
        side1={IMAGES.sumol.gallery[0]}
        side2={IMAGES.sumol.gallery[1]}
        gallery={IMAGES.sumol.gallery.slice(2)}
        tag={t.projects.tag}
        isEn={isEn}
        dark
      />

      {/* ── PROJECT 3: INTERVENÇÃO EM AMBIENTE INDUSTRIAL ─────────────────── */}
      <ProjectSection
        project={t.projects.list[2]}
        hero={IMAGES.etar.hero}
        side1={IMAGES.etar.gallery[0]}
        side2={IMAGES.etar.gallery[1]}
        gallery={IMAGES.etar.gallery.slice(2)}
        tag={t.projects.tag}
        isEn={isEn}
        dark={false}
      />

      {/* ── COMPANY BOOK ──────────────────────────────────────────────────── */}
      <section className="bg-brand-light py-24 md:py-32" data-testid="projetos-book">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="eyebrow">
              {isEn ? "Company Presentation" : "Apresentação da Empresa"}
            </span>
            <h2 className="font-title uppercase text-4xl md:text-5xl mt-5 text-brand-dark leading-tight">
              {isEn ? "Know us better" : "Conheça-nos melhor"}
            </h2>
            <p className="mt-5 text-brand-dark/60 text-[15px] max-w-xl mx-auto leading-relaxed">
              {isEn
                ? "Browse our company presentation. Pages turn automatically — or take control yourself."
                : "Folheie a nossa apresentação institucional. As páginas viram automaticamente — ou navegue ao seu ritmo."}
            </p>
          </div>
          <PdfFlipbook src="/book.pdf" autoFlipInterval={4000} />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-brand-gold py-16">
        <div className="container mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="font-title uppercase text-4xl md:text-5xl text-brand-dark leading-tight">
              {isEn ? "Have a project in mind?" : "Tem um projeto em mente?"}
            </h2>
            <p className="mt-3 text-brand-dark/70 text-[15px]">
              {isEn ? "Get in touch and let us show you what we can do." : "Contacte-nos e deixe-nos mostrar o que podemos fazer."}
            </p>
          </div>
          <Link href="/orcamento" className="bg-brand-dark text-white inline-flex items-center gap-3 px-10 py-5 font-bold tracking-[0.12em] uppercase text-sm hover:bg-brand-dark/80 transition-colors shrink-0">
            {isEn ? "Get in touch" : "Entrar em contacto"} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

function ProjectSection({ project, hero, side1, side2, gallery, tag, isEn, featured, dark }) {
  return (
    <section className={`${dark ? "bg-brand-dark" : "bg-brand-light"} py-24 md:py-32`}>
      <div className="container mx-auto px-6 lg:px-10">

        {/* Tag + location row */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <span className={`${featured ? "bg-brand-gold text-brand-dark" : dark ? "bg-white/10 text-white" : "bg-brand-dark text-white"} text-[10px] font-bold tracking-[0.22em] uppercase px-5 py-2.5`}>
            {tag}
          </span>
          <span className={`text-[10px] font-bold tracking-[0.22em] uppercase border-2 px-4 py-2 ${dark ? "border-white/20 text-white/60" : "border-brand-dark/20 text-brand-dark/50"}`}>
            {project.area}
          </span>
        </div>

        {/* Full-bleed hero image with title overlay */}
        <div className="relative overflow-hidden w-full" style={{ height: "65vh", minHeight: "460px" }}>
          <Image src={hero} alt={project.title} fill className="object-cover" sizes="100vw" priority={featured} />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,11,0,0.82)] via-[rgba(16,11,0,0.2)] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-10 md:p-14">
            <h2 className="font-title uppercase text-white leading-tight" style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)" }}>
              {project.title}
            </h2>
            <p className="text-brand-gold font-bold tracking-wider uppercase text-sm mt-3">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Description + 2 side images */}
        <div className="mt-10 grid lg:grid-cols-2 gap-12">
          <div>
            <p className={`${dark ? "text-white/75" : "text-brand-dark/70"} text-[15px] leading-relaxed`}>
              {project.desc}
            </p>
            <div className={`mt-8 border-t ${dark ? "border-white/10" : "border-brand-gray"} pt-8`}>
              <p className={`text-[11px] font-bold tracking-[0.22em] uppercase ${dark ? "text-white/40" : "text-brand-dark/45"}`}>
                {isEn ? "Areas of intervention" : "Áreas de intervenção"}
              </p>
              <p className={`${dark ? "text-white/65" : "text-brand-dark/75"} text-sm leading-relaxed mt-3`}>
                {project.areas}
              </p>
            </div>
            <Link href="/orcamento" className="mt-10 btn-gold">
              {isEn ? "Get in touch" : "Entrar em contacto"} <ArrowRight size={16} />
            </Link>
          </div>

          <div className="space-y-5">
            <div className="relative overflow-hidden" style={{ height: "260px" }}>
              <Image src={side1} alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            </div>
            <div className="relative overflow-hidden" style={{ height: "260px" }}>
              <Image src={side2} alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>

        {/* Gallery grid */}
        {gallery && gallery.length > 0 && (
          <div className={`mt-6 grid gap-3 ${gallery.length <= 3 ? "grid-cols-3" : "grid-cols-2 md:grid-cols-4"}`}>
            {gallery.map((img, i) => (
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
        )}
      </div>
    </section>
  );
}
