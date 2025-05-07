
import React from 'react';

const BudgetAllocator = ({ userBudget, setUserBudget }) => {
  const updateBudget = (field, value) => {
    setUserBudget({
      ...userBudget,
      [field]: Number(value)
    });
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3>Set Your Custom Budget</h3>
      <div>
        <label>Investment: </label>
        <input
          type="number"
          value={userBudget.investment || ''}
          onChange={(e) => updateBudget('investment', e.target.value.replace(/^0+(?=\d)/, ''))}
        />
      </div>
      <div>
        <label>Savings: </label>
        <input
          type="number"
          value={userBudget.savings || ''}
          onChange={(e) => updateBudget('savings', e.target.value.replace(/^0+(?=\d)/, ''))}
        />
      </div>
      <div>
        <label>Spendable: </label>
        <input
          type="number"
          value={userBudget.spendable || ''}
          onChange={(e) => updateBudget('spendable', e.target.value.replace(/^0+(?=\d)/, ''))}
        />
      </div>
    </div>
  );
};

export default BudgetAllocator;
