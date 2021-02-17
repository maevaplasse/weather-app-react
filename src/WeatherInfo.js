import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        <FormattedDate date={props.data.date} />
      </h1>
      <h2>{props.data.city}</h2>
      <h3>
        <WeatherIcon code={props.data.icon} />

        <span className="temperature">
          {Math.round(props.data.temperature)}
        </span>
        <div className="units">
          <a href="#" className="active">
            C°
          </a>
          |<a href="#">F°</a>
        </div>
      </h3>
      <ul>
        <li className="description">{props.data.description}</li>
      </ul>
    </div>
  );
}
