import React from "react";

import Router from "./context/Router";
import Handler from "./Handler";

const App = ({ pathname }) => {
  return (
    <Router>
      <Handler />
    </Router>
  );
};

export default App;
