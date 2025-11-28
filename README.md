## Growento AI Workshops – Landingpage

Single-Page-Landing für die **Growento AI Workshops** in Hamburg, umgesetzt mit **React**, **TypeScript**, **Vite** und **Tailwind CSS** und ausgeliefert in einem **Docker-Container**.

### Lokale Entwicklung

```bash
npm install
npm run dev
```

Die App läuft dann unter `http://localhost:5173`.

### Production-Build lokal prüfen

```bash
npm run build
npm run preview
```

### Docker: Build & Run

```bash
docker build -t growento-ai-workshops .
docker run -p 8080:80 growento-ai-workshops
```

Die Landingpage ist dann unter `http://localhost:8080` erreichbar.


