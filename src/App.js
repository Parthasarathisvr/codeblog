import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import JavaBlogHome from "./components/JavaBlogHome"; 
import PythonBlogHome from "./components/PythonBlogHome";
import JavaScriptBlogHome from "./components/JavaScriptBlogHome";
import HTMLBlogHome from "./components/HTMLBlogHome";
import CssBlogHome from "./components/CssBlogHome";
import ReactBlogHome from "./components/ReactBlogHome";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/java" element={<JavaBlogHome />} />
        <Route path="/python" element={<PythonBlogHome />} />
        <Route path="/javascript" element={<JavaScriptBlogHome/>} />
        <Route path="/html" element={<HTMLBlogHome/>} />
        <Route path="/css" element={<CssBlogHome/>} />
        <Route path="/react" element={<ReactBlogHome/>} />
      </Routes>
    </Router>
  );
};

export default App;
