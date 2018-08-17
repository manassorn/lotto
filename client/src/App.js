import React, { Component } from 'react';
import Header from './Header';
import Aside from './Aside';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  render() {
    return (

      <div className="App">
        <link href="assets/plugins/jquery-ui-1.12.1/jquery-ui.min.css" rel="stylesheet" type="text/css"/>
        <link href="assets/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="assets/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
        <link href="assets/pe-icon-7-stroke/css/pe-icon-7-stroke.css" rel="stylesheet" type="text/css"/>
        <link href="assets/themify-icons/themify-icons.css" rel="stylesheet" type="text/css"/>
        <link href="assets/dist/css/styleBD.css" rel="stylesheet" type="text/css"/>
        <Header />
        <Aside />
        <Content />
        <Footer />
        <script src="assets/plugins/jQuery/jquery-1.12.4.min.js" type="text/javascript"></script>
        <script src="assets/dist/js/frame.js" type="text/javascript"></script>
      </div>
    );
  }
}

export default App;
