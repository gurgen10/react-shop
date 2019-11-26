import React, { Component } from 'react';
import './Loading.css';

/**
 * Class representing Basket component
 * @extends Component
 */
class BasketItem extends Component {
  /**
   * Rendering Basket Item component
   * @returns {void}
   */
  render() {
    const styleSpinner = {
      left: '45%',
      top: '50%',
      width: '150px',
      height: '150px'
    };
    return (
      <>
        <div className='rounded-circle  position-relative'>
          <img className='rounded-circle mx-auto' src='https://imga.apk.tools/screenshots/4/f/6/com.korean.sexygirl.wallpaper_2.png' alt='Loading'/>

          <div className='spinner-border text-danger position-absolute' role='status' style={styleSpinner}>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      </>
    );
  }
}

export default BasketItem;
