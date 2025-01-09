import React from "react";
import { useDispatch, useSelector } from "react-redux";
import humidity from "../../assets/humidity.png";
import { Idselect } from "../../WeatherFeatures/SelectedId";
import { updateWeatherData } from "../../WeatherFeatures/WeatherSlice";

const Left_Body = () => {
  const weaData = useSelector((state) => state.weather.data);
  const dispatch = useDispatch();
  
  if (!weaData || weaData.length === 0) {
    return (
      <div className="w-full h-full bg-slate-900 p-4 text-white">No City Added</div>
    );
  }

  const handleUpdate = async (id,name_city) => {
    try {
      console.log("Selected suggestion:", name_city);
      const cityName =  name_city;
      const [city_name, regionName, countryName] = name_city.split("-").map((s) => s.trim());
      const apiKey = import.meta.env.VITE_API_KEY;
      const currentWeatherResponse = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=yes`
      );
      const weatherData = await currentWeatherResponse.json();
      const astroResponse = await fetch(
        `https://api.weatherapi.com/v1/astronomy.json?key=${apiKey}&q=${cityName}&dt=${weatherData.location.localtime.split(" ")[0]}`
      );
      const astroData = await astroResponse.json();
      const Json_data = {
        id:id,
        city_name: city_name,
        region:  weatherData.location.region,
        country_name:  weatherData.location.country,
        tz_id: weatherData.location.tz_id,
        weatherState: weatherData.current.condition.text,
        icon: weatherData.current.condition.icon,
        temp: weatherData.current.temp_c,
        humidity: weatherData.current.humidity,
        wind: weatherData.current.wind_kph,
        visibility: weatherData.current.vis_km,
        AirQuality: weatherData.current.air_quality?.['us-epa-index'] || 0,
        pressure: weatherData.current.pressure_mb,
        date: weatherData.location.localtime.split(" ")[0],
        wind_kph: weatherData.current.wind_kph,
        riseTime: astroData.astronomy.astro.sunrise,
        setTime: astroData.astronomy.astro.sunset,
      };
      try {
        const storedData = JSON.parse(localStorage.getItem("data")) || [];
        storedData.push(Json_data);
        localStorage.setItem("data", JSON.stringify(storedData));
        console.log("Data successfully added to localStorage!");
      } catch (error) {
        console.error("Error saving data to localStorage:", error);
      }
      
      console.log("Formatted weather data with astro:", Json_data);
      dispatch(updateWeatherData(Json_data))
    } catch (error) {
      console.error("Error fetching weather or astro data:", error);
    }
  };
    const handleSelectedId = (id,name) => {
    dispatch(Idselect(id));
    handleUpdate(id,name)
  };  

  return (
    <div className="rounded-2xl   w-full h-full bg-slate-900 p-4 text-white">
      <div className="overflow-y-auto  max-h-[600px] scrollbar-hide">
        {weaData.map((item) => {  
          const {
            id, city_name,region,country_name,  weatherState, temp, humidity: humidityValue, wind_kph,
          } = item;

          return (
            <div  
              key={id}
              id={id}
              onClick={() => handleSelectedId(id,`${city_name}-${region}-${country_name}`)}
               className="flex active:bg-slate-950 flex-col items-center bg-gray-800 rounded-lg p-4 mb-4 shadow-md"
            >
              <div  className="flex justify-between w-full mb-4">
                <div className="flex items-center">
                  <img src={humidity} alt="Humidity Icon" className="h-6 mr-2" />
                  <span>{humidityValue}%</span>
                </div>
                <div className="font-semibold text-xl">{temp}°C</div>
              </div>

              <div className="text-center font-bold text-4xl mb-2">
                  {city_name}
              </div>

                <div className="flex justify-between w-full">
                <div className="text-center">{wind_kph} km/h</div>
                  <div className="text-center font-semibold">{weatherState}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Left_Body;
