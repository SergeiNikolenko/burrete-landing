import { legalPage } from "../legal-page";

export const dynamic = "force-static";

export function GET() {
  return new Response(
    legalPage({
      path: "/privacy",
      title: "Privacy Policy",
      description: "How Burrete handles molecular files, local application data, website analytics, and network requests.",
      body: `
        <p>This policy covers the Burrete website, desktop application, Finder Quick Look extensions, and the Burrete plugin for Codex.</p>

        <h2>Local data processing</h2>
        <p>Burrete is local-first software. Molecular files selected by the user are opened and processed on the user's device. Burrete does not upload molecular files to a Burrete-operated service and does not include developer-controlled analytics or advertising trackers in the application.</p>
        <p>When the plugin is used through Codex, tool inputs, bounded tool results, and other content needed to answer the request may be processed by the Codex host under the user's OpenAI account and workspace policies. Users should not expose confidential molecular data to Codex unless their organization permits it.</p>

        <h2>Website analytics</h2>
        <p>The Burrete website uses Vercel Web Analytics and Speed Insights to measure page views, download referrals, outbound-link activity, and site performance. These services may process technical request data such as browser type, approximate region, referring page, and network information under Vercel's privacy terms. Burrete does not use advertising trackers or sell website visitor data.</p>

        <h2>Network access</h2>
        <p>Burrete may make network requests when the user asks it to fetch a public URL, retrieve a public structure, check for software updates, or download an update. Those requests are sent to the selected third-party service, such as GitHub or the RCSB Protein Data Bank, and are governed by that service's privacy terms.</p>
        <p>The plugin's public-URL fetch tool blocks localhost, private-network, and link-local destinations and bounds the returned content. It does not provide a general-purpose network proxy.</p>

        <h2>Local storage</h2>
        <p>Burrete may store local preferences, recent-file references, logs, preview caches, and short-lived agent session files on the user's device. Removing the application does not automatically remove every local preference or cache. Users can clear Burrete caches and diagnostics from the application settings or remove the corresponding local application data manually.</p>

        <h2>Sharing and retention</h2>
        <p>Burrete does not sell personal information. The project maintainers do not receive local molecular files or agent session content unless a user explicitly shares those materials, for example in a support request. Public issue reports should not contain confidential structures, credentials, or private paths.</p>

        <h2>Contact</h2>
        <p>For privacy questions, open a <a href="https://github.com/SergeiNikolenko/Burrete/security/advisories/new">private security advisory</a>. Use the <a href="https://github.com/SergeiNikolenko/Burrete/issues">project issue tracker</a> for non-sensitive questions.</p>
      `,
    }),
    { headers: { "Content-Type": "text/html; charset=utf-8" } },
  );
}
