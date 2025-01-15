import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import BudgetCalculator from './pages/BudgetCalculator';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/calculator" element={<BudgetCalculator />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
