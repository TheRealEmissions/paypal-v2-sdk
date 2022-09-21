import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class API {
  Axios: AxiosInstance;
  constructor() {
    this.Axios = Axios.create();
  }

  setDefaultBaseUrl(baseUrl: string) {
    this.Axios.defaults.baseURL = baseUrl;
    return this;
  }

  setDefaultAuthorizationHeader(token: string) {
    this.Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return this;
  }

  setDefaultHeaders() {
    this.Axios.defaults.headers.common["Content-Type"] = "application/json";
    return this;
  }

  post(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.Axios.post(url, data, config);
  }

  get(url: string, config?: AxiosRequestConfig) {
    return this.Axios.get(url, config);
  }

  put(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.Axios.put(url, data, config);
  }

  delete(url: string, config?: AxiosRequestConfig) {
    return this.Axios.delete(url, config);
  }
}

export default API;
