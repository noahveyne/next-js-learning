"use client";

import Link from "next/link";

export default function Footer() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToBlog = () => {
    const blogSection = document.getElementById('blog-section');
    if (blogSection) {
      blogSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-extrabold tracking-tight text-blue-400 mb-4 block">
              beyazeşyaizmir
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              İzmir&apos;de beyaz eşya servisi konusunda uzman ekibimizle 7/24 hizmetinizdeyiz. 
              Aynı gün servis, garantili işçilik ve orijinal yedek parça ile güvenilir çözümler sunuyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+905325423351" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a href="https://wa.me/905325423351" target="_blank" rel="noopener" className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              <a href="mailto:info@beyazesyaizmir.com" className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={scrollToServices}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Hizmetler
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToServices}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Servislerimiz
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToContact}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  İletişim
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToBlog}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Servisler */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servislerimiz</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/izmir/konak/klima-servisi" className="text-gray-300 hover:text-white transition-colors">
                  Klima Servisi
                </Link>
              </li>
              <li>
                <Link href="/izmir/konak/kombi-servisi" className="text-gray-300 hover:text-white transition-colors">
                  Kombi Servisi
                </Link>
              </li>
              <li>
                <Link href="/izmir/konak/bulasik-makinesi-servisi" className="text-gray-300 hover:text-white transition-colors">
                  Bulaşık Makinesi
                </Link>
              </li>
              <li>
                <Link href="/izmir/konak/camasir-makinesi-servisi" className="text-gray-300 hover:text-white transition-colors">
                  Çamaşır Makinesi
                </Link>
              </li>
              <li>
                <Link href="/izmir/konak/buzdolabi-servisi" className="text-gray-300 hover:text-white transition-colors">
                  Buzdolabı Servisi
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Bölüm */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Beyaz Eşya İzmir. Tüm hakları saklıdır.
            </div>
            <div className="flex space-x-6 text-sm">
              <button 
                onClick={scrollToServices}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Hizmetler
              </button>
              <button 
                onClick={scrollToContact}
                className="text-gray-400 hover:text-white transition-colors"
              >
                İletişim
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
