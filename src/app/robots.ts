export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: ["/api/", "/admin/"],
    },
    sitemap: "https://www.siteadiniz.com/sitemap.xml",
  } as const;
}


