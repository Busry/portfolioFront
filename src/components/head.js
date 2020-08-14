import React, { Component } from 'react';

class Head extends Component {
  render() {
    return (
      <div id="header">
        <a href={'/'}>
          <img src={'/images/logo.png'} className={'logo'} alt={'header'} />
        </a>
        <img
          src={'/images/header2.png'}
          className={'header_img'}
          alt={'header'}
        />
      </div>
    );
  }
}

export default Head;
