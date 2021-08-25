import React from "react";
import AnimatedIcon from "../icons/animated/day.svg";
import Cloudy from "../icons/static/cloudy.svg";
import Night from "../icons/static/night.svg";
import Day from "../icons/static/day.svg";
import Rain from "../icons/static/rainy-6.svg";
import Snowy from "../icons/static/snowy-1.svg";
import Thunder from "../icons/static/thunder.svg";
import Card from "./Card.jsx";

const ResultBox = ({ weatherState, locationState }) => {
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const getNightDay = (unix_time) => {
    const time = new Date(unix_time);
    if (time.getHours() < 9) return Night;
    if (time.getHours() > 19) return Night;
    return Day;
  };

  const IconReducer = (weatherString, unix_time) => {
    switch (weatherString) {
      case "Snow":
        return Snowy;
      case "Rain":
        return Rain;
      case "Drizzle":
        return Rain;
      case "Thunderstorm":
        return Thunder;
      case "Clear":
        return getNightDay(unix_time);
      case "Clouds":
        return Cloudy;
    }
  };

  return (
    <div
      className="flex flex-col w-full text-white bg-black bg-center bg-no-repeat bg-cover border rounded border-google bg-blend-overlay bg-opacity-30"
      style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}
    >
      <div className="p-5">
        <span className="text-lg font-bold">
          {date.toLocaleString("en-US", options)}
        </span>
        <div className="flex flex-col items-center justify-center p-5">
          <span className="mt-5 text-5xl">{locationState?.city}</span>
          <span className="text-lg">{`${locationState?.state}`}</span>
          <div className="flex items-center justify-center w-full space-x-14 mt-7 ">
            <div className="flex flex-col justify-between h-full items center">
              <img src={AnimatedIcon} width="100px" height="auto" />
              <span className="text-xl text-center">
                {weatherState.current.weather[0].main}
              </span>
            </div>
            <span className="h-full text-6xl">
              {parseInt(weatherState?.current?.temp)}&deg;
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-row overflow-y-scroll border-t border-white">
          {weatherState.hourly.map((hour, index) => {
            return index < 24 ? (
              <Card
                data={hour}
                key={index}
                icon={IconReducer(hour.weather[0].main, hour.dt * 1000)}
              />
            ) : (
              ""
            );
          })}
        </div>
        <div className="flex flex-row w-full overflow-y-scroll border-t border-white">
          {weatherState.daily.map((day, index) => {
            return (
              <Card
                data={day}
                isHourly={false}
                key={index}
                icon={IconReducer(day.weather[0].main, day.dt * 1000)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResultBox;
