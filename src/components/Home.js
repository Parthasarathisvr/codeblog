import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import the fun CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay"></div> {/* Dark overlay for readability */}
      <div className="content">
        <h1>🚀 Welcome to the programming Blog! 🎨</h1>
        <p>Let's make programming fun! Choose a language and dive in! 🤩</p>

        <div className="language-grid">
          <Link to="/java" className="lang-box java">☕ Java</Link>
          <Link to="/python" className="lang-box python">🐍 Python</Link>
          <Link to="/javascript" className="lang-box javascript">⚡ JavaScript</Link>
          <Link to="/html" className="lang-box html">🌐 HTML</Link>
          <Link to="/css" className="lang-box css">🎨 CSS</Link>
          <Link to="/react" className="lang-box react">⚛️ React</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
