import React from 'react';


const SalaryInput = ({ salary, setSalary }) => {
 return (
   <div className="card">
     <h3>Enter Your Monthly Salary</h3>
     <input
       type="number"
       placeholder="e.g., 50000"
       value={salary}
       onChange={(e) => setSalary(e.target.value)}
     />
   </div>
 );
};


export default SalaryInput;



