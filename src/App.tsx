import React from "react";

const App: React.FC = () => {
  return (
    <div className="w-full bg-black flex flex-col items-center overflow-hidden">
      {/* HEADER & HERO */}
      <div
        data-is-mobile="False"
        data-type="3"
        className="w-full max-w-[1440px] relative bg-black flex flex-col items-start overflow-hidden"
      >
        <img
          className="w-[1981px] h-[1486px] left-[0.50px] top-[-530px] absolute opacity-40"
          src="https://placehold.co/1981x1486"
          alt=""
        />

        {/* NAVBAR */}
        <header className="w-full px-28 py-4 bg-gradient-to-b from-black to-black/0 flex flex-col items-center">
          <div className="w-[1216px] flex items-center gap-4">
            <div className="flex-1 flex items-center gap-12">
              {/* Logo + Brand */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <div className="w-6 h-6 bg-orange-500 shadow-[0px_4px_8px_0px_rgba(249,115,22,0.25)] outline outline-[0.25px] outline-orange-500 rounded" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-lg font-bold leading-5 tracking-tight">
                    Growento
                  </span>
                  <span className="text-zinc-400 text-xs font-medium leading-4">
                    AI Workshops Hamburg
                  </span>
                </div>
              </div>

              {/* Nav Links */}
              <nav className="hidden md:flex items-center gap-8 text-white text-sm font-semibold">
                <a href="#hero" className="hover:text-orange-400 transition-colors">
                  Home
                </a>
                <a href="#workshops" className="hover:text-orange-400 transition-colors">
                  Workshops
                </a>
                <a href="#how-it-works" className="hover:text-orange-400 transition-colors">
                  Ablauf
                </a>
                <a href="#faq" className="hover:text-orange-400 transition-colors">
                  FAQ
                </a>
                <a href="#contact" className="hover:text-orange-400 transition-colors">
                  Kontakt
                </a>
              </nav>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2">
              <a
                href="#workshops"
                className="min-h-12 px-5 py-3 rounded-2xl border border-orange-500 text-orange-500 text-sm md:text-base font-semibold flex items-center justify-center"
              >
                Termine ansehen
              </a>
              <a
                href="#contact"
                className="min-h-12 px-5 py-3 bg-orange-500 rounded-2xl text-white text-sm md:text-base font-semibold flex items-center justify-center"
              >
                Platz anfragen
              </a>
            </div>
          </div>
        </header>

        {/* HERO SECTION */}
        <section
          id="hero"
          className="px-6 md:px-28 py-16 md:py-24 flex flex-col items-center"
        >
          <div className="w-full max-w-[1216px] flex flex-col lg:flex-row items-center gap-16 md:gap-24">
            {/* Visual */}
            <div className="w-full lg:w-[592px] h-[360px] md:h-[592px] relative">
              <img
                className="w-[1454.15px] h-[1090.61px] left-[-686.50px] top-[65.51px] absolute origin-top-left -rotate-6 opacity-60"
                src="https://placehold.co/1454x1091"
                alt=""
              />
              <img
                className="w-[1454.24px] h-[1090.90px] left-[-354.69px] top-[-311px] absolute opacity-60"
                src="https://placehold.co/1454x1091"
                alt=""
              />
            </div>

            {/* Copy */}
            <div className="flex-1 flex flex-col items-start gap-10">
              <div className="flex flex-col items-start gap-4">
                <div className="px-3 py-1.5 bg-blue-600 rounded-xl inline-flex items-center gap-2">
                  <span className="text-white text-sm font-medium leading-5">
                    Hamburg · Steinstraße &amp; Heidekabelplatz
                  </span>
                </div>
                <h1 className="text-white text-4xl md:text-6xl xl:text-7xl font-bold leading-tight md:leading-[64px] xl:leading-[80px]">
                  Werde zum <span className="text-orange-400">AI-Pro</span> in
                  einem Tag.
                </h1>
                <p className="text-zinc-300 text-lg md:text-xl leading-8 max-w-xl">
                  Die <strong>Growento AI Workshops</strong> machen dich fit für den
                  produktiven Einsatz von KI im Alltag und Beruf – von Einsteiger bis
                  Power-User, live in Hamburg.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#workshops"
                  className="min-h-11 px-6 py-3 bg-orange-500 rounded-2xl text-white text-sm md:text-base font-semibold flex items-center justify-center"
                >
                  Workshop auswählen
                </a>
                <a
                  href="#faq"
                  className="text-zinc-300 text-sm md:text-base font-semibold underline underline-offset-4 decoration-zinc-600 hover:decoration-orange-400"
                >
                  Alle Fragen ansehen
                </a>
              </div>

              <p className="text-zinc-400 text-sm md:text-base max-w-xl">
                Maximal <strong>8 Teilnehmende</strong> pro Workshop. Der genaue Ort
                (Steinstraße 5–7 oder Heidekabelplatz 1–5) wird dir{" "}
                <strong>mindestens 1 Tag vorher</strong> per E-Mail mitgeteilt –
                beide Locations liegen nur 5–10 Minuten fußläufig auseinander.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* LOGO ROW / TRUST SECTION */}
      <section className="w-full px-6 md:px-12 py-12 md:py-16 bg-zinc-800 flex flex-col items-center">
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-center text-white text-2xl md:text-4xl font-bold leading-tight">
            Von Teams und Selbstständigen in Hamburg gebucht.
          </h2>
          <div className="w-full max-w-[1216px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-orange-900 rounded-2xl" />
            </div>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-purple-900 rounded-2xl" />
            </div>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-lime-900 rounded-2xl" />
            </div>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-blue-900 rounded-2xl" />
            </div>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-teal-900 rounded-2xl" />
            </div>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-pink-900 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES / BENEFITS */}
      <section className="w-full px-6 md:px-28 py-16 md:py-24 bg-black flex flex-col items-center gap-16">
        <div className="w-full max-w-[800px] flex flex-col items-center gap-4">
          <div className="px-3 py-1.5 bg-orange-950 rounded-xl inline-flex items-center">
            <span className="text-orange-500 text-sm font-medium leading-5">
              Inhalte
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-10">
              Ein Tag. Drei Level. Klarer Fahrplan für deinen KI-Alltag.
            </h2>
            <p className="text-zinc-300 text-lg md:text-xl leading-8">
              Statt abstrakter Theorie arbeiten wir mit deinen echten Use Cases – E-Mails,
              Präsentationen, Kampagnen, Recherchen und mehr. Du gehst mit
              <strong> sofort anwendbaren Workflows</strong> nach Hause.
            </p>
          </div>
        </div>

        <div className="w-full max-w-[1216px] flex flex-col lg:flex-row items-center gap-16">
          {/* Left visual placeholder */}
          <div className="w-full lg:w-[627.75px] h-[360px] md:h-[627.75px] bg-zinc-600 rounded-[40px] md:rounded-[64px] overflow-hidden relative">
            <div className="absolute inset-10 bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-700 rounded-[40px]" />
          </div>

          {/* Bullets */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-orange-950 rounded-full flex items-center justify-center">
                <div className="w-6 h-3.5 bg-orange-500" />
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-bold leading-9">
                Praxisnah statt PowerPoint-Schlacht
              </h3>
              <p className="text-zinc-300 text-base md:text-lg leading-7">
                Jede Session ist hands-on: Du arbeitest direkt mit aktuellen
                Sprachmodellen und Tools (z. B. ChatGPT, Claude, Midjourney –
                je nach Level) und setzt Templates ein, die du danach weiterverwenden
                kannst.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-lime-950 flex items-center justify-center">
                  <div className="w-3 h-2 border-2 border-lime-600 border-t-0 border-l-0 rotate-45" />
                </div>
                <p className="text-zinc-300 text-lg leading-6">
                  Max. 8 Personen – genug Raum für deine Fragen und Live-Beispiele.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-lime-950 flex items-center justify-center">
                  <div className="w-3 h-2 border-2 border-lime-600 border-t-0 border-l-0 rotate-45" />
                </div>
                <p className="text-zinc-300 text-lg leading-6">
                  Fokus auf produktive Workflows, nicht auf Technikdetails.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-lime-950 flex items-center justify-center">
                  <div className="w-3 h-2 border-2 border-lime-600 border-t-0 border-l-0 rotate-45" />
                </div>
                <p className="text-zinc-300 text-lg leading-6">
                  Konkrete Prompt-Vorlagen zum Mitnehmen für deinen Alltag.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="w-full px-6 md:px-28 py-16 md:py-24 bg-zinc-800 flex flex-col items-center gap-16">
        <div className="w-full max-w-[800px] flex flex-col items-center gap-5">
          <div className="w-14 h-14 bg-orange-950 rounded-full flex items-center justify-center">
            <div className="w-7 h-7 relative overflow-hidden">
              <div className="w-6 h-6 absolute right-0 bottom-0 origin-top-left rotate-180 bg-orange-500" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-10">
              Ergebnisse, die nach dem Workshop bleiben.
            </h2>
            <p className="text-zinc-300 text-lg md:text-xl leading-8">
              Growento-Teilnehmende berichten von deutlich schnellerem Arbeiten,
              besseren Texten und mehr Klarheit im Umgang mit KI-Systemen.
            </p>
          </div>
        </div>

        <div className="w-full max-w-[800px] flex flex-col md:flex-row items-stretch gap-4">
          <div className="flex-1 flex flex-col items-center gap-2">
            <div className="text-orange-500 text-5xl md:text-6xl font-bold leading-[68px]">
              90%
            </div>
            <div className="text-zinc-300 text-lg font-semibold leading-6 text-center">
              fühlen sich nach dem Workshop sicherer im Umgang mit KI.
            </div>
          </div>
          <div className="w-px bg-zinc-700 hidden md:block" />
          <div className="flex-1 flex flex-col items-center gap-2">
            <div className="text-orange-500 text-5xl md:text-6xl font-bold leading-[68px]">
              2–3×
            </div>
            <div className="text-zinc-300 text-lg font-semibold leading-6 text-center">
              schnellere Erstellung von Texten &amp; Konzepten im Alltag.
            </div>
          </div>
          <div className="w-px bg-zinc-700 hidden md:block" />
          <div className="flex-1 flex flex-col items-center gap-2">
            <div className="text-orange-500 text-5xl md:text-6xl font-bold leading-[68px]">
              8
            </div>
            <div className="text-zinc-300 text-lg font-semibold leading-6 text-center">
              Plätze pro Workshop – mehr 1:1-Feedback, weniger Frontalbeschallung.
            </div>
          </div>
        </div>
      </section>

      {/* PRICING / WORKSHOPS */}
      <section
        id="workshops"
        className="w-full px-6 md:px-28 py-16 md:py-24 bg-black flex flex-col items-center gap-12"
      >
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-center text-white text-3xl md:text-4xl font-bold leading-10">
            Drei Growento AI Workshops in Hamburg.
          </h2>
          <p className="w-full max-w-[799px] text-center text-zinc-300 text-lg md:text-xl leading-8">
            Wähle das Level, das zu dir passt – Einsteiger, Intermediate oder
            Power-User. Jeder Workshop findet als Tages-Workshop in Hamburg statt.
          </p>
        </div>

        <div className="w-full max-w-[1216px] flex flex-col lg:flex-row gap-8">
          {/* Einsteiger */}
          <div className="flex-1 p-6 bg-zinc-950 rounded-[32px] md:rounded-[48px] border border-zinc-700 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-orange-500 text-lg font-bold leading-6">
                  Einsteiger · Foundations
                </h3>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-white text-4xl md:text-5xl font-bold leading-[56px]">
                  390&nbsp;€
                </span>
                <span className="text-zinc-300 text-xl font-medium leading-8">
                  pro Person
                </span>
              </div>
              <p className="text-zinc-300 text-base leading-6">
                Ideal für alle, die KI noch wenig nutzen und einen sicheren, strukturierten
                Einstieg wollen – ohne Vorwissen.
              </p>
            </div>
            <div className="h-px bg-zinc-700" />
            <ul className="flex flex-col gap-3 text-zinc-300 text-sm md:text-base leading-5">
              <li>· Was KI kann (und was nicht) – kompakt &amp; verständlich</li>
              <li>· Erste sichere Schritte mit ChatGPT &amp; Co.</li>
              <li>· Prompts, die wirklich funktionieren – Schritt für Schritt</li>
              <li>· Typische Fehler vermeiden (Datenschutz, Halluzinationen)</li>
              <li>· Konkrete Beispiele aus Büro, Selbstständigkeit &amp; Alltag</li>
            </ul>
            <a
              href="#contact"
              className="mt-auto min-h-12 px-5 py-3 bg-orange-500 rounded-2xl text-white text-base font-semibold flex items-center justify-center"
            >
              Platz im Einsteiger-Workshop anfragen
            </a>
          </div>

          {/* Intermediate */}
          <div className="flex-1 p-6 bg-zinc-950 rounded-[32px] md:rounded-[48px] border border-zinc-700 flex flex-col gap-8 relative overflow-hidden">
            <div className="absolute right-6 top-6 px-3 py-1.5 bg-blue-600 rounded-xl text-white text-xs font-medium">
              Beliebt
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-orange-500 text-lg font-bold leading-6">
                  Intermediate · Deep Dive
                </h3>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-white text-4xl md:text-5xl font-bold leading-[56px]">
                  490&nbsp;€
                </span>
                <span className="text-zinc-300 text-xl font-medium leading-8">
                  pro Person
                </span>
              </div>
              <p className="text-zinc-300 text-base leading-6">
                Für Fortgeschrittene, die KI bereits nutzen und ihr
                <strong> volles Potenzial</strong> für Content, Kommunikation und
                Wissensarbeit heben wollen.
              </p>
            </div>
            <div className="h-px bg-zinc-700" />
            <ul className="flex flex-col gap-3 text-zinc-300 text-sm md:text-base leading-5">
              <li>· Fortgeschrittene Prompting-Techniken &amp; Rollen-Setups</li>
              <li>· Serienaufgaben (z. B. Newsletter, Social, Landingpages)</li>
              <li>· Workflow-Design: von der Idee bis zur fertigen Ausgabe</li>
              <li>· Zusammenarbeit mit anderen Tools (z. B. Notion, Google Docs)</li>
              <li>· Qualitätskontrolle &amp; Review-Strategien</li>
            </ul>
            <a
              href="#contact"
              className="mt-auto min-h-12 px-5 py-3 bg-orange-500 rounded-2xl text-white text-base font-semibold flex items-center justify-center"
            >
              Platz im Intermediate-Workshop anfragen
            </a>
          </div>

          {/* Power-User */}
          <div className="flex-1 p-6 bg-zinc-950 rounded-[32px] md:rounded-[48px] border border-zinc-700 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-orange-500 text-lg font-bold leading-6">
                  Power-User · Systems &amp; Automation
                </h3>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-white text-4xl md:text-5xl font-bold leading-[56px]">
                  690&nbsp;€
                </span>
                <span className="text-zinc-300 text-xl font-medium leading-8">
                  pro Person
                </span>
              </div>
              <p className="text-zinc-300 text-base leading-6">
                Für alle, die KI als festen Bestandteil ihrer täglichen Arbeit
                etablieren und wiederkehrende Aufgaben stark automatisieren wollen.
              </p>
            </div>
            <div className="h-px bg-zinc-700" />
            <ul className="flex flex-col gap-3 text-zinc-300 text-sm md:text-base leading-5">
              <li>· Mehrstufige Workflows &amp; eigene Prompt-Bibliotheken</li>
              <li>· Team-Setups: wie man KI in Prozesse und Rollen integriert</li>
              <li>· Tools &amp; Integrationen für Automatisierung</li>
              <li>· Guardrails: Qualität, Compliance &amp; Verantwortung</li>
              <li>· Space für individuelle Power-User-Fragen &amp; Setups</li>
            </ul>
            <a
              href="#contact"
              className="mt-auto min-h-12 px-5 py-3 bg-orange-500 rounded-2xl text-white text-base font-semibold flex items-center justify-center"
            >
              Platz im Power-User-Workshop anfragen
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="w-full px-6 md:px-28 py-16 md:py-24 bg-zinc-800 flex flex-col items-center gap-12"
      >
        <div className="w-full max-w-[800px] flex flex-col items-center gap-6">
          <div className="px-3 py-1.5 bg-orange-950 rounded-xl inline-flex items-center">
            <span className="text-orange-500 text-sm font-medium leading-5">
              FAQ
            </span>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-10 text-center">
            Häufige Fragen zu den Growento AI Workshops.
          </h2>
          <p className="text-zinc-300 text-lg leading-7 text-center">
            Wenn du danach noch etwas wissen möchtest, schreib uns einfach –
            wir melden uns persönlich bei dir.
          </p>
        </div>

        <div className="w-full max-w-[800px] flex flex-col divide-y divide-zinc-700 border-t border-b border-zinc-700">
          <div className="p-4 flex items-start gap-4">
            <div className="flex-1">
              <p className="text-white text-base font-bold leading-5">
                Für wen sind die Workshops gedacht?
              </p>
              <p className="mt-2 text-zinc-300 text-sm leading-6">
                Für Wissensarbeiter:innen, Freelancer, Gründer:innen und Teams,
                die KI nicht nur „mal ausprobieren“, sondern strukturiert in ihren
                Alltag integrieren wollen – auf Deutsch, praxisnah und ohne
                Vorbedingungen.
              </p>
            </div>
          </div>

          <div className="p-4 flex items-start gap-4">
            <div className="flex-1">
              <p className="text-white text-base font-bold leading-5">
                Wo genau finden die Workshops statt?
              </p>
              <p className="mt-2 text-zinc-300 text-sm leading-6">
                Die Workshops finden in Hamburg in zentraler Lage statt – entweder
                in der <strong>Steinstraße 5–7</strong> oder am{" "}
                <strong>Heidekabelplatz 1–5</strong>. Du erhältst{" "}
                <strong>mindestens einen Tag vorher</strong> eine E-Mail mit dem
                konkreten Ort. Beide Locations sind nur etwa 5–10 Minuten zu Fuß
                auseinander.
              </p>
            </div>
          </div>

          <div className="p-4 flex items-start gap-4">
            <div className="flex-1">
              <p className="text-white text-base font-bold leading-5">
                Wie viele Personen nehmen teil?
              </p>
              <p className="mt-2 text-zinc-300 text-sm leading-6">
                Pro Workshop sind <strong>maximal 8 Teilnehmende</strong> zugelassen.
                So bleibt genug Zeit für individuelle Fragen, Beispiele und Feedback.
              </p>
            </div>
          </div>

          <div className="p-4 flex items-start gap-4">
            <div className="flex-1">
              <p className="text-white text-base font-bold leading-5">
                Welche Tools werden verwendet?
              </p>
              <p className="mt-2 text-zinc-300 text-sm leading-6">
                Wir arbeiten mit etablierten KI-Tools wie aktuellen
                Sprachmodellen, Bild-KI und je nach Level mit zusätzlichen
                Productivity-Tools. Wenn du möchtest, kannst du eigene Accounts
                und Use Cases mitbringen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="w-full px-6 md:px-28 py-16 md:py-24 bg-black flex flex-col items-center gap-16"
      >
        <div className="w-full max-w-[680px] flex flex-col gap-4 items-start">
          <div className="px-3 py-1.5 bg-orange-950 rounded-xl inline-flex items-center">
            <span className="text-orange-500 text-sm font-medium leading-5">
              Ablauf
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-10">
              In drei Schritten zu deinem KI-Upgrade.
            </h2>
            <p className="text-zinc-300 text-lg leading-8">
              Klarer Prozess, wenig Formalitäten – damit du dich voll auf Inhalte und
              Umsetzung fokussieren kannst.
            </p>
          </div>
        </div>

        <div className="w-full max-w-[1216px] flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex gap-6 py-6 pr-0 lg:pr-24">
              <div className="w-24 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-black font-bold">
                  1
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold leading-7">
                  Workshop-Level wählen &amp; Platz anfragen
                </h3>
                <p className="text-zinc-300 text-base leading-6">
                  Such dir das passende Level aus und schick uns eine unverbindliche
                  Anfrage mit deinem bevorzugten Termin. Du erhältst zeitnah eine
                  Bestätigung oder Alternative.
                </p>
              </div>
            </div>

            <div className="flex gap-6 py-6 pr-0 lg:pr-24">
              <div className="w-24 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center text-white font-bold">
                  2
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold leading-7">
                  Infos, Ort &amp; Vorbereitung erhalten
                </h3>
                <p className="text-zinc-300 text-base leading-6">
                  Mindestens einen Tag vor dem Workshop bekommst du alle Details per
                  Mail: genaue Location in Hamburg, Agenda, kleine Vorbereitung und
                  Zugang zu einer kurzen Vorab-Umfrage.
                </p>
              </div>
            </div>

            <div className="flex gap-6 py-6 pr-0 lg:pr-24">
              <div className="w-24 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center text-white font-bold">
                  3
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="text-white text-xl font-bold leading-7">
                  Workshop-Tag in Hamburg
                </h3>
                <p className="text-zinc-300 text-base leading-6">
                  Ein intensiver Tag mit Inputs, Live-Demos und viel Praxis. Du gehst
                  mit Templates, Checklisten und konkreten Workflows für deine Arbeit
                  nach Hause – plus Follow-up-Unterlagen.
                </p>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="flex-1 h-[360px] md:h-[592px] bg-zinc-800 rounded-[40px] md:rounded-[64px] relative overflow-hidden">
            <div className="absolute inset-6 bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-700 rounded-[32px]" />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full px-6 md:px-28 py-16 md:py-24 bg-orange-500 flex flex-col items-center">
        <div className="w-full max-w-[1216px] flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-10">
              Bereit für deinen Growento AI Workshop in Hamburg?
            </h2>
            <p className="text-white text-lg leading-7">
              Sichere dir jetzt einen der begrenzten Plätze und erlebe, wie du mit KI
              in wenigen Stunden produktiver, kreativer und schneller wirst.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#workshops"
                className="px-6 py-3 bg-black rounded-2xl text-white text-base font-semibold"
              >
                Workshop-Level auswählen
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-2xl border border-white text-white text-base font-semibold"
              >
                Individuelle Anfrage senden
              </a>
            </div>
          </div>

          <div className="flex-1 h-[340px] md:h-[440px] relative">
            <div className="w-80 h-[440px] mx-auto bg-black rounded-[40px] shadow-[0px_24px_60px_rgba(15,23,42,0.45)] relative overflow-hidden">
              <div className="absolute inset-x-6 top-10 h-10 bg-zinc-900/80 rounded-2xl" />
              <div className="absolute inset-x-6 top-28 h-8 bg-zinc-800 rounded-xl" />
              <div className="absolute inset-x-6 top-40 h-32 bg-zinc-900 rounded-2xl" />
              <div className="absolute inset-x-6 bottom-10 h-10 bg-orange-500 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer
        id="contact"
        className="w-full px-6 md:px-28 py-16 md:py-24 bg-zinc-800 flex flex-col items-center gap-12"
      >
        <div className="w-full max-w-[1216px] flex flex-col lg:flex-row justify-between gap-12">
          <div className="w-full lg:w-[600px] flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <div className="w-6 h-6 bg-orange-500 shadow-[0px_4px_8px_0px_rgba(249,115,22,0.25)] outline outline-[0.25px] outline-orange-500 rounded" />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-lg font-bold leading-5 tracking-tight">
                  Growento
                </span>
                <span className="text-zinc-400 text-xs font-medium leading-4">
                  AI Workshops Hamburg
                </span>
              </div>
            </div>
            <p className="text-white text-base leading-7">
              Trainiere deinen Umgang mit KI wie einen Muskel – in fokussierten
              Tages-Workshops mit maximal 8 Personen, mitten in Hamburg.
            </p>
            <div className="flex flex-wrap gap-6 text-white text-base font-bold leading-5">
              <a href="#hero" className="hover:text-orange-400">
                Start
              </a>
              <a href="#workshops" className="hover:text-orange-400">
                Workshops
              </a>
              <a href="#how-it-works" className="hover:text-orange-400">
                Ablauf
              </a>
              <a href="#faq" className="hover:text-orange-400">
                FAQ
              </a>
            </div>
            <div className="text-zinc-300 text-sm leading-6">
              <p>Standort: Hamburg · Steinstraße 5–7 oder Heidekabelplatz 1–5</p>
              <p>Genauer Ort: mind. 1 Tag vorher per E-Mail</p>
            </div>
          </div>

          {/* Simple contact form (frontend only) */}
          <div className="w-full lg:w-[480px] bg-zinc-900 rounded-3xl p-6 flex flex-col gap-4">
            <h3 className="text-white text-xl font-bold leading-7">
              Unverbindlich Platz anfragen
            </h3>
            <p className="text-zinc-300 text-sm leading-6">
              Schick uns kurz deine Kontaktdaten und welches Level dich
              interessiert – wir melden uns mit Terminen &amp; Details.
            </p>
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Danke für deine Anfrage! In einer echten Version würde diese Anfrage jetzt an Growento gesendet."
                );
              }}
            >
              <div className="flex flex-col gap-1">
                <label className="text-sm text-zinc-200">Name</label>
                <input
                  className="px-3 py-2 rounded-xl bg-zinc-800 border border-zinc-700 text-sm focus:outline-none focus:border-orange-500"
                  placeholder="Dein Name"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm text-zinc-200">E-Mail</label>
                <input
                  type="email"
                  className="px-3 py-2 rounded-xl bg-zinc-800 border border-zinc-700 text-sm focus:outline-none focus:border-orange-500"
                  placeholder="deine@mail.de"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm text-zinc-200">
                  Gewünschtes Level
                </label>
                <select className="px-3 py-2 rounded-xl bg-zinc-800 border border-zinc-700 text-sm focus:outline-none focus:border-orange-500">
                  <option>Einsteiger · Foundations</option>
                  <option>Intermediate · Deep Dive</option>
                  <option>Power-User · Systems &amp; Automation</option>
                  <option>Ich bin unsicher – bitte beraten</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm text-zinc-200">
                  Kurze Notiz (optional)
                </label>
                <textarea
                  className="px-3 py-2 rounded-xl bg-zinc-800 border border-zinc-700 text-sm focus:outline-none focus:border-orange-500 min-h-[80px]"
                  placeholder="Dein Kontext, Teamgröße, Wunschtermine …"
                />
              </div>
              <button
                type="submit"
                className="mt-2 min-h-11 px-5 py-3 bg-orange-500 rounded-2xl text-white text-sm font-semibold"
              >
                Anfrage absenden
              </button>
            </form>
          </div>
        </div>

        <div className="w-full max-w-[1216px] pt-8 border-t border-zinc-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-400 text-sm leading-5 text-center md:text-left">
            © {new Date().getFullYear()} Growento · AI Workshops Hamburg. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex items-center gap-4 text-zinc-400 text-sm">
            <span>Impressum</span>
            <span>Datenschutz</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;


