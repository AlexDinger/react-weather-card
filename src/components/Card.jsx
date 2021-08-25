import React from "react";

const Card = ({ data, isHourly = true, icon, time = "day" }) => {
  const datetime = new Date(data.dt * 1000);
  const sunrise = new Date(data?.sunrise * 1000);
  const sunset = new Date(data?.sunset * 1000);

  return (
    <div className="flex flex-col justify-between items-center min-w-max h-full border-r border-white p-3 bg-black bg-opacity-20">
      {isHourly ? (
        <>
          <img src={icon} width="60px" height="auto" />
          <div className="text-3xl">{parseInt(data?.temp)}&deg;</div>
          <div>{parseInt(data?.feels_like)}&deg;</div>
          <div className="font-bold">
            {datetime.toLocaleString("en-US", {
              hour: "numeric",
              hour12: true,
              minute: "numeric",
            })}
          </div>
        </>
      ) : (
        <>
          <div>{datetime.toLocaleString("en-US", { weekday: "long" })}</div>
          <img src={icon} width="60px" height="auto" />
          <div>{`${data.temp.day}/${data.temp.night}`}</div>
          <div>
            <div>
              {sunrise.toLocaleString("en-US", {
                hour: "numeric",
                hour12: true,
                minute: "numeric",
              })}
            </div>
            <div>
              {sunset.toLocaleString("en-US", {
                hour: "numeric",
                hour12: true,
                minute: "numeric",
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
