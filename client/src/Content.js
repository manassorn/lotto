import React, { Component } from 'react';
import Machine from './components/Machine';
import Report from './components/Report';
import Alert from './components/Alert'
import Dashboard from './components/Dashboard'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class Content extends Component {
  render() {
    return (
      <div class="content-wrapper">
        <section class="content-header">
          <div class="header-icon">
            <i class="pe-7s-world"></i>
          </div>
          <div class="header-title">
            <h1>Bdtask - Bootstrap Admin Template Dashboard</h1>
            <small>Very detailed & featured admin.</small>
            <ol class="breadcrumb">
              <li><a href="index.html"><i class="pe-7s-home"></i> Home</a></li>
              <li class="active">Dashboard</li>
            </ol>
          </div>
        </section>

        <section class="content">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/machine" component={Machine} />
              <Route path="/report" component={Report} />
              <Route path="/alert" component={Alert} />
              <Route path="**" component={Dashboard} />
            </Switch>
          </BrowserRouter>
        </section>
      </div>
    );
  }
}

export default Content;

