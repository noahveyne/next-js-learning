<<<<<<< HEAD
## Beyaz Eşya Servisi — Next.js Projesi

İzmir ve ilçeleri için beyaz eşya/iklimlendirme servis hizmetleri odaklı, hızlı ve SEO uyumlu bir Next.js uygulaması.

### Amaçlar
- Yerel SEO (İzmir + 30 ilçe) ve hizmet bazlı landing sayfaları
- Core Web Vitals dostu hızlı arayüz
- Dönüşüm odaklı CTA’lar (Ara, WhatsApp, Form)

---

## Teknolojiler
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- `next/image`, Metadata API

---

## Komutlar
```bash
# Geliştirme
npm run dev

# Üretim build
npm run build

# Build sonrası çalıştır
npm run start
```

Varsayılan adres: `http://localhost:3000`

---

## Proje Yapısı (özet)
```
src/
  app/
    page.tsx           # Ana sayfa (Hero + Hizmetler)
    robots.ts          # robots.txt üretimi
    sitemap.ts         # sitemap.xml üretimi
    izmir/[ilce]/[hizmet]/page.tsx  # Dinamik hizmet sayfaları
  components/
    Header.tsx
    HeroSlider.tsx
    services.tsx       # Hizmetler grid
    ServicePage.tsx    # Dinamik sayfa içerik bileşeni
  lib/
    data.ts            # İlçeler, hizmetler, yardımcılar
```

---

## Uygulanan Özellikler
- Ana sayfa hero slider (otomatik geçiş, butonlar)
- “Hizmetlerimiz” bölümü: 3+2 düzen, görsel ikonlar, hover durumları
- Dinamik rota: `/izmir/[ilce]/[hizmet]`
- `generateStaticParams` ile SSG
- Metadata ve OpenGraph başlık/açıklama
- `sitemap.ts` ve `robots.ts`
- Ana sayfada LocalBusiness JSON-LD

---

## SEO ve İçerik
- Başlık şablonu: `{İlçe} {Hizmet} | Aynı Gün Servis | 7/24 Destek`
- Açıklama: ilçe + hizmet odaklı
- Görseller `next/image` ve anlamlı `alt` metinleri
- Dahili linkleme: Hizmet kartlarından dinamik sayfalara

---

## Ortam Değişkenleri (opsiyonel)
`.env` içine eklenebilir:
```
GTM_ID=
SMTP_HOST=
SMTP_USER=
SMTP_PASS=
```

---

## Geliştirme Notları
- Görseller `public/` klasöründe olmalıdır (ör. `/klima.jpg`, `/kombi.jpg`, ...)
- İlçe/hizmet linkleri örnek olarak `konak` ile verilmiştir; ihtiyaca göre dinamikleştirilebilir.
- Tasarım Tailwind sınıfları ile özelleştirilebilir (renkler, spacing, grid kolonları).

---

## Yayınlama
- `npm run build` sonrası Vercel veya Node barındırma
- Domain & Search Console yapılandırması
- `sitemap.xml` ve `robots.txt` kontrolü

---

## Yol Haritası (öneri)
- İletişim formu (Zod + Server Action) ve SSS bölümü
- İlçe seçimi ile dinamik link oluşturma
- Marka logoları bölümü (yetkili olduğunuz markalar)
=======
# beyazesya
>>>>>>> a6e085b3b620d31e14797a24beb7eee666b9c1ea
