import axios from "axios";

const templateApi = axios.create({
  baseURL: "httpGoogle", //Pedir el endpoint a juan
});

//Todo: configurar interceptores
templateApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "x-token": localStorage.getItem("item"),
  };

  return config;
});

export default templateApi;
