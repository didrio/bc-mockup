import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='header__new-tag'>
          New
        </div>
        <h1 className='header__main-text'>
          Good Hair Days Start with Safer Ingredients
        </h1>
        <div className='header__sub-text'>
          Formulated without sulfates, minerial oil, silicones, or synthetic fragrances, our next-generation hair care delivers high performance and safety.
        </div>
        <img className='header__image' src='https://s3-us-west-2.amazonaws.com/didrio-beautycounter/beautycounter-min.png'></img>
      </div>
    );
  }
}

export default Header;