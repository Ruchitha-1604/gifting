import axios from "axios";
import { bearerToken } from "./interceptors";
import { axiosError } from "../utils";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_USER_PORTAL_API_URL,
});

axiosInstance.interceptors.request.use(bearerToken);

const checkout = async (payload: {
  buyer: { firstName: string; lastName: string; email: string };
  recipient_list: { firstName: string; lastName: string; email: string }[];
  isAnonymous: boolean;
}): Promise<{ id: string }> => {
  try {
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

const getUserByEmail = async (email: string) => {
  try {
    const response = await axiosInstance.get(
      `/user/by-email?email=${encodeURIComponent(email)}`
    );
    return response.data;
  } catch (error) {
    return axiosError(error);
  }
};

const getRecipientByEmail = async (
  email: string
): Promise<{ firstName: string; lastName: string; email: string } | null> => {
  try {
    const response = await axiosInstance.get(
      `/user/gift-of-reports/recipient?email=${encodeURIComponent(email)}`
    );
    return response.data;
  } catch (error) {
    axiosError(error);
    return null;
  }
};

const getGiftOrderByPaymentId = async (
  paymentId: string
): Promise<{
  paymentId: string;
  paymentStatus: string;
  amount: string;
} | null> => {
  try {
    const response = await axiosInstance.get(
      `/user/gift-of-reports/order?paymentId=${encodeURIComponent(paymentId)}`
    );
    return response.data;
  } catch (error) {
    axiosError(error);
    return null;
  }
};

export { checkout, getUserByEmail, getRecipientByEmail, getGiftOrderByPaymentId };
