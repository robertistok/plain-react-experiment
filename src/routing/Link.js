import React, { useContext } from "react";
import { RouterContext } from "../context/Router";

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
    <a href="" onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
