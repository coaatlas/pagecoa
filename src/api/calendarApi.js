import axios from "axios";
import { getEnvVariables } from "../calendar/helpers/getEnvVariables";

const {VITE_API_URL} = getEnvVariables();


const calendarApi = axios.create({


    baseURL: VITE_API_URL,


});

export default calendarApi;

