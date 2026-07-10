import { legalPage } from "../legal-page";

export const dynamic = "force-static";

export function GET() {
  return new Response(
    legalPage({
      path: "/terms",
      title: "Terms of Use",
      description: "Terms for using the Burrete website, public molecular plugin, desktop application, Quick Look extensions, and Codex plugin.",
      body: `
        <p>These terms cover the Burrete website, public molecular plugin and MCP service, desktop application, Finder Quick Look extensions, and local Codex plugin.</p>
        <p>Burrete is open-source software distributed under the <a href="https://github.com/SergeiNikolenko/Burrete/blob/main/LICENSE">MIT License</a>. By using the software, you agree to comply with that license and with the terms of any third-party software or services you choose to use with Burrete.</p>

        <h2>User responsibilities</h2>
        <p>You are responsible for having permission to access and process the molecular files, systems, and network resources supplied to Burrete, ChatGPT, or Codex. Do not use the software to bypass access controls, disclose confidential data without authorization, or perform unlawful activity.</p>
        <p>Agent-generated actions and molecular summaries should be reviewed before they are used for scientific, medical, regulatory, or safety-critical decisions. Burrete is a visualization and review workspace, not a substitute for qualified professional judgment or validated scientific software.</p>

        <h2>Downloads and third-party services</h2>
        <p>Downloads are provided through GitHub Releases. The hosted plugin relies on OpenAI, Vercel, and, for public PDB lookups, RCSB. Documentation may link to additional third-party tools and services. Burrete does not control their availability, content, security, retention, or terms.</p>

        <h2>Availability and warranty</h2>
        <p>The software and website are provided “as is”, without warranty of any kind, as described in the MIT License. Features, supported formats, downloads, integrations, and website content may change. The maintainers are not responsible for third-party services, models, or tools used through Burrete or Codex.</p>

        <h2>Support</h2>
        <p>See the <a href="/support">support page</a> for public help. Report sensitive security issues through a <a href="https://github.com/SergeiNikolenko/Burrete/security/advisories/new">private security advisory</a>.</p>
      `,
    }),
    { headers: { "Content-Type": "text/html; charset=utf-8" } },
  );
}
