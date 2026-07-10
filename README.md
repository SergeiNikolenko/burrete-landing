# Burrete Landing

Static landing page for Burrete, the molecular file workspace for macOS.

The `/download` route records a lightweight Web Analytics page view, then
redirects to the `.dmg` asset from the latest `SergeiNikolenko/Burrete`
GitHub release through `/api/download`.

Outbound links use `/out/:target` so clicks to GitHub, docs, releases, and
engine websites are visible as first-party Web Analytics page views before
redirecting to the external destination. The main page also emits Vercel custom
events for download clicks, outbound clicks, brew-copy intent, and scroll depth
when the project plan supports custom events.

The public site also serves `/privacy`, `/terms`, `/robots.txt`, and
`/sitemap.xml`. Keep their canonical URLs aligned with the production domain.

## Local Preview

```sh
python3 -m http.server 8912 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8912/`.

Use `vercel dev` when testing the `/download` serverless route locally.
