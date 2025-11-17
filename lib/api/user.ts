import axios from "axios";
import { bearerToken } from "./interceptors";
import { axiosError } from "../utils";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST_API_CLIENT_URL,
});

axiosInstance.interceptors.request.use(bearerToken);

const slackNotification = async (payload: {
  name?: string;
  email: string;
  message?: string;
  request_type: string;
}) => {
  try {
    const response = await axiosInstance.post("/slack/notification", payload);
    return response.data;
  } catch (error) {
    axiosError(error);
  }
};

const MailchimpRegister = async (payload: {
  firstName: string;
  lastName: string;
  email: string;
}) => {
  try {
    const response = await axiosInstance.post("/mailchimp/website-register", {
      FNAME: payload.firstName,
      LNAME: payload.lastName,
      email: payload.email,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return axiosError(error);
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

export {
  slackNotification,
  MailchimpRegister,
  getUserByEmail,
  getGiftOrderByPaymentId,
  getRecipientByEmail,
};
