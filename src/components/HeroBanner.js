import { Banner, BannerText } from "../styles/HeroBanner.styled";

const HeroBanner = ({ text }) => {
  return (
    <Banner>
      <BannerText>{text}</BannerText>
    </Banner>
  );
};

export default HeroBanner;
