import axios, { AxiosRequestConfig } from "axios";

export const BASE_URL = import.meta.env.VITE_HOST;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

class APIClient<T> {
  constructor(private endpoint: string) {}

  getAll = (config: AxiosRequestConfig) =>
    axiosInstance
      .get<T[]>(this.endpoint, config)
      .then((response) => response.data);

  getByName = (username: string) =>
    axiosInstance
      .get<T[]>(this.endpoint, { params: { username } })
      .then((response) => response.data[0]);

  getById = (id: number) =>
    axiosInstance
      .get<T[]>(this.endpoint, { params: { id } })
      .then((response) => response.data[0]);

  getCurrentUser = () =>
    axiosInstance.get<T>(this.endpoint).then((response) => response.data);
}

export default APIClient;
