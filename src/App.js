import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  let [city, setCity] = useState("Dublin");
  let [temperature, setTemperature] = useState(14);
  let [description, setDescription] = useState("Overcast clouds");
  let [humidity, setHumidity] = useState("69");
  let [wind, setWind] = useState("5.66");
  let [iconLink, setIconLink] = useState(
    `http://openweathermap.org/img/wn/04d@2x.png`
  );
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
      <div className="wrapper">
        <div className="weather-app">
          <form className="searchForm mb-4" onSubmit={handleSubmit}>
            <div class="row">
              <div class="col-9">
                <input
                  type="text"
                  className="form-control city-input"
                  placeholder="Type your city"
                  onChange={updateCity}
                />
              </div>
              <div class="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>

          <div className={visibility}>
            <div className="row">
              <div className="col-md-4">
                <p className="date">Date to be added later</p>
                <h1 className="currCity">{city}</h1>
                <p className="description">{description}</p>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-6">
                    <img src={iconLink} alt="weather icon" id="icon-big" />
                    <span className="tempWithUnits">
                      <span className="currTemp">{temperature}</span>
                      <span className="units">°C</span>
                    </span>
                  </div>
                  <div className="col-md-6">
                    <ul>
                      <li>Humidity: {humidity}%</li>
                      <li>Wind: {wind} km/h</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="weather-forecast">
            <div className="container">
              <div className="single-forecast">
                <div className="forecast-date">Sun</div>
                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt="weather icon"
                  className="icon-small"
                />
                <div className="forecast-temp">
                  <span className="forecast-temp-max">15°C</span>
                  <span className="forecast-temp-min">5°C</span>
                </div>
              </div>
              <div className="single-forecast">
                <div className="forecast-date">Mon</div>
                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt="weather icon"
                  className="icon-small"
                />
                <div className="forecast-temp">
                  <span className="forecast-temp-max">13°C</span>
                  <span className="forecast-temp-min">7°C</span>
                </div>
              </div>
              <div className="single-forecast">
                <div className="forecast-date">Tue</div>
                <img
                  src="http://openweathermap.org/img/wn/03d@2x.png"
                  alt="weather icon"
                  className="icon-small"
                />
                <div className="forecast-temp">
                  <span className="forecast-temp-max">15°C</span>
                  <span className="forecast-temp-min">10°C</span>
                </div>
              </div>
              <div className="single-forecast">
                <div className="forecast-date">Wed</div>
                <img
                  src="http://openweathermap.org/img/wn/04d@2x.png"
                  alt="weather icon"
                  className="icon-small"
                />
                <div className="forecast-temp">
                  <span className="forecast-temp-max">13°C</span>
                  <span className="forecast-temp-min">7°C</span>
                </div>
              </div>
              <div className="single-forecast">
                <div className="forecast-date">Thu</div>
                <img
                  src="http://openweathermap.org/img/wn/09d@2x.png"
                  alt="weather icon"
                  className="icon-small"
                />
                <div className="forecast-temp">
                  <span className="forecast-temp-max">11°C</span>
                  <span className="forecast-temp-min">4°C</span>
                </div>
              </div>
              <div className="single-forecast">
                <div className="forecast-date">Fri</div>
                <img
                  src="http://openweathermap.org/img/wn/11d@2x.png"
                  alt="weather icon"
                  className="icon-small"
                />
                <div className="forecast-temp">
                  <span className="forecast-temp-max">7°C</span>
                  <span className="forecast-temp-min">0°C</span>
                </div>
              </div>
              <div className="single-forecast">
                <div className="forecast-date">Sat</div>
                <img
                  src="http://openweathermap.org/img/wn/13d@2x.png"
                  alt="weather icon"
                  className="icon-small"
                />
                <div className="forecast-temp">
                  <span className="forecast-temp-max">3°C</span>
                  <span className="forecast-temp-min">-5°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <a href="https://github.com/Alleviata/weather-react">
            Open-source code
          </a>
          <span> by Yuliia</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
