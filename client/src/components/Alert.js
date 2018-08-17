import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    fetch("/api/alert")
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
            <div class="panel panel-bd">
              <div class="panel-heading">
                <div class="panel-title">
                  <h4>Alert</h4>
                </div>
              </div>
              <div class="panel-body">
                <div class="table-responsive">
                  <table  class="table table-striped">
                    <thead>
                    <tr>
                      <th>Timestamp</th>
                      <th>Level</th>
                      <th>Message</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map(item => (
                      <tr>
                        <td>{item.timestamp}</td>
                        <td><span class="label label-pill label-danger m-r-15">{item.level}</span></td>
                        <td>{item.message}</td>
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

export default Alert;

