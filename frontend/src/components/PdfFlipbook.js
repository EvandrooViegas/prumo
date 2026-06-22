"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Download } from "lucide-react";

const PDFJS_CDN    = "/pdf.min.js";
const PDFJS_WORKER = "/pdf.worker.min.js";

let pdfjsLoadingPromise = null;

function loadPdfJs() {
  if (typeof window === "undefined") return Promise.reject(new Error("Browser only"));
  if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
  if (pdfjsLoadingPromise) return pdfjsLoadingPromise;

  pdfjsLoadingPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${PDFJS_CDN}"]`);
    if (existing) {
      const onLoad = () => {
        cleanup();
        resolve(window.pdfjsLib);
      };
      const onError = (err) => {
        cleanup();
        reject(err);
      };
      const cleanup = () => {
        existing.removeEventListener("load", onLoad);
        existing.removeEventListener("error", onError);
      };
      existing.addEventListener("load", onLoad);
      existing.addEventListener("error", onError);

      const interval = setInterval(() => {
        if (window.pdfjsLib) {
          clearInterval(interval);
          cleanup();
          resolve(window.pdfjsLib);
        }
      }, 50);
      return;
    }

    const s = document.createElement("script");
    s.src = PDFJS_CDN;
    s.onload = () => resolve(window.pdfjsLib);
    s.onerror = (err) => reject(err);
    document.head.appendChild(s);
  });

  return pdfjsLoadingPromise;
}

