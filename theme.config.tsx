import React from "react";
import { DocsThemeConfig, useTheme } from "nextra-theme-docs";

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
  navbar: {
    extraContent: () => {
      const { theme } = useTheme();

      return (
        <a
          href={`https://www.patreon.com/ConsumetOrg`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: "24px", height: "24px", margin: "0 .5rem" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill={theme === "dark" ? "#fff" : "#000"}
          >
            <path d="M512 194.8c0 101.3-82.4 183.8-183.8 183.8-101.7 0-184.4-82.4-184.4-183.8 0-101.6 82.7-184.3 184.4-184.3C429.6 10.5 512 93.2 512 194.8zM0 501.5h90v-491H0v491z" />
          </svg>
        </a>
      );
    },
  },
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
  head: function useHead() {
    const description =
      "A collection of documentation for each provider available on Consumet. Find out how to efficiently use the Consumet API here!";
    return (
      <>
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
      </>
    );
  },
};

export default config;
