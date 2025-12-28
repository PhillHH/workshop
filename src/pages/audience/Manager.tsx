import React from 'react';
import { CheckIcon, GearsIcon } from '../../components/Icons';
import CourseCard from '../../components/CourseCard';

const Manager = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
             <div className="absolute top-[20%] left-[50%] transform -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
             <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <GearsIcon className="text-primary w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Skalieren Sie Ihr Unternehmen<br />
              <span className="text-primary">mit intelligenter Automatisierung.</span>
            </h1>
            <p className="text-xl text-gray-30 mb-8 leading-relaxed">
              Für Entscheidungsträger und Strategen: Transformieren Sie manuelle Prozesse in
              automatisierte Workflows und sichern Sie sich den entscheidenden Wettbewerbsvorteil.
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points / Solutions */}
      <section className="py-16 bg-gray-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Strategische Vorteile sichern</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckIcon className="mt-1" />
                  <span className="ml-4 text-gray-30 text-lg">Skalierbare Prozesse ohne Personalaufbau</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="mt-1" />
                  <span className="ml-4 text-gray-30 text-lg">Fehlerreduktion durch Automatisierung</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="mt-1" />
                  <span className="ml-4 text-gray-30 text-lg">Integration von Tools (Zapier, Make, etc.)</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="mt-1" />
                  <span className="ml-4 text-gray-30 text-lg">Strategische Implementierung von KI im Team</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-80 p-8 rounded-2xl border border-gray-70">
              <h3 className="text-xl font-bold text-white mb-4">"80% Automatisierung im Support"</h3>
              <p className="text-gray-30 italic mb-6">
                "Durch den Workshop haben wir verstanden, wie wir unsere Tools verbinden können. Unser Kundensupport läuft jetzt zu 80% automatisiert über KI-Agenten, während das Team sich um komplexe Fälle kümmert. Die Kundenzufriedenheit ist gestiegen."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-60 rounded-full mr-4"></div>
                <div>
                  <p className="text-white font-semibold">Sarah L.</p>
                  <p className="text-primary text-sm">Head of Operations</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">Der Strategie-Workshop</h2>
            <p className="text-gray-50">Intensivtraining für Manager, Teamleiter und Unternehmer.</p>
          </div>

          <div className="max-w-md mx-auto">
            <CourseCard
              title="KI-Automatisierung"
              subtitle="Prozesse und Workflows optimieren für Strategen & Manager."
              price="799 €"
              duration="2 Tage"
              features={[
                "Prozessanalyse für Automatisierung",
                "Verknüpfung via Zapier/Make",
                "Auto-Content & Video-Avatare",
                "Team-Workflows entwickeln",
                "Strategische Entscheidungsfindung"
              ]}
              link="/ki-automatisierung"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manager;
