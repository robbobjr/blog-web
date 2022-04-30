import axios from "axios";
import { api } from "../configs/api";

export const axiosAPI = axios.create({
  baseURL: api.baseURL,
})