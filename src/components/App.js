import React from "react";
import "./../styles/App.css";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weatherInput, setWeatherInput] = React.useState({
    temperature: "",
    conditions: "",
  });
  React.useEffect(() => {
    setWeatherInput({ temperature: 25, conditions: "Sunny" });
  }, []);
  return (
    <div>
      <WeatherDisplay {...weatherInput} />
    </div>
  );
};

export default App;
