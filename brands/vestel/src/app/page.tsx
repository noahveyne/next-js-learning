import HeroSlider from "@/components/HeroSlider";
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
    name: "Vestel İzmir Yetkili Servisi",
    image: "https://www.vestelservisizmir.com/vestel-og-image.jpg",
    telephone: "+90 532 542 33 51",
    address: {
      "@type": "PostalAddress",
      addressLocality: "İzmir",
      addressRegion: "TR-35",
      addressCountry: "TR",
    },
    areaServed: "İzmir ve tüm ilçeleri",
    url: "https://www.vestelservisizmir.com",
    brand: {
      "@type": "Brand",
      name: "Vestel"
    },
    serviceType: "Vestel Beyaz Eşya Yetkili Servisi",
    description: "vestel beyaz eşya yetkili servisi. Buzdolabı, çamaşır makinesi, bulaşık makinesi, fırın onarımı. Orijinal yedek parça garantisi."
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
}