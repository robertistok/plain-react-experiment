import React, { useContext, useEffect } from "react";
import pathToRegexp from "path-to-regexp";

import { RouterContext } from "./context/Router";

import ForOhFor from "./pages/404";
import About from "./pages/About";
import Home from "./pages/Home";
import User from "./pages/User";
import UserProduct from "./pages/UserProduct";

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
    component: User,
    path: "/user/:id"
  },
  {
    component: UserProduct,
    path: "/user/:id/product/:productId"
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

  return <ComponentToRender history={routerProps} />;
};

export default Handler;
