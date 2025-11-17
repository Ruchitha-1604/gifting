import axios from "axios";
import { Event } from "./types";
import { bearerToken } from "./interceptors";
import { getFbc, getFbp } from "../utils";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_HOST_API_CLIENT_URL,
});

axiosInstance.interceptors.request.use(bearerToken);

const TriggerEvent = async (requestBody: Event) => {
    try {
        const isUat = process.env.NEXT_PUBLIC_CLIENT_BASE_URL?.includes('uat') ||
            process.env.NEXT_PUBLIC_CLIENT_BASE_URL === "http://localhost:3000/";
        if (isUat) return;

        const payload = {
            data: requestBody.data.map((item: any) => ({
                ...item,
                event_time: Math.floor(Date.now() / 1000),
                user_data: {
                    ...item.user_data,
                    fbp: getFbp(),
                    fbc: getFbc()
                },
                action_source: 'website',
            })),
        };

        const response = await axiosInstance.post("/event", payload)
        return response.data;
    } catch (e) {
        console.error('Error occurred while triggering the event:', e);
    }
}

export { TriggerEvent }