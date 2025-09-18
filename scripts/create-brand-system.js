#!/usr/bin/env node

/**
 * Beyaz Eşya Marka Sistemi Oluşturucu
 * Bu script belirtilen marka için tam bir servis sistemi oluşturur
 */

const fs = require('fs');
const path = require('path');

// Marka konfigürasyonları
const BRAND_CONFIGS = {
  bosch: {
    name: 'Bosch',
    domain: 'boschservisizmir.com',
    color: '#003087', // Bosch mavi
    logo: 'B',
    description: 'Bosch beyaz eşya yetkili servisi. Orijinal yedek parça, garantili işçilik.',
    services: [
      'Bosch Buzdolabı Servisi',
      'Bosch Çamaşır Makinesi Servisi', 
      'Bosch Bulaşık Makinesi Servisi',
      'Bosch Fırın Servisi',
      'Bosch Ankastre Servisi',
      'Bosch Küçük Ev Aletleri Servisi'
    ]
  },
  siemens: {
    name: 'Siemens',
    domain: 'siemensservisizmir.com',
    color: '#009639', // Siemens yeşil
    logo: 'S',
    description: 'Siemens beyaz eşya yetkili servisi. Premium kalite, orijinal yedek parça.',
    services: [
      'Siemens Buzdolabı Servisi',
      'Siemens Çamaşır Makinesi Servisi',
      'Siemens Bulaşık Makinesi Servisi', 
      'Siemens Fırın Servisi',
      'Siemens Ankastre Servisi',
      'Siemens Vakum Servisi'
    ]
  },
  samsung: {
    name: 'Samsung',
    domain: 'samsungservisizmir.com',
    color: '#1428A0', // Samsung mavi
    logo: 'S',
    description: 'Samsung beyaz eşya yetkili servisi. Akıllı teknoloji, garantili servis.',
    services: [
      'Samsung Buzdolabı Servisi',
      'Samsung Çamaşır Makinesi Servisi',
      'Samsung Bulaşık Makinesi Servisi',
      'Samsung Mikrodalga Servisi',
      'Samsung Klima Servisi',
      'Samsung TV Servisi'
    ]
  },
  lg: {
    name: 'LG',
    domain: 'lgservisizmir.com',
    color: '#A50034', // LG kırmızı
    logo: 'L',
    description: 'LG beyaz eşya yetkili servisi. Life\'s Good teknolojisi, güvenilir servis.',
    services: [
      'LG Buzdolabı Servisi',
      'LG Çamaşır Makinesi Servisi',
      'LG Bulaşık Makinesi Servisi',
      'LG Mikrodalga Servisi',
      'LG Klima Servisi',
      'LG TV Servisi'
    ]
  },
  arcelik: {
    name: 'Arçelik',
    domain: 'arcelikservisizmir.com',
    color: '#E31E24', // Arçelik kırmızı
    logo: 'A',
    description: 'Arçelik beyaz eşya yetkili servisi. Türk teknolojisi, güvenilir servis.',
    services: [
      'Arçelik Buzdolabı Servisi',
      'Arçelik Çamaşır Makinesi Servisi',
      'Arçelik Bulaşık Makinesi Servisi',
      'Arçelik Fırın Servisi',
      'Arçelik Klima Servisi',
      'Arçelik TV Servisi'
    ]
  },
  vestel: {
    name: 'Vestel',
    domain: 'vestelservisizmir.com',
    color: '#00A651', // Vestel yeşil
    logo: 'V',
    description: 'Vestel beyaz eşya yetkili servisi. Türk markası, uygun fiyatlı servis.',
    services: [
      'Vestel Buzdolabı Servisi',
      'Vestel Çamaşır Makinesi Servisi',
      'Vestel Bulaşık Makinesi Servisi',
      'Vestel Fırın Servisi',
      'Vestel Klima Servisi',
      'Vestel TV Servisi'
    ]
  }
};

function createFavicon(brand) {
  const svg = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="4" fill="${brand.color}"/>
  <text x="16" y="22" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="white">${brand.logo}</text>
</svg>`;

  return svg;
}

function createFaviconICO(brand) {
  // 16x16 ICO format için basit base64 encoded ICO
  // Bu gerçek bir ICO dosyası değil, SVG'den dönüştürülmüş placeholder
  const svgData = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="16" height="16" rx="2" fill="${brand.color}"/>
<text x="8" y="11" font-family="Arial, sans-serif" font-size="7" font-weight="bold" text-anchor="middle" fill="white">${brand.logo}</text>
</svg>`;
  
  return Buffer.from(svgData).toString('base64');
}

