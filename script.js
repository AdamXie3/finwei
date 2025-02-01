// Sample Numbeo data for UAE (replace with actual API calls later)
const costOfLiving = {
    rent: 7000, // Average rent in Dubai (AED)
    groceries: 1200, // Average groceries cost (AED)
    transportation: 1000, // Average transportation cost (AED)
  };
  
  function calculateBudget() {
    const income = parseFloat(document.getElementById('income').value);
    const rent = parseFloat(document.getElementById('rent').value);
    const groceries = parseFloat(document.getElementById('groceries').value);
    const transport = parseFloat(document.getElementById('transport').value);
  
    const totalExpenses = rent + groceries + transport;
    const savings = income - totalExpenses;
  
    const result = `
      <h3>Your Budget Summary</h3>
      <p>Total Income: AED ${income}</p>
      <p>Total Expenses: AED ${totalExpenses}</p>
      <p>Savings: AED ${savings}</p>
      <p>Compared to UAE Averages:</p>
      <ul>
        <li>Rent: ${rent > costOfLiving.rent ? 'Above' : 'Below'} average</li>
        <li>Groceries: ${groceries > costOfLiving.groceries ? 'Above' : 'Below'} average</li>
        <li>Transport: ${transport > costOfLiving.transportation ? 'Above' : 'Below'} average</li>
      </ul>
    `;
  
    document.getElementById('result').innerHTML = result;
  }