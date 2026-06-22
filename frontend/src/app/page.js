"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { IMAGES } from "@/lib/images";

export default function HomePage() {
  const { t } = useLanguage();

  // Service images — one per area, in order matching t.services.list
  const serviceImages = [
    IMAGES.services.design,
    IMAGES.services.construction,
    IMAGES.services.management,
    IMAGES.services.research,
    IMAGES.services.training,
  ];

  // Project card images for portfolio section
  const projectImgs = [
    IMAGES.justice.hero,   // Ministry of Justice — featured
    IMAGES.sumol.hero,     // Sumol + Compal
    IMAGES.etar.hero,      // ETAR da Guia
  ];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden" data-testid="home-hero">
        <Image src={IMAGES.heroes.home} alt="PRUMO SOALHEIRO" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container mx-auto px-6 lg:px-10 pt-40 pb-24">
          <p className="text-brand-gold text-xs font-bold tracking-[0.35em] uppercase mb-5 animate-fade-up">PRUMO SOALHEIRO</p>
          <h1 className="font-title text-white uppercase leading-[1.1] max-w-5xl animate-fade-up" style={{ fontSize: "clamp(3rem, 7.5vw, 6.5rem)", animationDelay: "80ms" }} data-testid="home-hero-title">
            {t.slogan.main.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line.split(/\b(PROJETAR|CONSTRUIR|DESIGN|BUILD)\b/).map((part, j) =>
                  /^(PROJETAR|CONSTRUIR|DESIGN|BUILD)$/.test(part)
                    ? <span key={j} className="text-brand-gold italic">{part}</span>
                    : part
                )}
              </span>
            ))}
          </h1>
          <p className="mt-7 text-white/65 text-lg md:text-xl font-light italic max-w-xl animate-fade-up" style={{ animationDelay: "180ms" }}>
            "{t.slogan.secondary.replace("\n", " ")}"
          </p>
          <p className="mt-5 max-w-2xl text-white/80 text-base leading-relaxed animate-fade-up" style={{ animationDelay: "260ms" }}>
            {t.home.heroSubtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "340ms" }}>
            <Link href="/orcamento" className="btn-gold" data-testid="home-cta-contact">{t.cta.contact} <ArrowRight size={16} /></Link>
            <Link href="/servicos" className="btn-outline-gold" data-testid="home-cta-services">{t.cta.ourServices} <ChevronRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* ── INSTITUTIONAL ────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 md:py-32" data-testid="home-institutional">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow">PRUMO SOALHEIRO</span>
              <h2 className="font-title uppercase text-4xl md:text-5xl mt-5 text-brand-dark leading-[0.93]">
                {t.nav.about === "About us" ? "Who we are" : "Quem somos"}
              </h2>
              <div className="mt-7 space-y-5 text-brand-dark/70 text-[15px] leading-relaxed max-w-lg">
                {t.home.institutionalText.split("\n\n").map((para, i) => <p key={i}>{para}</p>)}
              </div>
              <Link href="/sobre" className="mt-10 inline-flex items-center gap-2 text-brand-dark text-xs font-bold tracking-[0.18em] uppercase border-b-2 border-brand-gold pb-1 hover:text-brand-goldDark hover:border-brand-goldDark transition-colors">
                {t.nav.about === "About us" ? "Learn more" : "Saber mais"} <ArrowRight size={14} />
              </Link>
            </div>
            {/* Ministry of Justice facade portraits — staggered */}
            <div className="grid grid-cols-2 gap-5">
              <div className="relative overflow-hidden" style={{ height: "520px" }}>
                <Image src={IMAGES.justice.gallery[0]} alt="Ministério da Justiça — fachada" fill className="object-cover object-top" sizes="(max-width:1024px) 50vw, 25vw" />
              </div>
              <div className="relative overflow-hidden mt-14" style={{ height: "520px" }}>
                <Image src={IMAGES.justice.gallery[1]} alt="Ministério da Justiça — detalhe" fill className="object-cover" sizes="(max-width:1024px) 50vw, 25vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────────── */}
      <section className="bg-brand-light py-24 md:py-32" data-testid="home-services-section">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="eyebrow">{t.home.eyebrowServices}</span>
              <h2 className="font-title uppercase text-4xl md:text-5xl mt-5 text-brand-dark">{t.home.titleServices}</h2>
            </div>
            <Link href="/servicos" className="inline-flex items-center gap-2 text-brand-dark text-xs font-bold tracking-[0.18em] uppercase border-b-2 border-brand-dark pb-1 hover:text-brand-goldDark hover:border-brand-goldDark transition-colors shrink-0 mb-2">
              {t.nav.about === "About us" ? "All services" : "Todos os serviços"} <ArrowRight size={14} />
            </Link>
          </div>
          <p className="mt-5 max-w-2xl text-brand-dark/70 text-[15px] leading-relaxed">{t.home.servicesIntro}</p>

          {/* Top 2 large tiles */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {t.services.list.slice(0, 2).map((s, i) => (
              <article key={i} className="relative overflow-hidden group cursor-pointer" style={{ height: "560px" }} data-testid={`home-service-card-${i}`}>
                <Image src={serviceImages[i]} alt={s.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 50vw" />
                <div className="absolute inset-0 tile-overlay" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <span className="text-brand-gold text-[10px] font-bold tracking-[0.28em] uppercase">{t.nav.about === "About us" ? `Area ${i + 1}` : `Área ${i + 1}`}</span>
                  <h3 className="font-title uppercase text-4xl tracking-wide mt-2">{s.title}</h3>
                  <p className="text-white/80 text-sm mt-3 line-clamp-2 max-w-md">{s.desc}</p>
                  <Link href="/servicos" className="mt-4 inline-flex items-center gap-1 text-brand-gold text-xs font-bold tracking-widest uppercase">{t.cta.seeMore} <ChevronRight size={14} /></Link>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom 3 medium tiles */}
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {t.services.list.slice(2).map((s, i) => (
              <article key={i} className="relative overflow-hidden group cursor-pointer" style={{ height: "420px" }} data-testid={`home-service-card-${i + 2}`}>
                <Image src={serviceImages[i + 2]} alt={s.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
                <div className="absolute inset-0 tile-overlay" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <span className="text-brand-gold text-[10px] font-bold tracking-[0.28em] uppercase">{t.nav.about === "About us" ? `Area ${i + 3}` : `Área ${i + 3}`}</span>
                  <h3 className="font-title uppercase text-3xl tracking-wide mt-2">{s.title}</h3>
                  <p className="text-white/75 text-sm mt-2 line-clamp-2">{s.desc}</p>
                  <Link href="/servicos" className="mt-3 inline-flex items-center gap-1 text-brand-gold text-xs font-bold tracking-widest uppercase">{t.cta.seeMore} <ChevronRight size={14} /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ────────────────────────────────────────────────────────── */}
      <section className="relative bg-brand-dark text-white py-24 md:py-32 grain" data-testid="home-portfolio-section">
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="eyebrow-dark">{t.home.eyebrowPortfolio}</span>
              <h2 className="font-title uppercase text-4xl md:text-5xl mt-5">{t.home.titlePortfolio}</h2>
              <p className="mt-5 max-w-xl text-white/70 text-[15px] leading-relaxed">{t.home.portfolioIntro}</p>
            </div>
            <Link href="/projetos" className="inline-flex items-center gap-2 text-white text-xs font-bold tracking-[0.18em] uppercase border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-colors shrink-0 mb-2">
              {t.nav.about === "About us" ? "All projects" : "Todos os projetos"} <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid lg:grid-cols-5 gap-5">
            {/* Featured large card — Ministry of Justice */}
            <article className="relative lg:col-span-3 overflow-hidden group" style={{ height: "680px" }} data-testid="home-project-card-0">
              <Image src={projectImgs[0]} alt={t.projects.list[0].title} fill className="object-cover object-top transition-transform duration-700 group-hover:scale-105" sizes="(max-width:1024px) 100vw, 60vw" />
              <div className="absolute inset-0 tile-overlay" />
              <div className="absolute top-6 left-6">
                <span className="bg-brand-gold text-brand-dark text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2">{t.projects.tagPrimary}</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-10">
                <p className="text-brand-gold text-[10px] font-bold tracking-[0.28em] uppercase">{t.projects.list[0].area}</p>
                <h3 className="font-title uppercase text-4xl mt-2">{t.projects.list[0].title}</h3>
                <p className="text-white/75 text-sm mt-1">{t.projects.list[0].subtitle}</p>
                <p className="text-white/65 mt-4 max-w-md text-sm leading-relaxed line-clamp-3">{t.projects.list[0].desc}</p>
                <Link href="/projetos" className="mt-6 btn-outline-gold !py-3 !px-5 text-xs">{t.cta.seeMore} <ChevronRight size={14} /></Link>
              </div>
            </article>

            {/* Sumol + ETAR stacked */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {[1, 2].map((idx) => (
                <article key={idx} className="relative flex-1 overflow-hidden group" style={{ minHeight: "320px" }} data-testid={`home-project-card-${idx}`}>
                  <Image src={projectImgs[idx]} alt={t.projects.list[idx].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:1024px) 100vw, 40vw" />
                  <div className="absolute inset-0 tile-overlay" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="font-title uppercase text-2xl leading-tight">{t.projects.list[idx].title}</h3>
                    <p className="text-white/65 text-xs mt-1">{t.projects.list[idx].subtitle}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIALS ────────────────────────────────────────────────────── */}
      <section className="bg-brand-light py-24 md:py-32" data-testid="home-differential-section">
        <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14">
          <div>
            <span className="eyebrow">{t.home.eyebrowDifferential}</span>
            <h2 className="font-title uppercase text-4xl md:text-5xl leading-[0.93] mt-5 text-brand-dark">{t.home.titleDifferential}</h2>
            <p className="mt-6 max-w-md text-brand-dark/70 text-[15px] leading-relaxed">{t.home.differentialIntro}</p>
            {/* Facade/scaffolding work — matches Construction differential */}
            <div className="mt-10 relative overflow-hidden" style={{ height: "400px" }}>
              <Image src={IMAGES.services.construction} alt="Construção — trabalho em fachadas" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              <div className="absolute inset-0 tile-overlay" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <h3 className="font-title uppercase text-2xl">{t.differentials[0].title}</h3>
                <p className="text-white/80 text-sm mt-2 max-w-md line-clamp-3">{t.differentials[0].desc}</p>
                <Link href="/orcamento" className="mt-4 inline-flex items-center gap-1 text-brand-gold text-xs font-bold tracking-widest uppercase">{t.cta.contact} <ChevronRight size={14} /></Link>
              </div>
            </div>
          </div>
          <div className="space-y-5 lg:pt-20">
            {t.differentials.slice(1).map((d, i) => (
              <div key={i} className="bg-white border border-brand-gray p-8" data-testid={`home-differential-card-${i}`}>
                <h3 className="font-title uppercase tracking-wider text-xl text-brand-dark pb-4 border-b border-brand-gray/60">{d.title}</h3>
                <p className="text-brand-dark/70 text-sm leading-relaxed mt-4">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTES ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-brand-dark text-white py-24 md:py-32 overflow-hidden grain" data-testid="home-quotes-section">
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <div className="text-center mb-14">
            <span className="eyebrow-dark">{t.home.eyebrowQuotes}</span>
            <h2 className="font-title uppercase text-4xl md:text-5xl mt-5">{t.home.titleQuotes}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.quotes.slice(0, 4).map((q, i) => (
              <blockquote key={i} className="bg-white/5 border border-white/10 p-8 hover:border-brand-gold transition-colors duration-300">
                <span className="text-brand-gold text-5xl font-title leading-none block mb-2">"</span>
                <p className="text-white/85 text-[15px] leading-relaxed">{q}</p>
              </blockquote>
            ))}
          </div>
          <div className="mt-16 text-center border-t border-white/10 pt-16">
            <p className="font-title uppercase text-3xl md:text-5xl text-white/15 leading-tight max-w-4xl mx-auto">
              {t.slogan.secondary.split("\n").map((line, i) => <span key={i} className="block">{line}</span>)}
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ────────────────────────────────────────────────────────── */}
      <section className="bg-brand-gold py-16" data-testid="home-cta-strip">
        <div className="container mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="font-title uppercase text-4xl md:text-5xl text-brand-dark leading-tight">
              {t.nav.about === "About us" ? "Ready to start your project?" : "Pronto para iniciar o seu projeto?"}
            </h2>
            <p className="mt-3 text-brand-dark/70 text-base">
              {t.nav.about === "About us" ? "Contact us today and get a free no-obligation quote." : "Contacte-nos hoje e receba um orçamento gratuito sem compromisso."}
            </p>
          </div>
          <Link href="/orcamento" className="bg-brand-dark text-white inline-flex items-center gap-3 px-10 py-5 font-bold tracking-[0.12em] uppercase text-sm hover:bg-brand-dark/80 transition-colors shrink-0">
            {t.cta.contact} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
