import React, {Component} from 'react'
import $ from "jquery"
import debounce from 'react-debouncing';
export default class Sidemenu extends Component {

  /* 初始化菜单 */
  constructor(props){
    super(props);
  }
  // Sidebar
  initSidebar = () => {
    const CURRENT_URL = window.location.href.split('#')[0].split('?')[0],
    $BODY = $('body'),
    $SIDEBAR_MENU = $('#sidebar-menu'),
    $SIDEBAR_FOOTER = $('.sidebar-footer'),
    $LEFT_COL = $('.left_col'),
    $RIGHT_COL = $('.right_col'),
    $NAV_MENU = $('.nav_menu'),
    $FOOTER = $('footer');
    // TODO: This is some kind of easy fix, maybe we can improve this
    console.log("init_sidebar");
    var setContentHeight = function () {
      // reset height
      $RIGHT_COL.css('min-height', $(window).height());

      var bodyHeight = $BODY.outerHeight(),
        footerHeight = $BODY.hasClass('footer_fixed')
          ? -10
          : $FOOTER.height(),
        leftColHeight = $LEFT_COL
          .eq(1)
          .height() + $SIDEBAR_FOOTER.height(),
        contentHeight = bodyHeight < leftColHeight
          ? leftColHeight
          : bodyHeight;

      // normalize content
      contentHeight -= $NAV_MENU.height() + footerHeight;

      $RIGHT_COL.css('min-height', contentHeight);
    };
    $SIDEBAR_MENU
      .find('a')
      .on('click', function (ev) {
        console.log('clicked - sidebar_menu');
        var $li = $(this).parent();

        if ($li.is('.active')) {
          $li.removeClass('active active-sm');
          $('ul:first', $li).slideUp(function () {
            setContentHeight();
          });
        } else {
          // prevent closing menu if we are on child menu
          if (!$li.parent().is('.child_menu')) {
            $SIDEBAR_MENU
              .find('li')
              .removeClass('active active-sm');
            $SIDEBAR_MENU
              .find('li ul')
              .slideUp();
          } else {
            if ($BODY.is(".nav-sm")) {
              $li
                .parent()
                .find("li")
                .removeClass("active active-sm");
              $li
                .parent()
                .find("li ul")
                .slideUp();
            }
          }
          $li.addClass('active');

          $('ul:first', $li).slideDown(function () {
            setContentHeight();
          });
        }
      });
    //deboucing
    $(window).bind("resize",debounce(setContentHeight,100));
  
    // check active menu
    $SIDEBAR_MENU
      .find('a[href="' + CURRENT_URL + '"]')
      .parent('li')
      .addClass('current-page');

    $SIDEBAR_MENU
      .find('a')
      .filter(function () {
        return this.href == CURRENT_URL;
      })
      .parent('li')
      .addClass('current-page')
      .parents('ul')
      .slideDown(function () {
        setContentHeight();
      })
      .parent()
      .addClass('active');

    setContentHeight();

    // fixed sidebar
    if ($.fn.mCustomScrollbar) {
      $('.menu_fixed').mCustomScrollbar({
        autoHideScrollbar: true,
        theme: 'minimal',
        mouseWheel: {
          preventDefault: true
        }
      });
    }
  };
  // /Sidebar

  /* 初始化菜单事件 */
  componentDidMount() {
    this.initSidebar();
  }