// Single-page flipbook — readable, clean slide transition
export default function PdfFlipbook({ src, autoFlipInterval = 5000 }) {
  const [pages,    setPages]    = useState([]);
  const [current,  setCurrent]  = useState(0);
  const [animDir,  setAnimDir]  = useState(null); // "next" | "prev" | null
  const [autoPlay, setAutoPlay] = useState(true);
  const [status,   setStatus]   = useState("loading");

  const timerRef   = useRef(null);
  const currentRef = useRef(0);
  const pagesRef   = useRef([]);
  const animRef    = useRef(false);

  useEffect(() => { currentRef.current = current; }, [current]);
  useEffect(() => { pagesRef.current   = pages;   }, [pages]);

  // ── Load pdf.js + render pages at high scale ───────────────────────────────
  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        await loadPdfJs();
        if (cancelled) return;

        window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;

        const pdf = await window.pdfjsLib.getDocument(src).promise;
        const out  = [];

        for (let i = 1; i <= pdf.numPages; i++) {
          if (cancelled) return;
          const page     = await pdf.getPage(i);
          // High scale — makes text readable
          const viewport = page.getViewport({ scale: 2.5 });
          const canvas   = document.createElement("canvas");
          canvas.width   = viewport.width;
          canvas.height  = viewport.height;
          await page.render({ canvasContext: canvas.getContext("2d"), viewport }).promise;
          out.push({ url: canvas.toDataURL("image/jpeg", 0.92), w: viewport.width, h: viewport.height });
        }

        if (!cancelled) { setPages(out); setStatus("ready"); }
      } catch (err) {
        console.error(err);
        if (!cancelled) setStatus("error");
      }
    }

    load();
    return () => { cancelled = true; };
  }, [src]);

  // ── Navigation ─────────────────────────────────────────────────────────────
  function go(dir) {
    if (animRef.current) return;
    const c  = currentRef.current;
    const n  = pagesRef.current.length;
    if (n === 0) return;

    let next;
    if (dir === "next") next = c >= n - 1 ? 0 : c + 1;
    else                next = c <= 0     ? n - 1 : c - 1;

    animRef.current = true;
    setAnimDir(dir);

    // After exit animation (300ms), swap page and play enter
    setTimeout(() => {
      setCurrent(next);
      setAnimDir(dir === "next" ? "enter-from-right" : "enter-from-left");
      setTimeout(() => { setAnimDir(null); animRef.current = false; }, 350);
    }, 300);
  }

  function goTo(idx) {
    if (animRef.current || idx === currentRef.current) return;
    const dir = idx > currentRef.current ? "next" : "prev";
    animRef.current = true;
    setAnimDir(dir);
    setTimeout(() => {
      setCurrent(idx);
      setAnimDir(dir === "next" ? "enter-from-right" : "enter-from-left");
      setTimeout(() => { setAnimDir(null); animRef.current = false; }, 350);
    }, 300);
  }

  // ── Auto-play ──────────────────────────────────────────────────────────────
  useEffect(() => {
    clearInterval(timerRef.current);
    if (!autoPlay || status !== "ready") return;
    timerRef.current = setInterval(() => go("next"), autoFlipInterval);
    return () => clearInterval(timerRef.current);
  }, [autoPlay, status, autoFlipInterval]);

  // ── Animation class ────────────────────────────────────────────────────────
  function getImgClass() {
    if (animDir === "next")             return "animate-exit-left";
    if (animDir === "prev")             return "animate-exit-right";
    if (animDir === "enter-from-right") return "animate-enter-right";
    if (animDir === "enter-from-left")  return "animate-enter-left";
    return "";
  }

  // ── Loading / error states ─────────────────────────────────────────────────
  if (status === "loading") return (
    <div className="flex flex-col items-center justify-center py-32 gap-5">
      <div className="w-12 h-12 border-4 border-brand-gold border-t-transparent rounded-full animate-spin" />
      <p className="text-brand-dark/50 text-xs font-bold tracking-[0.2em] uppercase">
        A processar páginas…
      </p>
    </div>
  );

  if (status === "error") return (
    <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
      <p className="text-brand-dark/60 text-sm">Não foi possível carregar o livro.</p>
      <a href={src} download className="btn-gold text-xs mt-2">Descarregar PDF <Download size={14} /></a>
    </div>
  );

  const page = pages[current];

  return (
    <div className="flex flex-col items-center gap-6 w-full" data-testid="pdf-flipbook">

      {/* ── Book frame ─────────────────────────────────────────────────────── */}
      <div className="relative w-full max-w-3xl">

        {/* Book shadow */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black/20 blur-2xl rounded-full pointer-events-none" />

        {/* Page container — fixed aspect, overflow hidden for slide effect */}
        <div
          className="relative overflow-hidden bg-white shadow-2xl"
          style={{
            aspectRatio: page ? `${page.w} / ${page.h}` : "210 / 297",
            boxShadow: "0 20px 60px -10px rgba(0,0,0,0.35), 4px 0 12px -4px rgba(0,0,0,0.1), -4px 0 12px -4px rgba(0,0,0,0.1)",
          }}
        >
          {page && (
            <img
              key={current}
              src={page.url}
              alt={`Página ${current + 1}`}
              className={`w-full h-full object-contain block ${getImgClass()}`}
              draggable={false}
            />
          )}

          {/* Page number badge */}
          <div className="absolute bottom-3 right-4 bg-black/30 text-white text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-sm backdrop-blur-sm">
            {current + 1} / {pages.length}
          </div>

          {/* Left click zone */}
          <button
            onClick={() => go("prev")}
            className="absolute inset-y-0 left-0 w-1/4 opacity-0 hover:opacity-100 flex items-center justify-start pl-4 transition-opacity"
            aria-label="Previous page"
          >
            <span className="w-9 h-9 bg-black/40 flex items-center justify-center text-white backdrop-blur-sm">
              <ChevronLeft size={20} />
            </span>
          </button>

          {/* Right click zone */}
          <button
            onClick={() => go("next")}
            className="absolute inset-y-0 right-0 w-1/4 opacity-0 hover:opacity-100 flex items-center justify-end pr-4 transition-opacity"
            aria-label="Next page"
          >
            <span className="w-9 h-9 bg-black/40 flex items-center justify-center text-white backdrop-blur-sm">
              <ChevronRight size={20} />
            </span>
          </button>
        </div>

        {/* Book edge decorations */}
        <div className="absolute inset-y-2 -left-1 w-1.5 bg-gradient-to-r from-black/15 to-transparent rounded-l pointer-events-none" />
        <div className="absolute inset-y-2 -right-1 w-1.5 bg-gradient-to-l from-black/15 to-transparent rounded-r pointer-events-none" />
      </div>

      {/* ── Controls ───────────────────────────────────────────────────────── */}
      <div className="flex items-center gap-4 mt-2">
        <button
          onClick={() => go("prev")}
          className="w-10 h-10 flex items-center justify-center border border-brand-gray hover:border-brand-gold hover:text-brand-gold text-brand-dark/50 transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={() => { setAutoPlay(a => !a); clearInterval(timerRef.current); }}
          className="flex items-center gap-2 px-5 py-2.5 border border-brand-gray hover:border-brand-gold text-brand-dark/60 hover:text-brand-gold transition-colors text-[11px] font-bold tracking-[0.18em] uppercase"
        >
          {autoPlay ? <><Pause size={13} /> Pausar</> : <><Play size={13} /> Auto</>}
        </button>

        <button
          onClick={() => go("next")}
          className="w-10 h-10 flex items-center justify-center border border-brand-gray hover:border-brand-gold hover:text-brand-gold text-brand-dark/50 transition-colors"
          aria-label="Next page"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* ── Progress dots ──────────────────────────────────────────────────── */}
      <div className="flex gap-1.5 flex-wrap justify-center max-w-md">
        {pages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-brand-gold w-5" : "bg-brand-gray w-1.5 hover:bg-brand-gold/50"
            }`}
            aria-label={`Page ${i + 1}`}
          />
        ))}
      </div>

      {/* Download */}
      <a
        href={src}
        download
        className="flex items-center gap-1.5 text-brand-dark/40 hover:text-brand-gold transition-colors text-[11px] font-bold tracking-[0.18em] uppercase mt-1"
      >
        <Download size={12} /> Descarregar PDF
      </a>

      {/* Slide animations */}
      <style>{`
        .animate-exit-left        { animation: exitLeft  0.30s ease-in  both; }
        .animate-exit-right       { animation: exitRight 0.30s ease-in  both; }
        .animate-enter-right      { animation: enterRight 0.35s ease-out both; }
        .animate-enter-left       { animation: enterLeft  0.35s ease-out both; }

        @keyframes exitLeft   { from { transform: translateX(0);     opacity: 1; }
                                to   { transform: translateX(-6%);   opacity: 0; } }
        @keyframes exitRight  { from { transform: translateX(0);     opacity: 1; }
                                to   { transform: translateX(6%);    opacity: 0; } }
        @keyframes enterRight { from { transform: translateX(6%);    opacity: 0; }
                                to   { transform: translateX(0);     opacity: 1; } }
        @keyframes enterLeft  { from { transform: translateX(-6%);   opacity: 0; }
                                to   { transform: translateX(0);     opacity: 1; } }
      `}</style>
    </div>
  );
}
