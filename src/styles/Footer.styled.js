import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #597e52;
  color: #05090b;
  border-top: 1px solid #ddd;
  font-family: "Signika Negative", sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LeftFooterContainer = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;

  h3 {
    margin: 0;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    border-bottom: 1px solid #ddd;
    align-self: center;

    h3 {
      margin-bottom: 10px;
    }
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const FooterLinks = styled(Link)`
  color: #333;
  text-decoration: none;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const MiddleFooterContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-align: center;

  @media (max-width: 768px) {
    align-self: center;
    margin-top: 20px;
  }
`;

export const InfoGroupFooter = styled.div`
  margin-bottom: 10px;
  text-align: center;
`;

export const RightFooterContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  text-align: left;
  overflow-wrap: break-word;

  span {
    display: block;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    margin: 0;
    overflow-wrap: break-word;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
