import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import purgecss from "astro-purgecss";

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://health-analytics-mx.github.io/ai-calculators/',
  base: '/ai-calculators',
  // site: 'https://d3a9hc17ca9hsd.cloudfront.net/',
  integrations: [react(), robotsTxt(), sitemap()], //purgecss()], // , compress()]
  // output: "server",
  // adapter: node({
  //   mode: 'standalone'
  // })
});