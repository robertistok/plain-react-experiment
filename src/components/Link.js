import React, { useContext } from "react";
import styled from "styled-components";

import { RouterContext } from "../context/Router";

const styles = {
  a: {
    textDecoration: "inherit",
    color: "inherit"
  }
};

const Link = ({ children, to, ...props }) => {
  const { changeRoute } = useContext(RouterContext);

  const handleClick = event => {
    if (
      !event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      (!props.target || props.target === "_self") // let browser handle "target=_blank" etc.
    ) {
      event.preventDefault();

      changeRoute({ pathname: to });
    }
  };

  return (
    <Root href="" onClick={handleClick}>
      {children}
    </Root>
  );
};

const Root = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    opacity: 0.8;
  }
`;

export default Link;
