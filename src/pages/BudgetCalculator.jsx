import React, { useState } from 'react';

const budgetCalculatorData = {
  housing: {
    oneBedroomCityCentre: 8213.16,
    oneBedroomOutsideCentre: 5372.12,
  },
  utilities: 835.82,
  groceries: {
    milk: 6.76,
    bread: 5.29,
    eggs: 11.87,
    chicken: 32.84,
  },
  transportation: {
    publicTransportMonthly: 300.00,
    gasolinePerLiter: 2.95,
  },
  dining: {
    inexpensiveRestaurant: 45.00,
    midRangeRestaurant: 255.00,
  },
  education: {
    preschoolMonthly: 3013.33,
  },
};

const BudgetCalculator = () => {
  const [income, setIncome] = useState(0);
  const [budget, setBudget] = useState({ needs: 0, wants: 0, savings: 0 });

  const calculateBudget = () => {
    const totalNeeds =
      budgetCalculatorData.housing.oneBedroomCityCentre +
      budgetCalculatorData.utilities +
      budgetCalculatorData.groceries.milk +
      budgetCalculatorData.transportation.publicTransportMonthly;

    const needs = income * 0.5 - totalNeeds;
    const wants = income * 0.3;
    const savings = income * 0.2;

    setBudget({
      needs: needs < 0 ? 0 : needs,
      wants,
      savings,
    });
  };

  return (
    <div>
      <h2>Budget Calculator</h2>
      <input
        type="number"
        placeholder="Enter your income"
        value={income}
        onChange={(e) => setIncome(Number(e.target.value))}
      />
      <button onClick={calculateBudget}>Calculate Budget</button>
      <div>
        <h3>Budget Breakdown:</h3>
        <p>Needs: {budget.needs.toFixed(2)} AED</p>
        <p>Wants: {budget.wants.toFixed(2)} AED</p>
        <p>Savings: {budget.savings.toFixed(2)} AED</p>
      </div>
    </div>
  );
};

export default BudgetCalculator;
