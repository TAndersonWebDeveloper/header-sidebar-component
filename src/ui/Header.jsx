import { styled } from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-100);
  border-bottom: 1px solid var(--color-grey-200);
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Header</h1>
    </StyledHeader>
  );
};

export default Header;
