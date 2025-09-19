"use client";

import { useLocation } from "@/hooks/useLocation";
import { toTitle } from "@/lib/data";
import Footer from "./Footer";

type Props = {
  ilce: string;
  hizmet: string;
};

export default function ServicePage({ ilce, hizmet }: Props) {
  const { location, loading } = useLocation();
  
  // Konum tespit edilirse o ilçeyi kullan, yoksa URL'deki ilçeyi kullan
  const currentDistrict = location?.district ? toTitle(location.district) : ilce;
  const getServiceIcon = (service: string) => {
    if (service.toLowerCase().includes('klima')) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      );
    }
    if (service.toLowerCase().includes('kombi')) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    }
    return (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    );
  };

  const getServiceProblems = (service: string) => {
    if (service.toLowerCase().includes('klima')) {
      return [
        "Soğutmuyor / ısıtmıyor",
        "Gürültülü çalışma",
        "Su damlatıyor",
        "Koku problemi",
        "Gaz kaçağı",
        "Kumanda çalışmıyor",
        "Filtre temizliği",
        "Montaj / demontaj"
      ];
    }
    if (service.toLowerCase().includes('kombi')) {
      return [
        "Isıtmıyor / sıcak su yok",
        "Gürültülü çalışma",
        "Su sızıntısı",
        "Gaz kokusu",
        "Ateşleme sorunu",
        "Basınç düşüklüğü",
        "Termostat arızası",
        "Bacalama problemi"
      ];
    }
    return [
      "Su almıyor / su boşaltmıyor",
      "Çalışmıyor / açılmıyor",
      "Gürültülü çalışma",
      "Soğutmuyor / ısıtmıyor",
      "Koku / sızıntı",
      "Program hataları"
    ];
  };

  const problems = getServiceProblems(hizmet);

  // Konum tabanlı structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${currentDistrict} ${hizmet}`,
    "description": `${currentDistrict} bölgesinde ${hizmet} hizmeti. Aynı gün servis, orijinal parça, garanti.`,
    "url": `https://www.izmir-teknikservis.com/izmir/${ilce.toLowerCase()}/${hizmet.toLowerCase().replace(/\s+/g, '-')}`,
    "telephone": "+ 90 501 471 73 80",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": currentDistrict,
      "addressRegion": "İzmir",
      "addressCountry": "TR"
    },
    "geo": location ? {
      "@type": "GeoCoordinates",
      "latitude": location.latitude,
      "longitude": location.longitude
    } : undefined,
    "areaServed": {
      "@type": "City",
      "name": currentDistrict
    },
    "serviceType": hizmet,
    "priceRange": "$$",
    "openingHours": "Mo-Su 00:00-23:59",
    "sameAs": [
      "https://wa.me/905014717380"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${hizmet} Hizmetleri`,
  "itemListElement": problems.map((problem) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": problem,
          "description": `${currentDistrict} bölgesinde ${problem} çözümü`
        }
      }))
    }
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      
      <section className="w-full">
      {/* Konum Tespit Ediliyor Göstergesi */}
      {loading && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
          <div className="flex items-center gap-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span className="text-sm">Konumunuz tespit ediliyor...</span>
          </div>
        </div>
      )}

      {/* Konum Tespit Edildi Bildirimi */}
      {!loading && location && location.district !== ilce.toLowerCase() && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Konumunuz tespit edildi: {toTitle(location.district)}</span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
        
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              {getServiceIcon(hizmet)}
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                {currentDistrict} {hizmet}
              </h1>
              <p className="text-blue-100 text-lg mt-2">
                Profesyonel Teknik Servis
              </p>
            </div>
          </div>
          
          <p className="text-white/90 text-lg max-w-3xl leading-relaxed mb-8">
            Ustalarımız {currentDistrict} ve çevresinde aynı gün yerinde servis sağlar. Orijinal yedek parça,
            garanti ve şeffaf fiyatlandırma ile hızlı çözüm. 7/24 acil servis hizmeti.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="tel:+905014717380" 
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-white/90 transition-all transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Hemen Ara
            </a>
            <a 
              href="https://wa.me/905014717380?text=Merhaba,%20İzmir%20Teknik%20Servis%20hizmeti%20almak%20istiyorum." 
              target="_blank" 
              rel="noopener" 
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-green-600 transition-all transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Neden Biz Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Neden Biz?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {currentDistrict} {hizmet} konusunda uzman ekibimizle size en iyi hizmeti sunuyoruz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Aynı Gün Servis</h3>
              <p className="text-gray-600">Acil durumlarınızda aynı gün içinde hizmetinizdeyiz. Hızlı müdahale ile sorunlarınızı çözüyoruz.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Garantili İşçilik</h3>
              <p className="text-gray-600">Tüm işçiliklerimiz garanti altındadır. Kaliteli hizmet anlayışımızla müşteri memnuniyetini ön planda tutuyoruz.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Orijinal Parça</h3>
              <p className="text-gray-600">Sadece orijinal yedek parça kullanıyoruz. Cihazınızın ömrünü uzatmak için kaliteli malzemeler tercih ediyoruz.</p>
            </div>
          </div>
        </div>

        {/* Arızalar Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hangi Arızaları Çözüyoruz?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {hizmet} ile ilgili tüm arıza türlerinde uzman ekibimizle hizmetinizdeyiz
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {problems.map((problem, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">{problem}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    
    {/* Footer */}
    <Footer />
    </>
  );
}


