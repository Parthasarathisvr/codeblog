import React, { useState } from "react";
import "./PythonBlogHome.css";

const topics = [
  {
    title: "Introduction to Python",
    description:
     <p> "Python is a high-level, interpreted programming language known for its simplicity and readability.
     Its clean and easy-to-understand syntax makes it an excellent choice for beginners and experienced developers alike.</p>,
    image: "/python.jpg",
  },
  {
    title: "Python OOP Concepts",
    description:
      "Python supports object-oriented programming with features like classes, inheritance, and polymorphism. These help in building reusable and modular code.",
    image: "/ooppy.jpg",
  },
];

const PythonBlogHome = () => {
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
    <div className="python-blog-page">
    <div className="python-blog-container">
      <div className="python-blog-content">
        <h1 className="python-blog-title">Python Blog</h1>
        <p className="python-blog-subtitle">
          Explore Python concepts from basics to advanced topics!
        </p>

        {topics.map((topic, index) => (
          <div key={index} className="python-blog-card">
            <div className="text-content">
              <h2 className="python-blog-topic-title">{topic.title}</h2>
              <p className="python-blog-description">{topic.description}</p>
            </div>
            <img src={topic.image} alt={topic.title} className="python-blog-image" />
          </div>
        ))}

        {/* Like & Comment Section */}
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

          {/* Display Comments */}
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

export default PythonBlogHome;
