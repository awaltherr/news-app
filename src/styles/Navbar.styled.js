import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.showDropdown ? "250px" : "90px")};
  background-color: #dbcc95;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  z-index: 1000;

  @media (min-width: 820px) {
    height: 90px;
  }
`;

export const NavbarLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
`;

export const NavbarLinks = styled(Link)`
  color: #05090b;
  text-decoration: none;
  font-family: "Signika Negative", sans-serif;
`;

export const LeftNavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  padding-left: 130px;
`;

export const RightNavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding-right: 130px;

  .action-icon {
    background-color: transparent;
    border: none;
    font-size: 20px;
  }

  .action-icon:hover {
    cursor: pointer;
  }
`;

export const ResponsiveNavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 100px;

  @media (min-width: 820px) {
    display: none;
  }
`;

export const DropdownNavbarLinks = styled(Link)`
  margin-right: 50px;
  margin-top: 20px;
  color: #05090b;
  text-decoration: none;
  font-family: "Signika Negative", sans-serif;
  text-align: left;
`;

export const NavbarContainerWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
`;
