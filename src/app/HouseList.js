import React from "react";
import HouseCard from "./HouseCard";

const HouseList = ({ houses }) => {
  return (
    <div>
      <h2>Available Houses</h2>
      <div className="house-list">
        {houses.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
      </div>
    </div>
  );
};

export default HouseList;
