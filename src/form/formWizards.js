import React, { Component } from 'react'

export default class formWizards extends Component {
    render() {
        return (
            <div>
<div className="right_col" role="main" style={{minHeight: 1211}}>
  <div className>
    <div className="page-title">
      <div className="title_left">
        <h3>Form Wizards</h3>
      </div>
      <div className="title_right">
        <div className="col-md-5 col-sm-5  form-group row pull-right top_search">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for..." />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button">Go!</button>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="clearfix" />
    <div className="row">
      <div className="col-md-12 col-sm-12 ">
        <div className="x_panel">
          <div className="x_title">
            <h2>Form Wizards <small>Sessions</small></h2>
            <ul className="nav navbar-right panel_toolbox">
              <li><a className="collapse-link"><i className="fa fa-chevron-up" /></a>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench" /></a>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="#">Settings 1</a>
                  </li>
                  <li><a href="#">Settings 2</a>
                  </li>
                </ul>
              </li>
              <li><a className="close-link"><i className="fa fa-close" /></a>
              </li>
            </ul>
            <div className="clearfix" />
          </div>
          <div className="x_content">
            {/* Smart Wizard */}
            <p>This is a basic form wizard example that inherits the colors from the selected scheme.</p>
            <div id="wizard" className="form_wizard wizard_horizontal">
              <ul className="wizard_steps anchor">
                <li>
                  <a href="#step-1" className="selected" isdone={1} rel={1}>
                    <span className="step_no">1</span>
                    <span className="step_descr">
                      Step 1<br />
                      <small>Step 1 description</small>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#step-2" className="disabled" isdone={0} rel={2}>
                    <span className="step_no">2</span>
                    <span className="step_descr">
                      Step 2<br />
                      <small>Step 2 description</small>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#step-3" className="disabled" isdone={0} rel={3}>
                    <span className="step_no">3</span>
                    <span className="step_descr">
                      Step 3<br />
                      <small>Step 3 description</small>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#step-4" className="disabled" isdone={0} rel={4}>
                    <span className="step_no">4</span>
                    <span className="step_descr">
                      Step 4<br />
                      <small>Step 4 description</small>
                    </span>
                  </a>
                </li>
              </ul>
              <div className="stepContainer" style={{height: 315}}><div id="step-1" className="content" style={{display: 'block'}}>
                  <form className="form-horizontal form-label-left">
                    <div className="form-group row">
                      <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="first-name">First Name <span className="required">*</span>
                      </label>
                      <div className="col-md-6 col-sm-6 ">
                        <input type="text" id="first-name" required="required" className="form-control  " />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="last-name">Last Name <span className="required">*</span>
                      </label>
                      <div className="col-md-6 col-sm-6 ">
                        <input type="text" id="last-name" name="last-name" required="required" className="form-control " />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="middle-name" className="col-form-label col-md-3 col-sm-3 label-align">Middle Name / Initial</label>
                      <div className="col-md-6 col-sm-6 ">
                        <input id="middle-name" className="form-control col" type="text" name="middle-name" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-md-3 col-sm-3 label-align">Gender</label>
                      <div className="col-md-6 col-sm-6 ">
                        <div id="gender" className="btn-group" data-toggle="buttons">
                          <label className="btn btn-secondary" data-toggle-class="btn-primary" data-toggle-passive-class="btn-secondary">
                            <input type="radio" name="gender" defaultValue="male" className="join-btn" /> &nbsp; Male &nbsp;
                          </label>
                          <label className="btn btn-primary" data-toggle-class="btn-primary" data-toggle-passive-class="btn-secondary">
                            <input type="radio" name="gender" defaultValue="female" className="join-btn" /> Female
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-md-3 col-sm-3 label-align">Date Of Birth <span className="required">*</span>
                      </label>
                      <div className="col-md-6 col-sm-6 ">
                        <input id="birthday" className="date-picker form-control" required="required" type="text" />
                      </div>
                    </div>
                  </form>
                </div><div id="step-2" className="content" style={{display: 'none'}}>
                  <h2 className="StepTitle">Step 2 Content</h2>
                  <p>
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div><div id="step-3" className="content" style={{display: 'none'}}>
                  <h2 className="StepTitle">Step 3 Content</h2>
                  <p>
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div><div id="step-4" className="content" style={{display: 'none'}}>
                  <h2 className="StepTitle">Step 4 Content</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div></div><div className="actionBar"><div className="msgBox"><div className="content" /><a href="#" className="close">X</a></div><div className="loader">Loading</div><a href="#" className="buttonFinish buttonDisabled btn btn-default">Finish</a><a href="#" className="buttonNext btn btn-success">Next</a><a href="#" className="buttonPrevious buttonDisabled btn btn-primary">Previous</a></div></div>
            {/* End SmartWizard Content */}
            <h2>Example: Vertical Style</h2>
            {/* Tabs */}
            <div id="wizard_verticle" className="form_wizard wizard_verticle">
              <ul className="list-unstyled wizard_steps anchor">
                <li>
                  <a href="#step-11" className="selected" isdone={1} rel={1}>
                    <span className="step_no">1</span>
                  </a>
                </li>
                <li>
                  <a href="#step-22" className="disabled" isdone={0} rel={2}>
                    <span className="step_no">2</span>
                  </a>
                </li>
                <li>
                  <a href="#step-33" className="disabled" isdone={0} rel={3}>
                    <span className="step_no">3</span>
                  </a>
                </li>
                <li>
                  <a href="#step-44" className="disabled" isdone={0} rel={4}>
                    <span className="step_no">4</span>
                  </a>
                </li>
              </ul>
              <div className="stepContainer" style={{height: 407}}><div id="step-11" className="content" style={{display: 'block'}}>
                  <h2 className="StepTitle">Step 1 Content</h2>
                  <form className="form-horizontal form-label-left">
                    <span className="section">Personal Info</span>
                    <div className="form-group row">
                      <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="first-name">First Name <span className="required">*</span>
                      </label>
                      <div className="col-md-6 col-sm-6">
                        <input type="text" id="first-name2" required="required" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-md-3 col-sm-3 label-align" htmlFor="last-name">Last Name <span className="required">*</span>
                      </label>
                      <div className="col-md-6 col-sm-6">
                        <input type="text" id="last-name2" name="last-name" required="required" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="middle-name" className="col-form-label col-md-3 col-sm-3 label-align">Middle Name / Initial</label>
                      <div className="col-md-6 col-sm-6">
                        <input id="middle-name2" className="form-control " type="text" name="middle-name" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-md-3 col-sm-3 label-align">Gender</label>
                      <div className="col-md-6 col-sm-6">
                        <div id="gender2" className="btn-group" data-toggle="buttons">
                          <label className="btn btn-secondary" data-toggle-class="btn-primary" data-toggle-passive-class="btn-secondary">
                            <input type="radio" name="gender" defaultValue="male" className="join-btn" /> &nbsp; Male &nbsp;
                          </label>
                          <label className="btn btn-primary" data-toggle-class="btn-primary" data-toggle-passive-class="btn-secondary">
                            <input type="radio" name="gender" defaultValue="female" className="join-btn" defaultChecked /> Female
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-md-3 col-sm-3 label-align">Date Of Birth <span className="required">*</span>
                      </label>
                      <div className="col-md-6 col-sm-6">
                        <input id="birthday2" className="date-picker form-control" required="required" type="text" />
                      </div>
                    </div>
                  </form>
                </div><div id="step-22" className="content" style={{display: 'none'}}>
                  <h2 className="StepTitle">Step 2 Content</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div><div id="step-33" className="content" style={{display: 'none'}}>
                  <h2 className="StepTitle">Step 3 Content</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div><div id="step-44" className="content" style={{display: 'none'}}>
                  <h2 className="StepTitle">Step 4 Content</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div></div><div className="actionBar"><div className="msgBox"><div className="content" /><a href="#" className="close">X</a></div><div className="loader">Loading</div><a href="#" className="buttonFinish buttonDisabled btn btn-default">Finish</a><a href="#" className="buttonNext btn btn-success">Next</a><a href="#" className="buttonPrevious buttonDisabled btn btn-primary">Previous</a></div></div>
            {/* End SmartWizard Content */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

     
            </div>
        )
    }
}
