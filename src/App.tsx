import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CourseBasics from './pages/CourseBasics';
import CourseBusiness from './pages/CourseBusiness';
import CourseAutomation from './pages/CourseAutomation';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basics" element={<CourseBasics />} />
        <Route path="/business" element={<CourseBusiness />} />
        <Route path="/automation" element={<CourseAutomation />} />
      </Routes>
    </Router>
  );
};

export default App;
