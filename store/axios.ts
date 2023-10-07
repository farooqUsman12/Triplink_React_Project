// axios
import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';
import Cookie from 'js-cookie';

const domain: string = `${process.env.NEXT_PUBLIC_APP_URL}/api/customer`;


const axiosInstance: AxiosInstance = axios.create({
    baseURL: domain,
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
});


axiosInstance.interceptors.request.use(
    (config: any) => {
        const token: string = Cookie.get('token') || '';
        const authToken: string = token && `Bearer ${token}`;
        config.headers.Authorization = authToken;
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response: any) => {
        return response;
    },
    (error: any) => {
        if (error.response && error.response.status === 401) {
            Cookie.remove('user');
            Cookie.remove('token');
            window.location.href = '/login'; // Replace '/login' with your login page URL
        }
        return Promise.reject(error);
    }
);

export default axiosInstance