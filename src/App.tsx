import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/layout/Layout';

// Audience Pages
import Neulinge from './pages/audience/Neulinge';
import Berufstaetige from './pages/audience/Berufstaetige';
import Manager from './pages/audience/Manager';

// Course Pages
import KIGrundlagen from './pages/courses/KIGrundlagen';
import KIImBeruf from './pages/courses/KIImBeruf';
import KIAutomatisierung from './pages/courses/KIAutomatisierung';

// Content Pages
import About from './pages/About';
import BlogOverview from './pages/blog/BlogOverview';
import BlogArticle from './pages/blog/BlogArticle';
import Testimonials from './pages/Testimonials';
import Checkout from './pages/Checkout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Audience Pages */}
        <Route path="/fuer-neulinge" element={<Layout><Neulinge /></Layout>} />
        <Route path="/fuer-berufstaetige" element={<Layout><Berufstaetige /></Layout>} />
        <Route path="/fuer-manager-strategen" element={<Layout><Manager /></Layout>} />

        {/* Course Pages */}
        <Route path="/ki-grundlagen" element={<Layout><KIGrundlagen /></Layout>} />
        <Route path="/ki-im-beruf" element={<Layout><KIImBeruf /></Layout>} />
        <Route path="/ki-automatisierung" element={<Layout><KIAutomatisierung /></Layout>} />

        {/* Content Pages */}
        <Route path="/ueber-uns" element={<Layout><About /></Layout>} />
        <Route path="/trainer" element={<Layout><About /></Layout>} /> {/* Alias */}
        <Route path="/wissen" element={<Layout><BlogOverview /></Layout>} />
        <Route path="/wissen/:articleId" element={<Layout><BlogArticle /></Layout>} />
        <Route path="/referenzen" element={<Layout><Testimonials /></Layout>} />

        {/* Checkout */}
        <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
