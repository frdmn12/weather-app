import axios from 'axios';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';

const API_KEY = '0b39dc450d83d6245f1fed373b569b41';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherByLocation = async (location: string) => {
    
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: capitalizeFirstLetter(location),
        units: 'metric',
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data: ", error);
    throw error;
  }
};
