import { useState, useEffect } from "react";
import {
  NavbarContainer,
  NavbarLinksContainer,
  NavbarLinks,
  LeftNavbarContainer,
  RightNavbarContainer,
  NavbarContainerWrapper,
  ResponsiveNavbarContainer,
  DropdownNavbarLinks,
} from "../styles/Navbar.styled";

export default function Navbar() {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const updateBurgerMenuVisibility = () => {
      setShowBurgerMenu(window.innerWidth < 821);
    };

    window.addEventListener("resize", updateBurgerMenuVisibility);

    updateBurgerMenuVisibility();

    return () => {
      window.removeEventListener("resize", updateBurgerMenuVisibility);
    };
  });

  return (
    <nav>
      <NavbarContainer showDropdown={showDropdown}>
        <NavbarContainerWrapper>
          <LeftNavbarContainer>
            <NavbarLinks to="/">DailyIntel</NavbarLinks>
          </LeftNavbarContainer>
          <RightNavbarContainer>
            {showBurgerMenu ? (
              <button
                className="action-icon"
                onClick={() => {
                  setShowDropdown((isOpen) => !isOpen);
                }}
              >
                {showDropdown ? "\u2716" : "\u2630"}
              </button>
            ) : (
              <NavbarLinksContainer>
                <NavbarLinks to="/about">About</NavbarLinks>
                <NavbarLinks to="/contact">Contact</NavbarLinks>
              </NavbarLinksContainer>
            )}
          </RightNavbarContainer>
        </NavbarContainerWrapper>
        {showDropdown && (
          <ResponsiveNavbarContainer>
            <DropdownNavbarLinks to="/about">About</DropdownNavbarLinks>
            <DropdownNavbarLinks to="/contact">Contact</DropdownNavbarLinks>
          </ResponsiveNavbarContainer>
        )}
      </NavbarContainer>
    </nav>
  );
}
