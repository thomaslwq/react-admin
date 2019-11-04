import React, {Component} from 'react'

export default class Typography extends Component {
    render() {
        return (
            <div>
                <div
                    className="right_col"
                    role="main"
                    style={{
                    minHeight: '1049px'
                }}>
                    <div className>
                        <div className="page-title">
                            <div className="title_left">
                                <h3>Typography</h3>
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
                        <div className="row">
                            <div className="col-md-12">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h2>Typography
                                            <small>different design elements</small>
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
                                    <div
                                        className="x_content"
                                        style={{
                                        display: 'block'
                                    }}>
                                        <div className="col-md-8 col-lg-8 col-sm-7">
                                            <blockquote>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat
                                                    a ante Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                    erat a ante Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                                    posuere erat a ante Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Integer posuere erat a ante.</p>
                                                <footer>Someone famous in
                                                    <cite title="Source Title">Source Title</cite>
                                                </footer>
                                            </blockquote>
                                            <blockquote className="blockquote-reverse">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat
                                                    a ante Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                                    erat a ante Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                                    posuere erat a ante Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Integer posuere erat a ante.</p>
                                                <footer>Someone famous in
                                                    <cite title="Source Title">Source Title</cite>
                                                </footer>
                                            </blockquote>
                                        </div>
                                        <div className="col-md-4 col-lg-4 col-sm-5">
                                            <h1>h1. Bootstrap heading</h1>
                                            <h2>h2. Bootstrap heading</h2>
                                            <h3>h3. Bootstrap heading</h3>
                                            <h4>h4. Bootstrap heading</h4>
                                            <h5>h5. Bootstrap heading</h5>
                                            <h6>h6. Bootstrap heading</h6>
                                        </div>
                                        <div className="clearfix"/>
                                        <div className="col-md-12">
                                            <h4>Labels and badges</h4>
                                            <span className="badge badge-primary">Primary</span>
                                            <span className="badge badge-secondary">Secondary</span>
                                            <span className="badge badge-success">Success</span>
                                            <span className="badge badge-danger">Danger</span>
                                            <span className="badge badge-warning">Warning</span>
                                            <span className="badge badge-info">Info</span>
                                            <span className="badge badge-light">Light</span>
                                            <span className="badge badge-dark">Dark</span>
                                            <span className="badge bg-green">42</span>
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
