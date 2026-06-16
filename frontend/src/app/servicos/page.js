"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/components/LanguageProvider";
import { IMAGES } from "@/lib/images";

const serviceImages = [
  IMAGES.service1,
  IMAGES.service2,
  IMAGES.service3,
  IMAGES.service4,
  IMAGES.service5,
];

export default function ServicosPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        title={t.services.heroTitle.toUpperCase()}
        subtitle={t.services.heroSubtitle}
        image={IMAGES.heroServices}
        objectPosition="center 40%"
        testId="servicos-hero"
      />

      <section className="bg-brand-light py-20 md:py-28" data-testid="servicos-content">
        <div className="container mx-auto px-6 lg:px-10 space-y-6">

          {/* Row 1: Service 1 (large) + Service 2 */}
          <div className="grid lg:grid-cols-3 gap-6">
            <ServiceTile service={t.services.list[0]} image={serviceImages[0]} index={0} tall className="lg:col-span-2" />
            <ServiceTile service={t.services.list[1]} image={serviceImages[1]} index={1} tall />
          </div>

          {/* Row 2: text card + Service 3 (large) */}
          <div className="grid lg:grid-cols-3 gap-6">
            <aside className="bg-brand-dark text-white p-10 flex flex-col justify-between min-h-[420px]" data-testid="servicos-side-card">
              <div>
                <h3 className="font-title uppercase text-3xl text-brand-gold">PRUMO SOALHEIRO</h3>
                <p className="mt-5 text-white/75 text-[15px] leading-relaxed">{t.services.sideCardCopy}</p>
              </div>
              <Link
                href="/orcamento"
                className="mt-8 btn-gold self-start"
                data-testid="servicos-side-cta"
              >
                {t.cta.contact} <ArrowRight size={14} />
              </Link>
            </aside>
            <ServiceTile service={t.services.list[2]} image={serviceImages[2]} index={2} tall className="lg:col-span-2" />
          </div>

          {/* Row 3: Services 4 & 5 equally sized */}
          <div className="grid lg:grid-cols-2 gap-6">
            <ServiceTile service={t.services.list[3]} image={serviceImages[3]} index={3} tall />
            <ServiceTile service={t.services.list[4]} image={serviceImages[4]} index={4} tall />
          </div>
        </div>
      </section>

      {/* BIM teaser — links to dedicated page */}
      <section className="bg-brand-dark py-16" data-testid="servicos-bim-teaser">
        <div className="container mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-brand-gold text-[10px] font-bold tracking-[0.28em] uppercase">BIM</span>
            <h2 className="font-title uppercase text-4xl md:text-5xl text-white mt-2 leading-tight">
              {t.nav.about === "About us" ? "Digital Construction" : "Construção Digital"}
            </h2>
            <p className="mt-3 text-white/65 text-[15px] max-w-xl leading-relaxed">
              {t.nav.about === "About us"
                ? "Specialised BIM modelling, coordination and Clash Detection services. Discover how we transform data into useful knowledge."
                : "Serviços especializados de modelação BIM, coordenação e Clash Detection. Descubra como transformamos dados em conhecimento útil."}
            </p>
          </div>
          <Link
            href="/bim"
            className="btn-gold shrink-0"
            data-testid="servicos-bim-link"
          >
            {t.nav.about === "About us" ? "Discover BIM" : "Descobrir BIM"} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

function ServiceTile({ service, image, index, tall, className = "" }) {
  return (
    <article
      className={`relative overflow-hidden group ${className}`}
      style={{ minHeight: tall ? "540px" : "420px" }}
      data-testid={`servicos-tile-${index}`}
    >
      <Image
        src={image}
        alt={service.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width:1024px) 100vw, 66vw"
      />
      <div className="absolute inset-0 tile-overlay" />
      <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10 text-white">
        <span className="text-brand-gold text-[10px] font-bold tracking-[0.28em] uppercase">
          {`Area ${index + 1}`}
        </span>
        <h3 className="font-title uppercase text-4xl tracking-wide mt-2" data-testid={`servicos-tile-title-${index}`}>
          {service.title}
        </h3>
        <p className="mt-3 text-white/85 text-[15px] leading-relaxed max-w-xl">{service.desc}</p>
        <ul className="mt-4 text-white/80 text-sm space-y-1.5">
          {service.bullets.map((b, i) => (
            <li key={i} className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
