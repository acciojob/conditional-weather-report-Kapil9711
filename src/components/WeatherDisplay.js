import React from "react";

const WeatherDisplay = (props) => {
  const { temperature, conditions } = props;
  return (
    <div>
      <p>
        <span style={{ color: temperature > 20 ? "red" : "blue" }}>
          {temperature}
        </span>{" "}
        {conditions}
      </p>
    </div>
  );
};

export default WeatherDisplay;
