import React, { Component } from 'react';
import Moment from 'react-moment';
import moment from 'moment';

class Machine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    fetch("/api/machine/list")
      .then(res => res.json())
      .then(

        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="panel panel-bd lobidrag">
              <div class="panel-heading">
                <div class="panel-title">
                  <h4>Machines</h4>
                </div>
              </div>
              <div class="panel-body">
                <div class="table-responsive">
                  <table  class="table table-striped">
                    <thead>
                    <tr>
                      <th>Name</th>
                      <th>Bank Name</th>
                      <th>Acc No.</th>
                      <th>Balance</th>
                      <th>Status</th>
                      <th>Last Heartbeat</th>
                      <th>Credit</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map(item => (
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.bankName}</td>
                        <td>{item.accNo}</td>
                        <td>฿ {item.balance.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</td>
                        <td><span class="label label-pill label-success m-r-15" title={moment(item.statusUpdatedTimestamp).fromNow()}>{item.status}</span></td>
                        <td><Moment fromNow ago>{item.lastHeartbeatTimestamp}</Moment></td>
                        <td>฿ {item.credit.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</td>
                      </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Machine;

