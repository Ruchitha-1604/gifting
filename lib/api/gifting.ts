import axios from "axios";
import { bearerToken } from "./interceptors";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST_API_CLIENT_URL,
});

axiosInstance.interceptors.request.use(bearerToken);

const checkout = async (payload: {
  buyer: { firstName: string; lastName: string; email: string };
  recipient_list: { firstName: string; lastName: string; email: string }[];
  isAnonymous: boolean;
}): Promise<{ id: string }> => {
  try {
    console.log("payload", payload);
    const response = await axiosInstance.post(
      "/stripe/create-checkout-session/gifting",
      payload
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating stripe checkout session for gifting reports:",
      error
    );
    throw error;
  }
};
export { checkout };
