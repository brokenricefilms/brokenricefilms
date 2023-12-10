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
    '/resume': {
      status: 302,
      destination: 'https://docs.google.com/document/d/1T8sRgGYb5Pzj45lTta8Er-9lUb8XgGxDy38xXKAK4m8'
    },
    '/portfolio': {
      status: 302,
      destination: 'https://youtube.com/@licitfree/'
    },
    '/photos': {
      status: 302,
      destination: 'https://twitter.com/licitfree/media'
    },
    '/music': {
      status: 302,
      destination: 'https://www.youtube.com/playlist?list=PLxkEHjd_ca6f6gyg6plFPajUcPlS5_qcr'
    },
    '/meet': {
      status: 302,
      destination: 'https://calendar.app.google/phJ3he2qu9t9LAKL7'
    },
  }
});
