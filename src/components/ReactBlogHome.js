import React, { useState } from "react";
import "./ReactBlogHome.css";

const topics = [
  {
    title: "Introduction to React",
    description: (
      <p>
        React is a JavaScript library for building user interfaces. Developed by Facebook,
        it allows developers to create large web applications that can update and render
        efficiently with reusable components.
      </p>
    ),
    image: "/react-intro.jpg",
  },
  {
    title: "Components and Props",
    description: (
      <p>
        Components are the building blocks of any React app. They let you split the UI into
        independent, reusable pieces. Props allow you to pass data from one component to another.
      </p>
    ),
    image: "/react-components.jpg",
  },
];

const ReactBlogHome = () => {
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
    <div className="react-blog-page">
      <div className="react-blog-container">
        <div className="react-blog-content">
          <h1 className="react-blog-title">React Blog</h1>
          <p className="react-blog-subtitle">
            Dive into modern frontend development with React!
          </p>

          {topics.map((topic, index) => (
            <div key={index} className="react-blog-card">
              <div className="text-content">
                <h2 className="react-blog-topic-title">{topic.title}</h2>
                <p className="react-blog-description">{topic.description}</p>
              </div>
              <img
                src={topic.image}
                alt={topic.title}
                className="react-blog-image"
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

export default ReactBlogHome;
