import { IZMIR_DISTRICTS, SERVICES } from "@/lib/data";

export default async function sitemap() {
  const base = "https://www.izmir-teknikservis.com";
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
    { 
      url: `${base}/servis-cagir`, 
      lastModified: now, 
      changeFrequency: 'monthly',
      priority: 0.8
    },
    // Blog sayfaları
    { 
      url: `${base}/blog`, 
      lastModified: now, 
      changeFrequency: 'weekly',
      priority: 0.8
    },
  ];

  // Beko servis sayfaları - İzmir ilçeleri
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

  // Özel sayfalar
  const specialPages = [
    { slug: 'buzdolabi-servisi', priority: 0.9 },
    { slug: 'camasir-makinesi-servisi', priority: 0.9 },
    { slug: 'bulasik-makinesi-servisi', priority: 0.9 },
    { slug: 'firin-servisi', priority: 0.8 },
    { slug: 'klima-servisi', priority: 0.8 },
    { slug: 'yedek-parca', priority: 0.7 },
  ];

  for (const page of specialPages) {
    entries.push({
      url: `${base}/${page.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: page.priority
    });
  }

  return entries;
}


