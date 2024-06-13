import React from "react";

const WeatherDisplay = (props) => {
  const { temperature, conditions } = props;
  return (
    <div>
      <p>
        Temperature:{" "}
        <span style={{ color: temperature > 20 ? "red" : "blue" }}>
          {temperature}
        </span>
      </p>
      <p>Condition: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
