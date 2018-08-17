import React, { Component } from 'react';

class Aside extends Component {
  render() {
    return (
      <aside class="main-sidebar">
        <div class="sidebar">
          <div class="user-panel text-center">
            <div class="image">
              <img src="assets/muay.jpg" class="img-circle" alt="User Image" />
            </div>
            <div class="info">
              <p>Muay</p>
              <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
            </div>
          </div>
          <form action="#" method="get" class="sidebar-form">
            <div class="input-group">
              <input type="text" name="q" class="form-control" placeholder="Search..." />
                            <span class="input-group-btn">
                                <button type="submit" name="search" id="search-btn" class="btn"><i class="fa fa-search"></i></button>
                            </span>
            </div>
          </form>
          <ul class="sidebar-menu">
            <li class="header">MAIN NAVIGATION</li>
            <li class="active">
              <a href="/"><i class="ti-home"></i> <span>Dashboard</span>
              </a>
            </li>
            <li class="">
              <a href="/machine"><i class="ti-layout-list-thumb-alt"></i> <span>Machines</span>
              </a>
            </li>
            <li class="treeview">
              <a href="/report">
                <i class="ti-files"></i><span>Reports</span>
              </a>
              <ul class="treeview-menu">
                <li><a href="buttons.html">Buttons</a></li>
                <li><a href="tabs.html">Tabs</a></li>
              </ul>
            </li>
            <li class="treeview">
              <a href="/alert">
                <i class="ti-alert"></i> <span>Alert</span>
                <span class="pull-right-container">
                    <span class="label label-danger pull-right">2</span>
                    <span class="label label-warning pull-right">3</span>
                </span>
              </a>
            </li>
            <li class="treeview">
              <a href="#">
                <i class="ti-video-camera"></i> <span>Vdo</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}

export default Aside;
