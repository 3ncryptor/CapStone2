
import React from 'react';

const CategoryBreakdown = ({ categorySplit, setCategorySplit }) => {
  const updateSplit = (key, value) => {
    setCategorySplit({
      ...categorySplit,
      [key]: Number(value)
    });
  };

  return (
    <div>
      <h3>Breakdown Spendable Amount</h3>
      <div>
        <label>Groceries: </label>
        <input
          type="number"
          value={categorySplit.groceries || ''}
          onChange={(e) => updateSplit('groceries', e.target.value.replace(/^0+(?=\d)/, ''))}
        />
      </div>
      <div>
        <label>Wants: </label>
        <input
          type="number"
          value={categorySplit.wants || ''}
          onChange={(e) => updateSplit('wants', e.target.value.replace(/^0+(?=\d)/, ''))}
        />
      </div>
      <div>
        <label>Others: </label>
        <input
          type="number"
          value={categorySplit.others || ''}
          onChange={(e) => updateSplit('others', e.target.value.replace(/^0+(?=\d)/, ''))}
        />
      </div>
    </div>
  );
};

export default CategoryBreakdown;
