import { nanoid } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Logo from '../assets/Logo.png';
import { addWeatherdata } from '../WeatherFeatures/WeatherSlice';
function Navbar() {
  const [theme, setTheme] = useState('light');
  const [themeloc, setThemeLoc] = useState('/src/assets/lightIcon.png');
  const [searchIn, setSearchIn] = useState('');
  const [suggestion, setSuggestion] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch('');


  useEffect(() => {
    const savedTheme = theme;
    setTheme(savedTheme);
    setThemeLoc(savedTheme === 'light' ? 'src/assets/darkIcon.png' : '/src/assets/lightIcon.png');
    changeTheme(savedTheme);
  }, []);

  const handleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setThemeLoc(newTheme === 'light' ? 'src/assets/darkIcon.png' : '/src/assets/lightIcon.png');
    changeTheme(newTheme);
  };

  const changeTheme = (newTheme) => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(newTheme);
  };

  const handleSearch = async (searchText) => {
    setSearchIn(searchText);

    if (searchText.length > 3) {
      setLoading(true);

      try { 
        const apiKey = import.meta.env.VITE_API_KEY; 
        const response = await fetch(
          `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${searchText}`
        );
        const data = await response.json();
        const citySuggestions = data.map((item) => `${item.url}`);
        setSuggestion(citySuggestions);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        setSuggestion([]);
      }

      setLoading(false);
    } else {
      setSuggestion([]);
    }
  };

  const handleSuggestionClick = async (selectedSuggestion) => {
    try {
      console.log("Selected suggestion:", selectedSuggestion);
      const cityName =  selectedSuggestion;
      setSearchIn(selectedSuggestion);
      const [city_name, regionName, countryName] = selectedSuggestion.split("-").map((s) => s.trim());
      setSuggestion([]);
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
        id: nanoid(),
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
      dispatch(addWeatherdata(Json_data))
    } catch (error) {
      console.error("Error fetching weather or astro data:", error);
    }
  };
  

  return (
    <>
      <div className="sticky top-0 pt-4 left-0 pl-2 p-3 flex flex-row justify-between h-20 w-full bg-primary-light dark:bg-primary-dark shadow-md">
        <img
          src={Logo}
          alt="Logo"
          className="rounded-2xl h-14 items-start bg-secondary-light dark:bg-secondary-dark"
        />

        <div className="relative w-1/4">
          <input
            className="focus:outline-none w-full pl-4 rounded-lg h-10 text-text-light bg-surface-light dark:text-text-dark dark:bg-surface-dark border border-primary-light dark:border-primary-dark"
            type="text"
            placeholder="Search City/Country"
            value={searchIn}
            onChange={(e) => handleSearch(e.target.value)}
          />

          {loading && (
            <div className="absolute top-full left-0 w-full bg-surface-light dark:bg-surface-dark p-2 text-sm text-text-light dark:text-text-dark border border-primary-light dark:border-primary-dark rounded-md shadow-md mt-1">
              Loading...
            </div>
          )}

          {suggestion.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-surface-light dark:bg-surface-dark border border-primary-light dark:border-primary-dark rounded-md shadow-lg mt-1 max-h-60 overflow-y-auto z-10">
              {suggestion.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-primary-light/20 dark:hover:bg-primary-dark/30 text-text-light dark:text-text-dark"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>

        <img
          src={themeloc}
          alt="Theme Icon"
          className="mr-5 cursor-pointer p-2 h-14 bg-background-light dark:bg-background-dark rounded-full border border-secondary-light dark:border-secondary-dark"
          onClick={handleTheme}
        />
      </div>
    </>
  );
}

export default Navbar;
