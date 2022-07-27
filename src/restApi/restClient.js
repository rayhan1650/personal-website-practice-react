import axios from "axios";

const restClient = (url) => {
  axios
    .get(url)
    .then(function (response) {
      // handle success
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};

export default restClient;
