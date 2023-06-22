import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "http://127.0.0.1:3000/api/",
  headers: {
    //  Authorization: `<Your Auth Token>`,
    ContentType: "application/json",
    timeout: 1000,
  },
});

export default instanceAxios;
