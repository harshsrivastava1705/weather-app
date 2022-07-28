import React from "react";
import { GoSync } from "react-icons/go";
import "./loader.css";
export default function Getweather({ weatherData, onClick }) {
  return (
    <div>
      <div className="card" id="card" style={{ width: 18 + "rem" }}>
        <div
          id="refresh"
          onClick={() => {
            onClick();
          }}
        >
          <GoSync id="GoSync" />
        </div>
        <div className="card-body" >
          <h5 className="card-title">Weather</h5>
          <p className="card-text">Temperature: {weatherData.main.temp}</p>
          <p className="card-text">Feels like: {weatherData.main.feels_like}</p>
          <p className="card-text">
            Minimum Temperature: {weatherData.main.temp_min}
          </p>
          <p className="card-text">
            Maximum Temperature: {weatherData.main.temp_max}
          </p>
          <p className="card-text">Wind Speed: {weatherData.wind.speed}</p>
          <p className="card-text">Wind direction: {weatherData.wind.deg}</p>
        </div>
      </div>
    </div>
  );
}
