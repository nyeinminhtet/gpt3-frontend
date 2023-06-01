import React from "react";
import "./article.css";

const Article = ({ img, date, title }) => {
  return (
    <div className="gpt3_blog-article">
      <div className="gpt3_blog-article-conatiner-img">
        <img src={img} alt="blog" />
      </div>
      <div className="gpt3_blog-article-content">
        <div>
          <p>{date} </p>
          <h3>{title} </h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
