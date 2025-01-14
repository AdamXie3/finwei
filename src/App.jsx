import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BudgetCalculator from './pages/BudgetCalculator';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to the Finwei Budget App</h1>
        <Routes>
          <Route path="/" element={<BudgetCalculator />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
