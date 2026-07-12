export const dynamic = "force-static";

export async function GET() {
  return Response.redirect("https://burrete-plugin.vercel.app/web-demo/index.html", 307);
}
