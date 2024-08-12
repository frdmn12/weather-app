import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import { getDate } from "../utils/getDate";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type CurrentWeatherProps = {
  temperature: number;
  description: string;
  humidity: number;
  location: string;
  wind: number;
};

export const CurrentWeather = ({
  temperature,
  description,
  humidity,
  location,
  wind,
}: CurrentWeatherProps) => {

  useGSAP(() => {

    gsap.from("#card_weather", {
      delay: 2,
      duration: 2,
      scale: 0.5,
      opacity: 0,
      ease: "power4.out",
    })

  }, [])
  return (
    <section id="card_weather" className="px-5 py-3 w-[40%] shadow-md bg-black text-white mx-2 rounded-2xl items-start justify-start flex flex-col">
      {location === "No data" ? (
        <h1 className="font-bold text-2xl">Enter a city</h1>
      ) : (
        <>
          <h1 className="font-bold text-2xl">
            {capitalizeFirstLetter(location)}
          </h1>
          <h1 className="font-medium text-base">{getDate()}</h1>
          <p className="font-bold text-[9rem]">{temperature}°</p>
          <div>
            <p className="font-medium text-base">
              {capitalizeFirstLetter(description)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 my-5">
            <p className="font-normal">Humidity: {humidity}%</p>
            <p className="font-normal">Wind : {wind} km/h</p>
          </div>
        </>
      )}
    </section>
  );
};
