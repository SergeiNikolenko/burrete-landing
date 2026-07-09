import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: {
    default: "Burrete Docs",
    template: "%s | Burrete Docs",
  },
  description:
    "Documentation for Burrete, a macOS molecular file workspace with Finder Quick Look previews and a local Codex MCP plugin.",
};

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={<strong>Burrete Docs</strong>}
      logoLink="/docs"
      projectLink="https://github.com/SergeiNikolenko/Burrete"
    />
  );

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap("/docs")}
          docsRepositoryBase="https://github.com/SergeiNikolenko/Burrete/tree/main"
          editLink="Edit this page on GitHub"
          feedback={{
            content: "Report a docs issue",
            labels: "docs",
          }}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          toc={{ title: "On this page" }}
          footer={
            <Footer>
              <span>Burrete is released under the MIT License.</span>
            </Footer>
          }
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
