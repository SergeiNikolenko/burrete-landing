const ROBOTS = `User-agent: *
Allow: /

Sitemap: https://burette-landing.vercel.app/sitemap.xml
`;

export const dynamic = "force-static";

export function GET() {
  return new Response(ROBOTS, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
