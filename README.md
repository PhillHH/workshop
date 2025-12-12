# Growento AI Workshops – Landingpage

Single-Page-Landing für die **Growento AI Workshops** in Hamburg, umgesetzt mit **React**, **TypeScript**, **Vite** und **Tailwind CSS**. Die Anwendung wird für die Produktion in einem **Docker-Container** ausgeliefert, der einen Nginx-Server beinhaltet.

## Voraussetzungen

Um die Anwendung lokal auszuführen, wird **Docker** benötigt.

- **Windows:** Installieren Sie [Docker Desktop für Windows](https://www.docker.com/products/docker-desktop/).
- **Linux:** Installieren Sie die [Docker Engine](https://docs.docker.com/engine/install/) (und ggf. Docker Compose).
- **Mac:** Installieren Sie [Docker Desktop für Mac](https://www.docker.com/products/docker-desktop/).

Es ist keine lokale Installation von Node.js notwendig, wenn Sie die Anwendung nur via Docker starten möchten.

## Installation & Start (Windows & Linux)

Die Befehle zum Bauen und Starten des Containers sind auf Windows (PowerShell oder CMD) und Linux (Bash) identisch.

### 1. Docker-Image bauen

Führen Sie folgenden Befehl im Hauptverzeichnis des Projekts aus:

```bash
docker build -t growento-ai-workshops .
```

### 2. Container starten

Starten Sie den Container und mappen Sie den internen Port 80 auf den lokalen Port 8080:

```bash
docker run -p 8080:80 growento-ai-workshops
```

Die Landingpage ist anschließend im Browser unter `http://localhost:8080` erreichbar.

---

### Lokale Entwicklung (Optional)

Falls Sie den Code bearbeiten möchten, benötigen Sie Node.js (Version 18+).

```bash
npm install
npm run dev
```
Die Entwicklungsumgebung läuft dann unter `http://localhost:5173`.

## Projektstruktur

Das Projekt ist wie folgt aufgebaut:

- **`/` (Root)**
  - `Dockerfile`: Multi-Stage Build-Konfiguration. Stufe 1 baut die React-App, Stufe 2 serviert die statischen Dateien mit Nginx.
  - `package.json`, `vite.config.ts`, `tailwind.config.cjs`: Konfigurationsdateien für Dependencies, Build-Tool und Styling.

- **`/src`** (Quellcode)
  - **`main.tsx`**: Einstiegspunkt der React-Anwendung.
  - **`App.tsx`**: Hauptkomponente, die das Routing (`react-router-dom`) definiert.
  - **`components/`**: Wiederverwendbare UI-Komponenten.
    - `layout/Layout.tsx`: Globales Layout (Header, Main Content, Footer), das auf allen Seiten verwendet wird.
    - `Header.tsx` / `Footer.tsx`: Navigation und Fußzeile.
    - `CourseCard.tsx`: Darstellung der Preise und Kursinhalte.
    - `LeadMagnet.tsx`: Komponente zur Lead-Erfassung (Newsletter/Kontakt).
  - **`pages/`**: Die einzelnen Ansichten (Routes) der App.
    - `Home.tsx`: Die Startseite (Landingpage).
    - `Checkout.tsx`: Die Zahlungsseite.
    - `About.tsx`: "Über uns"-Seite.
    - `courses/`: Spezifische Unterseiten für Kursdetails.
