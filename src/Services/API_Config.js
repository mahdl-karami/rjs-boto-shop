import axios from "axios";

export const API = axios.create({ baseURL: "https://fakestoreapi.com" });

API.interceptors.response.use((res) => res.data);