import React, { Component } from 'react'

export default class formAdvance extends Component {
    render() {
        return (
            <div>
{/* page content */}
<div className="right_col" role="main">
  <div className>
    <div className="page-title">
      <div className="title_left">
        <h3>Form advanced</h3>
      </div>
      <div className="title_right">
        <div className="col-md-5 col-sm-5 col-xs-12 form-group row pull-right top_search">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for..." />
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">Go!</button>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="clearfix" />
    <div className="row">
      {/* form input mask */}
      <div className="col-md-6 col-sm-12 col-xs-12">
        <div className="x_panel">
          <div className="x_title">
            <h2>Input Mask</h2>
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
            <br />
            <form className="form-horizontal form-label-left">
              <div className="form-group row">
                <label className="control-label col-md-3 col-sm-3 col-xs-3">Date Mask</label>
                <div className="col-md-9 col-sm-9 col-xs-9">
                  <input type="text" className="form-control" data-inputmask="'mask': '99/99/9999'" />
                  <span className="fa fa-user form-control-feedback right" aria-hidden="true" />
                </div>
              </div>
              <div className="form-group row">
                <label className="control-label col-md-3 col-sm-3 col-xs-3">Phone mask</label>
                <div className="col-md-9 col-sm-9 col-xs-9">
                  <input type="text" className="form-control" data-inputmask="'mask' : '(999) 999-9999'" />
                  <span className="fa fa-user form-control-feedback right" aria-hidden="true" />
                </div>
              </div>
              <div className="form-group row">
                <label className="control-label col-md-3 col-sm-3 col-xs-3">Custom Mask</label>
                <div className="col-md-9 col-sm-9 col-xs-9">
                  <input type="text" className="form-control" data-inputmask="'mask': '99-999999'" />
                  <span className="fa fa-user form-control-feedback right" aria-hidden="true" />
                </div>
              </div>
              <div className="form-group row">
                <label className="control-label col-md-3 col-sm-3 col-xs-3">Serial Number</label>
                <div className="col-md-9 col-sm-9 col-xs-9">
                  <input type="text" className="form-control" data-inputmask="'mask' : '****-****-****-****-****-***'" />
                  <span className="fa fa-user form-control-feedback right" aria-hidden="true" />
                </div>
              </div>
              <div className="form-group row">
                <label className="control-label col-md-3 col-sm-3 col-xs-3">TaxID Mask</label>
                <div className="col-md-9 col-sm-9 col-xs-9">
                  <input type="text" className="form-control" data-inputmask="'mask' : '99-99999999'" />
                  <span className="fa fa-user form-control-feedback right" aria-hidden="true" />
                </div>
              </div>
              <div className="form-group row">
                <label className="control-label col-md-3 col-sm-3 col-xs-3">Credit Card Mask</label>
                <div className="col-md-9 col-sm-9 col-xs-9">
                  <input type="text" className="form-control" data-inputmask="'mask' : '9999-9999-9999-9999'" />
                  <span className="fa fa-user form-control-feedback right" aria-hidden="true" />
                </div>
              </div>
              <div className="ln_solid" />
              <div className="form-group row">
                <div className="col-md-9 offset-md-3">
                  <button type="submit" className="btn btn-primary">Cancel</button>
                  <button type="submit" className="btn btn-success">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /form input mask */}
      {/* form color picker */}
      <div className="col-md-6 col-sm-12 col-xs-12">
        <div className="x_panel">
          <div className="x_title">
            <h2>Color Picker</h2>
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
            <br />
            <form className="form-horizontal form-label-left">
              <div className="form-group row">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Default Input</label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" className="demo1 form-control" defaultValue="#5367ce" />
                </div>
              </div>
              <div className="form-group row">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Styled</label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <div className="input-group demo2">
                    <input type="text" defaultValue="#e01ab5" className="form-control" />
                    <span className="input-group-addon"><i /></span>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Horizontal bar</label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" className="form-control demo colorpicker-element" data-horizontal="true" id="demo_forceformat" defaultValue="#8fff00" />
                </div>
              </div>
              <div className="form-group row">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Vertical bar</label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" className="form-control demo colorpicker-element" id="demo_forceformat3" defaultValue="#8fff00" />
                </div>
              </div>
              <div className="form-group row">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Inline picker</label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <div className="well">
                    <div id="demo_cont" className="demo demo-auto inl-bl colorpicker-element" data-container="#demo_cont" data-color="rgba(150,216,62,0.55)" data-inline="true" />
                    <div className="demo demo-auto inl-bl colorpicker-element" data-container="true" data-color="rgb(50,216,62)" data-inline="true" style={{marginLeft: 20}} />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /form color picker */}
      {/* form input knob */}
      <div className="col-md-12">
        <div className="x_panel">
          <div className="x_title">
            <h2>Input knob</h2>
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
            <div className="col-md-2">
              <p>Display value</p>
              <input className="knob" data-width={100} data-height={120} data-min={-100} data-displayprevious="true" data-fgcolor="#26B99A" defaultValue={44} />
            </div>
            <div className="col-md-2">
              <p>× 'cursor' mode</p>
              <input className="knob" data-width={100} data-height={120} data-cursor="true" data-fgcolor="#34495E" defaultValue={29} />
            </div>
            <div className="col-md-2">
              <p>Step 0.1</p>
              <input className="knob" data-width={100} data-height={120} data-min={-10000} data-displayprevious="true" data-fgcolor="#26B99A" data-max={10000} data-step=".1" defaultValue={0} />
            </div>
            <div className="col-md-2">
              <p>Angle arc</p>
              <input className="knob" data-width={100} data-height={120} data-angleoffset={-125} data-anglearc={250} data-fgcolor="#34495E" data-rotation="anticlockwise" defaultValue={35} />
            </div>
            <div className="col-md-2">
              <p>Alternate design</p>
              <input className="knob" data-width={110} data-height={120} data-displayprevious="true" data-fgcolor="#26B99A" data-skin="tron" data-thickness=".2" defaultValue={75} />
            </div>
            <div className="col-md-2">
              <p>Angle offset</p>
              <input className="knob" data-width={100} data-height={120} data-angleoffset={90} data-linecap="round" data-fgcolor="#26B99A" defaultValue={35} />
            </div>
          </div>
        </div>
      </div>
      {/* /form input knob */}
    </div>
    <div className="row">
      <div className="col-md-12">
        {/* form date pickers */}
        <div className="x_panel" style={{}}>
          <div className="x_title">
            <h2>Date Pickers <small> Available with multiple designs</small></h2>
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
            <div className="well" style={{overflow: 'auto'}}>
              <div className="col-md-4">
                <div id="reportrange_right" className="pull-left" style={{background: '#fff', cursor: 'pointer', padding: '5px 10px', border: '1px solid #ccc'}}>
                  <i className="glyphicon glyphicon-calendar fa fa-calendar" />
                  <span>December 30, 2014 - January 28, 2015</span> <b className="caret" />
                </div>
              </div>
              <div className="col-md-4">
                <p>Date Range Picker with opening to right and left</p>
              </div>
              <div className="col-md-4">
                <div id="reportrange" className="pull-right" style={{background: '#fff', cursor: 'pointer', padding: '5px 10px', border: '1px solid #ccc'}}>
                  <i className="glyphicon glyphicon-calendar fa fa-calendar" />
                  <span>December 30, 2014 - January 28, 2015</span> <b className="caret" />
                </div>
              </div>
            </div>
            <div className="well" style={{overflow: 'auto'}}>
              <div className="col-md-4">
                Date Range Picker
                <form className>
                  <fieldset>
                    <div className="control-group ">
                      <div className="controls">
                        <div className="input-prepend input-group">
                          <span className="add-on input-group-addon"><i className="glyphicon glyphicon-calendar fa fa-calendar" /></span>
                          <input type="text" style={{width: 200}} name="reservation" id="reservation" className="form-control" defaultValue="01/01/2016 - 01/25/2016" />
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
              <div className="col-md-5">
                Date and Time
                <form className>
                  <fieldset>
                    <div className="control-group">
                      <div className="controls">
                        <div className="input-prepend input-group">
                          <span className="add-on input-group-addon"><i className="glyphicon glyphicon-calendar fa fa-calendar" /></span>
                          <input type="text" name="reservation-time" id="reservation-time" className="form-control" defaultValue="01/01/2016 - 01/25/2016" />
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
            <div className="calendar-exibit">
              <div className="col-md-3">
                <div className="daterangepicker dropdown-menu ltr single opensright show-calendar picker_1 xdisplay"><div className="calendar left single" style={{display: 'block'}}><div className="daterangepicker_input"><input className="input-mini form-control active" type="text" name="daterangepicker_start" defaultValue style={{display: 'none'}} /><i className="fa fa-calendar glyphicon glyphicon-calendar" style={{display: 'none'}} /><div className="calendar-time" style={{display: 'none'}}><div /><i className="fa fa-clock-o glyphicon glyphicon-time" /></div></div><div className="calendar-table"><table className="table-condensed"><thead><tr><th className="prev available"><i className="fa fa-chevron-left glyphicon glyphicon-chevron-left" /></th><th colSpan={5} className="month">Oct 2016</th><th className="next available"><i className="fa fa-chevron-right glyphicon glyphicon-chevron-right" /></th></tr><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr></thead><tbody><tr><td className="weekend off available" data-title="r0c0">25</td><td className="off available" data-title="r0c1">26</td><td className="off available" data-title="r0c2">27</td><td className="off available" data-title="r0c3">28</td><td className="off available" data-title="r0c4">29</td><td className="off available" data-title="r0c5">30</td><td className="weekend available" data-title="r0c6">1</td></tr><tr><td className="weekend available" data-title="r1c0">2</td><td className="available" data-title="r1c1">3</td><td className="available" data-title="r1c2">4</td><td className="available" data-title="r1c3">5</td><td className="available" data-title="r1c4">6</td><td className="available" data-title="r1c5">7</td><td className="weekend available" data-title="r1c6">8</td></tr><tr><td className="weekend available" data-title="r2c0">9</td><td className="available" data-title="r2c1">10</td><td className="available" data-title="r2c2">11</td><td className="available" data-title="r2c3">12</td><td className="available" data-title="r2c4">13</td><td className="available" data-title="r2c5">14</td><td className="weekend available" data-title="r2c6">15</td></tr><tr><td className="weekend available" data-title="r3c0">16</td><td className="available" data-title="r3c1">17</td><td className="today active start-date active end-date available" data-title="r3c2">18</td><td className="available" data-title="r3c3">19</td><td className="available" data-title="r3c4">20</td><td className="available" data-title="r3c5">21</td><td className="weekend available" data-title="r3c6">22</td></tr><tr><td className="weekend available" data-title="r4c0">23</td><td className="available" data-title="r4c1">24</td><td className="available" data-title="r4c2">25</td><td className="available" data-title="r4c3">26</td><td className="available" data-title="r4c4">27</td><td className="available" data-title="r4c5">28</td><td className="weekend available" data-title="r4c6">29</td></tr><tr><td className="weekend available" data-title="r5c0">30</td><td className="available" data-title="r5c1">31</td><td className="off available" data-title="r5c2">1</td><td className="off available" data-title="r5c3">2</td><td className="off available" data-title="r5c4">3</td><td className="off available" data-title="r5c5">4</td><td className="weekend off available" data-title="r5c6">5</td></tr></tbody></table></div></div><div className="calendar right" style={{display: 'none'}}><div className="daterangepicker_input"><input className="input-mini form-control" type="text" name="daterangepicker_end" defaultValue style={{display: 'none'}} /><i className="fa fa-calendar glyphicon glyphicon-calendar" style={{display: 'none'}} /><div className="calendar-time" style={{display: 'none'}}><div /><i className="fa fa-clock-o glyphicon glyphicon-time" /></div></div><div className="calendar-table"><table className="table-condensed"><thead><tr><th /><th colSpan={5} className="month">Nov 2016</th><th className="next available"><i className="fa fa-chevron-right glyphicon glyphicon-chevron-right" /></th></tr><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr></thead><tbody><tr><td className="weekend off available" data-title="r0c0">30</td><td className="off available" data-title="r0c1">31</td><td className="available" data-title="r0c2">1</td><td className="available" data-title="r0c3">2</td><td className="available" data-title="r0c4">3</td><td className="available" data-title="r0c5">4</td><td className="weekend available" data-title="r0c6">5</td></tr><tr><td className="weekend available" data-title="r1c0">6</td><td className="available" data-title="r1c1">7</td><td className="available" data-title="r1c2">8</td><td className="available" data-title="r1c3">9</td><td className="available" data-title="r1c4">10</td><td className="available" data-title="r1c5">11</td><td className="weekend available" data-title="r1c6">12</td></tr><tr><td className="weekend available" data-title="r2c0">13</td><td className="available" data-title="r2c1">14</td><td className="available" data-title="r2c2">15</td><td className="available" data-title="r2c3">16</td><td className="available" data-title="r2c4">17</td><td className="available" data-title="r2c5">18</td><td className="weekend available" data-title="r2c6">19</td></tr><tr><td className="weekend available" data-title="r3c0">20</td><td className="available" data-title="r3c1">21</td><td className="available" data-title="r3c2">22</td><td className="available" data-title="r3c3">23</td><td className="available" data-title="r3c4">24</td><td className="available" data-title="r3c5">25</td><td className="weekend available" data-title="r3c6">26</td></tr><tr><td className="weekend available" data-title="r4c0">27</td><td className="available" data-title="r4c1">28</td><td className="available" data-title="r4c2">29</td><td className="available" data-title="r4c3">30</td><td className="off available" data-title="r4c4">1</td><td className="off available" data-title="r4c5">2</td><td className="weekend off available" data-title="r4c6">3</td></tr><tr><td className="weekend off available" data-title="r5c0">4</td><td className="off available" data-title="r5c1">5</td><td className="off available" data-title="r5c2">6</td><td className="off available" data-title="r5c3">7</td><td className="off available" data-title="r5c4">8</td><td className="off available" data-title="r5c5">9</td><td className="weekend off available" data-title="r5c6">10</td></tr></tbody></table></div></div><div className="ranges" style={{display: 'none'}}><div className="range_inputs"><button className="applyBtn btn btn-sm btn-success" type="button">Apply</button> <button className="cancelBtn btn btn-sm btn-default" type="button">Cancel</button></div></div></div>
                <fieldset>
                  <div className="control-group">
                    <div className="controls">
                      <div className="col-md-11 xdisplay_inputx form-group row has-feedback">
                        <input type="text" className="form-control has-feedback-left" id="single_cal1" placeholder="First Name" aria-describedby="inputSuccess2Status" />
                        <span className="fa fa-calendar-o form-control-feedback left" aria-hidden="true" />
                        <span id="inputSuccess2Status" className="sr-only">(success)</span>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div className="col-md-3">
                <div className="daterangepicker dropdown-menu ltr single opensright show-calendar picker_2 xdisplay"><div className="calendar left single" style={{display: 'block'}}><div className="daterangepicker_input"><input className="input-mini form-control active" type="text" name="daterangepicker_start" defaultValue style={{display: 'none'}} /><i className="fa fa-calendar glyphicon glyphicon-calendar" style={{display: 'none'}} /><div className="calendar-time" style={{display: 'none'}}><div /><i className="fa fa-clock-o glyphicon glyphicon-time" /></div></div><div className="calendar-table"><table className="table-condensed"><thead><tr><th className="prev available"><i className="fa fa-chevron-left glyphicon glyphicon-chevron-left" /></th><th colSpan={5} className="month">Oct 2016</th><th className="next available"><i className="fa fa-chevron-right glyphicon glyphicon-chevron-right" /></th></tr><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr></thead><tbody><tr><td className="weekend off available" data-title="r0c0">25</td><td className="off available" data-title="r0c1">26</td><td className="off available" data-title="r0c2">27</td><td className="off available" data-title="r0c3">28</td><td className="off available" data-title="r0c4">29</td><td className="off available" data-title="r0c5">30</td><td className="weekend available" data-title="r0c6">1</td></tr><tr><td className="weekend available" data-title="r1c0">2</td><td className="available" data-title="r1c1">3</td><td className="available" data-title="r1c2">4</td><td className="available" data-title="r1c3">5</td><td className="available" data-title="r1c4">6</td><td className="available" data-title="r1c5">7</td><td className="weekend available" data-title="r1c6">8</td></tr><tr><td className="weekend available" data-title="r2c0">9</td><td className="available" data-title="r2c1">10</td><td className="available" data-title="r2c2">11</td><td className="available" data-title="r2c3">12</td><td className="available" data-title="r2c4">13</td><td className="available" data-title="r2c5">14</td><td className="weekend available" data-title="r2c6">15</td></tr><tr><td className="weekend available" data-title="r3c0">16</td><td className="available" data-title="r3c1">17</td><td className="today active start-date active end-date available" data-title="r3c2">18</td><td className="available" data-title="r3c3">19</td><td className="available" data-title="r3c4">20</td><td className="available" data-title="r3c5">21</td><td className="weekend available" data-title="r3c6">22</td></tr><tr><td className="weekend available" data-title="r4c0">23</td><td className="available" data-title="r4c1">24</td><td className="available" data-title="r4c2">25</td><td className="available" data-title="r4c3">26</td><td className="available" data-title="r4c4">27</td><td className="available" data-title="r4c5">28</td><td className="weekend available" data-title="r4c6">29</td></tr><tr><td className="weekend available" data-title="r5c0">30</td><td className="available" data-title="r5c1">31</td><td className="off available" data-title="r5c2">1</td><td className="off available" data-title="r5c3">2</td><td className="off available" data-title="r5c4">3</td><td className="off available" data-title="r5c5">4</td><td className="weekend off available" data-title="r5c6">5</td></tr></tbody></table></div></div><div className="calendar right" style={{display: 'none'}}><div className="daterangepicker_input"><input className="input-mini form-control" type="text" name="daterangepicker_end" defaultValue style={{display: 'none'}} /><i className="fa fa-calendar glyphicon glyphicon-calendar" style={{display: 'none'}} /><div className="calendar-time" style={{display: 'none'}}><div /><i className="fa fa-clock-o glyphicon glyphicon-time" /></div></div><div className="calendar-table"><table className="table-condensed"><thead><tr><th /><th colSpan={5} className="month">Nov 2016</th><th className="next available"><i className="fa fa-chevron-right glyphicon glyphicon-chevron-right" /></th></tr><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr></thead><tbody><tr><td className="weekend off available" data-title="r0c0">30</td><td className="off available" data-title="r0c1">31</td><td className="available" data-title="r0c2">1</td><td className="available" data-title="r0c3">2</td><td className="available" data-title="r0c4">3</td><td className="available" data-title="r0c5">4</td><td className="weekend available" data-title="r0c6">5</td></tr><tr><td className="weekend available" data-title="r1c0">6</td><td className="available" data-title="r1c1">7</td><td className="available" data-title="r1c2">8</td><td className="available" data-title="r1c3">9</td><td className="available" data-title="r1c4">10</td><td className="available" data-title="r1c5">11</td><td className="weekend available" data-title="r1c6">12</td></tr><tr><td className="weekend available" data-title="r2c0">13</td><td className="available" data-title="r2c1">14</td><td className="available" data-title="r2c2">15</td><td className="available" data-title="r2c3">16</td><td className="available" data-title="r2c4">17</td><td className="available" data-title="r2c5">18</td><td className="weekend available" data-title="r2c6">19</td></tr><tr><td className="weekend available" data-title="r3c0">20</td><td className="available" data-title="r3c1">21</td><td className="available" data-title="r3c2">22</td><td className="available" data-title="r3c3">23</td><td className="available" data-title="r3c4">24</td><td className="available" data-title="r3c5">25</td><td className="weekend available" data-title="r3c6">26</td></tr><tr><td className="weekend available" data-title="r4c0">27</td><td className="available" data-title="r4c1">28</td><td className="available" data-title="r4c2">29</td><td className="available" data-title="r4c3">30</td><td className="off available" data-title="r4c4">1</td><td className="off available" data-title="r4c5">2</td><td className="weekend off available" data-title="r4c6">3</td></tr><tr><td className="weekend off available" data-title="r5c0">4</td><td className="off available" data-title="r5c1">5</td><td className="off available" data-title="r5c2">6</td><td className="off available" data-title="r5c3">7</td><td className="off available" data-title="r5c4">8</td><td className="off available" data-title="r5c5">9</td><td className="weekend off available" data-title="r5c6">10</td></tr></tbody></table></div></div><div className="ranges" style={{display: 'none'}}><div className="range_inputs"><button className="applyBtn btn btn-sm btn-success" type="button">Apply</button> <button className="cancelBtn btn btn-sm btn-default" type="button">Cancel</button></div></div></div>
                <fieldset>
                  <div className="control-group">
                    <div className="controls">
                      <div className="col-md-11 xdisplay_inputx form-group row has-feedback">
                        <input type="text" className="form-control has-feedback-left" id="single_cal2" placeholder="First Name" aria-describedby="inputSuccess2Status2" />
                        <span className="fa fa-calendar-o form-control-feedback left" aria-hidden="true" />
                        <span id="inputSuccess2Status2" className="sr-only">(success)</span>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div className="col-md-3">
                <div className="daterangepicker dropdown-menu ltr single opensright show-calendar picker_3 xdisplay"><div className="calendar left single" style={{display: 'block'}}><div className="daterangepicker_input"><input className="input-mini form-control active" type="text" name="daterangepicker_start" defaultValue style={{display: 'none'}} /><i className="fa fa-calendar glyphicon glyphicon-calendar" style={{display: 'none'}} /><div className="calendar-time" style={{display: 'none'}}><div /><i className="fa fa-clock-o glyphicon glyphicon-time" /></div></div><div className="calendar-table"><table className="table-condensed"><thead><tr><th className="prev available"><i className="fa fa-chevron-left glyphicon glyphicon-chevron-left" /></th><th colSpan={5} className="month">Oct 2016</th><th className="next available"><i className="fa fa-chevron-right glyphicon glyphicon-chevron-right" /></th></tr><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr></thead><tbody><tr><td className="weekend off available" data-title="r0c0">25</td><td className="off available" data-title="r0c1">26</td><td className="off available" data-title="r0c2">27</td><td className="off available" data-title="r0c3">28</td><td className="off available" data-title="r0c4">29</td><td className="off available" data-title="r0c5">30</td><td className="weekend available" data-title="r0c6">1</td></tr><tr><td className="weekend available" data-title="r1c0">2</td><td className="available" data-title="r1c1">3</td><td className="available" data-title="r1c2">4</td><td className="available" data-title="r1c3">5</td><td className="available" data-title="r1c4">6</td><td className="available" data-title="r1c5">7</td><td className="weekend available" data-title="r1c6">8</td></tr><tr><td className="weekend available" data-title="r2c0">9</td><td className="available" data-title="r2c1">10</td><td className="available" data-title="r2c2">11</td><td className="available" data-title="r2c3">12</td><td className="available" data-title="r2c4">13</td><td className="available" data-title="r2c5">14</td><td className="weekend available" data-title="r2c6">15</td></tr><tr><td className="weekend available" data-title="r3c0">16</td><td className="available" data-title="r3c1">17</td><td className="today active start-date active end-date available" data-title="r3c2">18</td><td className="available" data-title="r3c3">19</td><td className="available" data-title="r3c4">20</td><td className="available" data-title="r3c5">21</td><td className="weekend available" data-title="r3c6">22</td></tr><tr><td className="weekend available" data-title="r4c0">23</td><td className="available" data-title="r4c1">24</td><td className="available" data-title="r4c2">25</td><td className="available" data-title="r4c3">26</td><td className="available" data-title="r4c4">27</td><td className="available" data-title="r4c5">28</td><td className="weekend available" data-title="r4c6">29</td></tr><tr><td className="weekend available" data-title="r5c0">30</td><td className="available" data-title="r5c1">31</td><td className="off available" data-title="r5c2">1</td><td className="off available" data-title="r5c3">2</td><td className="off available" data-title="r5c4">3</td><td className="off available" data-title="r5c5">4</td><td className="weekend off available" data-title="r5c6">5</td></tr></tbody></table></div></div><div className="calendar right" style={{display: 'none'}}><div className="daterangepicker_input"><input className="input-mini form-control" type="text" name="daterangepicker_end" defaultValue style={{display: 'none'}} /><i className="fa fa-calendar glyphicon glyphicon-calendar" style={{display: 'none'}} /><div className="calendar-time" style={{display: 'none'}}><div /><i className="fa fa-clock-o glyphicon glyphicon-time" /></div></div><div className="calendar-table"><table className="table-condensed"><thead><tr><th /><th colSpan={5} className="month">Nov 2016</th><th className="next available"><i className="fa fa-chevron-right glyphicon glyphicon-chevron-right" /></th></tr><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr></thead><tbody><tr><td className="weekend off available" data-title="r0c0">30</td><td className="off available" data-title="r0c1">31</td><td className="available" data-title="r0c2">1</td><td className="available" data-title="r0c3">2</td><td className="available" data-title="r0c4">3</td><td className="available" data-title="r0c5">4</td><td className="weekend available" data-title="r0c6">5</td></tr><tr><td className="weekend available" data-title="r1c0">6</td><td className="available" data-title="r1c1">7</td><td className="available" data-title="r1c2">8</td><td className="available" data-title="r1c3">9</td><td className="available" data-title="r1c4">10</td><td className="available" data-title="r1c5">11</td><td className="weekend available" data-title="r1c6">12</td></tr><tr><td className="weekend available" data-title="r2c0">13</td><td className="available" data-title="r2c1">14</td><td className="available" data-title="r2c2">15</td><td className="available" data-title="r2c3">16</td><td className="available" data-title="r2c4">17</td><td className="available" data-title="r2c5">18</td><td className="weekend available" data-title="r2c6">19</td></tr><tr><td className="weekend available" data-title="r3c0">20</td><td className="available" data-title="r3c1">21</td><td className="available" data-title="r3c2">22</td><td className="available" data-title="r3c3">23</td><td className="available" data-title="r3c4">24</td><td className="available" data-title="r3c5">25</td><td className="weekend available" data-title="r3c6">26</td></tr><tr><td className="weekend available" data-title="r4c0">27</td><td className="available" data-title="r4c1">28</td><td className="available" data-title="r4c2">29</td><td className="available" data-title="r4c3">30</td><td className="off available" data-title="r4c4">1</td><td className="off available" data-title="r4c5">2</td><td className="weekend off available" data-title="r4c6">3</td></tr><tr><td className="weekend off available" data-title="r5c0">4</td><td className="off available" data-title="r5c1">5</td><td className="off available" data-title="r5c2">6</td><td className="off available" data-title="r5c3">7</td><td className="off available" data-title="r5c4">8</td><td className="off available" data-title="r5c5">9</td><td className="weekend off available" data-title="r5c6">10</td></tr></tbody></table></div></div><div className="ranges" style={{display: 'none'}}><div className="range_inputs"><button className="applyBtn btn btn-sm btn-success" type="button">Apply</button> <button className="cancelBtn btn btn-sm btn-default" type="button">Cancel</button></div></div></div>
                <fieldset>
                  <div className="control-group">
                    <div className="controls">
                      <div className="col-md-11 xdisplay_inputx form-group row has-feedback">
                        <input type="text" className="form-control has-feedback-left" id="single_cal3" placeholder="First Name" aria-describedby="inputSuccess2Status3" />
                        <span className="fa fa-calendar-o form-control-feedback left" aria-hidden="true" />
                        <span id="inputSuccess2Status3" className="sr-only">(success)</span>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div className="col-md-3">
                <div className="daterangepicker dropdown-menu ltr single opensright show-calendar picker_4 xdisplay"><div className="calendar left single" style={{display: 'block'}}><div className="daterangepicker_input"><input className="input-mini form-control active" type="text" name="daterangepicker_start" defaultValue style={{display: 'none'}} /><i className="fa fa-calendar glyphicon glyphicon-calendar" style={{display: 'none'}} /><div className="calendar-time" style={{display: 'none'}}><div /><i className="fa fa-clock-o glyphicon glyphicon-time" /></div></div><div className="calendar-table"><table className="table-condensed"><thead><tr><th className="prev available"><i className="fa fa-chevron-left glyphicon glyphicon-chevron-left" /></th><th colSpan={5} className="month">Oct 2016</th><th className="next available"><i className="fa fa-chevron-right glyphicon glyphicon-chevron-right" /></th></tr><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr></thead><tbody><tr><td className="weekend off available" data-title="r0c0">25</td><td className="off available" data-title="r0c1">26</td><td className="off available" data-title="r0c2">27</td><td className="off available" data-title="r0c3">28</td><td className="off available" data-title="r0c4">29</td><td className="off available" data-title="r0c5">30</td><td className="weekend available" data-title="r0c6">1</td></tr><tr><td className="weekend available" data-title="r1c0">2</td><td className="available" data-title="r1c1">3</td><td className="available" data-title="r1c2">4</td><td className="available" data-title="r1c3">5</td><td className="available" data-title="r1c4">6</td><td className="available" data-title="r1c5">7</td><td className="weekend available" data-title="r1c6">8</td></tr><tr><td className="weekend available" data-title="r2c0">9</td><td className="available" data-title="r2c1">10</td><td className="available" data-title="r2c2">11</td><td className="available" data-title="r2c3">12</td><td className="available" data-title="r2c4">13</td><td className="available" data-title="r2c5">14</td><td className="weekend available" data-title="r2c6">15</td></tr><tr><td className="weekend available" data-title="r3c0">16</td><td className="available" data-title="r3c1">17</td><td className="today active start-date active end-date available" data-title="r3c2">18</td><td className="available" data-title="r3c3">19</td><td className="available" data-title="r3c4">20</td><td className="available" data-title="r3c5">21</td><td className="weekend available" data-title="r3c6">22</td></tr><tr><td className="weekend available" data-title="r4c0">23</td><td className="available" data-title="r4c1">24</td><td className="available" data-title="r4c2">25</td><td className="available" data-title="r4c3">26</td><td className="available" data-title="r4c4">27</td><td className="available" data-title="r4c5">28</td><td className="weekend available" data-title="r4c6">29</td></tr><tr><td className="weekend available" data-title="r5c0">30</td><td className="available" data-title="r5c1">31</td><td className="off available" data-title="r5c2">1</td><td className="off available" data-title="r5c3">2</td><td className="off available" data-title="r5c4">3</td><td className="off available" data-title="r5c5">4</td><td className="weekend off available" data-title="r5c6">5</td></tr></tbody></table></div></div><div className="calendar right" style={{display: 'none'}}><div className="daterangepicker_input"><input className="input-mini form-control" type="text" name="daterangepicker_end" defaultValue style={{display: 'none'}} /><i className="fa fa-calendar glyphicon glyphicon-calendar" style={{display: 'none'}} /><div className="calendar-time" style={{display: 'none'}}><div /><i className="fa fa-clock-o glyphicon glyphicon-time" /></div></div><div className="calendar-table"><table className="table-condensed"><thead><tr><th /><th colSpan={5} className="month">Nov 2016</th><th className="next available"><i className="fa fa-chevron-right glyphicon glyphicon-chevron-right" /></th></tr><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr></thead><tbody><tr><td className="weekend off available" data-title="r0c0">30</td><td className="off available" data-title="r0c1">31</td><td className="available" data-title="r0c2">1</td><td className="available" data-title="r0c3">2</td><td className="available" data-title="r0c4">3</td><td className="available" data-title="r0c5">4</td><td className="weekend available" data-title="r0c6">5</td></tr><tr><td className="weekend available" data-title="r1c0">6</td><td className="available" data-title="r1c1">7</td><td className="available" data-title="r1c2">8</td><td className="available" data-title="r1c3">9</td><td className="available" data-title="r1c4">10</td><td className="available" data-title="r1c5">11</td><td className="weekend available" data-title="r1c6">12</td></tr><tr><td className="weekend available" data-title="r2c0">13</td><td className="available" data-title="r2c1">14</td><td className="available" data-title="r2c2">15</td><td className="available" data-title="r2c3">16</td><td className="available" data-title="r2c4">17</td><td className="available" data-title="r2c5">18</td><td className="weekend available" data-title="r2c6">19</td></tr><tr><td className="weekend available" data-title="r3c0">20</td><td className="available" data-title="r3c1">21</td><td className="available" data-title="r3c2">22</td><td className="available" data-title="r3c3">23</td><td className="available" data-title="r3c4">24</td><td className="available" data-title="r3c5">25</td><td className="weekend available" data-title="r3c6">26</td></tr><tr><td className="weekend available" data-title="r4c0">27</td><td className="available" data-title="r4c1">28</td><td className="available" data-title="r4c2">29</td><td className="available" data-title="r4c3">30</td><td className="off available" data-title="r4c4">1</td><td className="off available" data-title="r4c5">2</td><td className="weekend off available" data-title="r4c6">3</td></tr><tr><td className="weekend off available" data-title="r5c0">4</td><td className="off available" data-title="r5c1">5</td><td className="off available" data-title="r5c2">6</td><td className="off available" data-title="r5c3">7</td><td className="off available" data-title="r5c4">8</td><td className="off available" data-title="r5c5">9</td><td className="weekend off available" data-title="r5c6">10</td></tr></tbody></table></div></div><div className="ranges" style={{display: 'none'}}><div className="range_inputs"><button className="applyBtn btn btn-sm btn-success" type="button">Apply</button> <button className="cancelBtn btn btn-sm btn-default" type="button">Cancel</button></div></div></div>
                <fieldset>
                  <div className="control-group">
                    <div className="controls">
                      <div className="col-md-11 xdisplay_inputx form-group row has-feedback">
                        <input type="text" className="form-control has-feedback-left" id="single_cal4" placeholder="First Name" aria-describedby="inputSuccess2Status4" />
                        <span className="fa fa-calendar-o form-control-feedback left" aria-hidden="true" />
                        <span id="inputSuccess2Status4" className="sr-only">(success)</span>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
        {/* /form datepicker */}
        {/* form datetimepicker */}
        <div className="x_panel" style={{}}>
          <div className="x_title">
            <h2>Date Pickers <small> Available with multiple designs</small></h2>
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
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  Basic Example
                  <div className="form-group">
                    <div className="input-group date" id="myDatepicker">
                      <input type="text" className="form-control" />
                      <span className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  Only Date Picker
                  <div className="form-group">
                    <div className="input-group date" id="myDatepicker2">
                      <input type="text" className="form-control" />
                      <span className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  Only Time Picker <small>For 24H format use format: 'HH:mm'</small>
                  <div className="form-group">
                    <div className="input-group date" id="myDatepicker3">
                      <input type="text" className="form-control" />
                      <span className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  Using ReadOnly
                  <div className="form-group">
                    <div className="input-group date" id="myDatepicker4">
                      <input type="text" className="form-control" readOnly="readonly" />
                      <span className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  Linked Picker Parent
                  <div className="form-group">
                    <div className="input-group date" id="datetimepicker6">
                      <input type="text" className="form-control" />
                      <span className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  Linked Picker Children
                  <div className="form-group">
                    <div className="input-group date" id="datetimepicker7">
                      <input type="text" className="form-control" />
                      <span className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /form datetimepicker */}
        {/* form grid slider */}
        <div className="x_panel" style={{}}>
          <div className="x_title">
            <h2>Grid Slider</h2>
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
            <div className="row grid_slider">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <p>Default grid slider with min and max values</p>
                <input type="text" id="range" defaultValue name="range" />
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <p>Grid with slider labels are far away outside it's container</p>
                <input type="text" id="range_25" defaultValue name="range" />
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <p>Grid with labels inside container using force_edges attribute</p>
                <input type="text" id="range_27" defaultValue name="range" />
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <p>Create Grid with pre-defined steps</p>
                <input type="text" id="range_26" defaultValue name="range" />
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <p>Prevent one from dragging the labels</p>
                <input type="text" id="range_31" defaultValue name="range" />
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <p>Grid with minimum and maximum values</p>
                <input type="text" className="range_min_max" defaultValue name="range" />
              </div>
              <div>
                <p>Grid With time in 24 hour format</p>
                <input type="text" className="range_time24" defaultValue name="range" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        {/* /form grid slider */}
        {/* image cropping */}
        <div className="container cropper">
          <div className="row">
            <div className="col-md-9">
              <div className="img-container">
                <img id="image" src="images/cropper.jpg" alt="Picture" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="docs-preview clearfix">
                <div className="img-preview preview-lg" />
                <div className="img-preview preview-md" />
                <div className="img-preview preview-sm" />
                <div className="img-preview preview-xs" />
              </div>
              <div className="docs-data">
                <div className="input-group input-group-sm">
                  <label className="input-group-addon" htmlFor="dataX">X</label>
                  <input type="text" className="form-control" id="dataX" placeholder="x" />
                  <span className="input-group-addon">px</span>
                </div>
                <div className="input-group input-group-sm">
                  <label className="input-group-addon" htmlFor="dataY">Y</label>
                  <input type="text" className="form-control" id="dataY" placeholder="y" />
                  <span className="input-group-addon">px</span>
                </div>
                <div className="input-group input-group-sm">
                  <label className="input-group-addon" htmlFor="dataWidth">Width</label>
                  <input type="text" className="form-control" id="dataWidth" placeholder="width" />
                  <span className="input-group-addon">px</span>
                </div>
                <div className="input-group input-group-sm">
                  <label className="input-group-addon" htmlFor="dataHeight">Height</label>
                  <input type="text" className="form-control" id="dataHeight" placeholder="height" />
                  <span className="input-group-addon">px</span>
                </div>
                <div className="input-group input-group-sm">
                  <label className="input-group-addon" htmlFor="dataRotate">Rotate</label>
                  <input type="text" className="form-control" id="dataRotate" placeholder="rotate" />
                  <span className="input-group-addon">deg</span>
                </div>
                <div className="input-group input-group-sm">
                  <label className="input-group-addon" htmlFor="dataScaleX">ScaleX</label>
                  <input type="text" className="form-control" id="dataScaleX" placeholder="scaleX" />
                </div>
                <div className="input-group input-group-sm">
                  <label className="input-group-addon" htmlFor="dataScaleY">ScaleY</label>
                  <input type="text" className="form-control" id="dataScaleY" placeholder="scaleY" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9 docs-buttons">
              {/* <h3 class="page-header">Toolbar:</h3> */}
              <div className="btn-group">
                <button type="button" className="btn btn-primary" data-method="setDragMode" data-option="move" title="Move">
                  <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;setDragMode&quot;, &quot;move&quot;)">
                    <span className="fa fa-arrows" />
                  </span>
                </button>
                <button type="button" className="btn btn-primary" data-method="setDragMode" data-option="crop" title="Crop">
                  <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;setDragMode&quot;, &quot;crop&quot;)">
                    <span className="fa fa-crop" />
                  </span>
                </button>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-primary" data-method="zoom" data-option="0.1" title="Zoom In">
                  <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;zoom&quot;, 0.1)">
                    <span className="fa fa-search-plus" />
                  </span>
                </button>
                <button type="button" className="btn btn-primary" data-method="zoom" data-option="-0.1" title="Zoom Out">
                  <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;zoom&quot;, -0.1)">
                    <span className="fa fa-search-minus" />
                  </span>
                </button>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-primary" data-method="move" data-option={-10} data-second-option={0} title="Move Left">
                  <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;move&quot;, -10, 0)">
                    <span className="fa fa-arrow-left" />
                  </span>
                </button>
                <button type="button" className="btn btn-primary" data-method="move" data-option={10} data-second-option={0} title="Move Right">
                  <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;move&quot;, 10, 0)">
                    <span className="fa fa-arrow-right" />
                  </span>
                </button>
                <button type="button" className="btn btn-primary" data-method="move" data-option={0} data-second-option={-10} title="Move Up">
                  <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;move&quot;, 0, -10)">
                    <span className="fa fa-arrow-up" />
                  </span>
                </button>
                <button type="button" className="btn btn-primary" data-method="move" data-option={0} data-second-option={10} title="Move Down">
                  <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;move&quot;, 0, 10)">
                    <span className="fa fa-arrow-down" />
                  </span>
                </button>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-primary" data-method="rotate" data-option={-45} title="Rotate Left">
                  <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;rotate&quot;, -45)">
                    <span className="fa fa-rotate-left" />
                  </span>
                </button>
                <button type="button" className="btn btn-primary" data-method="rotate" data-option={45} title="Rotate Right">
                  <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;rotate&quot;, 45)">
                    <span className="fa fa-rotate-right" />
                  </span>
                </button>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-primary" data-method="scaleX" data-option={-1} title="Flip Horizontal">
                  <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;scaleX&quot;, -1)">
                    <span className="fa fa-arrows-h" />
                  </span>
                </button>
                <button type="button" className="btn btn-primary" data-method="scaleY" data-option={-1} title="Flip Vertical">
                  <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;scaleY&quot;, -1)">
                    <span className="fa fa-arrows-v" />
                  </span>
                </button>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-primary" data-method="crop" title="Crop">
                  <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;crop&quot;)">
                    <span className="fa fa-check" />
                  </span>
                </button>
                <button type="button" className="btn btn-primary" data-method="clear" title="Clear">
                  <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;clear&quot;)">
                    <span className="fa fa-remove" />
                  </span>
                </button>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-primary" data-method="disable" title="Disable">
                  <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;disable&quot;)">
                    <span className="fa fa-lock" />
                  </span>
                </button>
                <button type="button" className="btn btn-primary" data-method="enable" title="Enable">
                  <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;enable&quot;)">
                    <span className="fa fa-unlock" />
                  </span>
                </button>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-primary" data-method="reset" title="Reset">
                  <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;reset&quot;)">
                    <span className="fa fa-refresh" />
                  </span>
                </button>
                <label className="btn btn-primary btn-upload" htmlFor="inputImage" title="Upload image file">
                  <input type="file" className="sr-only" id="inputImage" name="file" accept="image/*" />
                  <span className="docs-tooltip" data-toggle="tooltip" title="Import image with Blob URLs">
                    <span className="fa fa-upload" />
                  </span>
                </label>
                <button type="button" className="btn btn-primary" data-method="destroy" title="Destroy">
                  <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;destroy&quot;)">
                    <span className="fa fa-power-off" />
                  </span>
                </button>
              </div>
              <div className="btn-group btn-group-crop">
                <button type="button" className="btn btn-primary" data-method="getCroppedCanvas">
                  <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;getCroppedCanvas&quot;)">
                    Get Cropped Canvas
                  </span>
                </button>
                <button type="button" className="btn btn-primary" data-method="getCroppedCanvas" data-option="{ &quot;width&quot;: 160, &quot;height&quot;: 90 }">
                  <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;getCroppedCanvas&quot;, { width: 160, height: 90 })">
                    160×90
                  </span>
                </button>
                <button type="button" className="btn btn-primary" data-method="getCroppedCanvas" data-option="{ &quot;width&quot;: 320, &quot;height&quot;: 180 }">
                  <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;getCroppedCanvas&quot;, { width: 320, height: 180 })">
                    320×180
                  </span>
                </button>
              </div>
              {/* Show the cropped image in modal */}
              <div className="modal fade docs-cropped" id="getCroppedCanvasModal" aria-hidden="true" aria-labelledby="getCroppedCanvasTitle" role="dialog" tabIndex={-1}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                      <h4 className="modal-title" id="getCroppedCanvasTitle">Cropped</h4>
                    </div>
                    <div className="modal-body" />
                    <div className="modal-footer">
                      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                      <a className="btn btn-primary" id="download" href="javascript:void(0);" download="cropped.png">Download</a>
                    </div>
                  </div>
                </div>
              </div>{/* /.modal */}
              <button type="button" className="btn btn-primary" data-method="getData" data-option data-target="#putData">
                <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;getData&quot;)">
                  Get Data
                </span>
              </button>
              <button type="button" className="btn btn-primary" data-method="setData" data-target="#putData">
                <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;setData&quot;, data)">
                  Set Data
                </span>
              </button>
              <button type="button" className="btn btn-primary" data-method="getContainerData" data-option data-target="#putData">
                <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;getContainerData&quot;)">
                  Get Container Data
                </span>
              </button>
              <button type="button" className="btn btn-primary" data-method="getImageData" data-option data-target="#putData">
                <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;getImageData&quot;)">
                  Get Image Data
                </span>
              </button>
              <button type="button" className="btn btn-primary" data-method="getCanvasData" data-option data-target="#putData">
                <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;getCanvasData&quot;)">
                  Get Canvas Data
                </span>
              </button>
              <button type="button" className="btn btn-primary" data-method="setCanvasData" data-target="#putData">
                <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;setCanvasData&quot;, data)">
                  Set Canvas Data
                </span>
              </button>
              <button type="button" className="btn btn-primary" data-method="getCropBoxData" data-option data-target="#putData">
                <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;getCropBoxData&quot;)">
                  Get Crop Box Data
                </span>
              </button>
              <button type="button" className="btn btn-primary" data-method="setCropBoxData" data-target="#putData">
                <span className="docs-tooltip" data-toggle="tooltip" title="$().cropper(&quot;setCropBoxData&quot;, data)">
                  Set Crop Box Data
                </span>
              </button>
              <button type="button" className="btn btn-primary" data-method="moveTo" data-option={0}>
                <span className="docs-tooltip" data-toggle="tooltip" title="cropper.moveTo(0)">
                  0,0
                </span>
              </button>
              <button type="button" className="btn btn-primary" data-method="zoomTo" data-option={1}>
                <span className="docs-tooltip" data-toggle="tooltip" title="cropper.zoomTo(1)">
                  100%
                </span>
              </button>
              <button type="button" className="btn btn-primary" data-method="rotateTo" data-option={180}>
                <span className="docs-tooltip" data-toggle="tooltip" title="cropper.rotateTo(180)">
                  180°
                </span>
              </button>
              <input type="text" className="form-control" id="putData" placeholder="Get data to here or set data with this value" />
            </div>{/* /.docs-buttons */}
            <div className="col-md-3 docs-toggles">
              {/* <h3 class="page-header">Toggles:</h3> */}
              <div className="btn-group btn-group-justified" data-toggle="buttons">
                <label className="btn btn-primary active">
                  <input type="radio" className="sr-only" id="aspectRatio0" name="aspectRatio" defaultValue="1.7777777777777777" />
                  <span className="docs-tooltip" data-toggle="tooltip" title="aspectRatio: 16 / 9">
                    16:9
                  </span>
                </label>
                <label className="btn btn-primary">
                  <input type="radio" className="sr-only" id="aspectRatio1" name="aspectRatio" defaultValue="1.3333333333333333" />
                  <span className="docs-tooltip" data-toggle="tooltip" title="aspectRatio: 4 / 3">
                    4:3
                  </span>
                </label>
                <label className="btn btn-primary">
                  <input type="radio" className="sr-only" id="aspectRatio2" name="aspectRatio" defaultValue={1} />
                  <span className="docs-tooltip" data-toggle="tooltip" title="aspectRatio: 1 / 1">
                    1:1
                  </span>
                </label>
                <label className="btn btn-primary">
                  <input type="radio" className="sr-only" id="aspectRatio3" name="aspectRatio" defaultValue="0.6666666666666666" />
                  <span className="docs-tooltip" data-toggle="tooltip" title="aspectRatio: 2 / 3">
                    2:3
                  </span>
                </label>
                <label className="btn btn-primary">
                  <input type="radio" className="sr-only" id="aspectRatio4" name="aspectRatio" defaultValue="NaN" />
                  <span className="docs-tooltip" data-toggle="tooltip" title="aspectRatio: NaN">
                    Free
                  </span>
                </label>
              </div>
              <div className="btn-group btn-group-justified" data-toggle="buttons">
                <label className="btn btn-primary active">
                  <input type="radio" className="sr-only" id="viewMode0" name="viewMode" defaultValue={0} defaultChecked />
                  <span className="docs-tooltip" data-toggle="tooltip" title="View Mode 0">
                    VM0
                  </span>
                </label>
                <label className="btn btn-primary">
                  <input type="radio" className="sr-only" id="viewMode1" name="viewMode" defaultValue={1} />
                  <span className="docs-tooltip" data-toggle="tooltip" title="View Mode 1">
                    VM1
                  </span>
                </label>
                <label className="btn btn-primary">
                  <input type="radio" className="sr-only" id="viewMode2" name="viewMode" defaultValue={2} />
                  <span className="docs-tooltip" data-toggle="tooltip" title="View Mode 2">
                    VM2
                  </span>
                </label>
                <label className="btn btn-primary">
                  <input type="radio" className="sr-only" id="viewMode3" name="viewMode" defaultValue={3} />
                  <span className="docs-tooltip" data-toggle="tooltip" title="View Mode 3">
                    VM3
                  </span>
                </label>
              </div>
              <div className="dropup docs-options">
                <button type="button" className="btn btn-primary btn-block dropdown-toggle" id="toggleOptions" data-toggle="dropdown" aria-expanded="true">
                  Toggle Options
                  <span className="caret" />
                </button>
                <ul className="dropdown-menu" aria-labelledby="toggleOptions" role="menu">
                  <li role="presentation">
                    <label className="checkbox-inline">
                      <input type="checkbox" name="responsive" defaultChecked />
                      responsive
                    </label>
                  </li>
                  <li role="presentation">
                    <label className="checkbox-inline">
                      <input type="checkbox" name="restore" defaultChecked />
                      restore
                    </label>
                  </li>
                  <li role="presentation">
                    <label className="checkbox-inline">
                      <input type="checkbox" name="checkCrossOrigin" defaultChecked />
                      checkCrossOrigin
                    </label>
                  </li>
                  <li role="presentation">
                    <label className="checkbox-inline">
                      <input type="checkbox" name="checkOrientation" defaultChecked />
                      checkOrientation
                    </label>
                  </li>
                  <li role="presentation">
                    <label className="checkbox-inline">
                      <input type="checkbox" name="modal" defaultChecked />
                      modal
                    </label>
                  </li>
                  <li role="presentation">
                    <label className="checkbox-inline">
                      <input type="checkbox" name="guides" defaultChecked />
                      guides
                    </label>
                  </li>
                  <li role="presentation">
                    <label className="checkbox-inline">
                      <input type="checkbox" name="center" defaultChecked />
                      center
                    </label>
                  </li>
                  <li role="presentation">
                    <label className="checkbox-inline">
                      <input type="checkbox" name="highlight" defaultChecked />
                      highlight
                    </label>
                  </li>
                  <li role="presentation">
                    <label className="checkbox-inline">
                      <input type="checkbox" name="background" defaultChecked />
                      background
                    </label>
                  </li>
                  <li role="presentation">
                    <label className="checkbox-inline">
                      <input type="checkbox" name="autoCrop" defaultChecked />
                      autoCrop
                    </label>
                  </li>
                  <li role="presentation">
                    <label className="checkbox-inline">
                      <input type="checkbox" name="movable" defaultChecked />
                      movable
                    </label>
                  </li>
                  <li role="presentation">
                    <label className="checkbox-inline">
                      <input type="checkbox" name="rotatable" defaultChecked />
                      rotatable
                    </label>
                  </li>
                  <li role="presentation">
                    <label className="checkbox-inline">
                      <input type="checkbox" name="scalable" defaultChecked />
                      scalable
                    </label>
                  </li>
                  <li role="presentation">
                    <label className="checkbox-inline">
                      <input type="checkbox" name="zoomable" defaultChecked />
                      zoomable
                    </label>
                  </li>
                  <li role="presentation">
                    <label className="checkbox-inline">
                      <input type="checkbox" name="zoomOnTouch" defaultChecked />
                      zoomOnTouch
                    </label>
                  </li>
                  <li role="presentation">
                    <label className="checkbox-inline">
                      <input type="checkbox" name="zoomOnWheel" defaultChecked />
                      zoomOnWheel
                    </label>
                  </li>
                  <li role="presentation">
                    <label className="checkbox-inline">
                      <input type="checkbox" name="cropBoxMovable" defaultChecked />
                      cropBoxMovable
                    </label>
                  </li>
                  <li role="presentation">
                    <label className="checkbox-inline">
                      <input type="checkbox" name="cropBoxResizable" defaultChecked />
                      cropBoxResizable
                    </label>
                  </li>
                  <li role="presentation">
                    <label className="checkbox-inline">
                      <input type="checkbox" name="toggleDragModeOnDblclick" defaultChecked />
                      toggleDragModeOnDblclick
                    </label>
                  </li>
                </ul>
              </div>{/* /.dropdown */}
              <a className="btn btn-default btn-block" data-toggle="tooltip" href="https://fengyuanchen.github.io/cropperjs" title="Cropper without jQuery">Cropper.js</a>
            </div>{/* /.docs-toggles */}
          </div>
        </div>
        {/* /image cropping */}
      </div>
    </div>
  </div>
</div>
{/* /page content */}

               
            </div>
        )
    }
}
