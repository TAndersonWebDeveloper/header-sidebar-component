import { styled } from "styled-components";

const StyledSidebar = styled.aside`
  grid-row: 1 / -1;

  background-color: var(--color-grey-100);
  border-right: 1px solid var(--color-grey-200);
`;

const Sidebar = () => {
  return <StyledSidebar></StyledSidebar>;
};

export default Sidebar;
