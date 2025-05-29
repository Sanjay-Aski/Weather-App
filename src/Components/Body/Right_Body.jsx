import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import delete_ from '../../assets/delete.png';
import Aqi from '../../assets/dust.png';
import pressure from '../../assets/gauge.png';
import humidity from '../../assets/humidity.png';
import visibility from '../../assets/Visibility.png';
import sunrise from '../../assets/sunrise.png';
import sunset from '../../assets/sunset.png';
import wind from '../../assets/windy.png';
import { deleteweatherdata } from '../../WeatherFeatures/WeatherSlice';
import Type from './Right_Body_folder/Type';

const Right_Body = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.data); 
  const selectedId = useSelector((state) => state.selectedId.selectedId); 
  const id = selectedId || (weatherData.length > 0 ? weatherData[0].id : null);

  if (id === null) {
    return <div className="font-bold">No City Added <br /> Please Add A City</div>;
  }

  function handledelete(id){
      dispatch(deleteweatherdata(id))
  }
  const data = weatherData.find(item => item.id === id) || null;

  if (!data) {
    return <div className="font-bold">No City Added <br /> Please Add A City</div>;
  }

  return (
    <div className="w-full bg-surface-light dark:bg-slate-600 text-text-light dark:text-text-dark p-6 rounded-xl">
      <div
        key={data.id}
        className="flex flex-col gap-4 bg-primary-light/10 dark:bg-primary-dark/20 p-6 rounded-lg shadow-md"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={sunrise}
              alt="Sunrise Icon"
              className="w-8 h-8 object-contain"
            />            <div className="ml-2">
              <div className="text-sm dark:text-secondary-light text-secondary-dark">Sunrise</div>
              <div className="font-semibold text-text-light dark:text-white">{data.riseTime}</div>
            </div>
          </div>
          <div className="flex items-center h-8 px-2 bg-accent-light dark:bg-accent-dark rounded-md">
          <img src={delete_} alt="Del_btn" className='h-4 cursor-pointer' onClick={()=>handledelete(data.id)} />
          </div>
          <div className="flex items-center">
            <img
              src={sunset}
              alt="Sunset Icon"
              className="w-8 h-8 object-contain"
            />            <div className="ml-2">
              <div className="text-sm dark:text-secondary-light text-secondary-dark">Sunset</div>
              <div className="font-semibold text-text-light dark:text-white">{data.setTime}</div>
            </div>
          </div>
        </div>        <div className="text-center">
          <div className="text-3xl font-bold text-text-light dark:text-white">{data.city_name}</div>
          <div className="text-sm"><span className="text-secondary-dark dark:text-secondary-light">{data.region}</span>,<span className="text-text-light dark:text-white ml-1">{data.country_name}</span></div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={data.icon}
            alt="Weather Icon"
            className="w-16 h-16 object-contain"
          />
          <div className="text-lg font-medium ml-4 text-text-light dark:text-white">{data.weatherState}</div>
        </div>

        <div className="text-center text-2xl font-bold text-text-light dark:text-white">{data.temp}°C</div>

        <div className="grid grid-cols-2 gap-4 text-sm place-items-center">
        <Type imga={Aqi} type_="Air Quality" value={data.AirQuality} units="AQI" />
        <Type imga={humidity} type_="Humidity" value={`${data.humidity}%`} units="%" />
        <Type imga={wind} type_="Wind" value={`${data.wind_kph} km/h`} units="km/h" />
        <Type imga={visibility} type_="Visibility" value={`${data.visibility} km`} units="km" />
        <Type imga={pressure} type_="Pressure" value={`${data.pressure} mb`} units="mb" />

        </div>        <div className="flex justify-between text-sm">
          <div><span className="dark:text-secondary-light text-secondary-dark">Date: </span><span className="text-text-light dark:text-white">{data.date}</span></div>
          <div><span className="dark:text-secondary-light text-secondary-dark">Timezone: </span><span className="text-text-light dark:text-white">{data.tz_id}</span></div>
        </div>
      </div>
    </div>
  );
}

export default Right_Body;
