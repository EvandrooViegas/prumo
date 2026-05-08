"use client";

import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/components/LanguageProvider";
import { IMAGES } from "@/lib/images";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || process.env.REACT_APP_BACKEND_URL || "";

export default function OrcamentoPage() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ nome: "", empresa: "", email: "", mensagem: "" });
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.email.trim() || !form.mensagem.trim()) {
      setStatus({ state: "error", msg: t.quote.form.error });
      return;
    }
    setStatus({ state: "loading", msg: t.quote.form.sending });
    try {
      await axios.post(`${BACKEND_URL}/api/quote`, form, {
        headers: { "Content-Type": "application/json" },
      });
      setStatus({ state: "success", msg: t.quote.form.success });
      setForm({ nome: "", empresa: "", email: "", mensagem: "" });
    } catch (err) {
      setStatus({ state: "error", msg: t.quote.form.error });
    }
  };

  return (
    <>
      <PageHero
        title={t.quote.heroTitle.toUpperCase()}
        subtitle={t.quote.heroSubtitle}
        image={IMAGES.heroPages}
        testId="orcamento-hero"
      />

      <section
        className="bg-brand-light py-20 md:py-28"
        data-testid="orcamento-content"
      >
        <div className="container mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="eyebrow">{t.quote.eyebrow}</span>
            <h2 className="font-title uppercase text-5xl md:text-6xl mt-5 text-brand-dark">
              {t.quote.title}
            </h2>
            <p className="mt-5 max-w-2xl text-brand-dark/70 text-[15px] leading-relaxed">
              {t.quote.intro}
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <div
              className="relative min-h-[480px] overflow-hidden"
              data-testid="orcamento-image"
            >
              <Image
                src={IMAGES.surveyorPortrait}
                alt="Surveyor"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <form
              onSubmit={submit}
              className="flex flex-col gap-4"
              data-testid="orcamento-form"
              noValidate
            >
              <Field
                label={t.quote.form.name}
                type="text"
                value={form.nome}
                onChange={onChange("nome")}
                testId="orcamento-input-nome"
                required
              />
              <Field
                label={t.quote.form.company}
                type="text"
                value={form.empresa}
                onChange={onChange("empresa")}
                testId="orcamento-input-empresa"
              />
              <Field
                label={t.quote.form.email}
                type="email"
                value={form.email}
                onChange={onChange("email")}
                testId="orcamento-input-email"
                required
              />
              <Field
                label={t.quote.form.message}
                type="textarea"
                value={form.mensagem}
                onChange={onChange("mensagem")}
                testId="orcamento-input-mensagem"
                required
              />

              {status.state !== "idle" && (
                <div
                  className={`text-sm font-medium ${
                    status.state === "success"
                      ? "text-green-700"
                      : status.state === "error"
                      ? "text-red-700"
                      : "text-brand-dark/70"
                  }`}
                  data-testid="orcamento-status"
                >
                  {status.msg}
                </div>
              )}

              <button
                type="submit"
                disabled={status.state === "loading"}
                className="bg-brand-gold hover:bg-brand-goldDark transition-colors text-brand-dark font-bold tracking-[0.18em] uppercase py-4 disabled:opacity-60 mt-2"
                data-testid="orcamento-submit"
              >
                {status.state === "loading" ? t.quote.form.sending : t.quote.form.submit}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, type, value, onChange, testId, required }) {
  if (type === "textarea") {
    return (
      <label className="block">
        <span className="sr-only">{label}</span>
        <textarea
          value={value}
          onChange={onChange}
          required={required}
          placeholder={label}
          data-testid={testId}
          rows={5}
          className="w-full bg-white border border-brand-gray px-5 py-4 text-brand-dark text-[15px] outline-none focus:border-brand-gold transition-colors placeholder:text-brand-dark/40 resize-y"
        />
      </label>
    );
  }
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={label}
        data-testid={testId}
        className="w-full bg-white border border-brand-gray px-5 py-4 text-brand-dark text-[15px] outline-none focus:border-brand-gold transition-colors placeholder:text-brand-dark/40"
      />
    </label>
  );
}
