import React, { Component } from 'react'

export default class Dashboard2 extends Component {
    render() {
        return (
            <div>
                {/* page content */}
                <div className="right_col" role="main">
                <div className="row">
                    <div className="col-md-4 col-sm-6 ">
                    <div className="x_panel fixed_height_320">
                        <div className="x_title">
                        <h2>App Devices <small>Sessions</small></h2>
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
                        <h4>App Versions</h4>
                        <div className="widget_summary">
                            <div className="w_left w_25">
                            <span>1.5.2</span>
                            </div>
                            <div className="w_center w_55">
                            <div className="progress">
                                <div className="progress-bar bg-green" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '66%'}}>
                                <span className="sr-only">60% Complete</span>
                                </div>
                            </div>
                            </div>
                            <div className="w_right w_20">
                            <span>123k</span>
                            </div>
                            <div className="clearfix" />
                        </div>
                        <div className="widget_summary">
                            <div className="w_left w_25">
                            <span>1.5.3</span>
                            </div>
                            <div className="w_center w_55">
                            <div className="progress">
                                <div className="progress-bar bg-green" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '45%'}}>
                                <span className="sr-only">60% Complete</span>
                                </div>
                            </div>
                            </div>
                            <div className="w_right w_20">
                            <span>53k</span>
                            </div>
                            <div className="clearfix" />
                        </div>
                        <div className="widget_summary">
                            <div className="w_left w_25">
                            <span>1.5.4</span>
                            </div>
                            <div className="w_center w_55">
                            <div className="progress">
                                <div className="progress-bar bg-green" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '25%'}}>
                                <span className="sr-only">60% Complete</span>
                                </div>
                            </div>
                            </div>
                            <div className="w_right w_20">
                            <span>23k</span>
                            </div>
                            <div className="clearfix" />
                        </div>
                        <div className="widget_summary">
                            <div className="w_left w_25">
                            <span>1.5.5</span>
                            </div>
                            <div className="w_center w_55">
                            <div className="progress">
                                <div className="progress-bar bg-green" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '5%'}}>
                                <span className="sr-only">60% Complete</span>
                                </div>
                            </div>
                            </div>
                            <div className="w_right w_20">
                            <span>3k</span>
                            </div>
                            <div className="clearfix" />
                        </div>
                        <div className="widget_summary">
                            <div className="w_left w_25">
                            <span>0.1.5.6</span>
                            </div>
                            <div className="w_center w_55">
                            <div className="progress">
                                <div className="progress-bar bg-green" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '2%'}}>
                                <span className="sr-only">60% Complete</span>
                                </div>
                            </div>
                            </div>
                            <div className="w_right w_20">
                            <span>1k</span>
                            </div>
                            <div className="clearfix" />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-6 ">
                    <div className="x_panel fixed_height_320">
                        <div className="x_title">
                        <h2>Daily users <small>Sessions</small></h2>
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
                        <table className style={{width: '100%'}}>
                            <tbody><tr>
                                <th style={{width: '37%'}}>
                                <p>Top 5</p>
                                </th>
                                <th>
                                <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                                    <p >Device</p>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                                    <p className>Progress</p>
                                </div>
                                </th>
                            </tr>
                            <tr>
                                <td>
                                <canvas id="canvas1" height={140} width={140} style={{margin: '15px 10px 10px 0'}} />
                                </td>
                                <td>
                                <table className="tile_info">
                                    <tbody><tr>
                                        <td>
                                        <p><i className="fa fa-square blue" />IOS </p>
                                        </td>
                                        <td>30%</td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <p><i className="fa fa-square green" />Android </p>
                                        </td>
                                        <td>10%</td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <p><i className="fa fa-square purple" />Blackberry </p>
                                        </td>
                                        <td>20%</td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <p><i className="fa fa-square aero" />Symbian </p>
                                        </td>
                                        <td>15%</td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <p><i className="fa fa-square red" />Others </p>
                                        </td>
                                        <td>30%</td>
                                    </tr>
                                    </tbody></table>
                                </td>
                            </tr>
                            </tbody></table>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-6 ">
                    <div className="x_panel fixed_height_320">
                        <div className="x_title">
                        <h2>Profile Settings <small>Sessions</small></h2>
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
                        <div className="dashboard-widget-content">
                            <ul className="quick-list">
                            <li><i className="fa fa-line-chart" /><a href="#">Achievements</a></li>
                            <li><i className="fa fa-thumbs-up" /><a href="#">Favorites</a></li>
                            <li><i className="fa fa-calendar-o" /><a href="#">Activities</a></li>
                            <li><i className="fa fa-cog" /><a href="#">Settings</a></li>
                            <li><i className="fa fa-area-chart" /><a href="#">Logout</a></li>
                            </ul>
                            <div className="sidebar-widget">
                            <h4>Profile Completion</h4>
                            <canvas width={150} height={80} id="chart_gauge_01" className style={{width: '160px', height: '100px'}} />
                            <div className="goal-wrapper">
                                <span id="gauge-text" className="gauge-value gauge-chart pull-left">0</span>
                                <span className="gauge-value pull-left">%</span>
                                <span id="goal-text" className="goal-value pull-right">100%</span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-6  widget_tally_box">
                    <div className="x_panel">
                        <div className="x_title">
                        <h2>User Uptake</h2>
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
                        <div id="graph_bar" style={{width: '100%', height: '200px'}} />
                        <div className=" bg-white progress_summary">
                            <div className="row">
                            <div className="progress_title">
                                <span className="left">Escudor Wireless 1.0</span>
                                <span className="right">This sis</span>
                                <div className="clearfix" />
                            </div>
                            <div className="col-xs-2">
                                <span>SSD</span>
                            </div>
                            <div className="col-xs-8">
                                <div className="progress progress_sm">
                                <div className="progress-bar bg-green" role="progressbar" data-transitiongoal={89} />
                                </div>
                            </div>
                            <div className="col-xs-2 more_info">
                                <span>89%</span>
                            </div>
                            </div>
                            <div className="row">
                            <div className="progress_title">
                                <span className="left">Mobile Access</span>
                                <span className="right">Smart Phone</span>
                                <div className="clearfix" />
                            </div>
                            <div className="col-xs-2">
                                <span>App</span>
                            </div>
                            <div className="col-xs-8">
                                <div className="progress progress_sm">
                                <div className="progress-bar bg-green" role="progressbar" data-transitiongoal={79} />
                                </div>
                            </div>
                            <div className="col-xs-2 more_info">
                                <span>79%</span>
                            </div>
                            </div>
                            <div className="row">
                            <div className="progress_title">
                                <span className="left">WAN access users</span>
                                <span className="right">Total 69%</span>
                                <div className="clearfix" />
                            </div>
                            <div className="col-xs-2">
                                <span>Usr</span>
                            </div>
                            <div className="col-xs-8">
                                <div className="progress progress_sm">
                                <div className="progress-bar bg-green" role="progressbar" data-transitiongoal={69} />
                                </div>
                            </div>
                            <div className="col-xs-2 more_info">
                                <span>69%</span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* start of weather widget */}
                    <div className="col-md-4 col-sm-6 ">
                    <div className="x_panel">
                        <div className="x_title">
                        <h2>Today's Weather <small>Sessions</small></h2>
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
                            <div className="col-sm-12">
                            <div className="temperature"><b>Monday</b>, 07:30 AM
                                <span>F</span>
                                <span><b>C</b>
                                </span>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                            <div className="weather-icon">
                                <span>
                                <canvas height={84} width={84} id="partly-cloudy-day" />
                                </span>
                            </div>
                            </div>
                            <div className="col-sm-8">
                            <div className="weather-text">
                                <h2>Texas
                                <br /><i>Partly Cloudy Day</i>
                                </h2>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="weather-text pull-right">
                            <h3 className="degrees">23</h3>
                            </div>
                        </div>
                        <div className="clearfix" />
                        <div className="row weather-days">
                            <div className="col-sm-2">
                            <div className="daily-weather">
                                <h2 className="day">Mon</h2>
                                <h3 className="degrees">25</h3>
                                <span>
                                <canvas id="clear-day" width={32} height={32}>
                                </canvas>
                                </span>
                                <h5>15
                                <i>km/h</i>
                                </h5>
                            </div>
                            </div>
                            <div className="col-sm-2">
                            <div className="daily-weather">
                                <h2 className="day">Tue</h2>
                                <h3 className="degrees">25</h3>
                                <canvas height={32} width={32} id="rain" />
                                <h5>12
                                <i>km/h</i>
                                </h5>
                            </div>
                            </div>
                            <div className="col-sm-2">
                            <div className="daily-weather">
                                <h2 className="day">Wed</h2>
                                <h3 className="degrees">27</h3>
                                <canvas height={32} width={32} id="snow" />
                                <h5>14
                                <i>km/h</i>
                                </h5>
                            </div>
                            </div>
                            <div className="col-sm-2">
                            <div className="daily-weather">
                                <h2 className="day">Thu</h2>
                                <h3 className="degrees">28</h3>
                                <canvas height={32} width={32} id="sleet" />
                                <h5>15
                                <i>km/h</i>
                                </h5>
                            </div>
                            </div>
                            <div className="col-sm-2">
                            <div className="daily-weather">
                                <h2 className="day">Fri</h2>
                                <h3 className="degrees">28</h3>
                                <canvas height={32} width={32} id="wind" />
                                <h5>11
                                <i>km/h</i>
                                </h5>
                            </div>
                            </div>
                            <div className="col-sm-2">
                            <div className="daily-weather">
                                <h2 className="day">Sat</h2>
                                <h3 className="degrees">26</h3>
                                <canvas height={32} width={32} id="cloudy" />
                                <h5>10
                                <i>km/h</i>
                                </h5>
                            </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* end of weather widget */}
                    <div className="col-md-4 col-sm-6 ">
                    <div className="x_panel fixed_height_320">
                        <div className="x_title">
                        <h2>Incomes <small>Sessions</small></h2>
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
                        <div className="dashboard-widget-content">
                            <ul className="quick-list">
                            <li><i className="fa fa-bars" /><a href="#">Subscription</a></li>
                            <li><i className="fa fa-bar-chart" /><a href="#">Auto Renewal</a> </li>
                            <li><i className="fa fa-support" /><a href="#">Help Desk</a> </li>
                            <li><i className="fa fa-heart" /><a href="#">Donations</a> </li>
                            </ul>
                            <div className="sidebar-widget">
                            <h4>Goal</h4>
                            <canvas width={150} height={80} id="chart_gauge_02" className style={{width: '160px', height: '100px'}} />
                            <div className="goal-wrapper">
                                <span className="gauge-value pull-left">$</span>
                                <span id="gauge-text2" className="gauge-value pull-left">3,200</span>
                                <span id="goal-text2" className="goal-value pull-right">$5,000</span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* /page content */}
            </div>
        )
    }
}
