"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/components/LanguageProvider";
import { IMAGES } from "@/lib/images";

export default function ProjetosPage() {
  const { t } = useLanguage();
  const images = [IMAGES.crane, IMAGES.surveyorPortrait, IMAGES.crane];

  return (
    <>
      <PageHero
        title={t.projects.heroTitle.toUpperCase()}
        subtitle={t.projects.heroSubtitle}
        image={IMAGES.heroPages}
        testId="projetos-hero"
      />

      <section
        className="bg-brand-dark py-16 md:py-24"
        data-testid="projetos-content"
      >
        <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-6">
          {/* Project 1 - image left, text right */}
          <div className="relative h-[460px] overflow-hidden" data-testid="projetos-image-0">
            <Image
              src={images[0]}
              alt={t.projects.list[0].title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <span
              className="absolute bottom-4 right-4 bg-brand-gold text-brand-dark text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-2"
              data-testid="projetos-tag-0"
            >
              {t.projects.tag}
            </span>
          </div>
          <div className="flex flex-col gap-6" data-testid="projetos-text-0">
            <div className="bg-[#2a2622] p-7 text-center">
              <h3 className="font-title uppercase text-3xl text-white tracking-wide">
                {t.projects.list[0].title}
              </h3>
            </div>
            <div className="bg-[#2a2622] p-8 flex-1 flex items-center justify-center text-center">
              <p className="text-white/80 leading-relaxed text-[15px] max-w-md">
                {t.projects.list[0].desc}
              </p>
            </div>
          </div>

          {/* Project 2 - text left, image right */}
          <div className="flex flex-col gap-6" data-testid="projetos-text-1">
            <div className="bg-[#2a2622] p-7 text-center">
              <h3 className="font-title uppercase text-3xl text-white tracking-wide">
                {t.projects.list[1].title}
              </h3>
            </div>
            <div className="bg-[#2a2622] p-8 flex-1 flex items-center justify-center text-center">
              <p className="text-white/80 leading-relaxed text-[15px] max-w-md">
                {t.projects.list[1].desc}
              </p>
            </div>
          </div>
          <div className="relative h-[460px] overflow-hidden" data-testid="projetos-image-1">
            <Image
              src={images[1]}
              alt={t.projects.list[1].title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <span
              className="absolute bottom-4 right-4 bg-brand-gold text-brand-dark text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-2"
              data-testid="projetos-tag-1"
            >
              {t.projects.tag}
            </span>
          </div>

          {/* Project 3 - image left, text right */}
          <div className="relative h-[460px] overflow-hidden" data-testid="projetos-image-2">
            <Image
              src={images[2]}
              alt={t.projects.list[2].title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <span
              className="absolute bottom-4 right-4 bg-brand-gold text-brand-dark text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-2"
              data-testid="projetos-tag-2"
            >
              {t.projects.tag}
            </span>
          </div>
          <div className="flex flex-col gap-6" data-testid="projetos-text-2">
            <div className="bg-[#2a2622] p-7 text-center">
              <h3 className="font-title uppercase text-3xl text-white tracking-wide">
                {t.projects.list[2].title}
              </h3>
            </div>
            <div className="bg-[#2a2622] p-8 flex-1 flex items-center justify-center text-center">
              <p className="text-white/80 leading-relaxed text-[15px] max-w-md">
                {t.projects.list[2].desc}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
