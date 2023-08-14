import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class API {
  private Axios: AxiosInstance;
  constructor() {
    this.Axios = Axios.create();
  }

  public getAxios() {
    return this.Axios;
  }

  public setDefaultBaseUrl(baseUrl: string) {
    this.Axios.defaults.baseURL = baseUrl;
    return this;
  }

  public setDefaultAuthorizationHeader(token: string) {
    this.Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    return this;
  }

  public setDefaultHeaders() {
    this.Axios.defaults.headers.common["Content-Type"] = "application/json";
    return this;
  }

  public post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.Axios.post<T>(url, data, config);
  }

  public get<T>(url: string, config?: AxiosRequestConfig) {
    return this.Axios.get<T>(url, config);
  }

  public put<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.Axios.put<T>(url, data, config);
  }

  public delete<T>(url: string, config?: AxiosRequestConfig) {
    return this.Axios.delete<T>(url, config);
  }

  public patch<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.Axios.patch<T>(url, data, config);
  }
}
