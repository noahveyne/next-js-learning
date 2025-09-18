"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";

function getLinkClassName(isActive: boolean): string {
  const base = "px-5 py-2.5 rounded-md text-xl font-semibold transition-colors";
  const active = "bg-gray-100 text-gray-900";
  const inactive = "text-gray-700 hover:text-blue-600";
  return `${base} ${isActive ? active : inactive}`;
}

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 0.5 saniye süre ile smooth scroll fonksiyonu
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const startPosition = window.pageYOffset;
    const targetPosition = element.offsetTop - 80; // Header yüksekliği kadar offset
    const distance = targetPosition - startPosition;
    const duration = 500; // 0.5 saniye
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      window.scrollTo(0, startPosition + distance * easeOut);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const navigateToServices = () => {
    if (pathname === '/') {
      // Ana sayfadaysak scroll yap
      smoothScrollTo('services-section');
    } else {
      // Başka sayfadaysak ana sayfaya yönlendir
      window.location.href = '/#services';
    }
    setIsMobileMenuOpen(false);
  };

  const navigateToContact = () => {
    if (pathname === '/') {
      // Ana sayfadaysak scroll yap
      smoothScrollTo('contact-section');
    } else {
      // Başka sayfadaysak ana sayfaya yönlendir
      window.location.href = '/#contact';
    }
    setIsMobileMenuOpen(false);
  };

  const navigateToBlog = () => {
    if (pathname === '/') {
      // Ana sayfadaysak scroll yap
      smoothScrollTo('blog-section');
    } else {
      // Başka sayfadaysak ana sayfaya yönlendir
      window.location.href = '/#blog';
    }
    setIsMobileMenuOpen(false);
  };

  // ...existing code...

  const navigateToHome = () => {
    window.location.href = '/';
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: "/", label: "Ana Sayfa", onClick: navigateToHome },
    { href: "/#services", label: "Hizmetler", onClick: navigateToServices },
    { href: "/#blog", label: "Blog", onClick: navigateToBlog },
    { href: "/#contact", label: "İletişim", onClick: navigateToContact },
  ];

  const subNavItems = [
    { href: "/izmir/konak/klima-servisi", label: "Klima Servisi", onClick: null },
    { href: "/izmir/konak/kombi-servisi", label: "Kombi Servisi", onClick: null },
    { href: "/izmir/konak/bulasik-makinesi-servisi", label: "Bulaşık Makinesi Servisi", onClick: null },
    { href: "/izmir/konak/camasir-makinesi-servisi", label: "Çamaşır Makinesi Servisi", onClick: null },
    { href: "/izmir/konak/buzdolabi-servisi", label: "Buzdolabı Servisi", onClick: null },
  ];

  const mobileNavItems = [
    { href: "/izmir/konak/klima-servisi", label: "Klima", onClick: null },
    { href: "/izmir/konak/kombi-servisi", label: "Kombi", onClick: null },
    { href: "/izmir/konak/bulasik-makinesi-servisi", label: "Bulaşık", onClick: null },
    { href: "/izmir/konak/camasir-makinesi-servisi", label: "Çamaşır", onClick: null },
    { href: "/izmir/konak/buzdolabi-servisi", label: "Buzdolabı", onClick: null },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative flex h-16 items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-3xl md:text-4xl font-extrabold tracking-tight text-blue-600">
              İzmir Teknik Servis
            </Link>
          </div>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center justify-center gap-3">
              {navItems.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <Fragment key={item.href}>
                    <li>
                      {item.onClick ? (
                        <button 
                          onClick={item.onClick}
                          className={getLinkClassName(false)}
                        >
                          {item.label}
                        </button>
                      ) : (
                        <Link href={item.href} className={getLinkClassName(isActive)}>
                          {item.label}
                        </Link>
                      )}
                    </li>
                    {idx < navItems.length - 1 ? (
                      <li aria-hidden className="text-gray-300">|</li>
                    ) : null}
                  </Fragment>
                );
              })}
              <li>
                <Link
                  href="/servis-cagir"
                  className="ml-3 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-1.5 text-base font-semibold text-white ring-1 ring-inset ring-blue-500/10 transition-all hover:bg-blue-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.04c.98 0 1.84.64 2.114 1.575l.59 2.065a2.25 2.25 0 0 1-.568 2.2l-1.13 1.13a.75.75 0 0 0-.185.76c.518 1.518 1.73 2.73 3.248 3.248a.75.75 0 0 0 .76-.185l1.13-1.13a2.25 2.25 0 0 1 2.2-.568l2.065.59A2.25 2.25 0 0 1 19.5 17.46v2.04a2.25 2.25 0 0 1-2.25 2.25h-.75c-8.008 0-14.25-6.242-14.25-14.25v-.75Z" />
                  </svg>
                  Servis Çağır
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:hidden">
            <button
              type="button"
              aria-label="Menüyü aç"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={item.onClick}
                className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Link
              href="/servis-cagir"
              className="block w-full text-center px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors mt-4"
            >
              Servis Çağır
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Navigation Bar */}
      <nav aria-label="Mobile Services" className="md:hidden bg-blue-600 border-t border-blue-500">
        <div className="w-full px-3 py-2">
          <div className="grid grid-cols-5 gap-1">
            {mobileNavItems.map((item, idx) => (
              <Link 
                key={item.href + idx}
                href={item.href}
                className="text-xs font-medium text-white hover:text-white/90 transition-colors px-1 py-2 rounded-md hover:bg-blue-700 active:bg-blue-800 text-center"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <nav aria-label="Secondary" className="hidden bg-blue-600 md:block">
        <div className="mx-auto max-w-6xl px-4">
          <ul className="flex items-center justify-center gap-4 py-3">
            {subNavItems.map((item, idx) => (
              <Fragment key={item.href + idx}>
                <li>
                  <Link 
                    href={item.href}
                    className="text-lg font-medium text-white hover:text-white/90 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
                {idx < subNavItems.length - 1 ? (
                  <li aria-hidden className="text-white/60">|</li>
                ) : null}
              </Fragment>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
} 