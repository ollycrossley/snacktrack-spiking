import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    axios
      .get("https://nc-news-api-rich.onrender.com/api/articles")
      .then((response) => {
        setArticles(response.data.articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  console.log(articles);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error!</h1>;
  }

  return (
    <>
      <Layout />
      <ul>
        {articles.map((article) => {
          return (
            <li
              key={article.article_id}
              className="article"
              style={{
                backgroundImage: `url(${article.article_img_url})`,
                backgroundSize: "cover",
              }}
            >
              <div className="article-main">
                <p className="article-title">{article.title}</p>
                <p className="article-topic link">
                  {article.topic.slice(0, 1).toUpperCase() +
                    article.topic.slice(1)}
                </p>
              </div>

              <div className="creation-facts">
                <p className="article-author">{article.author}</p>
                <p className="article-creation">
                  {article.created_at.slice(0, 10)}
                </p>
              </div>
              <div className="article-votes-comments">
                <p>Comments: {article.comment_count}</p>
                <p>Votes: {article.votes}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
