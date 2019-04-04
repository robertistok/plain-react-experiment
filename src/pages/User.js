import React from "react";

import Link from "../routing/Link";

const User = props => {
  console.log(props);

  return (
    <div>
      <Link to="/">Home</Link>
      User page
    </div>
  );
};

export default User;
