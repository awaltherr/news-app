import styled from "styled-components";
import { Link } from "react-router-dom";

export const NewsSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 600px;
  background-color: #fff2d8;
`;

export const ArticlesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 80px;

  @media (max-width: 1780px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
  }
`;

export const ArticleSectionCard = styled.div`
  position: relative;
  width: 500px;
  margin: 0 auto;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 1780px) {
    width: 500px;
  }

  @media (max-width: 1280px) {
    width: 500px;
  }
`;

export const ArticleSectionCardImg = styled.img`
  text-align: center;
  width: 500px;
  height: 300px;
  border: 1px solid #000000;
  border-radius: 10px;
  margin-bottom: 10px;
  background-size: cover;
  background-position: cover;

  @media (max-width: 1780px) {
    width: 500px;
  }

  @media (max-width: 1280px) {
    width: 500px;
  }
`;

export const ArticleSectionCardTitle = styled.div`
  font-size: 25px;
  font-family: "Roboto", sans-serif;
  margin-bottom: 20px;
`;

export const TitleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const ArticleSectionCardDesc = styled.div`
  font-family: "Roboto", sans-serif;
`;

export const ArticleSectionCardPublishDay = styled.div`
  font-family: "Roboto", sans-serif;
`;
