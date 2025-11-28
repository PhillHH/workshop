import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ScrollToTop from '../ScrollToTop';
import LeadMagnet from '../LeadMagnet';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans selection:bg-primary selection:text-white">
      <ScrollToTop />
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <LeadMagnet />
      <Footer />
    </div>
  );
};

export default Layout;
