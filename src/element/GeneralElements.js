import React, {Component} from 'react'

export default class GeneralElements extends Component {
    render() {
        return (
            <div>
                <div
                    className="right_col"
                    role="main"
                    style={{
                    minHeight: '2926px'
                }}>
                    <div className>
                        <div className="page-title">
                            <div className="title_left">
                                <h3>General Elements</h3>
                            </div>
                            <div className="title_right">
                                <div className="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search for..."/>
                                        <span className="input-group-btn">
                                            <button className="btn btn-secondary" type="button">Go!</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"/>
                        <div className>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h2><i className="fa fa-bars"/>
                                            Tabs
                                            <small>Float left</small>
                                        </h2>
                                        <ul className="nav navbar-right panel_toolbox">
                                            <li>
                                                <a className="collapse-link"><i className="fa fa-chevron-up"/></a>
                                            </li>
                                            <li className="dropdown">
                                                <a
                                                    href="#"
                                                    className="dropdown-toggle"
                                                    data-toggle="dropdown"
                                                    role="button"
                                                    aria-expanded="false"><i className="fa fa-wrench"/></a>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" href="#">Settings 1</a>
                                                    <a className="dropdown-item" href="#">Settings 2</a>
                                                </div>
                                            </li>
                                            <li>
                                                <a className="close-link"><i className="fa fa-close"/></a>
                                            </li>
                                        </ul>
                                        <div className="clearfix"/>
                                    </div>
                                    <div className="x_content">
                                        <ul className="nav nav-tabs bar_tabs" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    id="home-tab"
                                                    data-toggle="tab"
                                                    href="#home"
                                                    role="tab"
                                                    aria-controls="home"
                                                    aria-selected="true">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    id="profile-tab"
                                                    data-toggle="tab"
                                                    href="#profile"
                                                    role="tab"
                                                    aria-controls="profile"
                                                    aria-selected="false">Profile</a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    id="contact-tab"
                                                    data-toggle="tab"
                                                    href="#contact"
                                                    role="tab"
                                                    aria-controls="contact"
                                                    aria-selected="false">Contact</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="myTabContent">
                                            <div
                                                className="tab-pane fade show active"
                                                id="home"
                                                role="tabpanel"
                                                aria-labelledby="home-tab">
                                                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
                                                stumptown aliqua, retro synth master cleanse. Mustache cliche tempor,
                                                williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
                                                dreamcatcher synth. Cosby sweater eu banh mi, qui irure terr.
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="profile"
                                                role="tabpanel"
                                                aria-labelledby="profile-tab">
                                                Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin
                                                coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next
                                                level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo
                                                booth letterpress, commodo enim craft beer mlkshk aliquip
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="contact"
                                                role="tabpanel"
                                                aria-labelledby="contact-tab">
                                                xxFood truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin
                                                coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next
                                                level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo
                                                booth letterpress, commodo enim craft beer mlkshk
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h2><i className="fa fa-bars"/>
                                            Tabs
                                            <small>Float right</small>
                                        </h2>
                                        <ul className="nav navbar-right panel_toolbox">
                                            <li>
                                                <a className="collapse-link"><i className="fa fa-chevron-up"/></a>
                                            </li>
                                            <li className="dropdown">
                                                <a
                                                    href="#"
                                                    className="dropdown-toggle"
                                                    data-toggle="dropdown"
                                                    role="button"
                                                    aria-expanded="false"><i className="fa fa-wrench"/></a>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" href="#">Settings 1</a>
                                                    <a className="dropdown-item" href="#">Settings 2</a>
                                                </div>
                                            </li>
                                            <li>
                                                <a className="close-link"><i className="fa fa-close"/></a>
                                            </li>
                                        </ul>
                                        <div className="clearfix"/>
                                    </div>
                                    <div className="x_content">
                                        <ul
                                            className="nav nav-tabs justify-content-end bar_tabs"
                                            id="myTab"
                                            role="tablist">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    id="home-tab"
                                                    data-toggle="tab"
                                                    href="#home1"
                                                    role="tab"
                                                    aria-controls="home"
                                                    aria-selected="true">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    id="profile-tab"
                                                    data-toggle="tab"
                                                    href="#profile1"
                                                    role="tab"
                                                    aria-controls="profile"
                                                    aria-selected="false">Profile</a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    id="contact-tab"
                                                    data-toggle="tab"
                                                    href="#contact1"
                                                    role="tab"
                                                    aria-controls="contact"
                                                    aria-selected="false">Contact</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="myTabContent">
                                            <div
                                                className="tab-pane fade show active"
                                                id="home1"
                                                role="tabpanel"
                                                aria-labelledby="home-tab">
                                                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
                                                stumptown aliqua, retro synth master cleanse. Mustache cliche tempor,
                                                williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
                                                dreamcatcher synth. Cosby sweater eu banh mi, qui irure terr.
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="profile1"
                                                role="tabpanel"
                                                aria-labelledby="profile-tab">
                                                Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin
                                                coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next
                                                level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo
                                                booth letterpress, commodo enim craft beer mlkshk aliquip
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="contact1"
                                                role="tabpanel"
                                                aria-labelledby="contact-tab">
                                                xxFood truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin
                                                coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next
                                                level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo
                                                booth letterpress, commodo enim craft beer mlkshk
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"/>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h2><i className="fa fa-bars"/>
                                            Vertical Tabs
                                            <small>Float left</small>
                                        </h2>
                                        <ul className="nav navbar-right panel_toolbox">
                                            <li>
                                                <a className="collapse-link"><i className="fa fa-chevron-up"/></a>
                                            </li>
                                            <li className="dropdown">
                                                <a
                                                    href="#"
                                                    className="dropdown-toggle"
                                                    data-toggle="dropdown"
                                                    role="button"
                                                    aria-expanded="false"><i className="fa fa-wrench"/></a>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" href="#">Settings 1</a>
                                                    <a className="dropdown-item" href="#">Settings 2</a>
                                                </div>
                                            </li>
                                            <li>
                                                <a className="close-link"><i className="fa fa-close"/></a>
                                            </li>
                                        </ul>
                                        <div className="clearfix"/>
                                    </div>
                                    <div className="x_content">
                                        <div className="col-xs-3">
                                            <div
                                                className="nav nav-tabs flex-column  bar_tabs"
                                                id="v-pills-tab"
                                                role="tablist"
                                                aria-orientation="vertical">
                                                <a
                                                    className="nav-link active"
                                                    id="v-pills-home-tab"
                                                    data-toggle="pill"
                                                    href="#v-pills-home"
                                                    role="tab"
                                                    aria-controls="v-pills-home"
                                                    aria-selected="true">Home</a>
                                                <a
                                                    className="nav-link"
                                                    id="v-pills-profile-tab"
                                                    data-toggle="pill"
                                                    href="#v-pills-profile"
                                                    role="tab"
                                                    aria-controls="v-pills-profile"
                                                    aria-selected="false">Profile</a>
                                                <a
                                                    className="nav-link"
                                                    id="v-pills-messages-tab"
                                                    data-toggle="pill"
                                                    href="#v-pills-messages"
                                                    role="tab"
                                                    aria-controls="v-pills-messages"
                                                    aria-selected="false">Messages</a>
                                                <a
                                                    className="nav-link"
                                                    id="v-pills-settings-tab"
                                                    data-toggle="pill"
                                                    href="#v-pills-settings"
                                                    role="tab"
                                                    aria-controls="v-pills-settings"
                                                    aria-selected="false">Settings</a>
                                            </div>
                                        </div>
                                        <div className="col-xs-9">
                                            <div className="tab-content" id="v-pills-tabContent">
                                                <div
                                                    className="tab-pane fade show active"
                                                    id="v-pills-home"
                                                    role="tabpanel"
                                                    aria-labelledby="v-pills-home-tab">Home Tab</div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="v-pills-profile"
                                                    role="tabpanel"
                                                    aria-labelledby="v-pills-profile-tab">... content</div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="v-pills-messages"
                                                    role="tabpanel"
                                                    aria-labelledby="v-pills-messages-tab">...content</div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="v-pills-settings"
                                                    role="tabpanel"
                                                    aria-labelledby="v-pills-settings-tab">...content</div>
                                            </div>
                                        </div>
                                        <div className="clearfix"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h2><i className="fa fa-bars"/>
                                            Vertical Tabs
                                            <small>Float left</small>
                                        </h2>
                                        <ul className="nav navbar-right panel_toolbox">
                                            <li>
                                                <a className="collapse-link"><i className="fa fa-chevron-up"/></a>
                                            </li>
                                            <li className="dropdown">
                                                <a
                                                    href="#"
                                                    className="dropdown-toggle"
                                                    data-toggle="dropdown"
                                                    role="button"
                                                    aria-expanded="false"><i className="fa fa-wrench"/></a>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" href="#">Settings 1</a>
                                                    <a className="dropdown-item" href="#">Settings 2</a>
                                                </div>
                                            </li>
                                            <li>
                                                <a className="close-link"><i className="fa fa-close"/></a>
                                            </li>
                                        </ul>
                                        <div className="clearfix"/>
                                    </div>
                                    <div className="x_content">
                                        <div className="col-xs-3">
                                            <div
                                                className="nav nav-tabs flex-column  bar_tabs"
                                                id="v-pills-tab"
                                                role="tablist"
                                                aria-orientation="vertical">
                                                <a
                                                    className="nav-link active"
                                                    id="v-pills-home-tab"
                                                    data-toggle="pill"
                                                    href="#v-pills-home1"
                                                    role="tab"
                                                    aria-controls="v-pills-home"
                                                    aria-selected="true">Home</a>
                                                <a
                                                    className="nav-link"
                                                    id="v-pills-profile-tab"
                                                    data-toggle="pill"
                                                    href="#v-pills-profile1"
                                                    role="tab"
                                                    aria-controls="v-pills-profile"
                                                    aria-selected="false">Profile</a>
                                                <a
                                                    className="nav-link"
                                                    id="v-pills-messages-tab"
                                                    data-toggle="pill"
                                                    href="#v-pills-messages1"
                                                    role="tab"
                                                    aria-controls="v-pills-messages"
                                                    aria-selected="false">Messages</a>
                                                <a
                                                    className="nav-link"
                                                    id="v-pills-settings-tab"
                                                    data-toggle="pill"
                                                    href="#v-pills-settings1"
                                                    role="tab"
                                                    aria-controls="v-pills-settings"
                                                    aria-selected="false">Settings</a>
                                            </div>
                                        </div>
                                        <div className="col-xs-9">
                                            <div className="tab-content" id="v-pills-tabContent">
                                                <div
                                                    className="tab-pane fade show active"
                                                    id="v-pills-home1"
                                                    role="tabpanel"
                                                    aria-labelledby="v-pills-home-tab">Home Tab</div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="v-pills-profile1"
                                                    role="tabpanel"
                                                    aria-labelledby="v-pills-profile-tab">... content</div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="v-pills-messages1"
                                                    role="tabpanel"
                                                    aria-labelledby="v-pills-messages-tab">...content</div>
                                                <div
                                                    className="tab-pane fade"
                                                    id="v-pills-settings1"
                                                    role="tabpanel"
                                                    aria-labelledby="v-pills-settings-tab">...content</div>
                                            </div>
                                        </div>
                                        <div className="clearfix"/>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"/>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h2><i className="fa fa-align-left"/>
                                            Collapsible / Accordion
                                            <small>Sessions</small>
                                        </h2>
                                        <ul className="nav navbar-right panel_toolbox">
                                            <li>
                                                <a className="collapse-link"><i className="fa fa-chevron-up"/></a>
                                            </li>
                                            <li className="dropdown">
                                                <a
                                                    href="#"
                                                    className="dropdown-toggle"
                                                    data-toggle="dropdown"
                                                    role="button"
                                                    aria-expanded="false"><i className="fa fa-wrench"/></a>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" href="#">Settings 1</a>
                                                    <a className="dropdown-item" href="#">Settings 2</a>
                                                </div>
                                            </li>
                                            <li>
                                                <a className="close-link"><i className="fa fa-close"/></a>
                                            </li>
                                        </ul>
                                        <div className="clearfix"/>
                                    </div>
                                    <div className="x_content">
                                        <div
                                            className="accordion"
                                            id="accordion"
                                            role="tablist"
                                            aria-multiselectable="true">
                                            <div className="panel">
                                                <a
                                                    className="panel-heading"
                                                    role="tab"
                                                    id="headingOne"
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne">
                                                    <h4 className="panel-title">Collapsible Group Items #1</h4>
                                                </a>
                                                <div
                                                    id="collapseOne"
                                                    className="panel-collapse collapse in"
                                                    role="tabpanel"
                                                    aria-labelledby="headingOne">
                                                    <div className="panel-body">
                                                        <table className="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th>#</th>
                                                                    <th>First Name</th>
                                                                    <th>Last Name</th>
                                                                    <th>Username</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>Mark</td>
                                                                    <td>Otto</td>
                                                                    <td>@mdo</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">2</th>
                                                                    <td>Jacob</td>
                                                                    <td>Thornton</td>
                                                                    <td>@fat</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">3</th>
                                                                    <td>Larry</td>
                                                                    <td>the Bird</td>
                                                                    <td>@twitter</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel">
                                                <a
                                                    className="panel-heading collapsed"
                                                    role="tab"
                                                    id="headingTwo"
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo">
                                                    <h4 className="panel-title">Collapsible Group Items #2</h4>
                                                </a>
                                                <div
                                                    id="collapseTwo"
                                                    className="panel-collapse collapse"
                                                    role="tabpanel"
                                                    aria-labelledby="headingTwo">
                                                    <div className="panel-body">
                                                        <p>
                                                            <strong>Collapsible Item 2 data</strong>
                                                        </p>
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                                        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel">
                                                <a
                                                    className="panel-heading collapsed"
                                                    role="tab"
                                                    id="headingThree"
                                                    data-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree">
                                                    <h4 className="panel-title">Collapsible Group Items #3</h4>
                                                </a>
                                                <div
                                                    id="collapseThree"
                                                    className="panel-collapse collapse"
                                                    role="tabpanel"
                                                    aria-labelledby="headingThree">
                                                    <div className="panel-body">
                                                        <p>
                                                            <strong>Collapsible Item 3 data</strong>
                                                        </p>
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                                        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h2><i className="fa fa-align-left"/>
                                            Collapsible / Accordion
                                            <small>Sessions</small>
                                        </h2>
                                        <ul className="nav navbar-right panel_toolbox">
                                            <li>
                                                <a className="collapse-link"><i className="fa fa-chevron-up"/></a>
                                            </li>
                                            <li className="dropdown">
                                                <a
                                                    href="#"
                                                    className="dropdown-toggle"
                                                    data-toggle="dropdown"
                                                    role="button"
                                                    aria-expanded="false"><i className="fa fa-wrench"/></a>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" href="#">Settings 1</a>
                                                    <a className="dropdown-item" href="#">Settings 2</a>
                                                </div>
                                            </li>
                                            <li>
                                                <a className="close-link"><i className="fa fa-close"/></a>
                                            </li>
                                        </ul>
                                        <div className="clearfix"/>
                                    </div>
                                    <div className="x_content">
                                        <div
                                            className="accordion"
                                            id="accordion1"
                                            role="tablist"
                                            aria-multiselectable="true">
                                            <div className="panel">
                                                <a
                                                    className="panel-heading"
                                                    role="tab"
                                                    id="headingOne1"
                                                    data-toggle="collapse"
                                                    data-parent="#accordion1"
                                                    href="#collapseOne1"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne">
                                                    <h4 className="panel-title">Collapsible Group Item #1</h4>
                                                </a>
                                                <div
                                                    id="collapseOne1"
                                                    className="panel-collapse collapse in"
                                                    role="tabpanel"
                                                    aria-labelledby="headingOne">
                                                    <div className="panel-body">
                                                        <table className="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th>#</th>
                                                                    <th>First Name</th>
                                                                    <th>Last Name</th>
                                                                    <th>Username</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>Mark</td>
                                                                    <td>Otto</td>
                                                                    <td>@mdo</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">2</th>
                                                                    <td>Jacob</td>
                                                                    <td>Thornton</td>
                                                                    <td>@fat</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">3</th>
                                                                    <td>Larry</td>
                                                                    <td>the Bird</td>
                                                                    <td>@twitter</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel">
                                                <a
                                                    className="panel-heading collapsed"
                                                    role="tab"
                                                    id="headingTwo1"
                                                    data-toggle="collapse"
                                                    data-parent="#accordion1"
                                                    href="#collapseTwo1"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo">
                                                    <h4 className="panel-title">Collapsible Group Item #2</h4>
                                                </a>
                                                <div
                                                    id="collapseTwo1"
                                                    className="panel-collapse collapse"
                                                    role="tabpanel"
                                                    aria-labelledby="headingTwo">
                                                    <div className="panel-body">
                                                        <p>
                                                            <strong>Collapsible Item 2 data</strong>
                                                        </p>
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                                        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel">
                                                <a
                                                    className="panel-heading collapsed"
                                                    role="tab"
                                                    id="headingThree1"
                                                    data-toggle="collapse"
                                                    data-parent="#accordion1"
                                                    href="#collapseThree1"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree">
                                                    <h4 className="panel-title">Collapsible Group Item #3</h4>
                                                </a>
                                                <div
                                                    id="collapseThree1"
                                                    className="panel-collapse collapse"
                                                    role="tabpanel"
                                                    aria-labelledby="headingThree">
                                                    <div className="panel-body">
                                                        <p>
                                                            <strong>Collapsible Item 3 data</strong>
                                                        </p>
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                                        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"/>
                        <div className>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h2>Tooltips
                                            <small>Hover to view</small>
                                        </h2>
                                        <ul className="nav navbar-right panel_toolbox">
                                            <li>
                                                <a className="collapse-link"><i className="fa fa-chevron-up"/></a>
                                            </li>
                                            <li className="dropdown">
                                                <a
                                                    href="#"
                                                    className="dropdown-toggle"
                                                    data-toggle="dropdown"
                                                    role="button"
                                                    aria-expanded="false"><i className="fa fa-wrench"/></a>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" href="#">Settings 1</a>
                                                    <a className="dropdown-item" href="#">Settings 2</a>
                                                </div>
                                            </li>
                                            <li>
                                                <a className="close-link"><i className="fa fa-close"/></a>
                                            </li>
                                        </ul>
                                        <div className="clearfix"/>
                                    </div>
                                    <div className="x_content">
                                        <p>Add small overlays of content for housing secondary information.</p>
                                        <div className="bs-example-popovers">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-container="body"
                                                data-toggle="popover"
                                                data-placement="left"
                                                data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                                                data-original-title
                                                title>
                                                Left
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-container="body"
                                                data-toggle="popover"
                                                data-placement="top"
                                                data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                                                data-original-title
                                                title>
                                                Top
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-container="body"
                                                data-toggle="popover"
                                                data-placement="bottom"
                                                data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                                Bottom
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-container="body"
                                                data-toggle="popover"
                                                data-placement="right"
                                                data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                                Right
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h2>Tooltips
                                            <small>Hover to view</small>
                                        </h2>
                                        <ul className="nav navbar-right panel_toolbox">
                                            <li>
                                                <a className="collapse-link"><i className="fa fa-chevron-up"/></a>
                                            </li>
                                            <li className="dropdown">
                                                <a
                                                    href="#"
                                                    className="dropdown-toggle"
                                                    data-toggle="dropdown"
                                                    role="button"
                                                    aria-expanded="false"><i className="fa fa-wrench"/></a>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" href="#">Settings 1</a>
                                                    <a className="dropdown-item" href="#">Settings 2</a>
                                                </div>
                                            </li>
                                            <li>
                                                <a className="close-link"><i className="fa fa-close"/></a>
                                            </li>
                                        </ul>
                                        <div className="clearfix"/>
                                    </div>
                                    <div className="x_content">
                                        <p>Hover over the links below to see tooltips:</p>
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-toggle="tooltip"
                                            data-placement="left"
                                            title
                                            data-original-title="Tooltip left">Tooltip left</button>
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title
                                            data-original-title="Tooltip top">Tooltip top</button>
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-toggle="tooltip"
                                            data-placement="bottom"
                                            title
                                            data-original-title="Tooltip bottom">Tooltip bottom</button>
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-toggle="tooltip"
                                            data-placement="right"
                                            title
                                            data-original-title="Tooltip right">Tooltip right</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="x_panel">
                                <div className="x_title">
                                    <h2>Daily active users
                                        <small>Sessions</small>
                                    </h2>
                                    <ul className="nav navbar-right panel_toolbox">
                                        <li>
                                            <a className="collapse-link"><i className="fa fa-chevron-up"/></a>
                                        </li>
                                        <li className="dropdown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                                role="button"
                                                aria-expanded="false"><i className="fa fa-wrench"/></a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Settings 1</a>
                                                <a className="dropdown-item" href="#">Settings 2</a>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="close-link"><i className="fa fa-close"/></a>
                                        </li>
                                    </ul>
                                    <div className="clearfix"/>
                                </div>
                                <div className="x_content">
                                    <ul className="list-unstyled timeline">
                                        <li>
                                            <div className="block">
                                                <div className="tags">
                                                    <a href className="tag">
                                                        <span>Entertainment</span>
                                                    </a>
                                                </div>
                                                <div className="block_content">
                                                    <h2 className="title">
                                                        <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>
                                                    </h2>
                                                    <div className="byline">
                                                        <span>13 hours ago</span>
                                                        by
                                                        <a>Jane Smith</a>
                                                    </div>
                                                    <p className="excerpt">Film festivals used to be do-or-die moments for movie
                                                        makers. They were where you met the producers that could fund your project, and
                                                        if the buyers liked your flick, they’d pay to Fast-forward and…
                                                        <a>Read&nbsp;More</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="block">
                                                <div className="tags">
                                                    <a href className="tag">
                                                        <span>Entertainment</span>
                                                    </a>
                                                </div>
                                                <div className="block_content">
                                                    <h2 className="title">
                                                        <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>
                                                    </h2>
                                                    <div className="byline">
                                                        <span>13 hours ago</span>
                                                        by
                                                        <a>Jane Smith</a>
                                                    </div>
                                                    <p className="excerpt">Film festivals used to be do-or-die moments for movie
                                                        makers. They were where you met the producers that could fund your project, and
                                                        if the buyers liked your flick, they’d pay to Fast-forward and…
                                                        <a>Read&nbsp;More</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="block">
                                                <div className="tags">
                                                    <a href className="tag">
                                                        <span>Entertainment</span>
                                                    </a>
                                                </div>
                                                <div className="block_content">
                                                    <h2 className="title">
                                                        <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>
                                                    </h2>
                                                    <div className="byline">
                                                        <span>13 hours ago</span>
                                                        by
                                                        <a>Jane Smith</a>
                                                    </div>
                                                    <p className="excerpt">Film festivals used to be do-or-die moments for movie
                                                        makers. They were where you met the producers that could fund your project, and
                                                        if the buyers liked your flick, they’d pay to Fast-forward and…
                                                        <a>Read&nbsp;More</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="x_panel">
                                <div className="x_title">
                                    <h2>Daily active users
                                        <small>Sessions</small>
                                    </h2>
                                    <ul className="nav navbar-right panel_toolbox">
                                        <li>
                                            <a className="collapse-link"><i className="fa fa-chevron-up"/></a>
                                        </li>
                                        <li className="dropdown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                                role="button"
                                                aria-expanded="false"><i className="fa fa-wrench"/></a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Settings 1</a>
                                                <a className="dropdown-item" href="#">Settings 2</a>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="close-link"><i className="fa fa-close"/></a>
                                        </li>
                                    </ul>
                                    <div className="clearfix"/>
                                </div>
                                <div className="x_content">
                                    <div className="bs-example" data-example-id="simple-jumbotron">
                                        <div className="jumbotron">
                                            <h1>Hello, world!</h1>
                                            <p>This is a simple hero unit, a simple jumbotron-style component for calling
                                                extra attention to featured content or information.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="x_panel">
                                <div className="x_title">
                                    <h2><i className="fa fa-chevron-down"/>
                                        Dropdowns
                                        <small>Multiple dropdown designs</small>
                                    </h2>
                                    <ul className="nav navbar-right panel_toolbox">
                                        <li>
                                            <a className="collapse-link"><i className="fa fa-chevron-up"/></a>
                                        </li>
                                        <li className="dropdown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                                role="button"
                                                aria-expanded="false"><i className="fa fa-wrench"/></a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Settings 1</a>
                                                <a className="dropdown-item" href="#">Settings 2</a>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="close-link"><i className="fa fa-close"/></a>
                                        </li>
                                    </ul>
                                    <div className="clearfix"/>
                                </div>
                                <div className="x_content">
                                    <p>Gentelella provides you with several dropdown designs for your choosing.</p>
                                    <ul className="nav nav-pills" role="tablist">
                                        <li role="presentation">
                                            <a href="#">Regular link</a>
                                        </li>
                                        <li role="presentation" className="dropdown">
                                            <a
                                                id="drop4"
                                                href="#"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                role="button"
                                                aria-expanded="false">
                                                Dropdown
                                                <span className="caret"/>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </li>
                                        <li role="presentation" className="dropdown">
                                            <a
                                                id="drop5"
                                                href="#"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                role="button"
                                                aria-expanded="false">
                                                Dropdown
                                                <span className="caret"/>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </li>
                                        <li role="presentation" className="dropdown">
                                            <a
                                                id="drop6"
                                                href="#"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                role="button"
                                                aria-expanded="false">
                                                Dropdown
                                                <span className="caret"/>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="x_panel">
                                <div className="x_title">
                                    <h2><i className="fa fa-square-o"/>
                                        Modals</h2>
                                    <ul className="nav navbar-right panel_toolbox">
                                        <li>
                                            <a className="collapse-link"><i className="fa fa-chevron-up"/></a>
                                        </li>
                                        <li className="dropdown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                                role="button"
                                                aria-expanded="false"><i className="fa fa-wrench"/></a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Settings 1</a>
                                                <a className="dropdown-item" href="#">Settings 2</a>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="close-link"><i className="fa fa-close"/></a>
                                        </li>
                                    </ul>
                                    <div className="clearfix"/>
                                </div>
                                <div className="x_content">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        data-toggle="modal"
                                        data-target=".bs-example-modal-lg">Large modal</button>
                                    <div
                                        className="modal fade bs-example-modal-lg"
                                        tabIndex={-1}
                                        role="dialog"
                                        aria-hidden="true">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="close" data-dismiss="modal">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                    <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                                                </div>
                                                <div className="modal-body">
                                                    <h4>Text in a modal</h4>
                                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                                        sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna,
                                                        vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla
                                                        non metus auctor fringilla.</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        data-toggle="modal"
                                        data-target=".bs-example-modal-sm">Small modal</button>
                                    <div
                                        className="modal fade bs-example-modal-sm"
                                        tabIndex={-1}
                                        role="dialog"
                                        aria-hidden="true">
                                        <div className="modal-dialog modal-sm">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                    <h4 className="modal-title" id="myModalLabel2">Modal title</h4>
                                                </div>
                                                <div className="modal-body">
                                                    <h4>Text in a modal</h4>
                                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                                        sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna,
                                                        vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla
                                                        non metus auctor fringilla.</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="x_panel">
                                <div className="x_title">
                                    <h2><i className="fa fa-bell"/>
                                        Notifications
                                        <small>Styled &amp; Custom notifications</small>
                                    </h2>
                                    <ul className="nav navbar-right panel_toolbox">
                                        <li>
                                            <a className="collapse-link"><i className="fa fa-chevron-up"/></a>
                                        </li>
                                        <li className="dropdown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                                role="button"
                                                aria-expanded="false"><i className="fa fa-wrench"/></a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Settings 1</a>
                                                <a className="dropdown-item" href="#">Settings 2</a>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="close-link"><i className="fa fa-close"/></a>
                                        </li>
                                    </ul>
                                    <div className="clearfix"/>
                                </div>
                                <div className="x_content">
                                    <p>Regular notifications</p>
                                    <button
                                        className="btn btn-secondary source"
                                        onclick="if (!window.__cfRLUnblockHandlers) return false; new PNotify({
                            title: 'Regular Success',
                            text: 'That thing that you were trying to do worked!',
                            type: 'success',
                            styling: 'bootstrap3'
                        });">Success</button>
                                    <button
                                        className="btn btn-secondary source"
                                        onclick="if (!window.__cfRLUnblockHandlers) return false; new PNotify({
                            title: 'New Thing',
                            text: 'Just to let you know, something happened.',
                            type: 'info',
                            styling: 'bootstrap3'
                        });">Info</button>
                                    <button
                                        className="btn btn-secondary source"
                                        onclick="if (!window.__cfRLUnblockHandlers) return false; new PNotify({
                            title: 'Regular Notice',
                            text: 'Check me out! I\'m a notice.',
                            styling: 'bootstrap3'
                        });">Notice</button>
                                    <button
                                        className="btn btn-secondary source"
                                        onclick="if (!window.__cfRLUnblockHandlers) return false; new PNotify({
                            title: 'Oh No!',
                            text: 'Something terrible happened.',
                            type: 'error',
                            styling: 'bootstrap3'
                        });">Error</button>
                                    <button
                                        className="btn btn-secondary source"
                                        onclick="if (!window.__cfRLUnblockHandlers) return false; new PNotify({
                            title: 'Oh No!',
                            text: 'Something terrible happened.',
                            type: 'info',
                            styling: 'bootstrap3',
                            addclass: 'dark'
                        });">Dark</button>
                                    <hr/>
                                    <p>Sticky notifications.. these wont close unless user closes them.</p>
                                    <button
                                        className="btn btn-secondary source"
                                        onclick="if (!window.__cfRLUnblockHandlers) return false; new PNotify({
                            title: 'Sticky Success',
                            text: 'Sticky success... I\'m not even gonna make a joke.',
                            type: 'success',
                            hide: false,
                            styling: 'bootstrap3'
                        });">Success</button>
                                    <button
                                        className="btn btn-secondary source"
                                        onclick="if (!window.__cfRLUnblockHandlers) return false; new PNotify({
                            title: 'Sticky Info',
                            text: 'Sticky Info... I\'m not even gonna make a joke.',
                            type: 'info',
                            hide: false,
                            styling: 'bootstrap3'
                        });">Info</button>
                                    <button
                                        className="btn btn-secondary source"
                                        onclick="if (!window.__cfRLUnblockHandlers) return false; new PNotify({
                            title: 'Sticky Warning',
                            text: 'Sticky Warning... I\'m not even gonna make a joke.',
                            hide: false,
                            styling: 'bootstrap3'
                        });">Warning</button>
                                    <button
                                        className="btn btn-secondary source"
                                        onclick="if (!window.__cfRLUnblockHandlers) return false; new PNotify({
                            title: 'Sticky Danger',
                            text: 'Sticky Danger... I\'m not even gonna make a joke.',
                            type: 'error',
                            hide: false,
                            styling: 'bootstrap3'
                        });">Error</button>
                                    <button
                                        className="btn btn-secondary source"
                                        onclick="if (!window.__cfRLUnblockHandlers) return false; new PNotify({
                            title: 'Sticky Success',
                            text: 'Sticky success... I\'m not even gonna make a joke.',
                            type: 'info',
                            hide: false,
                            styling: 'bootstrap3',
                            addclass: 'dark'
                        });">Dark</button>
                                    <hr/>
                                    <button
                                        className="btn btn-secondary source"
                                        onclick="if (!window.__cfRLUnblockHandlers) return false; new PNotify({
                            title: 'Non-Blocking Notice',
                            type: 'info',
                            text: 'When you hover over me I\'ll fade to show the elements underneath. Feel free to click any of them just like I wasn\'t even here.',
                            nonblock: {
                                nonblock: true
                            },
                            styling: 'bootstrap3',
                            addclass: 'dark'
                        });">Non-Blocking Notice</button>
                                    <hr/>
                                    <div id="antoox">
                                        <div>
                                            <div/>
                                            <div/>
                                            <div/>
                                        </div>
                                    </div>
                                    <button
                                        className="btn btn-secondary source"
                                        onclick="if (!window.__cfRLUnblockHandlers) return false; new TabbedNotification({
                            title: 'Tabbed Notificat',
                            text: 'Sticky success... Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. ',
                            type: 'success',
                            sound: false
                        })">Success</button>
                                    <button
                                        className="btn btn-secondary source"
                                        onclick="if (!window.__cfRLUnblockHandlers) return false; new TabbedNotification({
                            title: 'Tabbed Notificat',
                            text: 'Custom Info... Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.',
                            type: 'info',
                            sound: false
                        })">Info</button>
                                    <button
                                        className="btn btn-secondary source"
                                        onclick="if (!window.__cfRLUnblockHandlers) return false; new TabbedNotification({
                            title: 'Tabbed Notificat',
                            text: 'Custom Warning... Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. ',
                            type: 'warning',
                            sound: false
                        })">Warning</button>
                                    <button
                                        className="btn btn-secondary source"
                                        onclick="if (!window.__cfRLUnblockHandlers) return false; new TabbedNotification({
                            title: 'Custom Notification error',
                            text: 'Custom Error... Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. ',
                            type: 'error',
                            sound: false
                        })">Error</button>
                                    <button
                                        className="btn btn-secondary source"
                                        onclick="if (!window.__cfRLUnblockHandlers) return false; new TabbedNotification({
                            title: 'Tabbed notification dark',
                            text: 'Custom Dark... Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. ',
                            type: 'dark',
                            sound: false
                        })">Dark</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="x_panel">
                                <div className="x_title">
                                    <h2>Pop Overs
                                        <small>Sessions</small>
                                    </h2>
                                    <ul className="nav navbar-right panel_toolbox">
                                        <li>
                                            <a className="collapse-link"><i className="fa fa-chevron-up"/></a>
                                        </li>
                                        <li className="dropdown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                                role="button"
                                                aria-expanded="false"><i className="fa fa-wrench"/></a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Settings 1</a>
                                                <a className="dropdown-item" href="#">Settings 2</a>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="close-link"><i className="fa fa-close"/></a>
                                        </li>
                                    </ul>
                                    <div className="clearfix"/>
                                </div>
                                <div className="x_content bs-example-popovers">
                                    <div className="alert alert-success alert-dismissible " role="alert">
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                        <strong>Holy guacamole!</strong>
                                        Best check yo self, you're not looking too good.
                                    </div>
                                    <div className="alert alert-info alert-dismissible " role="alert">
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                        <strong>Holy guacamole!</strong>
                                        Best check yo self, you're not looking too good.
                                    </div>
                                    <div className="alert alert-warning alert-dismissible " role="alert">
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                        <strong>Holy guacamole!</strong>
                                        Best check yo self, you're not looking too good.
                                    </div>
                                    <div className="alert alert-danger alert-dismissible " role="alert">
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                        <strong>Holy guacamole!</strong>
                                        Best check yo self, you're not looking too good.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="x_panel">
                                <div className="x_title">
                                    <h2><i className="fa fa-align-left"/>
                                        Progress bar<small>Sessions</small>
                                    </h2>
                                    <ul className="nav navbar-right panel_toolbox">
                                        <li>
                                            <a className="collapse-link"><i className="fa fa-chevron-up"/></a>
                                        </li>
                                        <li className="dropdown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                                role="button"
                                                aria-expanded="false"><i className="fa fa-wrench"/></a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Settings 1</a>
                                                <a className="dropdown-item" href="#">Settings 2</a>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="close-link"><i className="fa fa-close"/></a>
                                        </li>
                                    </ul>
                                    <div className="clearfix"/>
                                </div>
                                <div className="x_content">
                                    <p>Bootstrap progress bar with animated loading bar, add right to .progress to
                                        align right</p>
                                    <div className="progress">
                                        <div
                                            className="progress-bar progress-bar-striped"
                                            role="progressbar"
                                            style={{
                                            width: '10%'
                                        }}
                                            aria-valuenow={10}
                                            aria-valuemin={0}
                                            aria-valuemax={100}/>
                                    </div>
                                    <div className="progress">
                                        <div
                                            className="progress-bar progress-bar-striped bg-success"
                                            role="progressbar"
                                            style={{
                                            width: '25%'
                                        }}
                                            aria-valuenow={25}
                                            aria-valuemin={0}
                                            aria-valuemax={100}/>
                                    </div>
                                    <div className="progress">
                                        <div
                                            className="progress-bar progress-bar-striped bg-info"
                                            role="progressbar"
                                            style={{
                                            width: '50%'
                                        }}
                                            aria-valuenow={50}
                                            aria-valuemin={0}
                                            aria-valuemax={100}/>
                                    </div>
                                    <div className="progress">
                                        <div
                                            className="progress-bar progress-bar-striped bg-warning"
                                            role="progressbar"
                                            style={{
                                            width: '75%'
                                        }}
                                            aria-valuenow={75}
                                            aria-valuemin={0}
                                            aria-valuemax={100}/>
                                    </div>
                                    <div className="progress">
                                        <div
                                            className="progress-bar progress-bar-striped bg-danger"
                                            role="progressbar"
                                            style={{
                                            width: '100%'
                                        }}
                                            aria-valuenow={100}
                                            aria-valuemin={0}
                                            aria-valuemax={100}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="x_panel">
                                <div className="x_title">
                                    <h2>To Do List
                                        <small>Sample tasks</small>
                                    </h2>
                                    <ul className="nav navbar-right panel_toolbox">
                                        <li>
                                            <a className="collapse-link"><i className="fa fa-chevron-up"/></a>
                                        </li>
                                        <li className="dropdown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                                role="button"
                                                aria-expanded="false"><i className="fa fa-wrench"/></a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Settings 1</a>
                                                <a className="dropdown-item" href="#">Settings 2</a>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="close-link"><i className="fa fa-close"/></a>
                                        </li>
                                    </ul>
                                    <div className="clearfix"/>
                                </div>
                                <div className="x_content">
                                    <div className>
                                        <ul className="to_do">
                                            <li>
                                                <p></p>
                                                <div
                                                    className="icheckbox_flat-green"
                                                    style={{
                                                    position: 'relative'
                                                }}><input
                                                    type="checkbox"
                                                    className="flat"
                                                    style={{
                position: 'absolute',
                opacity: 0
            }}/><ins
                                                    className="iCheck-helper"
                                                    style={{
                position: 'absolute',
                top: '0%',
                left: '0%',
                display: 'block',
                width: '100%',
                height: '100%',
                margin: '0px',
                padding: '0px',
                background: 'rgb(255, 255, 255)',
                border: '0px',
                opacity: 0
            }}/></div>
                                                Schedule meeting with new client
                                                <p/>
                                            </li>
                                            <li>
                                                <p></p>
                                                <div
                                                    className="icheckbox_flat-green"
                                                    style={{
                                                    position: 'relative'
                                                }}><input
                                                    type="checkbox"
                                                    className="flat"
                                                    style={{
                position: 'absolute',
                opacity: 0
            }}/><ins
                                                    className="iCheck-helper"
                                                    style={{
                position: 'absolute',
                top: '0%',
                left: '0%',
                display: 'block',
                width: '100%',
                height: '100%',
                margin: '0px',
                padding: '0px',
                background: 'rgb(255, 255, 255)',
                border: '0px',
                opacity: 0
            }}/></div>
                                                Create email address for new intern<p/>
                                            </li>
                                            <li>
                                                <p></p>
                                                <div
                                                    className="icheckbox_flat-green"
                                                    style={{
                                                    position: 'relative'
                                                }}><input
                                                    type="checkbox"
                                                    className="flat"
                                                    style={{
                position: 'absolute',
                opacity: 0
            }}/><ins
                                                    className="iCheck-helper"
                                                    style={{
                position: 'absolute',
                top: '0%',
                left: '0%',
                display: 'block',
                width: '100%',
                height: '100%',
                margin: '0px',
                padding: '0px',
                background: 'rgb(255, 255, 255)',
                border: '0px',
                opacity: 0
            }}/></div>
                                                Have IT fix the network printer<p/>
                                            </li>
                                            <li>
                                                <p></p>
                                                <div
                                                    className="icheckbox_flat-green"
                                                    style={{
                                                    position: 'relative'
                                                }}><input
                                                    type="checkbox"
                                                    className="flat"
                                                    style={{
                position: 'absolute',
                opacity: 0
            }}/><ins
                                                    className="iCheck-helper"
                                                    style={{
                position: 'absolute',
                top: '0%',
                left: '0%',
                display: 'block',
                width: '100%',
                height: '100%',
                margin: '0px',
                padding: '0px',
                background: 'rgb(255, 255, 255)',
                border: '0px',
                opacity: 0
            }}/></div>
                                                Copy backups to offsite location<p/>
                                            </li>
                                            <li>
                                                <p></p>
                                                <div
                                                    className="icheckbox_flat-green"
                                                    style={{
                                                    position: 'relative'
                                                }}><input
                                                    type="checkbox"
                                                    className="flat"
                                                    style={{
                position: 'absolute',
                opacity: 0
            }}/><ins
                                                    className="iCheck-helper"
                                                    style={{
                position: 'absolute',
                top: '0%',
                left: '0%',
                display: 'block',
                width: '100%',
                height: '100%',
                margin: '0px',
                padding: '0px',
                background: 'rgb(255, 255, 255)',
                border: '0px',
                opacity: 0
            }}/></div>
                                                Food truck fixie locavors mcsweeney<p/>
                                            </li>
                                            <li>
                                                <p></p>
                                                <div
                                                    className="icheckbox_flat-green"
                                                    style={{
                                                    position: 'relative'
                                                }}><input
                                                    type="checkbox"
                                                    className="flat"
                                                    style={{
                position: 'absolute',
                opacity: 0
            }}/><ins
                                                    className="iCheck-helper"
                                                    style={{
                position: 'absolute',
                top: '0%',
                left: '0%',
                display: 'block',
                width: '100%',
                height: '100%',
                margin: '0px',
                padding: '0px',
                background: 'rgb(255, 255, 255)',
                border: '0px',
                opacity: 0
            }}/></div>
                                                Food truck fixie locavors mcsweeney<p/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="x_panel">
                                <div className="x_title">
                                    <h2>Daily active users
                                        <small>Sessions</small>
                                    </h2>
                                    <ul className="nav navbar-right panel_toolbox">
                                        <li>
                                            <a className="collapse-link"><i className="fa fa-chevron-up"/></a>
                                        </li>
                                        <li className="dropdown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                                role="button"
                                                aria-expanded="false"><i className="fa fa-wrench"/></a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Settings 1</a>
                                                <a className="dropdown-item" href="#">Settings 2</a>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="close-link"><i className="fa fa-close"/></a>
                                        </li>
                                    </ul>
                                    <div className="clearfix"/>
                                </div>
                                <div className="x_content">
                                    <ul className="list-unstyled msg_list">
                                        <li>
                                            <a>
                                                <span className="image">
                                                    <img src="images/img.jpg" alt="img"/>
                                                </span>
                                                <span>
                                                    <span>John Smith</span>
                                                    <span className="time">3 mins ago</span>
                                                </span>
                                                <span className="message">
                                                    Film festivals used to be do-or-die moments for movie makers. They were where
                                                    you met the producers that
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <span className="image">
                                                    <img src="images/img.jpg" alt="img"/>
                                                </span>
                                                <span>
                                                    <span>John Smith</span>
                                                    <span className="time">3 mins ago</span>
                                                </span>
                                                <span className="message">
                                                    Film festivals used to be do-or-die moments for movie makers. They were where
                                                    you met the producers that
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <span className="image">
                                                    <img src="images/img.jpg" alt="img"/>
                                                </span>
                                                <span>
                                                    <span>John Smith</span>
                                                    <span className="time">3 mins ago</span>
                                                </span>
                                                <span className="message">
                                                    Film festivals used to be do-or-die moments for movie makers. They were where
                                                    you met the producers that
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <span className="image">
                                                    <img src="images/img.jpg" alt="img"/>
                                                </span>
                                                <span>
                                                    <span>John Smith</span>
                                                    <span className="time">3 mins ago</span>
                                                </span>
                                                <span className="message">
                                                    Film festivals used to be do-or-die moments for movie makers. They were where
                                                    you met the producers that
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"/>
                </div>

            </div>
        )
    }
}
