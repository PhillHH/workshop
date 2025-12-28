# Growento AI Workshops – Landingpage

Statische, vorgerenderte Landingpage für die **Growento AI Workshops** in Hamburg. Technischer Stack: **React**, **TypeScript**, **Vite**, **Tailwind CSS** und **vite-plugin-ssr (Vike)** für SSG. Der Build erzeugt fertige HTML-Dateien in `dist/client`, die z.B. via Nginx ausgeliefert werden können.

## Voraussetzungen

- Node.js 18+ für lokale Entwicklung/Build.
- Optional Docker, um das fertige `dist/client` mit Nginx zu serven.

## Lokale Entwicklung

```bash
npm install
npm run dev   # http://localhost:5173
```

## Build & Preview

```bash
npm run build     # tsc + vite build + prerender (dist/client)
npm run preview   # statischer Preview des Builds
```

Der Prerender-Schritt nutzt `node node_modules/vite-plugin-ssr/dist/esm/node/cli/bin.js prerender` (im Script hinterlegt), weil die CLI-Binärdatei der installierten Version sonst unter Windows nicht gefunden wird.

## Docker (optional)

```bash
docker build -t growento-ai-workshops .
docker run -p 8080:80 growento-ai-workshops
```

Die statischen Dateien aus `dist/client` werden dabei von Nginx ausgeliefert (`/usr/share/nginx/html` im Container).

## Projektstruktur

- **`/pages`**: File-based Routing für vite-plugin-ssr (z.B. `index.page.tsx`, `fuer-neulinge.page.tsx`, `wissen/chain-of-thought.page.tsx`).
- **`/renderer`**: SSG/SSR Hooks (`_default.page.client.tsx`, `_default.page.server.tsx`, `PageShell.tsx`).
- **`/src`**: UI-Komponenten und Seiteninhalte (Header, Footer, Layout, Home, Kursseiten, Blog-Artikel-Inhalte).
- **`/public`**: Statische Assets inkl. `robots.txt` und `sitemap.xml`.
- **Build-Output**: `dist/client` (HTML/CSS/JS), `dist/server` (intern für prerender, nicht deployen).

Hinweis: `src/App.tsx`/`src/main.tsx` sind nur noch für Legacy-Preview vorhanden; das Rendering erfolgt über die `.page.tsx` Files.
