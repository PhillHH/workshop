import React from 'react';
import CourseDetail from './CourseDetail';

const CourseAutomation = () => {
  return (
    <CourseDetail
      title="KI-Automatisierung"
      subtitle="Prozesse & Workflows optimieren"
      description="Der ultimative Kurs für Effizienz-Fans. Wir zeigen Ihnen, wie Sie verschiedene Apps (Gmail, Slack, Trello, etc.) mit KI verbinden, um komplexe Workflows komplett zu automatisieren. Bauen Sie Ihre eigenen digitalen Mitarbeiter, die 24/7 für Sie arbeiten."
      price="799 €"
      level="Experte"
      duration="8 Wochen (Intensiv)"
      modules={[
        {
          title: "Modul 1: No-Code Automation Grundlagen",
          content: ["Einführung in Zapier und Make", "Trigger und Actions", "Fehlerbehandlung"]
        },
        {
          title: "Modul 2: KI-Agenten bauen",
          content: ["OpenAI API Grundlagen", "Custom GPTs erstellen", "Agenten vernetzen"]
        },
        {
          title: "Modul 3: Business Workflows",
          content: ["Automatisches Lead-Management", "Kundensupport-Bots", "Social Media Autopilot"]
        }
      ]}
      benefits={[
        "Massive Zeitersparnis durch Automatisierung",
        "Skalierung des Business ohne mehr Personal",
        "Tiefes technisches Verständnis (ohne Code)",
        "Persönliches 1:1 Mentoring"
      ]}
    />
  );
};

export default CourseAutomation;
