import { IZMIR_DISTRICTS, SERVICES } from "@/lib/data";

export default async function sitemap() {
  const base = "https://www.vestelservisizmir.com";
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
    // Vestel blog sayfaları
    { 
      url: `${base}/vestel-blog`, 
      lastModified: now, 
      changeFrequency: 'weekly',
      priority: 0.8
    },
  ];

  // Vestel servis sayfaları - İzmir ilçeleri
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

  // Vestel özel sayfalar
  const vestelSpecialPages = [
    { slug: 'vestel-buzdolabi-servisi', priority: 0.9 },
    { slug: 'vestel-camasir-makinesi-servisi', priority: 0.9 },
    { slug: 'vestel-bulasik-makinesi-servisi', priority: 0.9 },
    { slug: 'vestel-firin-servisi', priority: 0.8 },
    { slug: 'vestel-klima-servisi', priority: 0.8 },
    { slug: 'vestel-yedek-parca', priority: 0.7 },
  ];

  for (const page of vestelSpecialPages) {
    entries.push({
      url: `${base}/${page.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: page.priority
    });
  }

  return entries;
}