import React from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, SproutIcon } from '../../components/Icons';
import CourseCard from '../../components/CourseCard';

const Neulinge = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
             <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <SproutIcon className="text-primary w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Keine Angst vor der Technik.<br />
              <span className="text-primary">KI ist für alle da.</span>
            </h1>
            <p className="text-xl text-gray-30 mb-8 leading-relaxed">
              Sie hören überall von Künstlicher Intelligenz, wissen aber nicht, wie Sie anfangen sollen?
              Wir nehmen Sie an die Hand. Ohne Fachchinesisch. Ohne Stress.
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points / Solutions */}
      <section className="py-16 bg-gray-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Der einfache Start in die digitale Zukunft</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckIcon className="mt-1" />
                  <span className="ml-4 text-gray-30 text-lg">Verständliche Erklärungen statt Technik-Jargon</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="mt-1" />
                  <span className="ml-4 text-gray-30 text-lg">Sichere Umgebung zum Ausprobieren</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="mt-1" />
                  <span className="ml-4 text-gray-30 text-lg">Nutzen für Hobbys, Reisen und Alltag</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="mt-1" />
                  <span className="ml-4 text-gray-30 text-lg">Datenschutz und Sicherheit einfach erklärt</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-80 p-8 rounded-2xl border border-gray-70">
              <h3 className="text-xl font-bold text-white mb-4">"Ich dachte, ich bin zu alt dafür..."</h3>
              <p className="text-gray-30 italic mb-6">
                "...aber der Kurs war so aufgebaut, dass ich sofort mitgekommen bin. Jetzt plane ich meine nächste Urlaubsreise komplett mit ChatGPT und lasse mir Kochrezepte vorschlagen. Es macht richtig Spaß!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-60 rounded-full mr-4"></div>
                <div>
                  <p className="text-white font-semibold">Renate M.</p>
                  <p className="text-primary text-sm">Privatnutzerin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Course */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ihr idealer Einstieg</h2>
            <p className="text-gray-50">Dieser Kurs ist speziell für Einsteiger konzipiert.</p>
          </div>

          <div className="max-w-md mx-auto">
            <CourseCard
              title="KI-Grundlagen"
              subtitle="Sicher starten im digitalen Zeitalter. Abbau von Berührungsängsten."
              price="149 €"
              duration="4 Stunden"
              features={[
                "Was ist KI und wie funktioniert sie?",
                "Grundlagen Prompt Engineering",
                "Praxis: E-Mails, Reisen, Texte",
                "Einführung Bildgenerierung",
                "Sicherheit & Ethik"
              ]}
              link="/ki-grundlagen"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Neulinge;
