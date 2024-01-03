import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  bottom: 0;
  padding: 20px;
  background-color: #597e52;
  color: #05090b;
  border-top: 1px solid #ddd;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LeftFooterContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-align: left;

  h3 {
    margin: 0;
    text-align: left;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    border-bottom: 1px solid #ddd;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  gap: 10px;
  text-align: left;
`;

export const FooterLinks = styled(Link)`
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const MiddleFooterContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-align: left;

  @media (max-width: 768px) {
    border-bottom: 1px solid #ddd;
  }
`;

export const InfoGroupFooter = styled.div`
  margin-bottom: 10px;
  text-align: left;
`;

export const RightFooterContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-align: left;

  span {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  p {
    margin: 0;
  }

  @media (max-width: 768px) {
    border-right: none;
  }
`;
