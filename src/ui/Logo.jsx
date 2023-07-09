import { styled } from "styled-components";

const StyledLogo = styled.img`
  height: 9.6rem;
`;

const Logo = ({ src, alt }) => {
  return <StyledLogo src={src} alt={alt} />;
};

export default Logo;
