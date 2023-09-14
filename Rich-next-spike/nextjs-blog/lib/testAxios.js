import axios from "axios";

export const getTopics = () => {
  return axios
    .get("https://nc-news-api-rich.onrender.com/api/topics")
    .then((response) => {
      return response.data.topics;
    });
};
