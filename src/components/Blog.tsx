import BlogPost1 from "@/components/BlogPost1";
import BlogPost2 from "./BlogPost2";

export default function Blog() {

  return (
    <section id="blog-section" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-base md:text-lg font-semibold text-blue-800 uppercase tracking-wide mb-2">
            BLOG
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
            Teknik Servis Rehberi
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Beyaz eşyalarınızın bakımı, onarımı ve en iyi kullanım yöntemleri hakkında uzman tavsiyeleri
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <BlogPost1 />
          <BlogPost2 />
        </div>
 
        </div>
   </section>
  );
}