import Image from "next/image";

export default function BlogPost1() {

  const post = {
    id: 1,
    title: "Klima Soğutmuyor - Sorun ve Çözümleri",
    excerpt: "Klimanız yeterince soğutmuyor mu? Bu yaygın sorunun nedenleri ve çözüm yöntemleri hakkında detaylı rehber.",
    date: "15 Aralık 2024",
    category: "Klima Servisi",
    readTime: "5 dk okuma",
    content: {
      problem: "Klima soğutmuyor veya yetersiz soğutma yapıyor",
      causes: [
        "Filtrelerin kirli olması",
        "Gaz eksikliği (freon kaçağı)",
        "Evaporatör bobini donması",
        "Kompresör arızası",
        "Termostat ayar sorunu",
        "Dış ünite hava akışı engeli"
      ],
      solutions: [
        "Filtreleri temizleyin veya değiştirin - Aylık temizlik önerilir",
        "Gaz seviyesini kontrol ettirin - Profesyonel servis gerekli",
        "Klimayı kapatıp buzun erimesini bekleyin - 2-3 saat yeterli",
        "Kompresör sesini dinleyin - Anormal ses varsa servis çağırın",
        "Termostat ayarlarını kontrol edin - 22-24°C ideal sıcaklık",
        "Dış ünite çevresini temizleyin - En az 50cm boşluk bırakın"
      ],
      prevention: "Düzenli bakım yapın, filtreleri temiz tutun, doğru sıcaklık ayarları kullanın"
    }
  };

  return (
    <article className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="aspect-video relative">
        <Image 
          src="/klimasogut.jpg" 
          alt="Klima Soğutma" 
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
          href="/blog/klima-sogutmuyor"
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
