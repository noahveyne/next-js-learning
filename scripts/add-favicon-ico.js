#!/usr/bin/env node

/**
 * Mevcut markalar için ICO favicon ekleme scripti
 */

const fs = require('fs');
const path = require('path');

const BRAND_CONFIGS = {
  bosch: { name: 'Bosch', color: '#003087', logo: 'B' },
  siemens: { name: 'Siemens', color: '#009639', logo: 'S' },
  samsung: { name: 'Samsung', color: '#1428A0', logo: 'S' },
  lg: { name: 'LG', color: '#A50034', logo: 'L' },
  arcelik: { name: 'Arçelik', color: '#E31E24', logo: 'A' },
  vestel: { name: 'Vestel', color: '#00A651', logo: 'V' },
  beko: { name: 'Beko', color: '#E31E24', logo: 'B' }
};

function createFaviconICO(brand) {
  // 16x16 ICO format için SVG data
  const svgData = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="16" height="16" rx="2" fill="${brand.color}"/>
<text x="8" y="11" font-family="Arial, sans-serif" font-size="7" font-weight="bold" text-anchor="middle" fill="white">${brand.logo}</text>
</svg>`;
  
  return svgData;
}

function addFaviconICO(brandKey) {
  const brand = BRAND_CONFIGS[brandKey];
  
  if (!brand) {
    console.error(`❌ Bilinmeyen marka: ${brandKey}`);
    return;
  }

  console.log(`🔧 ${brand.name} için ICO favicon ekleniyor...`);

  // Mevcut marka klasörünü kontrol et
  const brandDir = path.join(__dirname, '..', `brands/${brandKey}`);
  const publicDir = path.join(brandDir, 'public');
  
  if (!fs.existsSync(publicDir)) {
    console.error(`❌ ${brandKey} klasörü bulunamadı: ${brandDir}`);
    return;
  }

  // ICO dosyasını oluştur
  const icoContent = createFaviconICO(brand);
  const icoPath = path.join(publicDir, `${brandKey}-favicon.ico`);
  
  fs.writeFileSync(icoPath, icoContent);
  console.log(`✅ ${brandKey}-favicon.ico oluşturuldu`);

  // Ana proje için de ICO oluştur (Beko için)
  if (brandKey === 'beko') {
    const mainPublicDir = path.join(__dirname, '..', 'public');
    const mainIcoPath = path.join(mainPublicDir, 'beko-favicon.ico');
    fs.writeFileSync(mainIcoPath, icoContent);
    console.log(`✅ Ana proje için beko-favicon.ico oluşturuldu`);
  }
}

function main() {
  const brandKey = process.argv[2];
  
  if (!brandKey) {
    console.log('🔧 ICO Favicon Ekleme Scripti');
    console.log('\nKullanım:');
    console.log('  node scripts/add-favicon-ico.js <marka>');
    console.log('  node scripts/add-favicon-ico.js all  # Tüm markalar');
    console.log('\nMevcut markalar:');
    Object.keys(BRAND_CONFIGS).forEach(key => {
      const brand = BRAND_CONFIGS[key];
      console.log(`  ${key.padEnd(10)} - ${brand.name}`);
    });
    return;
  }

  if (brandKey === 'all') {
    console.log('🚀 Tüm markalar için ICO favicon ekleniyor...');
    Object.keys(BRAND_CONFIGS).forEach(key => {
      addFaviconICO(key);
    });
    console.log('\n🎉 Tüm markalar için ICO favicon eklendi!');
  } else {
    addFaviconICO(brandKey);
  }
}

if (require.main === module) {
  main();
}

module.exports = { addFaviconICO, BRAND_CONFIGS };
