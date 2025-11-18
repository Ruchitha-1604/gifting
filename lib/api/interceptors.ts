import { APP_TOKEN } from "@/utils/constant";
import { InternalAxiosRequestConfig } from "axios";

const bearerToken = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem(APP_TOKEN);

  if (config.headers && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

export { bearerToken };
