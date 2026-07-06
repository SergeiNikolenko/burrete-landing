# Burrete Landing

Static landing page for Burrete, the molecular file workspace for macOS.

The `/download` route redirects to the `.dmg` asset from the latest
`SergeiNikolenko/Burrete` GitHub release.

## Local Preview

```sh
python3 -m http.server 8912 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8912/`.

Use `vercel dev` when testing the `/download` serverless route locally.
