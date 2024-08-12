import { useState } from "react";
import Background from "./components/Background";
import { CurrentWeather } from "./components/CurrentWeather";
import { InputForm } from "./components/InputForm";
import { getWeatherByLocation } from "./services/weatherService";

type WeatherData = {
  temperature: number;
  description: string;
  humidity: number;
  location: string;
  wind: number;
};

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const onSearch = async (city: string) => {
    const data = await getWeatherByLocation(city);
    setWeather({
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      location: data.name,
      wind: data.wind.speed,
    });
  };
  return (
    <div className="relative z-10">
      <Background />
      <main className=" flex flex-col flex-center nav-height relative z-20">
        <InputForm onSearch={onSearch} />
        <CurrentWeather
          temperature={weather?.temperature || 0}
          description={weather?.description || "No data"}
          humidity={weather?.humidity || 0}
          location={weather?.location || "No data"}
          wind={weather?.wind || 0}
        />
      </main>
    </div>
  );
}

export default App;
