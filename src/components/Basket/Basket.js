import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import BasketItem from '../BasketItem';

class Basket extends Component {
  render() {
    const basketArray = this.props.basket;

    const basket = basketArray.map(basketItem => {
      return (
        <tr key={basketItem.id}>
          <BasketItem basketItem={basketItem} quantity={basketItem.quantity}/>
        </tr>
      );
    });
    // }): (<tr >
    //         <td className="text-center" colSpan='6'>List Empty</td>
    //     </tr>);

    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Sum Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {basket}
          </tbody>

        </Table>
      </>
    );
  }
}

Basket.propTypes = {
  basket: {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }
};

const mapStateToProps = state => {
  return {
    basket: state.basket.basket
  };
};

export default connect(mapStateToProps)(Basket);
