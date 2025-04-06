import React, { useState } from "react";
import "./JavaBlogHome.css";

const topics = [
  {
    title: "Introduction to Java",
    description:
      "Java is a high-level, object-oriented programming language developed by Sun Microsystems in 1995. It is widely used for building applications across various platforms, including web, mobile, and enterprise applications. Java follows the principle of 'Write Once, Run Anywhere' (WORA), making it a powerful choice for cross-platform development.",
    image: "/java.jpg",
  },
  {
    title: "Java OOP Concepts",
    description:
      "Object-Oriented Programming (OOP) is a fundamental concept in Java. It includes principles like encapsulation, inheritance, polymorphism, and abstraction. These concepts allow developers to write modular, reusable, and maintainable code.",
    image: "/oop.jpg",
  },
];

const JavaBlogHome = () => {
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
    <div className="blog-page-java">
      <div className="blog-container">
        <div className="blog-content">
          <h1 className="blog-title">Java Blog</h1>
          <p className="blog-subtitle">
            Explore various programming topics with explanations and examples.
          </p>

          {topics.map((topic, index) => (
            <div key={index} className="blog-card">
              <div className="text-content">
                <h2 className="blog-topic-title">{topic.title}</h2>
                <p className="blog-description">{topic.description}</p>
              </div>
              <img src={topic.image} alt={topic.title} className="blog-image" />
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

export default JavaBlogHome;
