import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
  redirects: {
    "/resume":
      "https://docs.google.com/document/d/1T8sRgGYb5Pzj45lTta8Er-9lUb8XgGxDy38xXKAK4m8",
    "/portfolio": "https://youtube.com/@thuantanphamfilms/",
    "/photos": "https://twitter.com/thuantanphamfilms/media",
    "/music":
      "https://www.youtube.com/playlist?list=PLxkEHjd_ca6f6gyg6plFPajUcPlS5_qcr",
    "/meet": "https://calendar.app.google/phJ3he2qu9t9LAKL7",
    "/inbox":
      "https://www.figma.com/file/Eh8ircd2aLDjE37eEWasj8/inbox?type=whiteboard&node-id=0-1&t=1YZUDygatvP68nrz-0",
  },
});
