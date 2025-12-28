import React from 'react';
import Home from './pages/Home';

// Legacy SPA entry point (kept for compatibility with index.html preview).
// Routing is now handled by vite-plugin-ssr with file-based pages.
const App = () => {
  return <Home />;
};

export default App;
