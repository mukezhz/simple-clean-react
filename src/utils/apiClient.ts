import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 1000,
});

export const get = async <T>(url: string): Promise<T> => {
  const response = await apiClient.get<T>(url);
  return response.data;
};

export const post = async <T, D>(url: string, data: D): Promise<T> => {
  const response = await apiClient.post<T>(url, data);
  return response.data;
};
