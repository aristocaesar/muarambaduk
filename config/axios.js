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
}

module.exports = Axios;
