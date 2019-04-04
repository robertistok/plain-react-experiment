import React from "react";

const User = ({ history }) => {
  return <div>Page of user with ID {history.params.id}</div>;
};

export default User;
