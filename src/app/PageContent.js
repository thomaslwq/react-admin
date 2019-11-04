import React from 'react';
import DashBoard from "../dashboard/Dashboard"
import DashBoard1 from "../dashboard/Dashboard1"
import DashBoard2 from "../dashboard/Dashboard2"
import Form from "../form/form"
import FormAdvance from "../form/formAdvance"
import FormValidation from "../form/formValidation"
import FormWizards from "../form/formWizards"
import FormUpload from "../form/formUpload"
import FormButton from "../form/formButton"
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
const PageContent = () => {
  return (
    <div>
      <Router>
        {/* page content */}
        <Switch>
          <Route path="/" exact component={DashBoard} ></Route>
          <Route path="/Dashboard1"  exact component={DashBoard1}></Route>
          <Route path="/Dashboard2"  exact component={DashBoard2}></Route>
          <Route path="/form" exact component={Form}></Route>
          <Route path="/formAdvance" exact component={FormAdvance}></Route>
          <Route path="/formValidation" exact component={FormValidation}></Route>    
          <Route path="/formWizards" exact component={FormWizards}></Route>           
          <Route path="/formUpload" exact component={FormUpload}></Route>  
          <Route path="/formButtons" exact component={FormButton}></Route>  
          <Redirect to="/"></Redirect>
        </Switch>
        {/* /page content */}
      </Router>
    </div>
  );
};

export default PageContent;