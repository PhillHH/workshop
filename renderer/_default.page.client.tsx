import React from "react";
import { hydrateRoot, Root } from "react-dom/client";
import { PageShell } from "./PageShell";
import type { PageContextClient } from "./types";

let root: Root | undefined;

export function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;
  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...(pageProps || {})} />
    </PageShell>
  );

  const container = document.getElementById("root");
  if (!container) throw new Error("Root element not found");

  if (!root) {
    root = hydrateRoot(container, page);
  } else {
    root.render(page);
  }
}

export const hydrationCanBeAborted = true;

