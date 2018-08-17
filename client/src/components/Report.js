import React, { Component } from 'react';

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    fetch("/api/report")
      .then(res => res.json())
      .then(

        (result) => {
          console.log(result)
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
                  <h4>Report</h4>
                </div>
              </div>
              <div class="panel-body">
                <div class="table-responsive">
                  <table  class="table table-striped">
                    <thead>
                    <tr>
                      <th>Timestamp</th>
                      <th>Machine</th>
                      <th>Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map(item => (
                      <tr>
                        <td>{item.timestamp}</td>
                        <td>{item.machine.name}</td>
                        <td>฿ {item.amount.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</td>
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

export default Report;

