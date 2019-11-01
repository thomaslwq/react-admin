import React from 'react';
import DashBoard from "../dashboard/Dashboard"
import DashBoard1 from "../dashboard/Dashboard1"
import DashBoard2 from "../dashboard/Dashboard2"


import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
const PageContent = () => {
  return (
    <div>
      <Router>
        {/* page content */}
        <Switch>
          <Route path="/" exact component={DashBoard} ></Route>
          <Route path="/Dashboard1"  exact component={DashBoard1}></Route>
          <Route path="/Dashboard2"  exact component={DashBoard2}></Route>
        </Switch>
        {/* /page content */}
      </Router>
    </div>
  );
};

export default PageContent;