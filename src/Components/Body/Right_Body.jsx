import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import delete_ from '../../assets/delete.png';
import Aqi from '../../assets/dust.png';
import pressure from '../../assets/gauge.png';
import humidity from '../../assets/humidity.png';
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
    <div className="w-full dark:bg-slate-800 bg-red-300 text-white p-6 rounded-xl">
      <div
        key={data.id}
        className="flex flex-col gap-4 bg-sky-400 dark:bg-gray-900 p-6 rounded-lg shadow-md"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={sunrise}
              alt="Sunrise Icon"
              className="w-8 h-8 object-contain"
            />
            <div className="ml-2">
              <div className="text-sm text-gray-400 dark:text-gray-300">Sunrise</div>
              <div className="font-semibold text-white dark:text-gray-200">{data.riseTime}</div>
            </div>
          </div>
          <div className="flex items-center h-8 px-2 dark:bg-slate-500 rounded-md">
          <img src={delete_} alt="Del_btn" className='h-4' onClick={()=>handledelete(data.id)} />
          </div>
          <div className="flex items-center">
            <img
              src={sunset}
              alt="Sunset Icon"
              className="w-8 h-8 object-contain"
            />
            <div className="ml-2">
              <div className="text-sm text-gray-400 dark:text-gray-300">Sunset</div>
              <div className="font-semibold text-white dark:text-gray-200">{data.setTime}</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="text-3xl font-bold text-white dark:text-gray-100">{data.city_name}</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">{data.region},{data.country_name}</div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={data.icon}
            alt="Weather Icon"
            className="w-16 h-16 object-contain"
          />
          <div className="text-lg font-medium ml-4 text-white dark:text-gray-200">{data.weatherState}</div>
        </div>

        <div className="text-center text-2xl font-bold text-white dark:text-gray-200">{data.temp}°C</div>

        <div className="grid grid-cols-2 gap-4 text-sm place-items-center">
        <Type imga={Aqi} type_="Air Quality" value={data.AirQuality} units="AQI" />
        <Type imga={humidity} type_="Humidity" value={`${data.humidity}%`} units="%" />
        <Type imga={wind} type_="Wind" value={`${data.wind_kph} km/h`} units="km/h" />
        <Type imga={null} type_="Visibility" value={`${data.visibility} km`} units="km" />
        <Type imga={pressure} type_="Pressure" value={`${data.pressure} mb`} units="mb" />

        </div>

        <div className="flex justify-between text-sm text-gray-400 dark:text-gray-300">
          <div>Date: {data.date}</div>
          <div>Timezone: {data.tz_id}</div>
        </div>
      </div>
    </div>
  );
}

export default Right_Body;
