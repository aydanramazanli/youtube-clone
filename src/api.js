import axios from "axios";
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyDR8c-qk1ggmPuU8XwmlprVJG8vWntIb6k",
  },
});

export default request;
