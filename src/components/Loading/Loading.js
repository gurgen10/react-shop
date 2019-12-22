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
          <img style={{width: '300px'}} className='rounded-circle mx-auto' src='https://previews.123rf.com/images/venusvi/venusvi1805/venusvi180500077/103370869-sexy-girl-with-white-cloth-beautiful-girl-in-sexy-towel-on-the-background-white-room-.jpg' alt='Loading'/>

          <div className='spinner-border text-danger position-absolute' role='status' style={styleSpinner}>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      </>
    );
  }
}

export default BasketItem;
