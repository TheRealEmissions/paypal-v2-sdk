const Axios = require("axios").default;

class API {
  constructor() {
    this.Axios = Axios.create();
  }

  setDefaultBaseUrl(url) {
    this.Axios.defaults.baseURL = url;
    return this;
  }

  setDefaultAuthorizationHeader(token) {
    this.Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return this;
  }

  setDefaultHeaders() {
    this.Axios.defaults.headers.common["Content-Type"] = "application/json";
    return this;
  }

  post(...args) {
    return this.Axios.post(...args);
  }

  get(...args) {
    return this.Axios.get(...args);
  }

  put(...args) {
    return this.Axios.put(...args);
  }

  delete(...args) {
    return this.Axios.delete(...args);
  }
}

module.exports = API;
