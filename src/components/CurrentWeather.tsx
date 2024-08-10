import { cloudWeather } from "../utils";

type CurrentWeatherProps = {
  temperature: number;
  description: string;
  humidity: number;
  location: string;
};

export const CurrentWeather = ({
  temperature,
  description,
  humidity,
  location,
}: CurrentWeatherProps) => {
  return (
    <section className="p-2 w-[50%] shadow-md bg-white mx-2 rounded-2xl items-center flex flex-col">
      <div>
        <img src={cloudWeather} alt="" className="object-cover w-40" />
      </div>
      <h2>Current Weather</h2>
      <p>Locaiton: {location}</p>
      <p>Temperature: {temperature}°C</p>
      <p>Description: {description}</p>
      <p>Humidity: {humidity}%</p>
    </section>
  );
};
