import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [iconLink, setIconLink] = useState(null);
  let [visibility, setVisibility] = useState("hidden");

  function showWeather(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIconLink(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    setVisibility("shown");
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "7b6082b8fe526faa7a3e5f9d6dae8769";
    let unit = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(url).then(showWeather);
    console.log(url);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Weather Search Engine</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type your city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <div className={visibility}>
        <ul>
          <li>Temperature: {temperature}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind} km/h</li>
          <li>
            <img src={iconLink} alt="weather icon" id="icon-big" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
