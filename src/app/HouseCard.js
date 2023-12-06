import React from "react";

const HouseCard = ({ house }) => {
  const { name, price, img, availableDates } = house;

  return (
    <div className="house-card">
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <img
        src={img}
        alt={name}
        style={{ maxWidth: "200px", maxHeight: "150px" }}
      />
      <p>
        Available Dates: {availableDates.start} to {availableDates.end}
      </p>
    </div>
  );
};

export default HouseCard;
