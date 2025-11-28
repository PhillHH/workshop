import React from 'react';
import CourseDetail from './CourseDetail';

const CourseBasics = () => {
  return (
    <CourseDetail
      title="KI-Grundlagen"
      subtitle="Sicher starten im digitalen Zeitalter"
      description="Dieser Kurs ist Ihr perfekter Einstieg in die Welt der Künstlichen Intelligenz. Wir nehmen Sie an die Hand und zeigen Ihnen Schritt für Schritt, wie Sie moderne KI-Tools wie ChatGPT, Midjourney und andere sicher bedienen. Keine Vorkenntnisse erforderlich – nur Neugier!"
      price="149 €"
      level="Einsteiger"
      duration="4 Wochen (Selbststudium)"
      modules={[
        {
          title: "Modul 1: Was ist KI eigentlich?",
          content: ["Geschichte und Entwicklung", "Maschinelles Lernen vs. KI", "Mythen und Fakten"]
        },
        {
          title: "Modul 2: Der Umgang mit ChatGPT",
          content: ["Account-Erstellung und Sicherheit", "Die ersten Prompts schreiben", "Häufige Fehler vermeiden"]
        },
        {
          title: "Modul 3: KI im Alltag",
          content: ["E-Mails schreiben lassen", "Reiseplanung und Rezepte", "Lernen und Zusammenfassen"]
        }
      ]}
      benefits={[
        "Keine Angst mehr vor der Technik",
        "Sofortige Zeitersparnis im Alltag",
        "Verständnis der wichtigsten Begriffe",
        "Zugang zu exklusiver Community"
      ]}
    />
  );
};

export default CourseBasics;
