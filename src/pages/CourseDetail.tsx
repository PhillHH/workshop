import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

interface CourseDetailProps {
    title: string;
    subtitle: string;
    description: string;
    price: string;
    level: string;
    duration: string;
    modules: { title: string; content: string[] }[];
    benefits: string[];
}

const CourseDetail: React.FC<CourseDetailProps> = ({ title, subtitle, description, price, level, duration, modules, benefits }) => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <Header />

      <main className="pt-[140px] pb-20 container mx-auto px-4 md:px-[112px]">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-500">
            <Link to="/" className="hover:text-white transition-colors">Home</Link> / <span className="text-primary">{title}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Column: Content */}
            <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h1>
                <p className="text-xl text-primary font-medium mb-6">{subtitle}</p>
                <p className="text-lg text-gray-300 leading-relaxed mb-10">{description}</p>

                <div className="grid grid-cols-2 gap-4 mb-10">
                    <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                        <div className="text-gray-500 text-sm mb-1">Niveau</div>
                        <div className="font-semibold text-white">{level}</div>
                    </div>
                    <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                        <div className="text-gray-500 text-sm mb-1">Dauer</div>
                        <div className="font-semibold text-white">{duration}</div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mb-6">Was Sie lernen werden</h2>
                <div className="space-y-6 mb-12">
                    {modules.map((mod, idx) => (
                        <div key={idx} className="border-l-2 border-zinc-800 pl-6 hover:border-primary transition-colors">
                            <h3 className="text-xl font-bold text-white mb-2">{mod.title}</h3>
                            <ul className="list-disc list-inside text-gray-400 space-y-1">
                                {mod.content.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <h2 className="text-2xl font-bold mb-6">Ihre Vorteile</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-gray-300">
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">✓</div>
                            {benefit}
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className="w-full lg:w-[400px]">
                <div className="sticky top-[120px] bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl backdrop-blur-md">
                    <div className="text-gray-400 font-medium mb-2">Preis pro Teilnehmer</div>
                    <div className="text-4xl font-bold text-white mb-6">{price}</div>

                    <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 mb-4">
                        Jetzt Buchen
                    </button>
                    <p className="text-center text-xs text-gray-500 mb-6">Sichere Zahlung • 30 Tage Geld-zurück-Garantie</p>

                    <div className="space-y-4 pt-6 border-t border-zinc-800">
                        <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">🎓</div>
                             <div>
                                 <div className="text-white font-medium">Zertifikat</div>
                                 <div className="text-xs text-gray-500">Offizieller Abschluss</div>
                             </div>
                        </div>
                        <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">∞</div>
                             <div>
                                 <div className="text-white font-medium">Lebenslanger Zugriff</div>
                                 <div className="text-xs text-gray-500">Auf alle Materialien</div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetail;
