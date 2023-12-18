import Navbar from "./components/Navbar";
import NewsSection from "./components/NewsSection";
import About from "./components/About";
import Contact from "./components/About";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [articles, setArticles] = useState([]);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element=<NewsSection articles={articles} setArticles={setArticles} />
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
