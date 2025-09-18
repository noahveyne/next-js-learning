# 🏢 Beyaz Eşya Marka Sistemleri

Bu proje yaygın beyaz eşya markaları için otomatik olarak oluşturulan servis sistemlerini içerir.

## 📋 Oluşturulan Markalar

### 1. 🟦 Bosch Servisi
- **Domain**: `boschservisizmir.com`
- **Renk**: #003087 (Bosch Mavi)
- **Logo**: B
- **Özellikler**: Premium kalite, Alman teknolojisi
- **Klasör**: `brands/bosch/`

### 2. 🟢 Siemens Servisi
- **Domain**: `siemensservisizmir.com`
- **Renk**: #009639 (Siemens Yeşil)
- **Logo**: S
- **Özellikler**: Premium kalite, orijinal yedek parça
- **Klasör**: `brands/siemens/`

### 3. 🔵 Samsung Servisi
- **Domain**: `samsungservisizmir.com`
- **Renk**: #1428A0 (Samsung Mavi)
- **Logo**: S
- **Özellikler**: Akıllı teknoloji, garantili servis
- **Klasör**: `brands/samsung/`

### 4. 🔴 LG Servisi
- **Domain**: `lgservisizmir.com`
- **Renk**: #A50034 (LG Kırmızı)
- **Logo**: L
- **Özellikler**: Life's Good teknolojisi, güvenilir servis
- **Klasör**: `brands/lg/`

### 5. 🇹🇷 Arçelik Servisi
- **Domain**: `arcelikservisizmir.com`
- **Renk**: #E31E24 (Arçelik Kırmızı)
- **Logo**: A
- **Özellikler**: Türk teknolojisi, güvenilir servis
- **Klasör**: `brands/arcelik/`

### 6. 🇹🇷 Vestel Servisi
- **Domain**: `vestelservisizmir.com`
- **Renk**: #00A651 (Vestel Yeşil)
- **Logo**: V
- **Özellikler**: Türk markası, uygun fiyatlı servis
- **Klasör**: `brands/vestel/`

## 🛠️ Her Marka İçin Oluşturulan Dosyalar

### 📁 Yapı
```
brands/[marka]/
├── package.json                 # NPM konfigürasyonu
├── public/                      # Statik dosyalar
│   ├── [marka]-favicon.svg     # SVG favicon
│   ├── [marka]-apple-touch-icon.png  # Apple touch icon
│   └── [marka]-og-image.jpg    # Open Graph görseli
└── src/app/                     # Next.js app router
    ├── layout.tsx              # Ana layout (metadata, favicon)
    ├── page.tsx                # Ana sayfa (structured data)
    └── sitemap.ts              # SEO sitemap
```

### 🎨 Özellikler
- ✅ **Marka özel favicon** (SVG + ICO + Apple Touch)
- ✅ **Marka renkleri** ile tasarım
- ✅ **SEO optimizasyonu** (meta tags, structured data)
- ✅ **Responsive tasarım**
- ✅ **Sitemap** (193+ URL)
- ✅ **Open Graph** görselleri
- ✅ **Schema.org** structured data

## 🚀 Kullanım

### Yeni Marka Oluşturma
```bash
node scripts/create-brand-system.js <marka>
```

### Mevcut Markalar
```bash
node scripts/create-brand-system.js
```

### Örnekler
```bash
# Bosch sistemi oluştur
node scripts/create-brand-system.js bosch

# Samsung sistemi oluştur  
node scripts/create-brand-system.js samsung

# Tüm mevcut markaları listele
node scripts/create-brand-system.js
```

## 📊 SEO Özellikleri

### Her Marka İçin:
- **Ana Sayfa**: Priority 1.0, Daily update
- **Servis Sayfaları**: Priority 0.8-0.9, Weekly update
- **Blog Sayfaları**: Priority 0.6-0.8, Monthly update
- **İletişim/Hakkımızda**: Priority 0.7-0.8, Monthly update

### Structured Data:
- LocalBusiness schema
- Brand information
- Service area (İzmir + 30 ilçe)
- Contact information
- Service types

## 🎯 Domain Yapısı

Her marka için özel domain:
- `https://www.boschservisizmir.com`
- `https://www.siemensservisizmir.com`
- `https://www.samsungservisizmir.com`
- `https://www.lgservisizmir.com`
- `https://www.arcelikservisizmir.com`
- `https://www.vestelservisizmir.com`

## 📱 Responsive Tasarım

- ✅ Mobile-first approach
- ✅ Tablet optimizasyonu
- ✅ Desktop uyumluluğu
- ✅ Touch-friendly interface
- ✅ Fast loading times

## 🔧 Geliştirme

### Marka Ekleme
1. `scripts/create-brand-system.js` dosyasında `BRAND_CONFIGS` objesine yeni marka ekle
2. Script'i çalıştır: `node scripts/create-brand-system.js <yeni-marka>`

### Özelleştirme
Her marka klasörü bağımsız Next.js projesi olarak çalıştırılabilir:
```bash
cd brands/bosch
npm install
npm run dev
```

## 📈 Performans

- ⚡ Next.js 15.5.2 (Turbopack)
- 🚀 Server-side rendering
- 📦 Optimized bundle size
- 🖼️ Image optimization
- 🔍 SEO ready

---

**Toplam 6 marka sistemi hazır!** 🎉
