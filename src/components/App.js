import React from "react";
import "./../styles/App.css";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weatherInput, setWeatherInput] = React.useState({
    temperature: "",
    conditions: "",
  });
  React.useEffect(() => {
    const temperature = window.prompt("Enter temperature");
    const conditions = window.prompt("Enter weather condition");
    setWeatherInput({ temperature, conditions });
  }, []);
  return (
    <div>
      <WeatherDisplay {...weatherInput} />
    </div>
  );
};

export default App;
