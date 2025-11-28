import React from 'react';
import CourseDetail from './CourseDetail';

const CourseBusiness = () => {
  return (
    <CourseDetail
      title="KI im Beruf"
      subtitle="Produktivität & Qualität steigern"
      description="Für alle, die KI nicht nur als Spielerei, sondern als echten Wettbewerbsvorteil nutzen wollen. Lernen Sie, wie Sie KI in Ihre täglichen Arbeitsprozesse integrieren, um schneller bessere Ergebnisse zu liefern. Ideal für Marketing, Vertrieb, HR und Administration."
      price="299 €"
      level="Fortgeschritten"
      duration="6 Wochen (Hybrid)"
      modules={[
        {
          title: "Modul 1: Advanced Prompt Engineering",
          content: ["Few-Shot Prompting", "Chain-of-Thought Techniken", "Context-Management"]
        },
        {
          title: "Modul 2: Content Creation & Marketing",
          content: ["Blogposts und Social Media", "Newsletter-Automatisierung", "SEO-Optimierung mit KI"]
        },
        {
          title: "Modul 3: Datenanalyse & Recherche",
          content: ["PDFs und Dokumente analysieren", "Marktrecherche automatisieren", "Excel-Formeln generieren"]
        }
      ]}
      benefits={[
        "Dramatische Produktivitätssteigerung",
        "Höhere Qualität der Arbeitsergebnisse",
        "Wettbewerbsvorteil am Arbeitsmarkt",
        "Zertifikat für LinkedIn"
      ]}
    />
  );
};

export default CourseBusiness;
