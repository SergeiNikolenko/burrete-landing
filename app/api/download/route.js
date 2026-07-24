const OWNER = "SergeiNikolenko";
const REPO = "Burette";
const RELEASES_URL = `https://github.com/${OWNER}/${REPO}/releases`;
const LATEST_RELEASE_URL = `https://api.github.com/repos/${OWNER}/${REPO}/releases/latest`;

export const dynamic = "force-dynamic";

export async function GET() {
  return redirectToLatestDmg();
}

export async function HEAD() {
  return redirectToLatestDmg();
}

function redirect(location, extraHeaders = {}) {
  return new Response(null, {
    status: 302,
    headers: {
      Location: location,
      "Cache-Control": "no-store, max-age=0",
      ...extraHeaders,
    },
  });
}

async function redirectToLatestDmg() {
  try {
    const response = await fetch(LATEST_RELEASE_URL, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "burette-landing-download-redirect",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return redirect(RELEASES_URL);
    }

    const release = await response.json();
    const assets = Array.isArray(release.assets) ? release.assets : [];
    const dmg = assets.find((asset) => {
      return (
        typeof asset.name === "string" &&
        asset.name.toLowerCase().endsWith(".dmg") &&
        typeof asset.browser_download_url === "string"
      );
    });

    if (!dmg) {
      return redirect(release.html_url || RELEASES_URL);
    }

    return redirect(dmg.browser_download_url, {
      ...(release.tag_name ? { "X-Burette-Release": release.tag_name } : {}),
      "X-Burette-Asset": dmg.name,
    });
  } catch {
    return redirect(RELEASES_URL);
  }
}
