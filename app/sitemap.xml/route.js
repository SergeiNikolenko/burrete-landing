const SITE_URL = "https://burrete-landing.vercel.app";

const URLS = [
  { path: "", priority: "1.0", changefreq: "weekly" },
  { path: "/docs", priority: "0.8", changefreq: "weekly" },
  { path: "/docs/get-started/install", priority: "0.7", changefreq: "monthly" },
  { path: "/docs/formats", priority: "0.7", changefreq: "monthly" },
  { path: "/privacy", priority: "0.3", changefreq: "yearly" },
  { path: "/terms", priority: "0.3", changefreq: "yearly" },
];

export const dynamic = "force-static";

export function GET() {
  const entries = URLS.map(
    ({ path, priority, changefreq }) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>2026-07-10</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  ).join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
}
