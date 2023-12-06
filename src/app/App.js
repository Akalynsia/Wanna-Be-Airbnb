"use client";
import React, { useState, useEffect } from "react";
import DateSelector from "./DateSelector";
import HouseList from "./HouseList";
import HouseData from "./HouseData";

const App = () => {
  const [selectedDates, setSelectedDates] = useState({
    checkInDate: null,
    checkOutDate: null,
  });
  const [filteredHouses, setFilteredHouses] = useState([]);

  useEffect(() => {
    filterAvailableHouses();
  }, [selectedDates]);

  const filterAvailableHouses = () => {
    if (!selectedDates.checkInDate || !selectedDates.checkOutDate) {
      setFilteredHouses([]);
      return;
    }

    const filteredHouses = HouseData.filter((house) => {
      const { start, end } = house.availableDates;
      const { checkInDate, checkOutDate } = selectedDates;

      return (
        checkInDate >= start &&
        checkOutDate <= end &&
        checkInDate < checkOutDate
      );
    });

    setFilteredHouses(filteredHouses);
  };

  const handleDateSelect = ({ checkInDate, checkOutDate }) => {
    setSelectedDates({ checkInDate, checkOutDate });
  };

  return (
    <div className="container">
      <h1>Wanna Be Airbnb</h1>
      <DateSelector onDateSelect={handleDateSelect} />
      <HouseList houses={filteredHouses} />
    </div>
  );
};

export default App;
