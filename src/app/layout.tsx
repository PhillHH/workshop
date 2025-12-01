import React from 'react';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadMagnet from '@/components/LeadMagnet';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Growento',
  description: 'KI-Trainings und Workshops',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-gray-100 font-sans selection:bg-primary selection:text-white">
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <LeadMagnet />
        <Footer />
      </body>
    </html>
  );
}
