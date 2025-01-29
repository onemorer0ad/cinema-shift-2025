import axios from 'axios';

export const BASE_URL = 'https://shift-intensive.ru/api/';

export const api = axios.create({
  baseURL: BASE_URL,
});
