"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Slide = {
  id: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  // Optional image props
  imageSrc?: string;
  imageAlt?: string;
};

const AUTO_PLAY_INTERVAL_MS = 3000;

export default function HeroSlider() {
  const img1 = "/woman.png"; // local image
  const img2 = "/woman.png"; // local image
  const img3 = "/woman.png"; // local image

  const slides: Slide[] = useMemo(
    () => [
      {
        id: "slide-1",
        title: "Beyaz Eşya Servisi",
        description: "Tüm marka ve modeller için hızlı ve güvenilir servis.",
        ctaLabel: "Hemen Randevu Al",
        ctaHref: "/servis-cagir",
        imageSrc: img1,
        imageAlt: "çamaşır makinesi servisi",
      },
      {
        id: "slide-2",
        title: "Aynı Gün Çözüm",
        description: "İzmir genelinde aynı gün içinde yerinde müdahale.",
        ctaLabel: "Servis Çağır",
        ctaHref: "/servis-cagir",
        imageSrc: img2,
        imageAlt: "buzdolabı servisi",
      },
      {
        id: "slide-3",
        title: "Uygun Fiyat, Garanti",
        description: "Şeffaf fiyatlandırma ve yapılan işlemlere garanti.",
        ctaLabel: "Detayları Gör",
        ctaHref: "#hizmetler",
        imageSrc: img3,
        imageAlt: "bulaşık makinesi servisi",
      },
    ],
    [img1, img2, img3]
  );

  const [activeIdx, setActiveIdx] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((idx) => (idx + 1) % total);
    }, AUTO_PLAY_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [total]);

  // ...existing code...
  const prev = () => setActiveIdx((idx) => (idx - 1 + total) % total);
  const next = () => setActiveIdx((idx) => (idx + 1) % total);

  return (
    <section className="relative w-full">
      <div
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/general-electric-bulasik-makinesi-servisi-1.jpg')" }}>
        {/* Mavi overlay */}
        <div className="absolute inset-0 bg-blue-700/40 pointer-events-none" />
        <div className="relative h-[460px] sm:h-[560px]">
          <div
            className="flex h-full transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeIdx * 100}%)` }}>
            {slides.map((slide) => (
              <div key={slide.id} className="min-w-full grid grid-cols-1 sm:grid-cols-2 items-center p-6 sm:p-10 gap-4">
                <div className="text-white text-center">
                  <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
                    {slide.title}
                  </h2>
                  <p className="text-white/90 text-lg sm:text-xl mb-5">
                    {slide.description}
                  </p>
                  {slide.ctaHref && slide.ctaLabel ? (
                    <Link
                      href={slide.ctaHref}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-blue-700 font-semibold shadow-sm hover:bg-white/90">
                      {slide.ctaLabel}
                    </Link>
                  ) : null}
                </div>
                <div className="justify-self-center">
                  {slide.imageSrc ? (
                    <div className="relative w-72 h-72 sm:w-96 sm:h-[28rem]">
                      <Image
                        src={slide.imageSrc}
                        alt={slide.imageAlt  || "beyaz eşya servisi"}
                        fill
                        className="object-cover rounded-lg"
                        priority
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
          {/* Sol/Sağ gezinme butonları */}
          <button
            type="button"
            aria-label="Önceki slayt"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center rounded-full bg-white/90 text-blue-700 hover:bg-white p-2 shadow focus:outline-none focus:ring-2 focus:ring-white/70"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M15.78 4.22a.75.75 0 0 1 0 1.06L9.06 12l6.72 6.72a.75.75 0 1 1-1.06 1.06l-7.25-7.25a.75.75 0 0 1 0-1.06l7.25-7.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Sonraki slayt"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center rounded-full bg-white/90 text-blue-700 hover:bg-white p-2 shadow focus:outline-none focus:ring-2 focus:ring-white/70"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M8.22 19.78a.75.75 0 0 1 0-1.06L14.94 12 8.22 5.28a.75.75 0 1 1 1.06-1.06l7.25 7.25a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Alt nokta göstergeleri (opsiyonel) */}
          <div className="pointer-events-none absolute bottom-4 left-0 right-0 z-10 flex items-center justify-center gap-2">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 w-2 rounded-full transition ${idx === activeIdx ? "bg-white" : "bg-white/50"}`}
              />
            ))}
          </div>
          {/* Alt bant ayrı bileşen olarak eklenecek */}
        </div>
      </div>
    </section>
  );
} 