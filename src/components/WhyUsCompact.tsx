"use client";

import { useState, type ReactNode } from "react";

export default function WhyUsCompact() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items: { title: string; desc: string; icon: ReactNode }[] = [
    {
      title: "Hızlı ve Doğru Destek",
      desc: "Tarafımıza iletilen her talebi titizlikle değerlendiriyor, sorunun niteliğine göre en uygun çözüm yöntemini en kısa sürede planlayarak uygulamaya alıyoruz. Uzman ekibimiz, hızlı müdahale ve doğru yönlendirme ile süreci baştan sona profesyonelce yönetiyor; böylece siz hiç zaman kaybetmeden kaliteli ve güvenilir hizmetin farkını yaşıyorsunuz.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-blue-600">
          <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 0 9.75 9.75A9.75 9.75 0 0 0 12 2.25Zm.75 5.25a.75.75 0 0 0-1.5 0V12c0 .414.336.75.75.75h3.75a.75.75 0 0 0 0-1.5h-3V7.5Z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: "Uygun Maliyet",
      desc: "Şeffaf fiyat politikamız sayesinde, hizmet öncesinde tüm maliyetleri net ve anlaşılır şekilde paylaşıyor; sürpriz ücretlerle karşılaşmamanız için süreci baştan sona açık bir şekilde yönetiyoruz. Kullandığımız her parçada orijinalliğe, her uygulamada ise doğru işçiliğe önem vererek, cihazınız için en uygun ve uzun ömürlü çözümleri sunuyoruz. Böylece hem bütçenizi zorlamadan hem de kaliteyi riske atmadan hizmet almanın rahatlığını yaşatıyoruz.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-blue-600">
          <path d="M12 3.75c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25 8.25-3.694 8.25-8.25S16.556 3.75 12 3.75Zm.75 4.5a.75.75 0 0 0-1.5 0V9h-.375a2.625 2.625 0 0 0 0 5.25h2.25a1.125 1.125 0 1 1 0 2.25H10.5a.75.75 0 0 0 0 1.5h.75v.75a.75.75 0 0 0 1.5 0V18h.375a2.625 2.625 0 1 0 0-5.25h-2.25a1.125 1.125 0 1 1 0-2.25H13.5a.75.75 0 0 0 0-1.5h-.75V8.25Z" />
        </svg>
      ),
    },
    {
      title: "Ölçülebilir Yapı",
      desc: "Tüm hizmet sürecini başlangıçtan sonuçlandırmaya kadar net performans metrikleriyle adım adım takip ediyor, elde edilen verileri detaylı şekilde analiz ederek raporluyoruz. Bu sayede hem şeffaflığı sağlıyor hem de yapılan işlemlerin verimliliğini somut verilerle ortaya koyuyoruz. Amacımız; her müdahalede ölçülebilir başarı sağlamak ve sürekli gelişen hizmet kalitemizi sizinle paylaşmak.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-blue-600">
          <path d="M3 3.75A.75.75 0 0 1 3.75 3h16.5a.75.75 0 0 1 .75.75v16.5a.75.75 0 0 1-1.28.53l-4.72-4.72-3.22 3.22a.75.75 0 0 1-1.06 0L7.5 14.56l-3.22 3.22a.75.75 0 0 1-1.28-.53V3.75Z" />
        </svg>
      ),
    },
    {
      title: "Emniyet ve Güvenlik",
      desc: "Tüm işlemlerimizi, üretici firmaların belirlediği yetkili prosedürlere birebir uygun şekilde gerçekleştiriyoruz. Uygulamalarımız, hem teknik güvenlik standartlarını karşılamakta hem de garanti kapsamı içinde güvence altına alınmaktadır. Bu sayede cihazlarınızda uzun ömürlü, risksiz ve kullanıcı dostu çözümler sunarken, size de gönül rahatlığıyla hizmet almanın konforunu yaşatıyoruz.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-blue-600">
          <path fillRule="evenodd" d="M11.48 3.499a1.5 1.5 0 0 1 1.04 0l6 2.25A1.5 1.5 0 0 1 19.5 7.18v6.57a6.75 6.75 0 1 1-15 0V7.18a1.5 1.5 0 0 1-.02-1.431l6-2.25Z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: "%98 Müşteri Memnuniyeti",
      desc: "Hizmet kalitemizi, siz değerli müşterilerimizden gelen geri bildirimler doğrultusunda sürekli olarak gözden geçiriyor ve geliştiriyoruz. Her görüşü bir iyileştirme fırsatı olarak değerlendiriyor, memnuniyet odaklı servis anlayışımızla beklentilerin ötesinde bir deneyim sunmayı hedefliyoruz. Amacımız, sadece sorunları çözmek değil; aynı zamanda güven, konfor ve kalıcılık sağlayan bir hizmet standardı oluşturmaktır.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-blue-600">
          <path fillRule="evenodd" d="M2.25 12a9.75 9.75 0 1 1 19.5 0 9.75 9.75 0 0 1-19.5 0Zm13.036-2.586a.75.75 0 0 0-1.072-1.048l-4.18 4.278-1.745-1.74a.75.75 0 1 0-1.06 1.062l2.28 2.275c.293.293.767.287 1.053-.014l4.724-4.813Z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-blue-50/60 to-white" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold text-blue-700 ring-1 ring-inset ring-blue-600/20">Neden biz?</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-700">Neden Bizi Seçmelisiniz?</h2>
          </div>
          <div className="md:col-span-2">
            <ul className="divide-y divide-blue-100 rounded-2xl border border-blue-100 bg-white shadow-sm">
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <li key={idx} className="p-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full items-center justify-between p-5 sm:p-6 text-left flex gap-4 hover:bg-gray-50"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      {item.icon}
                      <span className="text-lg font-semibold text-gray-900">{item.title}</span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`h-5 w-5 text-blue-600 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                    >
                      <path fillRule="evenodd" d="M12 15.75a.75.75 0 0 1-.53-.22l-5.25-5.25a.75.75 0 0 1 1.06-1.06L12 13.94l4.72-4.72a.75.75 0 1 1 1.06 1.06l-5.25 5.25a.75.75 0 0 1-.53.22Z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {isOpen ? (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-gray-600 text-base">
                      {item.desc}
                    </div>
                  ) : null}
                </li>
              );
            })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


