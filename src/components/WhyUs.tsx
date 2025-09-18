export default function WhyUs() {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6">
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
            <div className="flex items-stretch">
              {/* Sol kırmızı ikon bloğu */}
              <div className="flex w-28 items-center justify-center bg-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10 text-white">
                  <path d="M11.7 1.7a1 1 0 0 1 1.6 0l1.408 1.878a1 1 0 0 0 .703.405l2.343.263a1 1 0 0 1 .57 1.704L16.97 7.533a1 1 0 0 0-.267.9l.512 2.308a1 1 0 0 1-1.458 1.102l-2.07-1.12a1 1 0 0 0-.96 0l-2.07 1.12a1 1 0 0 1-1.459-1.102l.513-2.308a1 1 0 0 0-.268-.9L5.676 5.95a1 1 0 0 1 .57-1.704l2.343-.263a1 1 0 0 0 .703-.405L11.7 1.7Z" />
                </svg>
              </div>
              {/* Sağ içerik */}
              <div className="flex-1 p-8 sm:p-10">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">Uzman Kadro ile Güvenilir Servis</h3>
                <p className="mt-4 max-w-3xl text-gray-600">7/24 hizmet, talebinizin ardından aynı gün içinde adresinize yönlendirilen teknik ekibimizle hızlı ve kalıcı çözüme ulaştırıyoruz. Eğitimli ve sertifikalı teknisyenlerimizle şeffaf fiyat ve memnuniyet odaklı servis sunuyoruz.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


