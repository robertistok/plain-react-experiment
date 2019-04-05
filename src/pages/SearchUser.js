import React, { useState, useContext } from "react";
import styled from "styled-components";

import { RouterContext } from "../components/Router";

const SearchUser = props => {
  const [userId, setUserId] = useState(0);
  const { changeRoute } = useContext(RouterContext);

  return (
    <Root>
      <h4>Enter an ID in the input below and press navigate</h4>
      <SearchInput
        type="number"
        value={userId}
        onChange={e => setUserId(e.target.value)}
      />
      <SubmitButton
        disabled={userId === 0}
        onClick={() => changeRoute({ pathname: `/user/${userId}` })}
      >
        Go to user
      </SubmitButton>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100px;
  height: 50px;
  font-size: 16px;
  color: #000000;
  text-align: center;
  margin: 10px;
  outline: none;
`;

const SubmitButton = styled.button`
  background-color: inherit;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    cursor: not-allowed;
    pointer-events: all !important;
    opacity: 1;
  }
`;
export default SearchUser;