function createAppleTouchIcon(brand) {
  const svg = `<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="180" height="180" rx="20" fill="${brand.color}"/>
<text x="90" y="115" font-family="Arial, sans-serif" font-size="75" font-weight="bold" text-anchor="middle" fill="white">${brand.logo}</text>
</svg>`;

  return Buffer.from(svg).toString('base64');
}

function createOGImage(brand) {
  const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1200" height="630" fill="#F5F5F5"/>
<rect x="50" y="50" width="1100" height="530" rx="20" fill="${brand.color}"/>
<text x="600" y="300" font-family="Arial, sans-serif" font-size="120" font-weight="bold" text-anchor="middle" fill="white">${brand.name.toUpperCase()}</text>
<text x="600" y="400" font-family="Arial, sans-serif" font-size="48" text-anchor="middle" fill="white">İzmir Yetkili Servisi</text>
<text x="600" y="480" font-family="Arial, sans-serif" font-size="36" text-anchor="middle" fill="white">Yetkili Teknik Servis | Orijinal Yedek Parça</text>
</svg>`;

  return Buffer.from(svg).toString('base64');
}

function createLayoutTemplate(brand) {
  return `import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import FloatingCTA from "@/components/FloatingCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "${brand.name} İzmir - ${brand.name} Beyaz Eşya Yetkili Servisi",
  description: "İzmir'de ${brand.name.toLowerCase()} beyaz eşya yetkili servisi. ${brand.name} buzdolabı, çamaşır makinesi, bulaşık makinesi, fırın servisi. Yetkili teknik servis, orijinal yedek parça.",
  icons: {
    icon: '/${brand.name.toLowerCase()}-favicon.ico',
    shortcut: '/${brand.name.toLowerCase()}-favicon.ico',
    apple: '/${brand.name.toLowerCase()}-apple-touch-icon.png',
  },
  openGraph: {
    title: "${brand.name} İzmir - ${brand.name} Beyaz Eşya Yetkili Servisi",
    description: "İzmir'de ${brand.name.toLowerCase()} beyaz eşya yetkili servisi. Orijinal yedek parça, yetkili teknik servis.",
    images: ['/${brand.name.toLowerCase()}-og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={\`\${geistSans.variable} \${geistMono.variable} antialiased\`}
      >
        <Header/>
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}`;
}

function createPageTemplate(brand) {
  return `import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/services";
import HeroBottomBar from "@/components/HeroBottomBar";
import WhyUsCompact from "@/components/WhyUsCompact";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "${brand.name} İzmir Yetkili Servisi",
    image: "https://www.${brand.domain}/${brand.name.toLowerCase()}-og-image.jpg",
    telephone: "+90 532 542 33 51",
    address: {
      "@type": "PostalAddress",
      addressLocality: "İzmir",
      addressRegion: "TR-35",
      addressCountry: "TR",
    },
    areaServed: "İzmir ve tüm ilçeleri",
    url: "https://www.${brand.domain}",
    brand: {
      "@type": "Brand",
      name: "${brand.name}"
    },
    serviceType: "${brand.name} Beyaz Eşya Yetkili Servisi",
    description: "${brand.name.toLowerCase()} beyaz eşya yetkili servisi. Buzdolabı, çamaşır makinesi, bulaşık makinesi, fırın onarımı. Orijinal yedek parça garantisi."
  } as const;

  return (
    <>
      <HeroSlider />
      <HeroBottomBar />
      <Services />
      <WhyUsCompact />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
    </>
  );
}`;
}

function createSitemapTemplate(brand) {
  return `import { IZMIR_DISTRICTS, SERVICES } from "@/lib/data";

