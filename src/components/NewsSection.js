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

export default function NewsSection({ articles }) {
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
