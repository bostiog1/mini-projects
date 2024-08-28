import React, { useState } from "react";

const WeatherForm = ({ onWeatherData, onLoading, onError }) => {
  const [city, setCity] = useState("");

  const getRequestUrl = (location) => {
    const WEATHER_API_URL = "https://api.tomorrow.io/v4/weather/realtime";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const apiUrl = new URL(WEATHER_API_URL);
    apiUrl.searchParams.append("apikey", API_KEY);
    apiUrl.searchParams.append("location", location);
    return apiUrl.href;
  };

  const fetchWeatherData = async (e) => {
    e.preventDefault();
    if (!city) return;

    onLoading();
    const url = getRequestUrl(city);

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      onWeatherData(data);
      console.log("data: ", data);
    } catch (error) {
      onError();
    }
  };

  return (
    <form onSubmit={fetchWeatherData} className="flex items-center mb-6">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="flex-1 p-3 rounded-full text-gray-700 outline-none"
      />
      <button
        type="submit"
        className="bg-white text-black p-3 ml-2 rounded-full hover:bg-gray-700"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default WeatherForm;
