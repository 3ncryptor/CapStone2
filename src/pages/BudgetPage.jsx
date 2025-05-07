import React, { useState, useEffect } from 'react';
import SalaryInput from '../components/SalaryInput';
import RecommendedSplit from '../components/RecommendedSplit';
import BudgetAllocator from '../components/BudgetAllocator';
import CategoryBreakdown from '../components/CategoryBreakdown';

const BudgetPage = () => {
  const [salary, setSalary] = useState('');
  const [userBudget, setUserBudget] = useState({
    investment: 0,
    savings: 0,
    spendable: 0,
  });

  const [categorySplit, setCategorySplit] = useState({
    groceries: 0,
    wants: 0,
    others: 0,
  });


  useEffect(() => {
    const numericSalary = Number(salary);
    if (numericSalary > 0) {
      setUserBudget({
        investment: Math.floor(numericSalary * 0.2),
        savings: Math.floor(numericSalary * 0.2),
        spendable: Math.floor(numericSalary * 0.6),
      });
    }
  }, [salary]);


  useEffect(() => {
    const total =
      Number(userBudget.investment) +
      Number(userBudget.savings) +
      Number(userBudget.spendable);

    if (salary && total > Number(salary)) {
      alert('Your total budget exceeds your salary. Please adjust the values.');
    }
  }, [userBudget, salary]);


  useEffect(() => {
    const total =
      Number(categorySplit.groceries) +
      Number(categorySplit.wants) +
      Number(categorySplit.others);

    if (userBudget.spendable && total > userBudget.spendable) {
      alert('Your breakdown exceeds the spendable amount.');
    }
  }, [categorySplit, userBudget.spendable]);

  return (
    <div className="budget-page-container">


      <SalaryInput salary={salary} setSalary={setSalary} />

      {salary && (
        <>
          <RecommendedSplit salary={salary} />
          <BudgetAllocator
            userBudget={userBudget}
            setUserBudget={setUserBudget}
          />
          <CategoryBreakdown
            categorySplit={categorySplit}
            setCategorySplit={setCategorySplit}
          />
        </>
      )}
    </div>
  );
};

export default BudgetPage;
