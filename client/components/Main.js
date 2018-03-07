import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';
import Content from './Content';

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Content />
      </div>
    );
  }
}

export default Main;