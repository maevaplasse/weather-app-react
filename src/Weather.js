import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      date: "Wed 07:00",
      city: response.data.name,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="box">
        <div className="container">
          <form className="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter your city"
                  className="form-control"
                  autocomplete="off"
                />
              </div>
              <div classname="col-2">
                <button type="button" className="btn btn-link">
                  <i className="fas fa-map-marker-alt"></i>
                </button>
              </div>
            </div>
          </form>
          <h1>{weatherData.date}</h1>
          <h2>{weatherData.city}</h2>
          <h3>
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="WHITE"
              size={60}
              animate={true}
            />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <div className="units">
              <a href="#" className="active">
                C°
              </a>
              |<a href="#">F°</a>
            </div>
          </h3>
          <ul>
            <li className="description">{weatherData.description}</li>
          </ul>
        </div>
      </div>
    );
  } else {
    const apiKey = "80ff9ab07927e65d043ab3591c9e3c20";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "loading...";
  }
}
