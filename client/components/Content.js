import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div className='content'>
        <div className='content__more-info'>
          <img className='content__image' src='https://s3-us-west-2.amazonaws.com/didrio-beautycounter/girl.jpg'></img>
          <div className='content__description'>
            <div className='content__header'>
              Volume & Shape
            </div>
            <div className='content__line'></div>
            <div className='content__text'>
              Reveal beautiful body and enviable oomph with this collection for fine, flat hair featuring volumizing hibiscus proteins. Safe for color treated hair.
            </div>
          </div>
        </div>
        <div className='content__color-bar'></div>
      </div>
    );
  }
}

export default Content;