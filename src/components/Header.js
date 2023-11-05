import { useEffect, useState } from "react";
import {
  StyledHeaderContainer,
  HeaderContainerWrapper,
  LeftHeaderContainer,
  MiddleHeaderContainer,
  RightHeaderContainer,
  HeaderLinks,
} from "../styles/Header.styled";

const API_URL = `
https://api.openweathermap.org/data/2.5/weather?`;
const API_KEY = `48f98c3703d3a9ed7849d2f3dbfc1296`;

function Header() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [location, setLocation] = useState({});
  const [isSmallerView, setIsSmallerView] = useState(false);

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  useEffect(() => {
    const fetchLocationData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });

      const currentLocation = `${API_URL}lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

      try {
        const response = await fetch(currentLocation);
        const data = await response.json();
        setLocation(data);
      } catch (error) {
        console.log("Error fetching location data:", error);
      }
    };

    fetchLocationData();
  }, [latitude, longitude]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallerView(window.innerWidth < 961);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <header>
      <StyledHeaderContainer>
        <HeaderContainerWrapper>
          <LeftHeaderContainer>
            {isSmallerView ? (
              <h1>DailyIntel</h1>
            ) : (
              <>
                <span>{currentDate}</span>
                <span>{location.name}</span>
              </>
            )}
          </LeftHeaderContainer>
          <MiddleHeaderContainer>
            <h1>DailyIntel</h1>
          </MiddleHeaderContainer>
          <RightHeaderContainer>
            <HeaderLinks to="/contact">Contact</HeaderLinks>
            <HeaderLinks to="/sign-in">Sign In</HeaderLinks>
          </RightHeaderContainer>
        </HeaderContainerWrapper>
      </StyledHeaderContainer>
    </header>
  );
}

export default Header;
