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
  navbar: {
    extraContent: (
      <a
        href={`https://www.patreon.com/ConsumetOrg`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ width: "24px", height: "24px", margin: "0 .5rem" }}
      >
        <img
          src="https://i0.wp.com/decentered.co.uk/wp-content/uploads/2019/12/patreon-logo-png-badge-7.png?fit=541%2C540&ssl=1"
          alt="Become a Patron!"
        />
      </a>
    ),
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
