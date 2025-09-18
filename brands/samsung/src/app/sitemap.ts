import { IZMIR_DISTRICTS, SERVICES } from "@/lib/data";

export default async function sitemap() {
  const base = "https://www.samsungservisizmir.com";
  const now = new Date().toISOString();

  const entries: { url: string; lastModified: string; changeFrequency: string; priority: number }[] = [
    { 
      url: `${base}/`, 
      lastModified: now, 
      changeFrequency: 'daily',
      priority: 1.0
    },
    { 
      url: `${base}/hakkimizda`, 
      lastModified: now, 
      changeFrequency: 'monthly',
      priority: 0.8
    },
    { 
      url: `${base}/hizmetler`, 
      lastModified: now, 
      changeFrequency: 'weekly',
      priority: 0.9
    },
    { 
      url: `${base}/iletisim`, 
      lastModified: now, 
      changeFrequency: 'monthly',
      priority: 0.7
    },
    // Samsung blog sayfaları
    { 
      url: `${base}/samsung-blog`, 
      lastModified: now, 
      changeFrequency: 'weekly',
      priority: 0.8
    },
  ];

  // Samsung servis sayfaları - İzmir ilçeleri
  for (const ilce of IZMIR_DISTRICTS) {
    for (const s of SERVICES) {
      entries.push({ 
        url: `${base}/izmir/${ilce}/${s.slug}`, 
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8
      });
    }
  }

  // Samsung özel sayfalar
  const samsungSpecialPages = [
    { slug: 'samsung-buzdolabi-servisi', priority: 0.9 },
    { slug: 'samsung-camasir-makinesi-servisi', priority: 0.9 },
    { slug: 'samsung-bulasik-makinesi-servisi', priority: 0.9 },
    { slug: 'samsung-firin-servisi', priority: 0.8 },
    { slug: 'samsung-klima-servisi', priority: 0.8 },
    { slug: 'samsung-yedek-parca', priority: 0.7 },
  ];

  for (const page of samsungSpecialPages) {
    entries.push({
      url: `${base}/${page.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: page.priority
    });
  }

  return entries;
}