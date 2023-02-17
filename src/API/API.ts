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
    this.Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    return this;
  }

  setDefaultHeaders() {
    this.Axios.defaults.headers.common["Content-Type"] = "application/json";
    return this;
  }

  post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.Axios.post<T>(url, data, config);
  }

  get<T>(url: string, config?: AxiosRequestConfig) {
    return this.Axios.get<T>(url, config);
  }

  put<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.Axios.put<T>(url, data, config);
  }

  delete<T>(url: string, config?: AxiosRequestConfig) {
    return this.Axios.delete<T>(url, config);
  }

  patch<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.Axios.patch<T>(url, data, config);
  }
}

export default API;
