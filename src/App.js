import Header from "./components/Header";
import NewsSection from "./components/NewsSection";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

const API_KEY = "fbb9dd1644284a738773c2390f6b4a08";
const NEWS_PER_PAGE = 30;
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&pageSize=${NEWS_PER_PAGE}`;
const ARTICLE_WITHOUT_IMG = "/assets/dummy-image-green.jpg";

export default function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.articles) {
          const validArticles = data.articles.filter(
            (article) =>
              article.title !== "[Removed]" &&
              article.description !== "[Removed]"
          );
          const articlesWithImages = validArticles.map((article) => ({
            ...article,
            urlToImage:
              article.urlToImage !== null
                ? article.urlToImage
                : ARTICLE_WITHOUT_IMG,
          }));
          setArticles(articlesWithImages);
          console.log(data.articles);
        }
      } catch (error) {
        console.error("Error fetching news articles:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <NewsSection articles={articles} />
      <Routes>
        <Route path="/" />
        <Route path="/sign-in" />
        <Route path="/contact" />
      </Routes>
    </BrowserRouter>
  );
}
