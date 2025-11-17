import axios from "axios";
import { bearerToken } from "./interceptors";
import { ValuesWithDefinitions } from "./types";
import { axiosError } from "../utils";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST_API_CLIENT_URL,
});

axiosInstance.interceptors.request.use(bearerToken);

const valuesWithDefinitions = async (): Promise<
  ValuesWithDefinitions[] | undefined
> => {
  try {
    const response = await axiosInstance.get("/report/values-with-definitions");
    return response.data;
  } catch (error) {
    axiosError(error);
    return undefined;
  }
};

export { valuesWithDefinitions };