  render() {
    return (
      <div>
        <div className="left_col scroll-view">
          <div className="navbar nav_title" style={{
            border: 0
          }}>
            <a href="/" className="site_title"><i className="fa fa-paw"/>
              <span>React Admin!</span>
            </a>
          </div>
          <div className="clearfix"/> {/* menu profile quick info */}
          <div className="profile clearfix">
            <div className="profile_pic">
              <img src="images/img.jpg" alt="..." className="img-circle profile_img"/>
            </div>
            <div className="profile_info">
              <span>Welcome,</span>
              <h2>Thomas Lin</h2>
            </div>
          </div>
          {/* /menu profile quick info */}
          <br/> {/* sidebar menu */}
          <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
            <div className="menu_section">
              <h3>General</h3>
              <ul className="nav side-menu">
                <li>
                  <a><i className="fa fa-home"/>
                    Home
                    <span className="fa fa-chevron-down"/></a>
                  <ul className="nav child_menu">
                    <li>
                      <a href="/">Dashboard</a>
                    </li>
                    <li>
                      <a href="/Dashboard1">Dashboard1</a>
                    </li>
                    <li>
                      <a href="/Dashboard2">Dashboard2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a><i className="fa fa-edit"/>
                    Forms
                    <span className="fa fa-chevron-down"/></a>
                  <ul className="nav child_menu">
                    <li>
                      <a href="/form">General Form</a>
                    </li>
                    <li>
                      <a href="/formAdvance">Advanced Components</a>
                    </li>
                    <li>
                      <a href="/formValidation">Form Validation</a>
                    </li>
                    <li>
                      <a href="/formWizards">Form Wizard</a>
                    </li>
                    <li>
                      <a href="/formUpload">Form Upload</a>
                    </li>
                    <li>
                      <a href="/formButtons">Form Buttons</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a><i className="fa fa-desktop"/>
                    UI Elements
                    <span className="fa fa-chevron-down"/></a>
                  <ul className="nav child_menu">
                    <li>
                      <a href="general_elements.html">General Elements</a>
                    </li>
                    <li>
                      <a href="media_gallery.html">Media Gallery</a>
                    </li>
                    <li>
                      <a href="typography.html">Typography</a>
                    </li>
                    <li>
                      <a href="icons.html">Icons</a>
                    </li>
                    <li>
                      <a href="glyphicons.html">Glyphicons</a>
                    </li>
                    <li>
                      <a href="widgets.html">Widgets</a>
                    </li>
                    <li>
                      <a href="invoice.html">Invoice</a>
                    </li>
                    <li>
                      <a href="inbox.html">Inbox</a>
                    </li>
                    <li>
                      <a href="calendar.html">Calendar</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a><i className="fa fa-table"/>
                    Tables
                    <span className="fa fa-chevron-down"/></a>
                  <ul className="nav child_menu">
                    <li>
                      <a href="tables.html">Tables</a>
                    </li>
                    <li>
                      <a href="tables_dynamic.html">Table Dynamic</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a><i className="fa fa-bar-chart-o"/>
                    Data Presentation
                    <span className="fa fa-chevron-down"/></a>
                  <ul className="nav child_menu">
                    <li>
                      <a href="chartjs.html">Chart JS</a>
                    </li>
                    <li>
                      <a href="chartjs2.html">Chart JS2</a>
                    </li>
                    <li>
                      <a href="morisjs.html">Moris JS</a>
                    </li>
                    <li>
                      <a href="echarts.html">ECharts</a>
                    </li>
                    <li>
                      <a href="other_charts.html">Other Charts</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a><i className="fa fa-clone"/>Layouts
                    <span className="fa fa-chevron-down"/></a>
                  <ul className="nav child_menu">
                    <li>
                      <a href="fixed_sidebar.html">Fixed Sidebar</a>
                    </li>
                    <li>
                      <a href="fixed_footer.html">Fixed Footer</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="menu_section">
              <h3>Live On</h3>
              <ul className="nav side-menu">
                <li>
                  <a><i className="fa fa-bug"/>
                    Additional Pages
                    <span className="fa fa-chevron-down"/></a>
                  <ul className="nav child_menu">
                    <li>
                      <a href="e_commerce.html">E-commerce</a>
                    </li>
                    <li>
                      <a href="projects.html">Projects</a>
                    </li>
                    <li>
                      <a href="project_detail.html">Project Detail</a>
                    </li>
                    <li>
                      <a href="contacts.html">Contacts</a>
                    </li>
                    <li>
                      <a href="profile.html">Profile</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a><i className="fa fa-windows"/>
                    Extras
                    <span className="fa fa-chevron-down"/></a>
                  <ul className="nav child_menu">
                    <li>
                      <a href="page_403.html">403 Error</a>
                    </li>
                    <li>
                      <a href="page_404.html">404 Error</a>
                    </li>
                    <li>
                      <a href="page_500.html">500 Error</a>
                    </li>
                    <li>
                      <a href="plain_page.html">Plain Page</a>
                    </li>
                    <li>
                      <a href="login.html">Login Page</a>
                    </li>
                    <li>
                      <a href="pricing_tables.html">Pricing Tables</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a><i className="fa fa-sitemap"/>
                    Multilevel Menu
                    <span className="fa fa-chevron-down"/></a>
                  <ul className="nav child_menu">
                    <li>
                      <a href="#level1_1">Level One</a>
                    </li>
                    <li>
                      <a>Level One<span className="fa fa-chevron-down"/></a>
                      <ul className="nav child_menu">
                        <li className="sub_menu">
                          <a href="level2.html">Level Two</a>
                        </li>
                        <li>
                          <a href="#level2_1">Level Two</a>
                        </li>
                        <li>
                          <a href="#level2_2">Level Two</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#level1_2">Level One</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#"><i className="fa fa-laptop"/>
                    Landing Page
                    <span className="label label-success pull-right">Coming Soon</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* /sidebar menu */}
          {/* /menu footer buttons */}
          <div className="sidebar-footer hidden-small">
            <a data-toggle="tooltip" data-placement="top" title="Settings">
              <span className="glyphicon glyphicon-cog" aria-hidden="true"/>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="FullScreen">
              <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"/>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Lock">
              <span className="glyphicon glyphicon-eye-close" aria-hidden="true"/>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
              <span className="glyphicon glyphicon-off" aria-hidden="true"/>
            </a>
          </div>
          {/* /menu footer buttons */}
        </div>

      </div>
    );
  }
}
