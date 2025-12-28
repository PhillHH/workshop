import type {
  PageContextBuiltIn,
  PageContextBuiltInClient
} from "vite-plugin-ssr/types";
import type React from "react";

export type PageProps = Record<string, unknown>;
export type Page = (pageProps: PageProps) => React.ReactElement;

export type DocumentProps = {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  image?: string;
};

type PageContextCustom = {
  Page: Page;
  pageProps?: PageProps;
  documentProps?: DocumentProps;
};

export type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom;
export type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;

