// import { configureStore } from "@reduxjs/toolkit";
// import WeatherReducer from "../WeatherFeatures/WeatherSlice";
// This Is a Advaned Context For Which it Provide the extra Functionalites
// It is a used by the Reducer i.e Functions/Methods and It formed in the form named slices
import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from "../WeatherFeatures/WeatherSlice";

const Store = configureStore({
  reducer: {
    weather: WeatherReducer,
  },
});

export default Store;