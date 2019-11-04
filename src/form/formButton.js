import React, { Component } from 'react'

export default class formButton extends Component {
    render() {
        return (
            <div>
                <div className="right_col" role="main" style={{minHeight: 1062}}>
                <div >
                    <div className="page-title">
                    <div className="title_left">
                        <h3>Form Buttons</h3>
                    </div>
                    <div className="title_right">
                        <div className="col-md-5 col-sm-5 col-xs-12 form-group row pull-right top_search">
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
      <div className="col-md-6">
        <div className="x_panel">
          <div className="x_title">
            <h2>Default Buttons </h2>
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
            <button type="button" className="btn btn-secondary">Default</button>
            <button type="button" className="btn btn-primary">Primary</button>
            <button type="button" className="btn btn-success">Success</button>
            <button type="button" className="btn btn-info">Info</button>
            <button type="button" className="btn btn-warning">Warning</button>
            <button type="button" className="btn btn-danger">Danger</button>
            <button type="button" className="btn btn-dark">Dark</button>
            <button type="button" className="btn btn-link">Link</button>
          </div>
        </div>
        <div className="x_panel">
          <div className="x_title">
            <h2>Rounded Button</h2>
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
            <button type="button" className="btn btn-round btn-secondary">Default</button>
            <button type="button" className="btn btn-round btn-primary">Primary</button>
            <button type="button" className="btn btn-round btn-success">Success</button>
            <button type="button" className="btn btn-round btn-info">Info</button>
            <button type="button" className="btn btn-round btn-warning">Warning</button>
            <button type="button" className="btn btn-round btn-danger">Danger</button>
          </div>
        </div>
        <div className="x_panel">
          <div className="x_title">
            <h2>Button Dropdown</h2>
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
            <div className="btn-group">
              <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Default
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Primary
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Success
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
          </div>
        </div>
        <div className="x_panel">
          <div className="x_title">
            <h2>Split Button Dropdown</h2>
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
            {/* Split button */}
            <div className="btn-group">
              <button type="button" className="btn btn-danger">Action</button>
              <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            {/* Split button */}
            <div className="btn-group">
              <button type="button" className="btn btn-danger">Action</button>
              <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
            {/* Split button */}
            <div className="btn-group">
              <button type="button" className="btn btn-danger">Action</button>
              <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
          </div>
        </div>
        <div className="x_panel">
          <div className="x_title">
            <h2>Button App Design</h2>
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
            <p>Add the class <code>.btn .btn-app</code> tag</p>
            <a className="btn btn-app">
              <i className="fa fa-edit" /> Edit
            </a>
            <a className="btn btn-app">
              <i className="fa fa-play" /> Play
            </a>
            <a className="btn btn-app">
              <i className="fa fa-pause" /> Pause
            </a>
            <a className="btn btn-app">
              <i className="fa fa-save" /> Save
            </a>
            <a className="btn btn-app">
              <span className="badge bg-red">6</span>
              <i className="fa fa-bullhorn" /> Notifications
            </a>
            <a className="btn btn-app">
              <i className="fa fa-repeat" /> Repeat
            </a>
            <a className="btn btn-app">
              <span className="badge bg-green">211</span>
              <i className="fa fa-users" /> Users
            </a>
            <a className="btn btn-app">
              <span className="badge bg-orange">32</span>
              <i className="fa fa-inbox" /> Orders
            </a>
            <a className="btn btn-app">
              <span className="badge bg-orange">12</span>
              <i className="fa fa-envelope" /> Inbox
            </a>
            <a className="btn btn-app">
              <span className="badge bg-blue">102</span>
              <i className="fa fa-heart-o" /> Likes
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="x_panel">
          <div className="x_title">
            <h2>Button Sizes</h2>
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
            <div className="buttons">
              {/* Standard button */}
              <button type="button" className="btn btn-secondary btn-lg">Large Button</button>
              <button type="button" className="btn btn-secondary btn-sm">Medium Button</button>
              <button type="button" className="btn btn-secondary btn-xs">Small Button</button>
              <br />
              <button type="button" className="btn btn-success btn-lg">Large Button</button>
              <button type="button" className="btn btn-success btn-sm">Medium Button</button>
              <button type="button" className="btn btn-success btn-xs">Small Button</button>
              <br />
              <button type="button" className="btn btn-info btn-lg">Large Button</button>
              <button type="button" className="btn btn-info btn-sm">Medium Button</button>
              <button type="button" className="btn btn-info btn-xs">Small Button</button>
              <br />
            </div>
          </div>
        </div>
        <div className="x_panel">
          <div className="x_title">
            <h2>Button Groups</h2>
            <ul className="nav navbar-right panel_toolbox">
              <li><a className="collapse-link"><i className="fa fa-chevron-up" /></a>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench" /></a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Settings 1</a>
                  <a className="dropdown-item" href="#">Settings 2</a>
                </div>
              </li>
              <li><a className="close-link"><i className="fa fa-close" /></a>
              </li>
            </ul>
            <div className="clearfix" />
          </div>
          <div className="x_content">
            <div className="row">
              <div className="col-md-6">
                <div className="btn-group">
                  <button className="btn btn-secondary" type="button">Left</button>
                  <button className="btn btn-secondary" type="button">Middle</button>
                  <button className="btn btn-secondary" type="button">Right</button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="btn-group btn-group-sm" role="group" aria-label="...">
                  <button className="btn btn-secondary" type="button">Left</button>
                  <button className="btn btn-secondary" type="button">Middle</button>
                  <button className="btn btn-secondary" type="button">Right</button>
                </div>
              </div>
            </div>
            <p className="text-muted">Vertical button groups</p>
            <div className="row">
              <div className="btn-group-vertical">
                <button className="btn btn-secondary" type="button">Top</button>
                <button className="btn btn-secondary" type="button">Middle</button>
                <button className="btn btn-secondary" type="button">Bottom</button>
              </div>
            </div>
            <p className="text-muted">Nested button groups</p>
            <div className="row">
              <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                <button type="button" className="btn btn-secondary">1</button>
                <button type="button" className="btn btn-secondary">2</button>
                <button type="button" className="btn btn-secondary">3</button>
                <div className="btn-group" role="group">
                  <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </button>
                  <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <a className="dropdown-item" href="#">Dropdown link</a>
                    <a className="dropdown-item" href="#">Dropdown link</a>
                    <a className="dropdown-item" href="#">Dropdown link</a>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-muted">Multiple button groups</p>
            <div className="row">
              <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div className="btn-group mr-2" role="group" aria-label="First group">
                  <button type="button" className="btn btn-secondary">1</button>
                  <button type="button" className="btn btn-secondary">2</button>
                  <button type="button" className="btn btn-secondary">3</button>
                  <button type="button" className="btn btn-secondary">4</button>
                </div>
                <div className="btn-group mr-2" role="group" aria-label="Second group">
                  <button type="button" className="btn btn-secondary">5</button>
                  <button type="button" className="btn btn-secondary">6</button>
                  <button type="button" className="btn btn-secondary">7</button>
                </div>
                <div className="btn-group" role="group" aria-label="Third group">
                  <button type="button" className="btn btn-secondary">8</button>
                </div>
              </div>
            </div>
            <p className="text-muted">Group Radio</p>
            <div className="row">
              <div className="btn-group form-check" data-toggle="buttons">
                <label className="btn btn-secondary">
                  <input type="radio" className="join-btn" name="options" id="option1" /> Option 1
                </label>
                <label className="btn btn-secondary">
                  <input type="radio" name="options" className="join-btn" id="option2" /> Option 2
                </label>
                <label className="btn btn-secondary">
                  <input type="radio" name="options" className="join-btn" id="option3" /> Option 3
                </label>
              </div>
            </div>
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
