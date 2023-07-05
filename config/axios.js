const axios = require('axios');

class Axios {
  static async get(path) {
    return await axios
      .get(`${process.env.API_URL}${path}`)
      .then((success) => success.data)
      .catch((errors) => {
        throw errors;
      });
  }

  static async post(path, body) {
    return await axios
      .post(`${process.env.API_URL}${path}`, body)
      .then((success) => success.data)
      .catch((errors) => {
        throw errors.response;
      });
  }
}

module.exports = Axios;
