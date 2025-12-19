# StartApp Anleitung

Diese Anleitung beschreibt, wie du die Anwendung **workshop_landing** installierst und startest.

Die Anwendung wird standardmäßig auf Port **8026** bereitgestellt.

## Voraussetzungen

Stelle sicher, dass **Docker** auf deinem System installiert ist und läuft.
- [Docker Desktop für Windows/Mac](https://www.docker.com/products/docker-desktop/)
- [Docker Engine für Linux](https://docs.docker.com/engine/install/)

## Automatische Installation & Start

Wir haben Skripte vorbereitet, die das Bauen des Images und das Starten des Containers automatisieren.

### Windows
Führe einfach die Datei `start.bat` aus (Doppelklick oder via Kommandozeile).

```cmd
.\start.bat
```

### Linux / macOS
Führe das Shell-Skript `start.sh` aus. Stelle sicher, dass es ausführbar ist.

```bash
chmod +x start.sh
./start.sh
```

Nach erfolgreichem Start ist die Anwendung unter **http://localhost:8026** erreichbar.

---

## Manuelle Installation & Start

Falls du die Skripte nicht nutzen möchtest, kannst du die Docker-Befehle auch manuell ausführen.

### 1. Docker-Image bauen

```bash
docker build -t workshop_landing .
```

### 2. Container starten

Hierbei wird der lokale Port **8026** auf den Container-Port 80 weitergeleitet.

```bash
docker run -d -p 8026:80 --name workshop_landing_container workshop_landing
```

Die Anwendung ist nun unter **http://localhost:8026** erreichbar.
