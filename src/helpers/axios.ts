import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

console.log(API_URL, API_KEY);
const axiosApi = axios.create({ baseURL: API_URL });

axiosApi.defaults.headers.common.Authorization = `Bearer Api-Key ${API_KEY}`;

axiosApi.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export function get(url: string, config = {}) {
    return axiosApi.get(url, { ...config });
}

export function post(url: string, data: object, config = {}) {
    return axiosApi.post(url, data, { ...config });
}

export function put(url: string, data?: object, config = {}) {
    return axiosApi.put(url, data, { ...config });
}

export function patch(url: string, data: object, config = {}) {
    return axiosApi.patch(url, data, { ...config });
}

export function del(url: string, config = {}) {
    return axiosApi.delete(url, { ...config });
}