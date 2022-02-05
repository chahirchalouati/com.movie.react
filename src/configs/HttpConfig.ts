import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

export const httpClient = axios.create({
    baseURL: process.env.REACT_APP_HOST_URL,
    headers: {
        "content-type": "application/json"
    }

});

export const getToken = () => localStorage.getItem("token") as string
export const setToken = (token: string) => localStorage.setItem("token", token);

httpClient.interceptors.request.use((config: AxiosRequestConfig) => {

    return config;
}, (error) => Promise.reject(error));


axios.interceptors.response.use((response: AxiosResponse) => {
    const {data} = response;
    console.log(data);
    return response;
}, error => Promise.reject(error));