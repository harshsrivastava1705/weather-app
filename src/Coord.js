import React, { useEffect, useState } from "react";
import Getweather from "./Getweather";
import Loader from "./Loader";
import axios from "axios";

export default function Coord() {
  const [weatherData, setweatherData] = useState();
  const [refresh, setrefresh] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/weather/?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          setweatherData(res.data);
          console.log(res.data)
        })
        .catch((err) => {
          console.log("errr", err);
        });
    });
  }, [refresh]);

  const onRefresh = () => {
    setrefresh(!refresh);
  };

  return (
    <div style={{backgroundImage:`url("https://scied.ucar.edu/sites/default/files/styles/half_width/public/2021-10/cumulus-clouds.jpg?itok=qsNXhfWh")`, backgroundRepeat: 'no-repeat',backgroundSize:"100%", height:"100vh"}}>
      <h1>Weather Report</h1>
      {weatherData ? (
        <Getweather weatherData={weatherData} onClick={onRefresh} />
      ) : (
        <Loader />
      )}
    </div>
  );
}
