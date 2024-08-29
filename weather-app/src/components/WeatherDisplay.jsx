const WeatherDisplay = ({ data }) => {
  const temperature = data.data.values.temperature.toFixed(1);
  const { humidity, windSpeed } = data.data.values;
  const city = data.location.name;

  return (
    <div className="text-white p-6 mt-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-5xl">{temperature}°C</h1>
        </div>
      </div>
      <div className="mt-6 flex justify-between">
        <div className="flex flex-col items-center">
          <i className="fa-solid fa-droplet text-3xl"></i>
          <p>{humidity}%</p>
          <p>Humidity</p>
        </div>
        <div className="flex flex-col items-center">
          <i className="fa-solid fa-wind text-3xl"></i>
          <p>{windSpeed} km/h</p>
          <p>Wind Speed</p>
        </div>
      </div>
      <h3 className="mt-4 text-3xl">{city}</h3>
    </div>
  );
};

export default WeatherDisplay;
