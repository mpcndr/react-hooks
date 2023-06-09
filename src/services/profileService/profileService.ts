import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { User } from "./type";

const URL = process.env.REACT_APP_API_URL

const config: AxiosRequestConfig = {
    baseURL: URL,
};

const apiAuth: AxiosInstance = axios.create(config);

apiAuth.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        console.log("==== error ====", error);
        return Promise.reject(error);
    }
);

export const getProfile = async (name: string): Promise<User | undefined> => {
    try {
        let response = await apiAuth.get('/', { params: { name } });
        console.log(response);
        return response.data
    } catch (error) {
        console.error(error);
        return undefined;
    }
}