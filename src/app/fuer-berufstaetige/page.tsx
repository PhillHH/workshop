import React from 'react';
import { RocketIcon, CheckIcon } from '@/components/Icons';
import CourseCard from '@/components/CourseCard';

export default function Berufstaetige() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
             <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
             <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <RocketIcon className="text-primary w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ihr Karriere-Booster: <br />
              <span className="text-primary">KI als täglicher Assistent.</span>
            </h1>
            <p className="text-xl text-gray-30 mb-8 leading-relaxed">
              Arbeiten Sie klüger, nicht härter. Nutzen Sie KI, um Routineaufgaben zu beschleunigen,
              bessere Texte zu schreiben und Ihre Kreativität zu vervielfachen.
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points / Solutions */}
      <section className="py-16 bg-gray-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1 bg-gray-80 p-8 rounded-2xl border border-gray-70">
              <h3 className="text-xl font-bold text-white mb-4">"Mehr Zeit für das Wesentliche"</h3>
              <p className="text-gray-30 italic mb-6">
                "Früher saß ich Stunden an Reportings und E-Mails. Mit den Techniken aus dem Kurs erledige ich das in 30 Minuten. Die gewonnene Zeit nutze ich jetzt für strategische Projekte, die meiner Karriere wirklich helfen."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-60 rounded-full mr-4"></div>
                <div>
                  <p className="text-white font-semibold">Thomas K.</p>
                  <p className="text-primary text-sm">Marketing Manager</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-white mb-6">Return on Investment ab Tag 1</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckIcon className="mt-1" />
                  <span className="ml-4 text-gray-30 text-lg">Bis zu 10 Stunden Zeitersparnis pro Woche</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="mt-1" />
                  <span className="ml-4 text-gray-30 text-lg">Qualitätssteigerung bei Texten und Konzepten</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="mt-1" />
                  <span className="ml-4 text-gray-30 text-lg">Wettbewerbsvorteil am Arbeitsmarkt</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="mt-1" />
                  <span className="ml-4 text-gray-30 text-lg">Kreative Blockaden überwinden</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Course */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Der Kurs für Profis</h2>
            <p className="text-gray-50">Perfekt für Angestellte, Selbstständige und Kreative.</p>
          </div>

          <div className="max-w-md mx-auto">
            <CourseCard
              title="KI im Beruf"
              subtitle="Produktivität und Qualität steigern für Berufstätige & Selbstständige."
              price="299 €"
              duration="6 Stunden"
              isHighlight={true}
              features={[
                "Fortgeschrittenes Prompting",
                "Vergleich & Auswahl der Tools",
                "KI als Schreib- & Kreativpartner",
                "Wissensmanagement mit KI",
                "Aufbau persönlicher Patterns"
              ]}
              link="/ki-im-beruf"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
