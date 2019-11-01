import React, { Component } from 'react'

export default class Dashboard1 extends Component {
    render() {
        return (
            <div>
                {/* page content */}
                <div className="right_col" role="main">
                <div >
                    <div className="row top_tiles">
                    <div className="animated flipInY col-lg-3 col-md-3 col-sm-6 ">
                        <div className="tile-stats">
                        <div className="icon"><i className="fa fa-caret-square-o-right" /></div>
                        <div className="count">179</div>
                        <h3>New Sign ups</h3>
                        <p>Lorem ipsum psdea itgum rixt.</p>
                        </div>
                    </div>
                    <div className="animated flipInY col-lg-3 col-md-3 col-sm-6 ">
                        <div className="tile-stats">
                        <div className="icon"><i className="fa fa-comments-o" /></div>
                        <div className="count">179</div>
                        <h3>New Sign ups</h3>
                        <p>Lorem ipsum psdea itgum rixt.</p>
                        </div>
                    </div>
                    <div className="animated flipInY col-lg-3 col-md-3 col-sm-6 ">
                        <div className="tile-stats">
                        <div className="icon"><i className="fa fa-sort-amount-desc" /></div>
                        <div className="count">179</div>
                        <h3>New Sign ups</h3>
                        <p>Lorem ipsum psdea itgum rixt.</p>
                        </div>
                    </div>
                    <div className="animated flipInY col-lg-3 col-md-3 col-sm-6 ">
                        <div className="tile-stats">
                        <div className="icon"><i className="fa fa-check-square-o" /></div>
                        <div className="count">179</div>
                        <h3>New Sign ups</h3>
                        <p>Lorem ipsum psdea itgum rixt.</p>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                        <div className="x_panel">
                        <div className="x_title">
                            <h2>Transaction Summary <small>Weekly progress</small></h2>
                            <div className="filter">
                            <div id="reportrange" className="pull-right" style={{background: '#fff', cursor: 'pointer', padding: '5px 10px', border: '1px solid #ccc'}}>
                                <i className="glyphicon glyphicon-calendar fa fa-calendar" />
                                <span>December 30, 2014 - January 28, 2015</span> <b className="caret" />
                            </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                        <div className="x_content">
                            <div className="col-md-9 col-sm-12 ">
                            <div className="demo-container" style={{height: '280px'}}>
                                <div id="chart_plot_02" className="demo-placeholder" />
                            </div>
                            <div className="tiles">
                                <div className="col-md-4 tile">
                                <span>Total Sessions</span>
                                <h2>231,809</h2>
                                <span className="sparkline11 graph" style={{height: '160px'}}>
                                    <canvas width={200} height={60} style={{display: 'inline-block', verticalAlign: 'top', width: '94px', height: '30px'}} />
                                </span>
                                </div>
                                <div className="col-md-4 tile">
                                <span>Total Revenue</span>
                                <h2>$231,809</h2>
                                <span className="sparkline22 graph" style={{height: '160px'}}>
                                    <canvas width={200} height={60} style={{display: 'inline-block', verticalAlign: 'top', width: '94px', height: '30px'}} />
                                </span>
                                </div>
                                <div className="col-md-4 tile">
                                <span>Total Sessions</span>
                                <h2>231,809</h2>
                                <span className="sparkline11 graph" style={{height: '160px'}}>
                                    <canvas width={200} height={60} style={{display: 'inline-block', verticalAlign: 'top', width: '94px', height: '30px'}} />
                                </span>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-3 col-sm-12 ">
                            <div>
                                <div className="x_title">
                                <h2>Top Profiles</h2>
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
                                <ul className="list-unstyled top_profiles scroll-view">
                                <li className="media event">
                                    <a className="pull-left border-aero profile_thumb">
                                    <i className="fa fa-user aero" />
                                    </a>
                                    <div className="media-body">
                                    <a className="title" href="#">Ms. Mary Jane</a>
                                    <p><strong>$2300. </strong> Agent Avarage Sales </p>
                                    <p> <small>12 Sales Today</small>
                                    </p>
                                    </div>
                                </li>
                                <li className="media event">
                                    <a className="pull-left border-green profile_thumb">
                                    <i className="fa fa-user green" />
                                    </a>
                                    <div className="media-body">
                                    <a className="title" href="#">Ms. Mary Jane</a>
                                    <p><strong>$2300. </strong> Agent Avarage Sales </p>
                                    <p> <small>12 Sales Today</small>
                                    </p>
                                    </div>
                                </li>
                                <li className="media event">
                                    <a className="pull-left border-blue profile_thumb">
                                    <i className="fa fa-user blue" />
                                    </a>
                                    <div className="media-body">
                                    <a className="title" href="#">Ms. Mary Jane</a>
                                    <p><strong>$2300. </strong> Agent Avarage Sales </p>
                                    <p> <small>12 Sales Today</small>
                                    </p>
                                    </div>
                                </li>
                                <li className="media event">
                                    <a className="pull-left border-aero profile_thumb">
                                    <i className="fa fa-user aero" />
                                    </a>
                                    <div className="media-body">
                                    <a className="title" href="#">Ms. Mary Jane</a>
                                    <p><strong>$2300. </strong> Agent Avarage Sales </p>
                                    <p> <small>12 Sales Today</small>
                                    </p>
                                    </div>
                                </li>
                                <li className="media event">
                                    <a className="pull-left border-green profile_thumb">
                                    <i className="fa fa-user green" />
                                    </a>
                                    <div className="media-body">
                                    <a className="title" href="#">Ms. Mary Jane</a>
                                    <p><strong>$2300. </strong> Agent Avarage Sales </p>
                                    <p> <small>12 Sales Today</small>
                                    </p>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                        <div className="x_panel">
                        <div className="x_title">
                            <h2>Weekly Summary <small>Activity shares</small></h2>
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
                            <div className="row" style={{borderBottom: '1px solid #E0E0E0', paddingBottom: '5px', marginBottom: '5px'}}>
                            <div className="col-md-7" style={{overflow: 'hidden'}}>
                                <span className="sparkline_one" style={{height: '160px', padding: '10px 25px'}}>
                                <canvas width={200} height={60} style={{display: 'inline-block', verticalAlign: 'top', width: '94px', height: '30px'}} />
                                </span>
                                <h4 style={{margin: '18px'}}>Weekly sales progress</h4>
                            </div>
                            <div className="col-md-5">
                                <div className="row" style={{textAlign: 'center'}}>
                                <div className="col-md-4">
                                    <canvas className="canvasDoughnut" height={110} width={110} style={{margin: '5px 10px 10px 0'}} />
                                    <h4 style={{margin: 0}}>Bounce Rates</h4>
                                </div>
                                <div className="col-md-4">
                                    <canvas className="canvasDoughnut" height={110} width={110} style={{margin: '5px 10px 10px 0'}} />
                                    <h4 style={{margin: 0}}>New Traffic</h4>
                                </div>
                                <div className="col-md-4">
                                    <canvas className="canvasDoughnut" height={110} width={110} style={{margin: '5px 10px 10px 0'}} />
                                    <h4 style={{margin: 0}}>Device Share</h4>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4">
                        <div className="x_panel">
                        <div className="x_title">
                            <h2>Top Profiles <small>Sessions</small></h2>
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
                            <article className="media event">
                            <a className="pull-left date">
                                <p className="month">April</p>
                                <p className="day">23</p>
                            </a>
                            <div className="media-body">
                                <a className="title" href="#">Item One Title</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </article>
                            <article className="media event">
                            <a className="pull-left date">
                                <p className="month">April</p>
                                <p className="day">23</p>
                            </a>
                            <div className="media-body">
                                <a className="title" href="#">Item Two Title</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </article>
                            <article className="media event">
                            <a className="pull-left date">
                                <p className="month">April</p>
                                <p className="day">23</p>
                            </a>
                            <div className="media-body">
                                <a className="title" href="#">Item Two Title</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </article>
                            <article className="media event">
                            <a className="pull-left date">
                                <p className="month">April</p>
                                <p className="day">23</p>
                            </a>
                            <div className="media-body">
                                <a className="title" href="#">Item Two Title</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </article>
                            <article className="media event">
                            <a className="pull-left date">
                                <p className="month">April</p>
                                <p className="day">23</p>
                            </a>
                            <div className="media-body">
                                <a className="title" href="#">Item Three Title</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </article>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="x_panel">
                        <div className="x_title">
                            <h2>Top Profiles <small>Sessions</small></h2>
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
                            <article className="media event">
                            <a className="pull-left date">
                                <p className="month">April</p>
                                <p className="day">23</p>
                            </a>
                            <div className="media-body">
                                <a className="title" href="#">Item One Title</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </article>
                            <article className="media event">
                            <a className="pull-left date">
                                <p className="month">April</p>
                                <p className="day">23</p>
                            </a>
                            <div className="media-body">
                                <a className="title" href="#">Item Two Title</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </article>
                            <article className="media event">
                            <a className="pull-left date">
                                <p className="month">April</p>
                                <p className="day">23</p>
                            </a>
                            <div className="media-body">
                                <a className="title" href="#">Item Two Title</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </article>
                            <article className="media event">
                            <a className="pull-left date">
                                <p className="month">April</p>
                                <p className="day">23</p>
                            </a>
                            <div className="media-body">
                                <a className="title" href="#">Item Two Title</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </article>
                            <article className="media event">
                            <a className="pull-left date">
                                <p className="month">April</p>
                                <p className="day">23</p>
                            </a>
                            <div className="media-body">
                                <a className="title" href="#">Item Three Title</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </article>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="x_panel">
                        <div className="x_title">
                            <h2>Top Profiles <small>Sessions</small></h2>
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
                            <article className="media event">
                            <a className="pull-left date">
                                <p className="month">April</p>
                                <p className="day">23</p>
                            </a>
                            <div className="media-body">
                                <a className="title" href="#">Item One Title</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </article>
                            <article className="media event">
                            <a className="pull-left date">
                                <p className="month">April</p>
                                <p className="day">23</p>
                            </a>
                            <div className="media-body">
                                <a className="title" href="#">Item Two Title</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </article>
                            <article className="media event">
                            <a className="pull-left date">
                                <p className="month">April</p>
                                <p className="day">23</p>
                            </a>
                            <div className="media-body">
                                <a className="title" href="#">Item Two Title</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </article>
                            <article className="media event">
                            <a className="pull-left date">
                                <p className="month">April</p>
                                <p className="day">23</p>
                            </a>
                            <div className="media-body">
                                <a className="title" href="#">Item Two Title</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </article>
                            <article className="media event">
                            <a className="pull-left date">
                                <p className="month">April</p>
                                <p className="day">23</p>
                            </a>
                            <div className="media-body">
                                <a className="title" href="#">Item Three Title</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            </article>
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
