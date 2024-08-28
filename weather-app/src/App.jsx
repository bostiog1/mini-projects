import React, { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";
import Loading from "./components/Loading";
import Error from "./components/Error";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleWeatherData = (data) => {
    setWeatherData(data);
    setLoading(false);
    setError(false);
  };

  const handleLoading = () => {
    setLoading(true);
    setError(false);
  };

  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-gradient-to-r from-green-200 to-blue-300 p-12 rounded-xl shadow-lg w-full max-w-lg">
        <WeatherForm
          onWeatherData={handleWeatherData}
          onLoading={handleLoading}
          onError={handleError}
        />
        {loading && <Loading />}
        {error && <Error />}
        {weatherData && <WeatherDisplay data={weatherData} />}
      </div>
    </div>
  );
}

export default App;
