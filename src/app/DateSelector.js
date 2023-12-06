import React, { useState } from "react";

const DateSelector = ({ onDateSelect }) => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleDateSelect = () => {
    onDateSelect({ checkInDate, checkOutDate });
  };

  return (
    <div>
      <input type="date" onChange={(e) => setCheckInDate(e.target.value)} />
      <input type="date" onChange={(e) => setCheckOutDate(e.target.value)} />
      <button onClick={handleDateSelect}>Find Houses</button>
    </div>
  );
};

export default DateSelector;
