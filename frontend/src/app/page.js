"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { IMAGES } from "@/lib/images";

export default function HomePage() {
  const { t } = useLanguage();

  const services = [
    { img: IMAGES.service1, key: 0 },
    { img: IMAGES.service2, key: 1 },
    { img: IMAGES.service3, key: 2 },
  ];

  const projectImgs = [IMAGES.project1, IMAGES.project2, IMAGES.project3];

  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        data-testid="home-hero"
      >
        <Image
          src={IMAGES.heroHome}
          alt="Construction site"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 container mx-auto px-6 lg:px-10 pt-36 pb-20">
          <h1
            className="font-title text-white uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl animate-fade-up"
            data-testid="home-hero-title"
          >
            {t.home.heroTitle.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p
            className="mt-8 max-w-2xl text-white/85 text-base md:text-lg leading-relaxed animate-fade-up"
            style={{ animationDelay: "150ms" }}
            data-testid="home-hero-subtitle"
          >
            {t.home.heroSubtitle}
          </p>
          <div
            className="mt-10 flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              href="/orcamento"
              className="btn-gold"
              data-testid="home-cta-contact"
            >
              {t.cta.contact} <ArrowRight size={16} />
            </Link>
            <Link
              href="/servicos"
              className="btn-outline-gold"
              data-testid="home-cta-services"
            >
              {t.cta.ourServices} <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        className="bg-brand-light py-20 md:py-28"
        data-testid="home-services-section"
      >
        <div className="container mx-auto px-6 lg:px-10">
          <span className="eyebrow" data-testid="home-services-eyebrow">
            {t.home.eyebrowServices}
          </span>
          <h2 className="font-title uppercase text-5xl md:text-6xl mt-5 text-brand-dark">
            {t.home.titleServices}
          </h2>
          <p className="mt-5 max-w-2xl text-brand-dark/70 text-[15px] leading-relaxed">
            {t.home.servicesIntro}
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {t.services.list.map((s, i) => (
              <article
                key={i}
                className="relative h-[360px] overflow-hidden group cursor-pointer"
                data-testid={`home-service-card-${i}`}
              >
                <Image
                  src={services[i].img}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 tile-overlay" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="font-title uppercase text-2xl tracking-wide">
                    {`${t.nav.services.split(" ")[0] === "Services" ? "Service" : "Serviço"} ${i + 1}`}
                  </h3>
                  <p className="text-white/80 text-sm mt-2 line-clamp-2">
                    {s.desc}
                  </p>
                  <Link
                    href="/servicos"
                    className="mt-3 inline-flex items-center gap-1 text-brand-gold text-xs font-bold tracking-widest uppercase"
                    data-testid={`home-service-link-${i}`}
                  >
                    {t.cta.seeMore} <ChevronRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section
        className="relative bg-brand-dark text-white py-20 md:py-28 grain"
        data-testid="home-portfolio-section"
      >
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <div className="text-center">
            <span className="eyebrow-dark">{t.home.eyebrowPortfolio}</span>
            <h2 className="font-title uppercase text-5xl md:text-6xl mt-5">
              {t.home.titlePortfolio}
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-white/70 text-[15px] leading-relaxed">
              {t.home.portfolioIntro}
            </p>
          </div>

          <div className="mt-14 grid lg:grid-cols-2 gap-6">
            {/* Big tile */}
            <article
              className="relative h-[520px] overflow-hidden group"
              data-testid="home-project-card-0"
            >
              <Image
                src={projectImgs[0]}
                alt={t.projects.list[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 tile-overlay" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <h3 className="font-title uppercase text-3xl">{`${t.nav.projects === "Projects" ? "Project" : "Projeto"} 1`}</h3>
                <p className="text-white/80 mt-3 max-w-md text-sm leading-relaxed">
                  {t.projects.list[0].desc}
                </p>
                <Link
                  href="/projetos"
                  className="mt-4 btn-outline-gold !py-2.5 !px-4 text-[11px]"
                  data-testid="home-project-link-0"
                >
                  {t.cta.seeMore} <ChevronRight size={14} />
                </Link>
              </div>
            </article>

            {/* Stacked smaller tiles */}
            <div className="grid grid-rows-2 gap-6">
              {[1, 2].map((idx) => (
                <article
                  key={idx}
                  className="relative h-[245px] overflow-hidden group"
                  data-testid={`home-project-card-${idx}`}
                >
                  <Image
                    src={projectImgs[idx]}
                    alt={t.projects.list[idx].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 tile-overlay" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="font-title uppercase text-2xl">{`${t.nav.projects === "Projects" ? "Project" : "Projeto"} ${idx + 1}`}</h3>
                    <p className="text-white/75 text-sm mt-2 line-clamp-2 max-w-lg">
                      {t.projects.list[idx].desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIAL */}
      <section
        className="bg-brand-light py-20 md:py-28"
        data-testid="home-differential-section"
      >
        <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow">{t.home.eyebrowDifferential}</span>
            <h2 className="font-title uppercase text-5xl md:text-6xl leading-[0.95] mt-5 text-brand-dark">
              {t.home.titleDifferential}
            </h2>
            <p className="mt-5 max-w-md text-brand-dark/70 text-[15px] leading-relaxed">
              {t.home.differentialIntro}
            </p>

            <div className="mt-8 relative h-[280px] overflow-hidden">
              <Image
                src={IMAGES.scaffold}
                alt="Site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 tile-overlay" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="font-title uppercase text-2xl">
                  {t.differentials[0].title}
                </h3>
                <p className="text-white/80 text-sm mt-2 max-w-md line-clamp-3">
                  {t.differentials[0].desc}
                </p>
                <Link
                  href="/orcamento"
                  className="mt-3 inline-flex items-center gap-1 text-brand-gold text-xs font-bold tracking-widest uppercase"
                  data-testid="home-differential-cta"
                >
                  {t.cta.contact} <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {t.differentials.slice(1).map((d, i) => (
              <div
                key={i}
                className="bg-white border border-brand-gray p-7"
                data-testid={`home-differential-card-${i}`}
              >
                <h3 className="font-title uppercase tracking-wider text-xl text-brand-dark text-center pb-3 border-b border-brand-gray/60">
                  {`${t.nav.about === "About us" ? "Reason" : "Razão"} ${i + 2}`}
                </h3>
                <p className="text-brand-dark/70 text-sm leading-relaxed mt-4">
                  {d.desc}
                </p>
              </div>
            ))}
            <div
              className="bg-white border border-brand-gray p-7"
              data-testid="home-differential-card-extra"
            >
              <h3 className="font-title uppercase tracking-wider text-xl text-brand-dark text-center pb-3 border-b border-brand-gray/60">
                {`${t.nav.about === "About us" ? "Reason" : "Razão"} 1`}
              </h3>
              <p className="text-brand-dark/70 text-sm leading-relaxed mt-4">
                {t.differentials[0].desc}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
