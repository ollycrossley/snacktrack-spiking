import axios from "axios";

export const getArticleById = (id) => {
  return axios
    .get(`https://nc-news-api-rich.onrender.com/api/articles/${id}`)
    .then((response) => {
      return response.data.article;
    });
};

export const getArticles = () => {
  return axios
    .get("https://nc-news-api-rich.onrender.com/api/articles")
    .then((response) => {
      return response.data.articles;
    });
};

export const getCommentByArticleById = (id) => {
  return axios
    .get(`https://nc-news-api-rich.onrender.com/api/articles/${id}/comments`)
    .then((response) => {
      return response.data.comments;
    });
};
