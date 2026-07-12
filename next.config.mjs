import nextra from "nextra";

const withNextra = nextra({
  contentDirBasePath: "/docs",
  defaultShowCopyCode: true,
});

export default withNextra({
  reactStrictMode: true,
  outputFileTracingIncludes: {
    "/*": ["./index.html", "./demo.html", "./download.html", "./out.html"],
  },
});
