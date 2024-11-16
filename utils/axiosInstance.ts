import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_APIURL,
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_APIKEY,
    "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
  },

  params: {
    fromId: "BOM.AIRPORT",
    toId: "DEL.AIRPORT",
    pageNo: "1",
    adults: "1",
    children: "0,17",
    sort: "BEST",
    cabinClass: "ECONOMY",
    currency_code: "AED",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
