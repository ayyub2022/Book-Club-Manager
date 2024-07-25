// ReadingPlanner.js
import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Install with `npm install react-calendar`
import './ReadingPlanner.css';

const ReadingPlanner = () => {
  const [date, setDate] = useState(new Date());
  const [book, setBook] = useState('');
  const [plans, setPlans] = useState([]);

  const handleDateChange = newDate => {
    setDate(newDate);
  };

  const handleBookChange = e => {
    setBook(e.target.value);
  };

  const handleAddPlan = () => {
    setPlans([...plans, { date, book }]);
    setBook('');
  };

  const handleDeletePlan = index => {
    setPlans(plans.filter((_, i) => i !== index));
  };

  const handleUpdatePlan = (index, newBook) => {
    const updatedPlans = plans.map((plan, i) =>
      i === index ? { ...plan, book: newBook } : plan
    );
    setPlans(updatedPlans);
  };

  return (
    <div className="reading-planner">
      <h2>Reading Planner</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
      />
      <div className="plan-form">
        <input
          type="text"
          value={book}
          onChange={handleBookChange}
          placeholder="Enter book title"
        />
        <button onClick={handleAddPlan}>Add Plan</button>
      </div>
      <ul className="plan-list">
        {plans.map((plan, index) => (
          <li key={index}>
            <span>{plan.date.toDateString()}: {plan.book}</span>
            <button onClick={() => handleUpdatePlan(index, prompt('New book title:', plan.book))}>Update</button>
            <button onClick={() => handleDeletePlan(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadingPlanner;
