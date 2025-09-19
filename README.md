# İzmir Teknik Servis - Beyaz Eşya Servisi

Modern ve kullanıcı dostu bir beyaz eşya teknik servis web sitesi. Next.js 15, TypeScript ve Tailwind CSS ile geliştirilmiştir.

## 🚀 Özellikler

- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **SEO Optimizasyonu**: Arama motorları için optimize edilmiş
- **Hızlı Navigasyon**: 0.5 saniyede smooth scroll ile bölümler arası geçiş
- **Çoklu Marka Desteği**: Arçelik, Bosch, LG, Samsung, Siemens, Vestel
- **Konum Tabanlı Servis**: İzmir'in tüm ilçelerinde hizmet
- **WhatsApp Entegrasyonu**: Direkt iletişim için WhatsApp butonu
- **Blog Sistemi**: Teknik servis rehberi ve ipuçları

## 🛠️ Teknolojiler

- **Framework**: Next.js 15 (App Router)
- **Dil**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Geist Sans & Geist Mono
- **Deployment**: Vercel Ready

## 📁 Proje Yapısı

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Ana layout
│   ├── page.tsx           # Ana sayfa
│   ├── globals.css        # Global stiller
│   ├── hizmetler/         # Hizmetler sayfaları
│   ├── izmir/             # İlçe bazlı servis sayfaları
│   └── servis-cagir/      # Servis çağır sayfası
├── components/            # React bileşenleri
│   ├── Header.tsx         # Navigasyon header
│   ├── ClientHeader.tsx   # Client-side header wrapper
│   ├── ServicePage.tsx    # Servis sayfası bileşeni
│   ├── HeroSlider.tsx     # Ana sayfa slider
│   ├── Services.tsx       # Hizmetler bölümü
│   ├── Blog.tsx           # Blog bölümü
│   ├── Contact.tsx        # İletişim bölümü
│   └── Footer.tsx         # Footer bileşeni
├── lib/                   # Yardımcı fonksiyonlar
│   └── data.ts           # Veri ve konfigürasyon
└── hooks/                # Custom React hooks
    └── useLocation.ts    # Konum tespit hook'u
```

## 🎯 Hizmetler

- **Klima Servisi**: Bakım, onarım, gaz dolumu
- **Kombi Servisi**: Arıza tespiti, bakım, parça değişimi
- **Buzdolabı Servisi**: Soğutma sorunları, bakım
- **Çamaşır Makinesi Servisi**: Mekanik ve elektronik arızalar
- **Bulaşık Makinesi Servisi**: Program hataları, su sorunları

## 🌍 Desteklenen İlçeler

İzmir'in tüm 30 ilçesinde hizmet:
- Konak, Karşıyaka, Bornova, Buca, Çiğli
- Gaziemir, Balçova, Narlıdere, Güzelbahçe
- Urla, Çeşme, Karaburun, Foça, Menemen
- Aliağa, Bergama, Dikili, Kınık, Tire
- Bayındır, Torbalı, Selçuk, Menderes
- Seferihisar, Kemalpaşa, Ödemiş, Beydağ
- Kiraz, Bayraklı, Karabağlar

## 🚀 Kurulum

1. **Projeyi klonlayın**:
   ```bash
   git clone <repository-url>
   cd beyazesya
   ```

2. **Bağımlılıkları yükleyin**:
   ```bash
   npm install
   ```

3. **Geliştirme sunucusunu başlatın**:
   ```bash
   npm run dev
   ```

4. **Tarayıcıda açın**: [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Tasarım

- **Desktop**: Tam özellikli navigasyon ve layout
- **Tablet**: Optimize edilmiş orta ekran deneyimi
- **Mobile**: Touch-friendly arayüz ve hamburger menü

## 🔧 Geliştirme

### Önemli Dosyalar

- `src/components/Header.tsx`: Ana navigasyon sistemi
- `src/components/ServicePage.tsx`: Servis sayfaları template'i
- `src/lib/data.ts`: İlçe ve hizmet verileri
- `src/app/globals.css`: Global stiller ve animasyonlar

### Navigasyon Sistemi

- Ana sayfada: Smooth scroll ile bölümler arası geçiş
- Diğer sayfalarda: Ana sayfaya yönlendirme
- 0.5 saniye süre ile pürüzsüz animasyon

### SEO Optimizasyonu

- Structured Data (JSON-LD) entegrasyonu
- Meta tags ve Open Graph
- Sitemap otomatik oluşturma
- Canonical URL'ler

## 📞 İletişim

- **Telefon**: + 90 501 471 73 80
- **WhatsApp**: [Direkt Mesaj](https://wa.me/905014717380)
- **E-posta**: info@izmir-teknikservis.com
- **Website**: https://www.izmir-teknikservis.com

## 📄 Lisans

Bu proje özel kullanım için geliştirilmiştir.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📈 Performans

- **Lighthouse Score**: 95+ (Performance, SEO, Accessibility)
- **Core Web Vitals**: Optimize edilmiş
- **Loading Time**: < 2 saniye
- **Mobile Friendly**: Google Mobile-Friendly Test geçer

---

**İzmir Teknik Servis** - Beyaz eşyalarınız için güvenilir çözüm ortağınız.