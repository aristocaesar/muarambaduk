const axios = require('axios');

class Axios {
  static async get(path) {
    return await axios
      .get(`${process.env.API_URL}${path}`)
      .then((success) => console.log(success))
      .catch((errors) => console.log(errors));
  }
}

module.exports = Axios;
