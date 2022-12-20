import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
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
