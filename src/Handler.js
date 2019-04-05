import React, { useContext, useEffect } from "react";
import pathToRegexp from "path-to-regexp";
import styled from "styled-components";

import { RouterContext } from "./components/Router";

import ForOhFor from "./pages/404";
import About from "./pages/About";
import Home from "./pages/Home";
import User from "./pages/User";
import SearchUser from "./pages/SearchUser";

const PAGES = [
  {
    component: Home,
    path: "/"
  },
  {
    component: About,
    path: "/about"
  },
  {
    component: SearchUser,
    path: "/search-user"
  },
  {
    component: User,
    path: "/user/:id"
  }
];

const Handler = () => {
  const { updateRoute, ...routerProps } = useContext(RouterContext);
  const { pathname } = routerProps;

  const pageToRender =
    PAGES.find(page => pathname.match(pathToRegexp(page.path))) || {};

  useEffect(() => {
    const keys = [];

    const regexParams = pathToRegexp(pageToRender.path || "", keys);
    const match = regexParams.exec(pathname);

    if (match) {
      const params = match.slice(1);

      updateRoute({
        params: keys.reduce(
          (acc, key, index) => ({
            ...acc,
            [key.name]: params[index]
          }),
          {}
        )
      });
    }
  }, [pathname]);

  const ComponentToRender = pageToRender.component || ForOhFor;

  return (
    <Root>
      <span>
        Pathname is <strong>{pathname}</strong>
      </span>
      <Container>
        <ComponentToRender history={routerProps} />
      </Container>
    </Root>
  );
};

const Root = styled.div`
  height: 100%;
`;

const Container = styled.div`
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;

export default Handler;
