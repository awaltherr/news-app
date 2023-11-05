import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeaderContainer = styled.header`
  width: 100%;
  min-width: 600px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ead7bb;
`;

export const HeaderContainerWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
`;

export const LeftHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  font-family: "Roboto", sans-serif;
`;

export const MiddleHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
  font-family: "Signika Negative", sans-serif;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const RightHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  font-family: "Roboto", sans-serif;
`;

export const HeaderLinks = styled(Link)`
  color: #000000;
  text-decoration: none;
`;
