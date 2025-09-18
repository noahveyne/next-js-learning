#!/usr/bin/env node

/**
 * Beko İzmir Sitemap Generator
 * Bu script Beko servis sitesi için dinamik sitemap oluşturur
 */

const fs = require('fs');
const path = require('path');

// Beko servis verileri
const IZMIR_DISTRICTS = [
  "aliağa","balçova","bayındır","bayraklı","bergama","beydağ","bornova","buca",
  "çeşme","çiğli","dikili","foça","gaziemir","güzelbahçe","karabağlar","karaburun",
  "karşıyaka","kemalpaşa","kınık","kiraz","konak","menderes","menemen","narlıdere",
  "ödemiş","seferihisar","selçuk","tire","torbalı","urla"
];

const BEKO_SERVICES = [
  { slug: "beko-buzdolabi-servisi", label: "Beko Buzdolabı Servisi", priority: 0.9 },
  { slug: "beko-camasir-makinesi-servisi", label: "Beko Çamaşır Makinesi Servisi", priority: 0.9 },
  { slug: "beko-bulasik-makinesi-servisi", label: "Beko Bulaşık Makinesi Servisi", priority: 0.9 },
  { slug: "beko-firin-servisi", label: "Beko Fırın Servisi", priority: 0.8 },
  { slug: "beko-klima-servisi", label: "Beko Klima Servisi", priority: 0.8 },
  { slug: "beko-kombi-servisi", label: "Beko Kombi Servisi", priority: 0.8 },
];

const BEKO_SPECIAL_PAGES = [
  { slug: 'beko-yedek-parca', title: 'Beko Yedek Parça', priority: 0.7 },
  { slug: 'beko-garanti', title: 'Beko Garanti', priority: 0.6 },
  { slug: 'beko-bakim', title: 'Beko Bakım', priority: 0.6 },
  { slug: 'beko-blog', title: 'Beko Blog', priority: 0.8 },
];

function generateSitemap() {
  const baseUrl = "https://www.izmir-teknikservis.com";
  const now = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Ana sayfalar
  const mainPages = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/hakkimizda', priority: 0.8, changefreq: 'monthly' },
    { url: '/hizmetler', priority: 0.9, changefreq: 'weekly' },
    { url: '/iletisim', priority: 0.7, changefreq: 'monthly' },
  ];

  mainPages.forEach(page => {
    sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  // Beko özel sayfalar
  BEKO_SPECIAL_PAGES.forEach(page => {
    sitemap += `  <url>
    <loc>${baseUrl}/${page.slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  // İlçe bazlı Beko servis sayfaları
  IZMIR_DISTRICTS.forEach(ilce => {
    BEKO_SERVICES.forEach(service => {
      sitemap += `  <url>
    <loc>${baseUrl}/izmir/${ilce}/${service.slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${service.priority}</priority>
  </url>
`;
    });
  });

  // Beko blog yazıları
  const blogPosts = [
    { slug: 'beko-buzdolabi-ariza-cozumleri', title: 'Beko Buzdolabı Arıza Çözümleri' },
    { slug: 'beko-camasir-makinesi-bakim', title: 'Beko Çamaşır Makinesi Bakım' },
    { slug: 'beko-bulasik-makinesi-temizlik', title: 'Beko Bulaşık Makinesi Temizlik' },
    { slug: 'beko-firin-kullanimi', title: 'Beko Fırın Kullanımı' },
    { slug: 'beko-klima-bakim', title: 'Beko Klima Bakım' },
  ];

  blogPosts.forEach(post => {
    sitemap += `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;

  return sitemap;
}

function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# İzmir Teknik Servis Sitemap
Sitemap: https://www.izmir-teknikservis.com/sitemap.xml

# Crawl-delay for better server performance
Crawl-delay: 1

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/
`;
}

// Ana fonksiyon
function main() {
  console.log('🚀 İzmir Teknik Servis Sitemap Generator başlatılıyor...');
  
  try {
    // Sitemap oluştur
    const sitemap = generateSitemap();
    const robotsTxt = generateRobotsTxt();
    
    // Dosyaları kaydet
    const publicDir = path.join(__dirname, '..', 'public');
    
    // public klasörünü kontrol et
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Sitemap.xml dosyasını kaydet
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap, 'utf8');
    console.log('✅ sitemap.xml oluşturuldu');
    
    // robots.txt dosyasını kaydet
    fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf8');
    console.log('✅ robots.txt oluşturuldu');
    
    // İstatistikleri göster
    const urlCount = sitemap.split('<url>').length - 1;
    console.log(`📊 Toplam ${urlCount} URL sitemap'e eklendi`);
    console.log(`🏢 ${IZMIR_DISTRICTS.length} İzmir ilçesi`);
    console.log(`🔧 ${BEKO_SERVICES.length} Beko servisi`);
    console.log(`📄 ${BEKO_SPECIAL_PAGES.length} özel sayfa`);
    
    console.log('\n🎉 İzmir Teknik Servis sitemap başarıyla oluşturuldu!');
    console.log('📍 Sitemap URL: https://www.izmir-teknikservis.com/sitemap.xml');
    
  } catch (error) {
    console.error('❌ Hata oluştu:', error.message);
    process.exit(1);
  }
}

// Script çalıştır
if (require.main === module) {
  main();
}

module.exports = { generateSitemap, generateRobotsTxt };
