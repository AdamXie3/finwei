import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const BudgetCalculator = () => {
  // State variables for income and expenses
  const [income, setIncome] = useState(0);
  const [housing, setHousing] = useState(0);
  const [utilities, setUtilities] = useState(0);
  const [food, setFood] = useState(0);
  const [transportation, setTransportation] = useState(0);
  const [otherExpenses, setOtherExpenses] = useState(0);
  
  // Calculate total needs
  const calculateNeeds = () => {
    const totalNeeds = Number(housing) + Number(utilities) + Number(food) + Number(transportation) + Number(otherExpenses);
    return totalNeeds;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Total Needs: ${calculateNeeds()} AED`);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2" gutterBottom>
        Budget Calculator
      </Typography>
      <Typography paragraph>
        Use this tool to help you manage your finances and create a budget that works for you.
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField 
          label="Monthly Income (AED)" 
          variant="outlined" 
          fullWidth 
          onChange={(e) => setIncome(e.target.value)} 
          sx={{ mb: 2 }} 
        />
        <TextField 
          label="Housing (AED)" 
          variant="outlined" 
          fullWidth 
          onChange={(e) => setHousing(e.target.value)} 
          sx={{ mb: 2 }} 
        />
        <TextField 
          label="Utilities (AED)" 
          variant="outlined" 
          fullWidth 
          onChange={(e) => setUtilities(e.target.value)} 
          sx={{ mb: 2 }} 
        />
        <TextField 
          label="Food (AED)" 
          variant="outlined" 
          fullWidth 
          onChange={(e) => setFood(e.target.value)} 
          sx={{ mb: 2 }} 
        />
        <TextField 
          label="Transportation (AED)" 
          variant="outlined" 
          fullWidth 
          onChange={(e) => setTransportation(e.target.value)} 
          sx={{ mb: 2 }} 
        />
        <TextField 
          label="Other Expenses (AED)" 
          variant="outlined" 
          fullWidth 
          onChange={(e) => setOtherExpenses(e.target.value)} 
          sx={{ mb: 2 }} 
        />
        <Button variant="contained" color="primary" type="submit">
          Calculate
        </Button>
      </Box>
      <Typography variant="h6" sx={{ mt: 4 }}>
        Total Needs: {calculateNeeds()} AED
      </Typography>
    </Container>
  );
};

export default BudgetCalculator;
