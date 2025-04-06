import React, { useState } from "react";
import "./JavaScriptBlogHome.css";

const topics = [
  {
    title: "Introduction to JavaScript",
    description:
      "JavaScript is a versatile, high-level programming language that allows you to implement complex features on web pages. It is an essential part of web development, alongside HTML and CSS.",
    image: "/javascript.jpg",
  },
  {
    title: "JavaScript ES6 Features",
    description:
      "ES6 introduced many powerful features like arrow functions, template literals, destructuring, and promises, making JavaScript code more readable and efficient.",
    image: "/ess.jpg",
  },
];

const JavaScriptBlogHome = () => {
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
    <div className="js-blog-page">
      <div className="js-blog-container">
        <div className="js-blog-content">
          <h1 className="js-blog-title">JavaScript Blog</h1>
          <p className="js-blog-subtitle">
            Dive into JavaScript concepts from basics to advanced topics!
          </p>

          {topics.map((topic, index) => (
            <div key={index} className="js-blog-card">
              <div className="text-content">
                <h2 className="js-blog-topic-title">{topic.title}</h2>
                <p className="js-blog-description">{topic.description}</p>
              </div>
              <img src={topic.image} alt={topic.title} className="js-blog-image" />
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
                <p key={index} className="comment-item">{comment}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaScriptBlogHome;
