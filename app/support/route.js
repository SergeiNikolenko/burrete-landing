import { legalPage } from "../legal-page";

export const dynamic = "force-static";

export function GET() {
  return new Response(
    legalPage({
      path: "/support",
      title: "Support",
      description: "Support channels for the Burrete public plugin, desktop app, and Finder Quick Look extension.",
      body: `
        <p>Use the links below for help with the Burrete public plugin, desktop app, Finder Quick Look extension, or local Codex integration.</p>

        <h2>Documentation</h2>
        <p>Start with the <a href="/docs">Burrete documentation</a>. The <a href="/docs/plugin">Burrete Plugin and MCP guide</a> explains the hosted workspace, supported attachments, production MCP endpoint, and local workspace plugin.</p>

        <h2>Public support</h2>
        <p>Open an issue in the <a href="https://github.com/SergeiNikolenko/Burrete/issues">Burrete issue tracker</a>. Include the Burrete version or hosted tool name, molecular format, expected behavior, and a minimal reproducible example when it is safe to share.</p>
        <p>Do not attach confidential molecular structures, signed attachment URLs, credentials, protected health information, private file paths, or proprietary logs to a public issue.</p>

        <h2>Security and privacy</h2>
        <p>Report a suspected vulnerability through a <a href="https://github.com/SergeiNikolenko/Burrete/security/advisories/new">private GitHub security advisory</a>. Read the <a href="/privacy">Privacy Policy</a> for hosted-file processing, recipients, retention, and user controls.</p>

        <h2>Service status</h2>
        <p>The public MCP endpoint is <a href="https://burrete-plugin.vercel.app/mcp">burrete-plugin.vercel.app/mcp</a>. Its health check is available at <a href="https://burrete-plugin.vercel.app/api/health">burrete-plugin.vercel.app/api/health</a>.</p>
      `,
    }),
    { headers: { "Content-Type": "text/html; charset=utf-8" } },
  );
}
