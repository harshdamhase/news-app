// import './NewArticle.css'

// import React from 'react'

// function NewArticle(autor, title, description, url, urlToImage, publisheAt, content) {
//     return (
//         <div className='newds-article-card' key={index}>
//             <img src={urlToImage} alt='' className='news-article-img' />
//             <h1 className='article-title'>{title}</h1>
//         </div>
//     )
// }

// export default NewArticle

import React from "react";
import "./NewArticle.css";

const NewArticle = ({
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
}) => {
  return (
    <div className="container">
      <div className="card card-container shadow">
        <img
          src={urlToImage}
          className="card-img-top new-article-Img p-2"
          alt="..."
        />
        <div class="card-body">
          <h6 className="card-text">{title}</h6>
          <div className="">
            <p>{author}</p>
            <p>{publishedAt}</p>
          </div>
          <div>
            <p>{description}</p>
            <a href={url}>
            <p>Read More</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArticle;
