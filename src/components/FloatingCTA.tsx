"use client";

import { useState } from "react";

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40" aria-label="Aynı Gün Servis">
      {/* Çubuk (kapalı durum) */}
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-4 py-2 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white/80 transform hover:scale-105 transition-all duration-300 animate-bounce"
          aria-expanded={open}
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 animate-pulse">
              <path d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.04c.98 0 1.84.64 2.114 1.575l.59 2.065a2.25 2.25 0 0 1-.568 2.2l-1.13 1.13a.75.75 0 0 0-.185.76c.518 1.518 1.73 2.73 3.248 3.248a.75.75 0 0 0 .76-.185l1.13-1.13a2.25 2.25 0 0 1 2.2-.568l2.065.59A2.25 2.25 0 0 1 19.5 17.46v2.04a2.25 2.25 0 0 1-2.25 2.25H16.5c-8.008 0-14.25-6.242-14.25-14.25v-.75Z" />
            </svg>
          </span>
          <span className="text-sm font-semibold">Aynı Gün Servis</span>
        </button>
      ) : null}

      {/* Kart (açık durum) */}
      {open ? (
        <div className="rounded-2xl bg-white/95 shadow-2xl ring-1 ring-black/5 backdrop-blur px-6 py-5 w-[310px] sm:w-[360px] animate-[slideInUp_.3s_ease-out] transform origin-bottom-left">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white animate-pulse animate-[slideInLeft_.4s_ease-out_.1s_both]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 animate-bounce">
                <path d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.04c.98 0 1.84.64 2.114 1.575l.59 2.065a2.25 2.25 0 0 1-.568 2.2l-1.13 1.13a.75.75 0 0 0-.185.76c.518 1.518 1.73 2.73 3.248 3.248a.75.75 0 0 0 .76-.185l1.13-1.13a2.25 2.25 0 0 1 2.2-.568l2.065.59A2.25 2.25 0 0 1 19.5 17.46v2.04a2.25 2.25 0 0 1-2.25 2.25H16.5c-8.008 0-14.25-6.242-14.25-14.25v-.75Z" />
              </svg>
            </div>
            <div className="min-w-0 animate-[slideInLeft_.4s_ease-out_.2s_both]">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">Aynı Gün Servis</h3>
                <button
                  type="button"
                  aria-label="Pencereyi kapat"
                  onClick={() => setOpen(false)}
                  className="-mr-1 rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transform hover:scale-110 transition-all duration-200 hover:rotate-90"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <p className="mt-1 text-sm text-gray-600">İzmir genelinde hızlı müdahale. 7/24 ulaşın.</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href="/servis-cagir"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white font-semibold shadow hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg animate-pulse animate-[slideInLeft_.4s_ease-out_.3s_both]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 animate-bounce">
                    <path d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.04c.98 0 1.84.64 2.114 1.575l.59 2.065a2.25 2.25 0 0 1-.568 2.2l-1.13 1.13a.75.75 0 0 0-.185.76c.518 1.518 1.73 2.73 3.248 3.248a.75.75 0 0 0 .76-.185l1.13-1.13a2.25 2.25 0 0 1 2.2-.568l2.065.59A2.25 2.25 0 0 1 19.5 17.46v2.04a2.25 2.25 0 0 1-2.25 2.25H16.5c-8.008 0-14.25-6.242-14.25-14.25v-.75Z" />
                  </svg>
                  Servis Çağır
                </a>
              </div>
              <div className="mt-3 text-xs text-gray-500">Hafta içi ve hafta sonu: 08:30 - 22:00</div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}


