import {
  FooterContainer,
  LeftFooterContainer,
  FooterLinksContainer,
  FooterLinks,
  MiddleFooterContainer,
  InfoGroupFooter,
  RightFooterContainer,
} from "../styles/Footer.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <FooterContainer>
      <LeftFooterContainer>
        <h3>DailyIntel</h3>
        <FooterLinksContainer>
          <FooterLinks to="/">Home</FooterLinks>
          <FooterLinks to="/about">About</FooterLinks>
          <FooterLinks to="/contact">Contact</FooterLinks>
        </FooterLinksContainer>
      </LeftFooterContainer>
      <MiddleFooterContainer>
        <InfoGroupFooter>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Gothenburg, Sweden
        </InfoGroupFooter>
        <InfoGroupFooter>
          <FontAwesomeIcon icon={faEnvelope} /> dailyintel@news.com
        </InfoGroupFooter>
      </MiddleFooterContainer>
      <RightFooterContainer>
        <span>About the application</span>
        <p>
          Get the latest news with DailyIntel. It's simple to use, giving you
          quick updates and interesting stories on the go.
        </p>
      </RightFooterContainer>
    </FooterContainer>
  );
}
