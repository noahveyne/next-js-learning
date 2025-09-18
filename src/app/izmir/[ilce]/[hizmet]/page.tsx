import { IZMIR_DISTRICTS, SERVICES, toTitle } from "@/lib/data";
import ServicePage from "@/components/ServicePage";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const params: { ilce: string; hizmet: string }[] = [];
  for (const ilce of IZMIR_DISTRICTS) {
    for (const s of SERVICES) params.push({ ilce, hizmet: s.slug });
  }
  return params;
}

export async function generateMetadata({ params }: { params: { ilce: string; hizmet: string } }) {
  const ilce = params.ilce.toLowerCase();
  const hizmet = params.hizmet.toLowerCase();

  if (!IZMIR_DISTRICTS.includes(ilce as typeof IZMIR_DISTRICTS[number]) || !SERVICES.some((x) => x.slug === hizmet)) {
    return {};
  }

  const hizmetName = SERVICES.find((x) => x.slug === hizmet)!.label;
  const ilceTitle = toTitle(ilce);
  const title = `${ilceTitle} ${hizmetName} | Aynı Gün Servis | 7/24 Destek`;
  const description = `${ilceTitle} bölgesinde ${hizmetName}. Usta randevusu, aynı gün çözüm, orijinal parça, garanti. Hemen arayın.`;
  const canonical = `https://www.izmir-teknikservis.com/izmir/${ilce}/${hizmet}`;
  const keywords = [
    `${ilceTitle} ${hizmetName}`,
    `${ilceTitle} teknik servis`,
    `${hizmetName} ${ilceTitle}`,
    "İzmir beyaz eşya servisi",
    "aynı gün servis",
    "garantili işçilik",
    "orijinal parça"
  ].join(", ");

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: "tr_TR",
      siteName: "İzmir Teknik Servis",
      type: "website",
      images: [
        {
          url: `https://www.izmir-teknikservis.com/og-${hizmet}.jpg`,
          width: 1200,
          height: 630,
          alt: `${ilceTitle} ${hizmetName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://www.izmir-teknikservis.com/og-${hizmet}.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
    },
  } as const;
}

export default function Page({ params }: { params: { ilce: string; hizmet: string } }) {
  const ilce = params.ilce.toLowerCase();
  const hizmet = params.hizmet.toLowerCase();

  if (!IZMIR_DISTRICTS.includes(ilce as typeof IZMIR_DISTRICTS[number]) || !SERVICES.some((x) => x.slug === hizmet)) {
    notFound();
  }

  const hizmetName = SERVICES.find((x) => x.slug === hizmet)!.label;

  return <ServicePage ilce={toTitle(ilce)} hizmet={hizmetName} />;
}


