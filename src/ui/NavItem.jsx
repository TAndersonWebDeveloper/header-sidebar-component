import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
const StyledNavLink = styled(NavLink)``;

const NavItem = () => {
  return (
    <li>
      <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
    </li>
  );
};

export default NavItem;
