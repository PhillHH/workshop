import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Keeping old routes accessible just in case, but Home is the main single page now */}
      </Routes>
    </Router>
  );
};

export default App;
