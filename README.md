# Weather App

A weather application built with React, Redux, and the WeatherAPI to provide real-time weather data and city management. This app allows users to search for cities, view weather details, and store their selected cities with persistent data.

## Features

- **Redux for State Management**: Uses Redux to manage global state and handle the continuity of data across components.
- **WeatherAPI Integration**: Fetches weather data from [WeatherAPI.com](https://www.weatherapi.com) to display current weather conditions for various cities.
- **Dynamic Theme Toggle**: Switch between light and dark themes for a personalized user experience.
- **Persistent Data**: Weather data is stored in `localStorage`, ensuring that user selections are preserved even after page refresh.
- **City Search**: Users can search for cities or countries and view relevant weather information.
- **Latest Updates**: Users can get latest updates of the weather information.
- **Responsive Design**: The app is designed to be responsive and work seamlessly across devices of different screen sizes.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A state management library for JavaScript apps.
- **WeatherAPI**: An API to retrieve real-time weather data for cities.
- **Tailwind CSS**: A utility-first CSS framework for styling the app.
- **localStorage**: Used to persist weather data across sessions.
- **React-Router**: For handling routing and navigation within the app.

## Setup and Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/weather-app.git

   ```bash
   cd weather-app

   ```bash
   npm install 

   ```bash
   VITE_API_KEY=your-weather-api-key

   Create .env File In root Directory


## Learnings

- **State Management Using Redux**
- **Api Calling and handling**