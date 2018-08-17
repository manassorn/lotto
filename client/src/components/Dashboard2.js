import React, { Component } from 'react';
import Machine from './Machine';
import Report from './Report';
import Alert from './Alert'

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    return (
        <div>
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <div class="panel panel-bd">
                        <div class="panel-body">
                            <div class="statistic-box">
                                <h2><span class="count-number">206</span> <span class="slight"><i class="fa fa-play fa-rotate-270 text-warning"> </i> +28%</span></h2>
                                <div class="small">% New Sessions</div>
                                <div class="sparkline1 text-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <div class="panel panel-bd">
                        <div class="panel-body">
                            <div class="statistic-box">
                                <h2><span class="count-number">321</span> <span class="slight"><i class="fa fa-play fa-rotate-90 c-white"> </i> +10%</span> </h2>
                                <div class="small">Total visitors</div>
                                <div class="sparkline2 text-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <div class="panel panel-bd">
                        <div class="panel-body">
                            <div class="statistic-box">
                                <h2><span class="count-number">789</span> <span class="slight"><i class="fa fa-play fa-rotate-270 text-warning"> </i> +29%</span></h2>
                                <div class="small">Total users</div>
                                <div class="sparkline3 text-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <div class="panel panel-bd">
                        <div class="panel-body">
                            <div class="statistic-box">
                                <h2><span class="count-number">171</span><span class="slight"><i class="fa fa-play fa-rotate-90 c-white"> </i> +24%</span></h2>
                                <div class="small">Bounce Rate</div>
                                <div class="sparkline4 text-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Machine />
            <Alert />
            <Report />
        </div>
    )
  }
}

export default Dashboard;

