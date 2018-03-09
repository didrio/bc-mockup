import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div className='nav'>
        <div className='nav__item'>
          Volume & Shape
        </div>
        <div className='nav__item'>
          Smooth & Control
        </div>
        <div className='nav__item'>
          Repair & Nourish
        </div>
        <div className='nav__item'>
          Reviews
        </div>
        <div className='nav__item'>
          How-To-Videos
        </div>
        <div className='nav__item'>
          Ingredients
        </div>
      </div>
    );
  }
}

export default Nav;