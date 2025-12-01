# Growento AI Workshops – Landingpage

Moderne Landingpage für die **Growento AI Workshops** in Hamburg. Die Anwendung basiert auf einer Multi-Page-Architektur mit **React**, **TypeScript**, **Vite**, **React Router** und **Tailwind CSS**.

## Features

*   **Multi-Page Routing:** Nutzt `react-router-dom` für nahtlose Navigation zwischen Zielgruppen-Seiten, Kursdetails und Checkout.
*   **Zielgruppen-fokussiert:** Spezielle Landingpages für Neulinge, Berufstätige und Manager.
*   **Checkout-Integration:** Integrierter Checkout-Prozess mit Vorauszahlung und BankLink-Optionen.
*   **Responsive Design:** Vollständig responsiv dank Tailwind CSS.
*   **Performance:** Optimiertes Build mit Vite.

## Technologie-Stack

*   **Frontend:** React 18
*   **Sprache:** TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **Routing:** React Router DOM
*   **Container:** Docker (für Production-Deployment)

## Lokale Entwicklung

Abhängigkeiten installieren:
```bash
npm install
```

Development-Server starten:
```bash
npm run dev
```
Die App läuft dann unter `http://localhost:5173`.

## Production-Build

Projekt bauen:
```bash
npm run build
```
Dies erstellt den optimierten Code im `dist/` Verzeichnis.

Build lokal testen:
```bash
npm run preview
```

## Docker: Build & Run

Ein Dockerfile ist enthalten, um die Anwendung als Nginx-Container auszuliefern.

```bash
docker build -t growento-ai-workshops .
docker run -p 8080:80 growento-ai-workshops
```
Die Landingpage ist dann unter `http://localhost:8080` erreichbar.

## Projektstruktur

*   `src/components/`: Wiederverwendbare UI-Komponenten (Layout, Buttons, etc.).
*   `src/pages/`: Die verschiedenen Seiten der Anwendung (Home, Kurse, Zielgruppen, Checkout).
*   `src/verify_site.py`: Python-Playwright Skript zur visuellen Verifizierung der Seiten.
