import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Write from "./pages/Write";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/mypage" component={Write} />
      </Switch>
    </Router>
  );
};

export default Routes;
