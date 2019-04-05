import React from "react";
import styled from "styled-components";

import Link from "./Link";

const Navbar = () => {
  return (
    <Root>
      <Title>Router without react-router</Title>

      <Nav>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/about">About</Link>
        </NavItem>
        <NavItem>
          <Link to="/search-user">Search user</Link>
        </NavItem>
        <NavItem>
          <Link to={`/for-oh-for/${Math.random()}`}>404</Link>
        </NavItem>
      </Nav>
    </Root>
  );
};

const Root = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  color: ${({ theme }) => theme.textColor};
  display: flex;
  font-size: 18px;
`;

const NavItem = styled.li`
  list-style: none;
  margin-right: 20px;
`;

const Title = styled.h2`
  align-self: center;
  margin-right: auto;
`;

export default Navbar;
