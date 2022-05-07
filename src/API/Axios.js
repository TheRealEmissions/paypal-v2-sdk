const Axios = require("axios").default;

class API {
  constructor() {
    this.Axios = Axios.create();
  }

  setDefaultAuthorizationHeader(token) {
    this.Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
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
}

module.exports = API;
