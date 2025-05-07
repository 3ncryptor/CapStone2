import React, { useEffect, useState } from 'react';

const RecommendedSplit = ({ salary }) => {
  const [recommendation, setRecommendation] = useState({
    needs: 0,
    wants: 0,
    savings: 0
  });

  useEffect(() => {
    const salaryNum = Number(salary);
    setRecommendation({
      needs: (salaryNum * 0.5).toFixed(0),
      wants: (salaryNum * 0.3).toFixed(0),
      savings: (salaryNum * 0.2).toFixed(0)
    });
  }, [salary]);

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3>Recommended Split (50-30-20 Rule)</h3>
      <ul>
        <li>Needs: ₹{recommendation.needs}</li>
        <li>Wants: ₹{recommendation.wants}</li>
        <li>Savings: ₹{recommendation.savings}</li>
      </ul>
    </div>
  );
};

export default RecommendedSplit;
