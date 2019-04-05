import React, { useState, useEffect } from "react";

import history from "../utils/history";

export const RouterContext = React.createContext();

const initialState = { pathname: document.location.pathname, params: [] };

const Router = ({ children }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    history.onChange(pathname => setState({ ...state, pathname }));
  }, []);

  const changeRoute = ({ pathname }) => {
    history.push(pathname);
  };

  const updateRoute = ({ params, ...props }) => setState({ ...state, params });

  return (
    <RouterContext.Provider value={{ ...state, changeRoute, updateRoute }}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;
