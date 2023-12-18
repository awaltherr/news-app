import { useEffect } from "react";
import {
  NewsSectionContainer,
  ArticlesSection,
  ArticleSectionCard,
  ArticleSectionCardImg,
  ArticleSectionCardTitle,
  TitleLink,
  ArticleSectionCardDesc,
  ArticleSectionCardPublishDay,
} from "../styles/NewsSection.styled";

const ARTICLE_WITHOUT_IMG = "/assets/dummy-image-green.jpg";
const API_KEY = "fbb9dd1644284a738773c2390f6b4a08";
const NEWS_PER_PAGE = 30;
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&pageSize=${NEWS_PER_PAGE}`;

export default function NewsSection({ articles, setArticles }) {
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
  }, [setArticles]);

  return (
    <>
      <NewsSectionContainer>
        <ArticlesSection>
          {articles.map((article, index) => (
            <ArticleSectionCard key={index}>
              <ArticleSectionCardImg src={article.urlToImage} />
              <TitleLink
                to={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArticleSectionCardTitle>
                  {article.title}
                </ArticleSectionCardTitle>
              </TitleLink>
              <ArticleSectionCardDesc>
                {article.description}
              </ArticleSectionCardDesc>
              <ArticleSectionCardPublishDay>
                <p>
                  Published:{" "}
                  {new Date(article.publishedAt).toLocaleDateString()}
                </p>
              </ArticleSectionCardPublishDay>
            </ArticleSectionCard>
          ))}
        </ArticlesSection>
      </NewsSectionContainer>
    </>
  );
}
