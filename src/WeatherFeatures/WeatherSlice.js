// src/WeatherFeatures/WeatherSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state with some mock weather data
const initialState = {
  data: [
    {
      id: nanoid(),
      city_name: "Kalyan",
      region:"Maharashtra",
      country_name: "India",
      tz_id: "Asia/Kolkata",
      weatherState: "clear",
      icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
      temp: 25,
      humidity: 12,
      wind: 10,
      visibility: 2,
      AirQuality: 12,
      pressure: 1.3,
      date: "2025-01-07",
      wind_kph: 15.1,
      riseTime: "08:04 AM",
      setTime: "04:09 PM",
    },
  ],
};

// Create a slice for weather data
export const WeatherSlice = createSlice({
  name: "Data",
  initialState,
  reducers: {
    // Add or update weather data
    addWeatherdata: (state, action) => {
      const index = state.data.findIndex(
        (data) => data.city_name === action.payload.city_name
      );
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...action.payload };
      } else {
        state.data.push(action.payload);
      }
    },

    // Delete weather data based on the unique id
    deleteweatherdata: (state, action) => {
      const updatedData = state.data.filter((data) => data.id !== action.payload);
      state.data = updatedData;
      localStorage.removeItem('data');
      localStorage.setItem('data', JSON.stringify(updatedData));
    },
    

    // Update weather data based on id
    updateWeatherData: (state, action) => {
      const index = state.data.findIndex((data) => data.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...action.payload }; // Update existing data
      }
    },
  },
});

// Export actions for use in components
export const { addWeatherdata, updateWeatherData, deleteweatherdata } =
  WeatherSlice.actions;

// Export the reducer to be used in the store
export default WeatherSlice.reducer;
