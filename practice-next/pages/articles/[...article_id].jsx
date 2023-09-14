// import Layout from "@/components/Layout";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useRouter } from "next/router";
// import { getArticleById, getArticles } from "@/api";

// export default function Article({article}) {
//   return <>
//   <h1>
//     </h1>{article.title}
//   </>
// }

// export async function getStaticPaths() {
//   // const articles = await getArticles();
//   // console.log(articles);
//   return {
//     paths: [{ params: { article_id: '1' } }],
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const article = await getArticleById(params.article_id);
//   return {
//     props: {
//       article,
//     },
//   };
// }

import { UserContext } from "@/contexts/UserContext";
import { useContext } from "react";

import Layout from "@/components/Layout";
import { getArticleById, getCommentByArticleById } from "@/api";

export default function Article({ article, comments }) {
  const { user } = useContext(UserContext);
  return (
    <>
      <Layout value={'egg'}/>
      <section className="single-article">
        <section className="article-to-show">
          <h1 className="single-article-title">{article.title}</h1>
          {comments ? <h2>{comments[0].body}</h2> : null}
          <p>{article.created_at.slice(0, 10)}</p>
          <h3>{user}</h3>
          <h2>
            {article.topic.slice(0, 1).toUpperCase() + article.topic.slice(1)}
          </h2>
          <img
            className="article-img"
            src={article.article_img_url}
            alt={article.title}
          ></img>
          <div>
            <p>Votes: {article.votes}</p>
          </div>
          <section className="article-bulk">
            <h3>By {article.author}</h3>
            <p className="article-body">{article.body}</p>
          </section>
        </section>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  // console.log(context); -- it's in the terminal below. NOT IN THE BROWSER
  // console.log(context.query); <-- Don't need this, but this is how we find queries
  console.log(context.params);
  const article_id = context.params.article_id[0];
  // return getArticleById(article_id).then((article) => {
  //   return {
  //     props: {
  //       article,
  //     },
  //   };
  // });
  const article = await getArticleById(article_id);
  const article_id_comments = context.params.article_id[1];
  if (article_id_comments === "comments") {
    const comments = await getCommentByArticleById(article_id);
    return {
      props: {
        article,
        comments,
      },
    };
  } else {
    return {
      props: {
        article,
      },
    };
  }
}
