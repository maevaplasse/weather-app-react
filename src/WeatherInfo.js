import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        <FormattedDate date={props.data.date} />
      </h1>
      <h2>{props.data.city}</h2>
      <h3>
        <div className="float">
          <WeatherIcon code={props.data.icon} />
        </div>
        <WeatherTemperature celsius={props.data.temperature} />
      </h3>
      <ul>
        <li className="description">{props.data.description}</li>
      </ul>
    </div>
  );
}
