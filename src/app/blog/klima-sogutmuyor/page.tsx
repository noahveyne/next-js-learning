import { Metadata } from "next";
import Link from "next/link";
// ...existing code...

export const metadata: Metadata = {
  title: "Klima Soğutmuyor - Sorun ve Çözümleri | İzmir Teknik Servis",
  description: "Klimanız yeterince soğutmuyor mu? Bu yaygın sorunun nedenleri ve çözüm yöntemleri hakkında detaylı rehber. Uzman tavsiyeleri ve pratik çözümler.",
  keywords: "klima soğutmuyor, klima arızası, klima bakımı, klima onarımı, İzmir klima servisi",
  openGraph: {
    title: "Klima Soğutmuyor - Sorun ve Çözümleri",
    description: "Klimanız yeterince soğutmuyor mu? Bu yaygın sorunun nedenleri ve çözüm yöntemleri hakkında detaylı rehber.",
    type: "article",
    publishedTime: "2024-12-15T00:00:00.000Z",
    authors: ["İzmir Teknik Servis"],
  },
};

export default function KlimaBlogPost() {
  const post = {
    id: 1,
    title: "Klima Soğutmuyor - Sorun ve Çözümleri",
    excerpt: "Klimanız yeterince soğutmuyor mu? Bu yaygın sorunun nedenleri ve çözüm yöntemleri hakkında detaylı rehber.",
    date: "15 Aralık 2024",
    category: "Klima Servisi",
    readTime: "5 dk okuma",
    content: {
      introduction: "Klima soğutma sorunu, özellikle yaz aylarında en sık karşılaşılan problemlerden biridir. Bu sorunun birçok farklı nedeni olabilir ve doğru tespit edilmesi, etkili çözüm için kritik önem taşır.",
      causes: [
        "Filtrelerin kirli olması ve hava akışını engellemesi",
        "Gaz seviyesinin düşük olması (freon eksikliği)",
        "Evaporatör veya kondenser bobinlerinin kirlenmesi",
        "Fan motorunun arızalı olması",
        "Termostat ayarlarının yanlış olması",
        "Dış ünitenin güneş altında kalması ve aşırı ısınması",
        "Hava kanallarının tıkanması",
        "Elektronik kart arızası"
      ],
      solutions: [
        "Filtreleri düzenli olarak temizleyin veya değiştirin",
        "Profesyonel teknisyen tarafından gaz kontrolü yaptırın",
        "Bobin temizliği için uzman servis çağırın",
        "Fan motoru arızası için teknik servis desteği alın",
        "Termostat ayarlarını kontrol edin (18-22°C ideal)",
        "Dış üniteyi gölge bir alana taşıyın",
        "Hava kanallarını temizletin",
        "Elektronik kart arızası için yetkili servise başvurun"
      ],
      prevention: "Klimanızın düzenli bakımını yaptırarak, filtreleri temizleyerek ve profesyonel kontrollerden geçirerek bu sorunları önleyebilirsiniz. Yılda en az 2 kez bakım yaptırmanız önerilir."
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <Link 
            href="/#blog" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Blog&apos;a Dön
          </Link>
          
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
              {post.category}
            </span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-12">
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-64 md:h-80 bg-gradient-to-br from-blue-600 to-blue-800">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                <h2 className="text-2xl md:text-3xl font-bold">Klima Soğutma Sorunları</h2>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            {/* Introduction */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Giriş</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {post.content.introduction}
              </p>
            </div>

            {/* Causes */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-red-600">⚠️</span>
                Olası Nedenler:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {post.content.causes.map((cause, index) => (
                  <li key={index} className="hover:text-gray-900 transition-colors">{cause}</li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-green-600">✅</span>
                Çözüm Yöntemleri:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {post.content.solutions.map((solution, index) => (
                  <li key={index} className="hover:text-gray-900 transition-colors">{solution}</li>
                ))}
              </ul>
            </div>

            {/* Prevention */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-purple-600">🛡️</span>
                Önleme:
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {post.content.prevention}
              </p>
            </div>

            {/* CTA */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                Profesyonel Destek Alın
              </h3>
              <p className="text-blue-800 mb-4">
                Klima sorunlarınız için uzman ekibimizden destek alın. Aynı gün servis hizmeti ile hızlı çözüm.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="tel:+905325423351" 
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Hemen Ara
                </a>
                <a 
                  href="https://wa.me/905325423351?text=Merhaba,%20klima%20soğutma%20sorunu%20hakkında%20bilgi%20almak%20istiyorum." 
                  target="_blank" 
                  rel="noopener"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
