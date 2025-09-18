import Image from "next/image";

export default function BlogPost2() {

  const post = {
    id: 2,
    title: "Kombi Isıtmıyor - Arıza Tespiti ve Çözüm",
    excerpt: "Kombiniz ısıtmıyor mu? Bu sorunun olası nedenleri ve adım adım çözüm yöntemleri.",
    date: "12 Aralık 2024",
    category: "Kombi Servisi",
    readTime: "7 dk okuma",
    content: {
      problem: "Kombi ısıtmıyor veya yetersiz ısıtıyor",
      causes: [
        "Basınç düşüklüğü",
        "Gaz besleme sorunu",
        "Termostat arızası",
        "Pompa çalışmıyor",
        "Radyatörlerde hava",
        "Kireç birikimi"
      ],
      solutions: [
        "Basınç göstergesini kontrol edin - 1-2 bar arası olmalı",
        "Gaz vanasını kontrol edin - Açık olduğundan emin olun",
        "Termostat ayarlarını kontrol edin - 60-70°C ideal",
        "Pompa sesini dinleyin - Çalışmıyorsa servis gerekli",
        "Radyatörleri havalandırın - Üst kısımdaki vanayı açın",
        "Kireç temizliği yapın - Yıllık profesyonel bakım"
      ],
      prevention: "Düzenli bakım, doğru basınç ayarı, kaliteli su kullanımı"
    }
  };

  return (
    <article className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="aspect-video relative">
        <Image 
          src="/kombi1.jpg" 
          alt="Kombi Isıtma" 
          fill 
          className="object-cover"
        />
      </div>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <span className="text-blue-600 text-sm font-medium">{post.category}</span>
          <span className="text-gray-300">•</span>
          <span className="text-gray-500 text-sm">{post.date}</span>
          <span className="text-gray-300">•</span>
          <span className="text-gray-500 text-sm">{post.readTime}</span>
        </div>
        
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
          {post.excerpt}
        </p>

        
        <a 
          href="/blog/kombi-isitmiyor"
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
        >
          Detayları Gör
          <svg 
            className="w-4 h-4 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </article>
  );
}
