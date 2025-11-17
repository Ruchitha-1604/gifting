import { APP_TOKEN } from "@/utils/constant";
import { InternalAxiosRequestConfig } from "axios";

const bearerToken = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem(APP_TOKEN);

  if (config.headers && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

const apiKey = (config: InternalAxiosRequestConfig) => {
  const api_key = process.env.NEXT_PUBLIC_AI_API_KEY;
  if (config.headers && api_key) {
    config.headers["api-key"] = api_key;
  }
  return config;
};

export { bearerToken, apiKey };
