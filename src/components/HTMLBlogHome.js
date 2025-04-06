import React, { useState } from "react";
import "./HTMLBlogHome.css";

const topics = [
  {
    title: "Introduction to HTML",
    description: (
      <p>
        HTML (HyperText Markup Language) is the foundation of web development. It provides the structure for web pages using a system of elements and tags. These elements are used to define headings, paragraphs, links, images, and other content.
      </p>
    ),
    image: "/html.jpg",
  },
  {
    title: "HTML Elements & Attributes",
    description: (
      <p>
        HTML elements are the building blocks of web pages. Attributes provide additional information about elements, such as `href` for links or `src` for images. Understanding elements and attributes is key to mastering HTML.
      </p>
    ),
    image: "/html-elements.jpg",
  },
];

const HTMLBlogHome = () => {
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
    <div className="html-blog-page">
      <div className="html-blog-container">
        <div className="html-blog-content">
          <h1 className="html-blog-title">HTML Blog</h1>
          <p className="html-blog-subtitle">
            Dive into the world of HTML – the skeleton of the web!
          </p>

          {topics.map((topic, index) => (
            <div key={index} className="html-blog-card">
              <div className="text-content">
                <h2 className="html-blog-topic-title">{topic.title}</h2>
                <p className="html-blog-description">{topic.description}</p>
              </div>
              <img
                src={topic.image}
                alt={topic.title}
                className="html-blog-image"
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

export default HTMLBlogHome;
