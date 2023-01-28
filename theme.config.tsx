import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  gitTimestamp: false,
  useNextSeoProps: () => {
    return { titleTemplate: `%s - Consumet` };
  },
  faviconGlyph: "🚧",
  banner: {
    text: "🚧 The Consumet documentation is undergoing reconstruction. Please be patient for all providers to be fully-documented. 🚧",
  },
  logo: <span>Consumet Documentation</span>,
  project: {
    link: "https://github.com/consumet",
  },
  chat: {
    link: "https://discord.gg/consumet",
  },
  docsRepositoryBase: "https://github.com/consumet/docs.consumet.org",
  footer: {
    text: "Copyright (c) Consumet | 2023-present",
  },
};

export default config;
