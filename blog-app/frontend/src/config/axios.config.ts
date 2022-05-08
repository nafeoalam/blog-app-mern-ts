import axios from "axios";
import { API_URL } from "./env.config";

export const PROTECTED_URL = axios.create({ baseURL: API_URL });
export const PUBLIC_URL = axios.create({ baseURL: API_URL });
