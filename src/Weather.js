import React from "react";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
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
        <h1>Date</h1>
        <h2>Santa Barbara</h2>
        <h3>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="WHITE"
            size={60}
            animate={true}
          />
          <span className="temperature">25</span>
          <div className="units">
            <a href="#" className="active">
              C°
            </a>
            |<a href="#">F°</a>
          </div>
        </h3>
        <ul>
          <li className="description">Clear Sky</li>
        </ul>
      </div>
    </div>
  );
}
