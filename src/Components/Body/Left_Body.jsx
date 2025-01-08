import React, { useEffect, useState } from "react";
import humidity from "../../assets/humidity.png";

function Left_Body() {
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem("data");

      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setDatas(parsedData);
      }
    } catch (error) {
      console.error("Error parsing JSON from localStorage", error);
    }
  }, []);

  if (!datas) {
    return (
      <div className="w-full h-full bg-slate-900 p-4 text-white">Loading...</div>
    );
  }

  return (
    <div className="rounded-2xl w-full h-full bg-slate-900 p-4 text-white">
      {datas.map((item, index) => {
        const { location, current } = item;

        if (!location || !current) {
          return (
            <div
              key={index}
              className="w-full h-full bg-slate-900 p-4 text-white"
            >
              Error: Missing data
            </div>
          );
        }

        return (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-800 rounded-lg p-4 mb-4 shadow-md"
            id={index}
          >
            {/* Top Row: Humidity and City */}
            <div className="flex justify-between w-full mb-4">
              <div className="flex items-center">
                <img src={humidity} alt="Humidity Icon" className="h-6 mr-2" />
                <span>{current.humidity}%</span>
              </div>
              <div className="font-semibold">{location.name}</div>
            </div>

            {/* Middle Row: Temperature */}
            <div className="text-center font-bold text-2xl mb-2">
              {current.temp_c}°C
            </div>

            {/* Bottom Row: Wind */}
            <div className="text-center">{current.wind_kph} km/h</div>
          </div>
        );
      })}
    </div>
  );
}

export default Left_Body;
