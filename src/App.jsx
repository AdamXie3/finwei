import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Typography, Box } from '@mui/material';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import BudgetCalculator from './pages/BudgetCalculator'; 

const App = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTabContent = () => {
    switch (value) {
      case 0:
        return <Home />;
      case 1:
        return <Lessons />;
      case 2:
        return <BudgetCalculator />;
      default:
        return <Home />;
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" />
          <Tab label="Lessons" />
          <Tab label="Budget Calculator" />
        </Tabs>
      </AppBar>
      <Box sx={{ p: 3 }}>
        {renderTabContent()}
      </Box>
    </Box>
  );
};

export default App;
