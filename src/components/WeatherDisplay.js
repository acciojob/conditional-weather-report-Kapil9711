import React from "react";

const WeatherDisplay = (props) => {
  const { temperature, conditions } = props;
  return (
    <div>
      <p style={{ color: temperature > 20 ? "red" : "blue" }}>
        Temperature: {temperature}
      </p>
      <p>Condition: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
