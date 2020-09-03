import React from "react";

const Dropdown = ({ coinData }) => {
  return (
    <div className="charts">
      {coinData.map(coin => (
          <h2 className="coin__title">{coin.name}</h2>
      ))}
    </div>
  );
};
export default Dropdown;
