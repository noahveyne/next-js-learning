"use client";

import { useState, useRef, useEffect } from "react";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  // ...existing code...
  const [dragOffset, setDragOffset] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const items = [
    { 
      name: "Ayşe Yel", 
      text: "Bulaşık makinesi su almıyordu, endişelenmiştik. Neyse ki Beyaz Eşya Teknik Servisi'nden yardım aldık. Teknisyenleri samimi ve işlerinde uzmanlar. Hızlıca sorunu çözdüler ve makinemiz tekrar sağlıklı bir şekilde çalışmaya başladı.",
      rating: 4
    },
    { 
      name: "Ercan Sönmez", 
      text: "Kombimiz beklenmedik bir şekilde ısıtmamaya başladı. Beyaz Eşya Teknik Servisi'nden randevu aldık ve gelir gelmez sorunla ilgilendiler. Hızlıca tamir edildi ve tekrar kusursuz bir şekilde çalışmaya başladı. Teşekkür ederiz!",
      rating: 5
    },
    { 
      name: "Seçil Yılmaz", 
      text: "Çamaşır makinesinin su sızıntısı sorunuyla karşılaştığımda, Beyaz Eşya Teknik Servisi'nden yardım aldım. Teknisyenleri çok profesyonel ve işlerinde gerçekten uzmanlar. Sorunumu hızlıca çözdüler, kesinlikle tavsiye ederim.",
      rating: 4
    },
    { 
      name: "Mehmet Kaya", 
      text: "Buzdolabımız aniden çalışmayı bıraktı. Beyaz Eşya Teknik Servisi'ni aradık, aynı gün geldiler. Teknisyen çok deneyimliydi, sorunu hemen tespit etti. Yedek parça değişimi yapıldı ve buzdolabımız tekrar çalışmaya başladı. Çok memnun kaldık.",
      rating: 5
    },
    { 
      name: "Fatma Demir", 
      text: "Klima servisi için aradığımızda çok hızlı yanıt verdiler. Teknisyen geldiğinde klimanın filtrelerini temizledi ve gaz kontrolü yaptı. Artık klimamız çok daha verimli çalışıyor. Fiyat da çok uygun, kesinlikle tavsiye ederim.",
      rating: 5
    },
    { 
      name: "Ali Özkan", 
      text: "Çamaşır makinesi gürültülü çalışmaya başlamıştı. Beyaz Eşya Teknik Servisi'nden randevu aldık. Teknisyen makineyi söktü, rulman değişimi yaptı. Artık makine çok sessiz çalışıyor. İşçilik kalitesi mükemmel, teşekkürler.",
      rating: 4
    },
    { 
      name: "Zeynep Arslan", 
      text: "Bulaşık makinesi su boşaltmıyordu, çok sinir bozucuydu. Beyaz Eşya Teknik Servisi'ni aradık, ertesi gün geldiler. Pompa arızası varmış, değiştirdiler. Makine artık mükemmel çalışıyor. Çok profesyonel hizmet aldık.",
      rating: 5
    },
    { 
      name: "Mustafa Çelik", 
      text: "Kombi servisi için aradığımızda çok samimi karşıladılar. Teknisyen kombiyi detaylı kontrol etti, temizlik yaptı. Artık kombi çok daha verimli çalışıyor ve daha az yakıt tüketiyor. Fiyat performans açısından çok iyi.",
      rating: 4
    },
    { 
      name: "Elif Yıldız", 
      text: "Buzdolabımızın kapısı kapanmıyordu, sürekli açık kalıyordu. Beyaz Eşya Teknik Servisi'nden yardım aldık. Teknisyen kapı contasını değiştirdi ve ayar yaptı. Artık kapı mükemmel kapanıyor. Çok hızlı ve kaliteli hizmet.",
      rating: 5
    },
  ];

  const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg 
      className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} 
      fill="currentColor" 
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  // Her sayfada 1 yorum göster, yanlarında placeholder'lar
  // ...existing code...
  const totalPages = items.length;
  // ...existing code...

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch ve mouse olayları için fonksiyonlar
  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
  // ...existing code...
    setDragOffset(0);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    
    const deltaX = clientX - startX;
  // ...existing code...
    setDragOffset(deltaX);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    const threshold = 30; // Daha düşük threshold - daha hassas
    
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // Sağa kaydırma - önceki slide
        prevSlide();
      } else {
        // Sola kaydırma - sonraki slide
        nextSlide();
      }
    }
    
    setDragOffset(0);
  };

  // Mouse olayları
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    handleEnd();
  };

  // Touch olayları
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Global mouse olaylarını dinle
  useEffect(() => {
    if (isDragging) {
      const handleGlobalMouseMove = (e: MouseEvent) => {
        handleMove(e.clientX);
      };
      const handleGlobalMouseUp = () => {
        handleEnd();
      };
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleGlobalMouseMove);
        document.removeEventListener('mouseup', handleGlobalMouseUp);
      };
    }
  }, [isDragging, startX, dragOffset, handleEnd, handleMove]);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="text-center mb-12">
        <h2 className="text-base md:text-lg font-semibold text-blue-800 uppercase tracking-wide mb-2">
          MÜŞTERİ YORUMLARI
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
          Kimler Bizim İçin Ne Söyledi
        </h1>
      </div>
      
      <div className="relative">
        {/* Slider Container */}
        <div className="overflow-hidden">
          <div 
            ref={sliderRef}
            className={`flex ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ 
              transform: `translateX(calc(-${currentSlide * 100}% + ${dragOffset}px))`,
              transition: isDragging ? 'none' : 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => {
              const item = items[pageIndex];
              const prevItem = items[(pageIndex - 1 + totalPages) % totalPages];
              const nextItem = items[(pageIndex + 1) % totalPages];
              
              return (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    {/* Sol yorum */}
                    <div 
                      className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm opacity-70 transform scale-95 cursor-pointer hover:opacity-90 hover:scale-100 hover:shadow-md transition-all duration-200"
                      onClick={() => setCurrentSlide((pageIndex - 1 + totalPages) % totalPages)}
                    >
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, starIndex) => (
                          <StarIcon key={starIndex} filled={starIndex < prevItem.rating} />
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        &quot;{prevItem.text}&quot;
                      </p>
                      <div className="text-center">
                        <div className="text-gray-800 font-medium">{prevItem.name}</div>
                      </div>
                    </div>

                    {/* Ana yorum */}
                    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-lg transform scale-105 z-10">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, starIndex) => (
                          <StarIcon key={starIndex} filled={starIndex < item.rating} />
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        &quot;{item.text}&quot;
                      </p>
                      <div className="text-center">
                        <div className="text-gray-800 font-medium">{item.name}</div>
                      </div>
                    </div>

                    {/* Sağ yorum */}
                    <div 
                      className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm opacity-70 transform scale-95 cursor-pointer hover:opacity-90 hover:scale-100 hover:shadow-md transition-all duration-200"
                      onClick={() => setCurrentSlide((pageIndex + 1) % totalPages)}
                    >
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, starIndex) => (
                          <StarIcon key={starIndex} filled={starIndex < nextItem.rating} />
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        &quot;{nextItem.text}&quot;
                      </p>
                      <div className="text-center">
                        <div className="text-gray-800 font-medium">{nextItem.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
      
      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2 mt-8">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === currentSlide ? 'bg-blue-600' : 'bg-blue-200 hover:bg-blue-300'
            }`}
            aria-label={`${i + 1}. sayfa`}
          />
        ))}
      </div>
    </section>
  );
}


