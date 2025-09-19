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
    name: "Bosch İzmir Yetkili Servisi",
    image: "https://www.boschservisizmir.com/bosch-og-image.jpg",
    telephone: "+ 90 501 471 73 80",
    address: {
      "@type": "PostalAddress",
      addressLocality: "İzmir",
      addressRegion: "TR-35",
      addressCountry: "TR",
    },
    areaServed: "İzmir ve tüm ilçeleri",
    url: "https://www.boschservisizmir.com",
    brand: {
      "@type": "Brand",
      name: "Bosch"
    },
    serviceType: "Bosch Beyaz Eşya Yetkili Servisi",
    description: "bosch beyaz eşya yetkili servisi. Buzdolabı, çamaşır makinesi, bulaşık makinesi, fırın onarımı. Orijinal yedek parça garantisi."
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