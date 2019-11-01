import React, { Component } from 'react'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
           <div className="right_col" role="main">
            {/* top tiles */}
            <div className="row tile_count">
              <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                <span className="count_top"><i className="fa fa-user" /> Total Users</span>
                <div className="count">2500</div>
                <span className="count_bottom"><i className="green">4% </i> From last Week</span>
              </div>
              <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                <span className="count_top"><i className="fa fa-clock-o" /> Average Time</span>
                <div className="count">123.50</div>
                <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc" />3% </i> From last Week</span>
              </div>
              <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                <span className="count_top"><i className="fa fa-user" /> Total Males</span>
                <div className="count green">2,500</div>
                <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc" />34% </i> From last Week</span>
              </div>
              <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                <span className="count_top"><i className="fa fa-user" /> Total Females</span>
                <div className="count">4,567</div>
                <span className="count_bottom"><i className="red"><i className="fa fa-sort-desc" />12% </i> From last Week</span>
              </div>
              <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                <span className="count_top"><i className="fa fa-user" /> Total Collections</span>
                <div className="count">2,315</div>
                <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc" />34% </i> From last Week</span>
              </div>
              <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                <span className="count_top"><i className="fa fa-user" /> Total Connections</span>
                <div className="count">7,325</div>
                <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc" />34% </i> From last Week</span>
              </div>
            </div>
            {/* /top tiles */}
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="dashboard_graph">
                  <div className="row x_title">
                    <div className="col-md-6">
                      <h3>Network Activities <small>Graph title sub-title</small></h3>
                    </div>
                    <div className="col-md-6">
                      <div id="reportrange" className="pull-right" style={{background: '#fff', cursor: 'pointer', padding: '5px 10px', border: '1px solid #ccc'}}>
                        <i className="glyphicon glyphicon-calendar fa fa-calendar" />
                        <span>December 30, 2014 - January 28, 2015</span> <b className="caret" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9 col-sm-9 col-xs-12">
                    <div id="chart_plot_01" className="demo-placeholder" />
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-12 bg-white">
                    <div className="x_title">
                      <h2>Top Campaign Performance</h2>
                      <div className="clearfix" />
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-6">
                      <div>
                        <p>Facebook Campaign</p>
                        <div>
                          <div className="progress progress_sm" style={{width: '76%'}}>
                            <div className="progress-bar bg-green" role="progressbar" data-transitiongoal={80} />
                          </div>
                        </div>
                      </div>
                      <div>
                        <p>Twitter Campaign</p>
                        <div>
                          <div className="progress progress_sm" style={{width: '76%'}}>
                            <div className="progress-bar bg-green" role="progressbar" data-transitiongoal={60} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-6">
                      <div>
                        <p>Conventional Media</p>
                        <div>
                          <div className="progress progress_sm" style={{width: '76%'}}>
                            <div className="progress-bar bg-green" role="progressbar" data-transitiongoal={40} />
                          </div>
                        </div>
                      </div>
                      <div>
                        <p>Bill boards</p>
                        <div>
                          <div className="progress progress_sm" style={{width: '76%'}}>
                            <div className="progress-bar bg-green" role="progressbar" data-transitiongoal={50} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="x_panel tile fixed_height_320">
                  <div className="x_title">
                    <h2>App Versions</h2>
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
                    <h4>App Usage across versions</h4>
                    <div className="widget_summary">
                      <div className="w_left w_25">
                        <span>0.1.5.2</span>
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
                        <span>0.1.5.3</span>
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
                        <span>0.1.5.4</span>
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
                        <span>0.1.5.5</span>
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
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="x_panel tile fixed_height_320 overflow_hidden">
                  <div className="x_title">
                    <h2>Device Usage</h2>
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
                    <table  style={{width: '100%'}}>
                      <tbody><tr>
                          <th style={{width: '37%'}}>
                            <p>Top 5</p>
                          </th>
                          <th>
                            <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                              <p>Device</p>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                              <p>Progress</p>
                            </div>
                          </th>
                        </tr>
                        <tr>
                          <td>
                            <canvas className="canvasDoughnut" height={140} width={140} style={{margin: '15px 10px 10px 0'}} />
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
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="x_panel tile fixed_height_320">
                  <div className="x_title">
                    <h2>Quick Settings</h2>
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
                        <li><i className="fa fa-calendar-o" /><a href="#">Settings</a>
                        </li>
                        <li><i className="fa fa-bars" /><a href="#">Subscription</a>
                        </li>
                        <li><i className="fa fa-bar-chart" /><a href="#">Auto Renewal</a> </li>
                        <li><i className="fa fa-line-chart" /><a href="#">Achievements</a>
                        </li>
                        <li><i className="fa fa-bar-chart" /><a href="#">Auto Renewal</a> </li>
                        <li><i className="fa fa-line-chart" /><a href="#">Achievements</a>
                        </li>
                        <li><i className="fa fa-area-chart" /><a href="#">Logout</a>
                        </li>
                      </ul>
                      <div className="sidebar-widget">
                        <h4>Profile Completion</h4>
                        <canvas width={150} height={80} id="chart_gauge_01"  style={{width: '160px', height: '100px'}} />
                        <div className="goal-wrapper">
                          <span id="gauge-text" className="gauge-value pull-left">0</span>
                          <span className="gauge-value pull-left">%</span>
                          <span id="goal-text" className="goal-value pull-right">100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="x_panel">
                  <div className="x_title">
                    <h2>Recent Activities <small>Sessions</small></h2>
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
                      <ul className="list-unstyled timeline widget">
                        <li>
                          <div className="block">
                            <div className="block_content">
                              <h2 className="title">
                                <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>
                              </h2>
                              <div className="byline">
                                <span>13 hours ago</span> by <a>Jane Smith</a>
                              </div>
                              <p className="excerpt">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="block">
                            <div className="block_content">
                              <h2 className="title">
                                <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>
                              </h2>
                              <div className="byline">
                                <span>13 hours ago</span> by <a>Jane Smith</a>
                              </div>
                              <p className="excerpt">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="block">
                            <div className="block_content">
                              <h2 className="title">
                                <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>
                              </h2>
                              <div className="byline">
                                <span>13 hours ago</span> by <a>Jane Smith</a>
                              </div>
                              <p className="excerpt">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="block">
                            <div className="block_content">
                              <h2 className="title">
                                <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>
                              </h2>
                              <div className="byline">
                                <span>13 hours ago</span> by <a>Jane Smith</a>
                              </div>
                              <p className="excerpt">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-sm-8 col-xs-12">
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="x_panel">
                      <div className="x_title">
                        <h2>Visitors location <small>geo-presentation</small></h2>
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
                          <div className="col-md-4 hidden-small">
                            <h2 className="line_30">125.7k Views from 60 countries</h2>
                            <table className="countries_list">
                              <tbody>
                                <tr>
                                  <td>United States</td>
                                  <td className="fs15 fw700 text-right">33%</td>
                                </tr>
                                <tr>
                                  <td>France</td>
                                  <td className="fs15 fw700 text-right">27%</td>
                                </tr>
                                <tr>
                                  <td>Germany</td>
                                  <td className="fs15 fw700 text-right">16%</td>
                                </tr>
                                <tr>
                                  <td>Spain</td>
                                  <td className="fs15 fw700 text-right">11%</td>
                                </tr>
                                <tr>
                                  <td>Britain</td>
                                  <td className="fs15 fw700 text-right">10%</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div id="world-map-gdp" className="col-md-8 col-sm-12 col-xs-12" style={{height: '230px'}} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* Start to do list */}
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="x_panel">
                      <div className="x_title">
                        <h2>To Do List <small>Sample tasks</small></h2>
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
                        <div>
                          <ul className="to_do">
                            <li>
                              <p>
                                <input type="checkbox" className="flat" /> Schedule meeting with new client </p>
                            </li>
                            <li>
                              <p>
                                <input type="checkbox" className="flat" /> Create email address for new intern</p>
                            </li>
                            <li>
                              <p>
                                <input type="checkbox" className="flat" /> Have IT fix the network printer</p>
                            </li>
                            <li>
                              <p>
                                <input type="checkbox" className="flat" /> Copy backups to offsite location</p>
                            </li>
                            <li>
                              <p>
                                <input type="checkbox" className="flat" /> Food truck fixie locavors mcsweeney</p>
                            </li>
                            <li>
                              <p>
                                <input type="checkbox" className="flat" /> Food truck fixie locavors mcsweeney</p>
                            </li>
                            <li>
                              <p>
                                <input type="checkbox" className="flat" /> Create email address for new intern</p>
                            </li>
                            <li>
                              <p>
                                <input type="checkbox" className="flat" /> Have IT fix the network printer</p>
                            </li>
                            <li>
                              <p>
                                <input type="checkbox" className="flat" /> Copy backups to offsite location</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End to do list */}
                  {/* start of weather widget */}
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="x_panel">
                      <div className="x_title">
                        <h2>Daily active users <small>Sessions</small></h2>
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
                              <span><b>C</b></span>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="weather-icon">
                              <canvas height={84} width={84} id="partly-cloudy-day" />
                            </div>
                          </div>
                          <div className="col-sm-8">
                            <div className="weather-text">
                              <h2>Texas <br /><i>Partly Cloudy Day</i></h2>
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
                              <canvas id="clear-day" width={32} height={32} />
                              <h5>15 <i>km/h</i></h5>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="daily-weather">
                              <h2 className="day">Tue</h2>
                              <h3 className="degrees">25</h3>
                              <canvas height={32} width={32} id="rain" />
                              <h5>12 <i>km/h</i></h5>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="daily-weather">
                              <h2 className="day">Wed</h2>
                              <h3 className="degrees">27</h3>
                              <canvas height={32} width={32} id="snow" />
                              <h5>14 <i>km/h</i></h5>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="daily-weather">
                              <h2 className="day">Thu</h2>
                              <h3 className="degrees">28</h3>
                              <canvas height={32} width={32} id="sleet" />
                              <h5>15 <i>km/h</i></h5>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="daily-weather">
                              <h2 className="day">Fri</h2>
                              <h3 className="degrees">28</h3>
                              <canvas height={32} width={32} id="wind" />
                              <h5>11 <i>km/h</i></h5>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="daily-weather">
                              <h2 className="day">Sat</h2>
                              <h3 className="degrees">26</h3>
                              <canvas height={32} width={32} id="cloudy" />
                              <h5>10 <i>km/h</i></h5>
                            </div>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end of weather widget */}
                </div>
              </div>
            </div>
          </div>
                         
            </div>
        )
    }
}
