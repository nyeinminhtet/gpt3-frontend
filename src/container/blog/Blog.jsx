import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";

const Blog = () => {
  return (
    <div className="gpt3_blog section_padding" id="blog">
      <div className="gpt3_blog-heading">
        <h1 className="gradient_text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3_blog-container">
        <div className="gpt3_blog-container-groupA">
          <Article
            img={blog01}
            date="June 1,2023"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt3_blog-container-groupB">
          <Article
            img={blog02}
            date="June 1,2023"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            img={blog03}
            date="June 1,2023"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            img={blog04}
            date="June 1,2023"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            img={blog05}
            date="June 1,2023"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
