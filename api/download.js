const OWNER = "SergeiNikolenko";
const REPO = "Burrete";
const RELEASES_URL = `https://github.com/${OWNER}/${REPO}/releases`;
const LATEST_RELEASE_URL = `https://api.github.com/repos/${OWNER}/${REPO}/releases/latest`;

module.exports = async function handler(req, res) {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.setHeader("Allow", "GET, HEAD");
    res.status(405).send("Method Not Allowed");
    return;
  }

  res.setHeader(
    "Cache-Control",
    "no-store, max-age=0",
  );

  try {
    const response = await fetch(LATEST_RELEASE_URL, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "burrete-landing-download-redirect",
      },
    });

    if (!response.ok) {
      res.redirect(302, RELEASES_URL);
      return;
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
      res.redirect(302, release.html_url || RELEASES_URL);
      return;
    }

    if (release.tag_name) {
      res.setHeader("X-Burrete-Release", release.tag_name);
    }
    res.setHeader("X-Burrete-Asset", dmg.name);
    res.redirect(302, dmg.browser_download_url);
  } catch {
    res.redirect(302, RELEASES_URL);
  }
};
