import { styled } from "styled-components";
import Logo from "./Logo";
import NavItem from "./NavItem";

const StyledSidebar = styled.aside`
  grid-row: 1 / -1;

  background-color: var(--color-grey-100);
  border-right: 1px solid var(--color-grey-200);
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2.4rem;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Logo
        src="https://images.unsplash.com/photo-1682687218608-5e2522b04673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80"
        alt="company logo"
      />
      <NavItem to="/dashboard">Dashboard</NavItem>
    </StyledSidebar>
  );
};

export default Sidebar;
