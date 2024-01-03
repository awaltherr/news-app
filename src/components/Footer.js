import {
  FooterContainer,
  LeftFooterContainer,
  FooterLinksContainer,
  FooterLinks,
  MiddleFooterContainer,
  InfoGroupFooter,
  RightFooterContainer,
} from "../styles/Footer.styled";

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
        <InfoGroupFooter>&#x1F4CD; Gothenburg, Sweden</InfoGroupFooter>
        <InfoGroupFooter>&#x2709; dailyintel@news.com</InfoGroupFooter>
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
