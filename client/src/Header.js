import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header class="main-header">
        <a href="index.html" class="logo">
          <span class="logo-mini">
            <img src="assets/dist/img/mini-logo.png" alt="" />
                    </span>
          <span class="logo-lg">
            <img src="assets/dist/img/logo.png" alt="" />
                    </span>
        </a>
        <nav class="navbar navbar-static-top">
          <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span class="sr-only">Toggle navigation</span>
            <span class="pe-7s-keypad"></span>
          </a>
          <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
              <li class="dropdown messages-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="pe-7s-mail"></i>
                  <span class="label label-success">4</span>
                </a>
              </li>
              <li class="dropdown notifications-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="pe-7s-speaker"></i>
                  <span class="label label-warning">8</span>
                </a>
              </li>
              <li class="dropdown tasks-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="pe-7s-flag"></i>
                  <span class="label label-danger">9</span>
                </a>
              </li>
              <li class="dropdown dropdown-user">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown"> <i class="pe-7s-settings"></i></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;


