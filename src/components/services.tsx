"use client";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <section id="services-section" className="relative isolate">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50/60 to-blue-50" />
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-700">Hizmetlerimiz</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Klima, kombi, bulaşık, çamaşır ve buzdolabı için aynı gün yerinde servis.</p>
        </div>

        {/* Üst sıra: 3 büyük kart */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-7">
          <Link href="/izmir/konak/klima-servisi" className="block overflow-hidden border border-gray-200 bg-white p-10 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-center">
            <div className="relative mx-auto h-60 sm:h-72">
              <Image src="/klima.jpg" alt="Klima Servisi" fill className="object-cover" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold">Klima Servisi</h3>
            <p className="mt-3 text-gray-600">&quot;Klima sistemleriniz için aynı gün içerisinde bakım, onarım ve gaz dolumu hizmeti sunuyoruz. Hızlı, güvenilir ve uzman ekibimizle, konforunuzdan ödün vermeden sorunlarınıza anında çözüm üretiyoruz.&quot;</p>
          </Link>

          <Link href="/izmir/konak/kombi-servisi" className="block overflow-hidden border border-gray-200 bg-white p-10 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-center">
            <div className="relative mx-auto h-60 sm:h-72">
              <Image src="/kombi.jpg" alt="Kombi Servisi" fill className="object-cover" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold">Kombi Servisi</h3>
            <p className="mt-3 text-gray-600">&quot;Cihazlarınızdaki tüm sorunlar için detaylı arıza tespiti, düzenli bakım hizmetleri ve gerektiğinde orijinal parça değişimi ile uzun ömürlü ve verimli kullanım sağlıyoruz. Deneyimli teknik ekibimizle hızlı ve güvenilir çözümler sunuyoruz.&quot;</p>
          </Link>
          <Link href="/izmir/konak/bulasik-makinesi-servisi" className="block overflow-hidden border border-gray-200 bg-white p-10 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-center">
            <div className="relative mx-auto h-60 sm:h-72">
              <Image src="/bulasik.jpg" alt="Bulaşık Makinesi Servisi" fill className="object-cover" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold">Bulaşık Makinesi</h3>
            <p className="mt-3 text-gray-600">&quot;Cihazınız su almıyor, programlarda hata veriyor ya da yıkama işlemini düzgün gerçekleştirmiyorsa, uzman ekibimiz arızaları kısa sürede tespit ederek kalıcı çözümler sunar. Gelişmiş teknik destekle, cihaz performansınızı ilk günkü haline getiriyoruz.&quot;</p>
          </Link>
        </div>

        {/* Alt sıra: Ortalanmış 2 büyük kart */}
        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-7 max-w-4xl mx-auto">
          <Link href="/izmir/konak/camasir-makinesi-servisi" className="block overflow-hidden border border-gray-200 bg-white p-10 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-center">
            <div className="relative mx-auto h-60 sm:h-72">
              <Image src="/camasir.jpg" alt="Çamaşır Makinesi Servisi" fill className="object-cover" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold">Çamaşır Makinesi</h3>
            <p className="mt-3 text-gray-600">&quot;Cihazınızın tamburu dönmüyor, suyu boşaltmıyor ya da normalden fazla gürültülü çalışıyorsa, bu sorunların her biri ciddi arıza belirtileri olabilir. Deneyimli teknik ekibimiz, tüm mekanik ve elektronik sorunları titizlikle analiz ederek hızlı ve kalıcı onarım çözümleri sunar. Sessiz, verimli ve sorunsuz bir kullanım için profesyonel destek sağlıyoruz.&quot;</p>
          </Link>

          <Link href="/izmir/konak/buzdolabi-servisi" className="block overflow-hidden border border-gray-200 bg-white p-10 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-center">
            <div className="relative mx-auto h-60 sm:h-72">
              <Image src="/buzdolabi.jpg" alt="Buzdolabı Servisi" fill className="object-cover" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold">Buzdolabı Servisi</h3>
            <p className="mt-3 text-gray-600">&quot;Klimanız ya da buzdolabınız yeterince soğutmuyor, karlanma yapıyor, rahatsız edici sesler çıkarıyor veya kötü kokular yayıyorsa, bu durumlar cihazınızın verimliliğini ve konforunuzu ciddi şekilde etkileyebilir. Alanında uzman teknik ekibimiz, tüm bu sorunlara yönelik detaylı kontrol, bakım ve onarım işlemleriyle cihazınızı ilk günkü performansına kavuşturur.&quot;</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

 