# Growento AI Workshops – Landingpage

Single-Page-Landing für die **Growento AI Workshops** in Hamburg, umgesetzt mit **React**, **TypeScript**, **Vite** und **Tailwind CSS**. Die Anwendung wird für die Produktion in einem **Docker-Container** ausgeliefert, der einen Nginx-Server beinhaltet.

## Installation & Start

Bitte beachten Sie die Datei [StartApp.md](./StartApp.md) für detaillierte Anweisungen zur Installation und zum Start der Anwendung (standardmäßig auf Port **8026**).

Kurzfassung:
- **Windows**: `start.bat` ausführen.
- **Linux/Mac**: `start.sh` ausführen.

## Voraussetzungen

Um die Anwendung lokal auszuführen, wird **Docker** benötigt.

- **Windows:** Installieren Sie [Docker Desktop für Windows](https://www.docker.com/products/docker-desktop/).
- **Linux:** Installieren Sie die [Docker Engine](https://docs.docker.com/engine/install/) (und ggf. Docker Compose).
- **Mac:** Installieren Sie [Docker Desktop für Mac](https://www.docker.com/products/docker-desktop/).

Es ist keine lokale Installation von Node.js notwendig, wenn Sie die Anwendung nur via Docker starten möchten.

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
  - `StartApp.md`: Anleitung zum Starten der App.
  - `start.sh` / `start.bat`: Skripte zum automatisierten Starten des Docker-Containers.
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
