import React, { useState } from "react";
import "./CssBlogHome.css";

const topics = [
  {
    title: "Introduction to CSS",
    description: (
      <p>
        CSS (Cascading Style Sheets) is used to style HTML elements on web pages.
        It controls layout, colors, fonts, spacing, and overall design of websites.
        CSS makes web pages visually attractive and responsive.
      </p>
    ),
    image: "/css-intro.jpg",
  },
  {
    title: "Selectors and Properties",
    description: (
      <p>
        CSS uses selectors to target HTML elements and apply styles through properties.
        Common selectors include class, id, tag, and pseudo-selectors like <code>:hover</code>.
        Properties define specific styles like <code>color</code>, <code>margin</code>, and <code>font-size</code>.
      </p>
    ),
    image: "/css-selectors.jpg",
  },
];

const CssBlogHome = () => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => setLikes(likes + 1);

  const handleComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="css-blog-page">
      <div className="css-blog-container">
        <div className="css-blog-content">
          <h1 className="css-blog-title">CSS Blog</h1>
          <p className="css-blog-subtitle">
            Style your web pages with beautiful designs using CSS!
          </p>

          {topics.map((topic, index) => (
            <div key={index} className="css-blog-card">
              <div className="text-content">
                <h2 className="css-blog-topic-title">{topic.title}</h2>
                <p className="css-blog-description">{topic.description}</p>
              </div>
              <img
                src={topic.image}
                alt={topic.title}
                className="css-blog-image"
              />
            </div>
          ))}

          <div className="interaction-container">
            <button className="like-button" onClick={handleLike}>
              👍 Like {likes}
            </button>

            <div className="comment-section">
              <input
                type="text"
                className="comment-input"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button className="comment-button" onClick={handleComment}>
                💬 Comment
              </button>
            </div>

            <div className="comment-list">
              <h3>Comments:</h3>
              {comments.map((comment, index) => (
                <p key={index} className="comment-item">
                  {comment}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CssBlogHome;
