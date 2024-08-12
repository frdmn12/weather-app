import axios from 'axios';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';

const API_KEY = import.meta.env.VITE_API_KEY as string; 
const BASE_URL = import.meta.env.VITE_BASE_URL as string;

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