export default async function sitemap() {
  const base = "https://www.${brand.domain}";
  const now = new Date().toISOString();

  const entries: { url: string; lastModified: string; changeFrequency: string; priority: number }[] = [
    { 
      url: \`\${base}/\`, 
      lastModified: now, 
      changeFrequency: 'daily',
      priority: 1.0
    },
    { 
      url: \`\${base}/hakkimizda\`, 
      lastModified: now, 
      changeFrequency: 'monthly',
      priority: 0.8
    },
    { 
      url: \`\${base}/hizmetler\`, 
      lastModified: now, 
      changeFrequency: 'weekly',
      priority: 0.9
    },
    { 
      url: \`\${base}/iletisim\`, 
      lastModified: now, 
      changeFrequency: 'monthly',
      priority: 0.7
    },
    // ${brand.name} blog sayfaları
    { 
      url: \`\${base}/${brand.name.toLowerCase()}-blog\`, 
      lastModified: now, 
      changeFrequency: 'weekly',
      priority: 0.8
    },
  ];

  // ${brand.name} servis sayfaları - İzmir ilçeleri
  for (const ilce of IZMIR_DISTRICTS) {
    for (const s of SERVICES) {
      entries.push({ 
        url: \`\${base}/izmir/\${ilce}/\${s.slug}\`, 
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8
      });
    }
  }

  // ${brand.name} özel sayfalar
  const ${brand.name.toLowerCase()}SpecialPages = [
    { slug: '${brand.name.toLowerCase()}-buzdolabi-servisi', priority: 0.9 },
    { slug: '${brand.name.toLowerCase()}-camasir-makinesi-servisi', priority: 0.9 },
    { slug: '${brand.name.toLowerCase()}-bulasik-makinesi-servisi', priority: 0.9 },
    { slug: '${brand.name.toLowerCase()}-firin-servisi', priority: 0.8 },
    { slug: '${brand.name.toLowerCase()}-klima-servisi', priority: 0.8 },
    { slug: '${brand.name.toLowerCase()}-yedek-parca', priority: 0.7 },
  ];

  for (const page of ${brand.name.toLowerCase()}SpecialPages) {
    entries.push({
      url: \`\${base}/\${page.slug}\`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: page.priority
    });
  }

  return entries;
}`;
}

function createPackageJsonTemplate(brand) {
  return `{
  "name": "${brand.name.toLowerCase()}-izmir-servis",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack",
    "start": "next start",
    "lint": "eslint",
    "sitemap": "node scripts/generate-${brand.name.toLowerCase()}-sitemap.js",
    "sitemap:build": "npm run sitemap && npm run build"
  },
  "dependencies": {
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "next": "15.5.2"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4",
    "eslint": "^9",
    "eslint-config-next": "15.5.2",
    "@eslint/eslintrc": "^3"
  }
}`;
}

function createBrandSystem(brandKey) {
  const brand = BRAND_CONFIGS[brandKey];
  
  if (!brand) {
    console.error(`❌ Bilinmeyen marka: ${brandKey}`);
    console.log('Mevcut markalar:', Object.keys(BRAND_CONFIGS).join(', '));
    return;
  }

  console.log(`🚀 ${brand.name} sistemi oluşturuluyor...`);

  const brandDir = path.join(__dirname, '..', `brands/${brandKey}`);
  
  // Brand klasörünü oluştur
  if (!fs.existsSync(brandDir)) {
    fs.mkdirSync(brandDir, { recursive: true });
  }

  // Public klasörü oluştur
  const publicDir = path.join(brandDir, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Favicon dosyalarını oluştur
  fs.writeFileSync(path.join(publicDir, `${brandKey}-favicon.svg`), createFavicon(brand));
  fs.writeFileSync(path.join(publicDir, `${brandKey}-favicon.ico`), createFaviconICO(brand));
  fs.writeFileSync(path.join(publicDir, `${brandKey}-apple-touch-icon.png`), createAppleTouchIcon(brand));
  fs.writeFileSync(path.join(publicDir, `${brandKey}-og-image.jpg`), createOGImage(brand));

  // Src klasörü oluştur
  const srcDir = path.join(brandDir, 'src');
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir, { recursive: true });
  }

  const appDir = path.join(srcDir, 'app');
  if (!fs.existsSync(appDir)) {
    fs.mkdirSync(appDir, { recursive: true });
  }

  // Layout ve Page dosyalarını oluştur
  fs.writeFileSync(path.join(appDir, 'layout.tsx'), createLayoutTemplate(brand));
  fs.writeFileSync(path.join(appDir, 'page.tsx'), createPageTemplate(brand));
  fs.writeFileSync(path.join(appDir, 'sitemap.ts'), createSitemapTemplate(brand));

  // Package.json oluştur
  fs.writeFileSync(path.join(brandDir, 'package.json'), createPackageJsonTemplate(brand));

  console.log(`✅ ${brand.name} sistemi başarıyla oluşturuldu!`);
  console.log(`📁 Klasör: ${brandDir}`);
  console.log(`🌐 Domain: https://www.${brand.domain}`);
  console.log(`🎨 Renk: ${brand.color}`);
}

// Ana fonksiyon
function main() {
  const brandKey = process.argv[2];
  
  if (!brandKey) {
    console.log('🔧 Beyaz Eşya Marka Sistemi Oluşturucu');
    console.log('\nKullanım:');
    console.log('  node scripts/create-brand-system.js <marka>');
    console.log('\nMevcut markalar:');
    Object.keys(BRAND_CONFIGS).forEach(key => {
      const brand = BRAND_CONFIGS[key];
      console.log(`  ${key.padEnd(10)} - ${brand.name} (${brand.domain})`);
    });
    console.log('\nÖrnek:');
    console.log('  node scripts/create-brand-system.js bosch');
    return;
  }

  createBrandSystem(brandKey);
}

// Script çalıştır
if (require.main === module) {
  main();
}

module.exports = { createBrandSystem, BRAND_CONFIGS };
