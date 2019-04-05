import React, { useContext } from "react";
import styled from "styled-components";

import { RouterContext } from "./Router";

const Link = ({ children, to, onClick, ...props }) => {
  if (!to && !onClick) {
    throw new Error("You must supply a 'to' or 'onClick' prop to the link");
  }

  const { changeRoute } = useContext(RouterContext);

  const handleClick = event => {
    if (
      !event.defaultPrevented &&
      event.button === 0 &&
      (!props.target || props.target === "_self")
    ) {
      event.preventDefault();

      changeRoute({ pathname: to });
    }
  };

  return (
    <Root href={to} onClick={onClick || handleClick}>
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
