import React from "react";
import type { PageContextClient } from "./types";
import "../src/index.css";

type PageShellProps = {
  children: React.ReactNode;
  pageContext: PageContextClient | Record<string, unknown>;
};

export function PageShell({ children }: PageShellProps) {
  return <React.StrictMode>{children}</React.StrictMode>;
}

