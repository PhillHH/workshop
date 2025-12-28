import React from "react";
import { renderToString } from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
import { PageShell } from "./PageShell";
import type { PageContextServer } from "./types";
import { articleSlugs } from "../src/content/articles";

const passToClient = ["pageProps", "documentProps", "routeParams"];
const defaultTitle = "Growento AI Workshops";
const defaultDescription =
  "Workshops zu KI-Grundlagen, KI im Beruf und Automatisierung in Hamburg.";
const siteUrl = "https://growento.ai";

export { render };
export { passToClient };
export { prerender };

function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;

  const pageHtml = renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...(pageProps || {})} />
    </PageShell>
  );

  const documentProps = pageContext.documentProps || {};
  const title = documentProps.title || defaultTitle;
  const description = documentProps.description || defaultDescription;
  const canonicalUrl = documentProps.canonicalUrl || `${siteUrl}${pageContext.urlOriginal}`;
  const ogImage = documentProps.image;

  return escapeInject`<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    ${ogImage ? escapeInject`<meta property="og:image" content="${ogImage}" />` : ""}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    ${ogImage ? escapeInject`<meta name="twitter:image" content="${ogImage}" />` : ""}
    <noscript>
      <style>
        .noscript-hero{padding:32px;margin:16px auto;max-width:960px;background:#0f172a;color:#f8fafc;border:1px solid #1e293b;border-radius:12px;font-family:'Plus Jakarta Sans',system-ui,sans-serif;}
        .noscript-hero h1{font-size:28px;margin-bottom:12px;}
        .noscript-hero p{font-size:16px;line-height:1.6;}
      </style>
    </noscript>
  </head>
  <body class="bg-gray-100">
    <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
    <noscript>
      <div class="noscript-hero">
        <h1>Growento AI Workshops</h1>
        <p>Unsere Seite benötigt JavaScript für das volle Erlebnis. Die wichtigsten Inhalte zu Kursen, Zielgruppen und Buchung finden Sie dennoch hier.</p>
        <p><a href="/ki-grundlagen">KI-Grundlagen</a> | <a href="/ki-im-beruf">KI im Beruf</a> | <a href="/ki-automatisierung">KI-Automatisierung</a></p>
      </div>
    </noscript>
  </body>
</html>`;
}

function prerender() {
  const staticRoutes = [
    "/",
    "/fuer-neulinge",
    "/fuer-berufstaetige",
    "/fuer-manager-strategen",
    "/ki-grundlagen",
    "/ki-im-beruf",
    "/ki-automatisierung",
    "/ueber-uns",
    "/trainer",
    "/wissen",
    "/referenzen",
    "/checkout"
  ];

  const articleRoutes = articleSlugs.map((slug) => `/wissen/${slug}`);
  return [...staticRoutes, ...articleRoutes];
}

