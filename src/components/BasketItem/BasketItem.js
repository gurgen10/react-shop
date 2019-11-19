import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './BasketItem.css';
import { removeFromBasket } from '../../Actions/basketAction';
import { decrementBasketCount } from '../../Actions/commonAction';

class BasketItem extends Component {
    onClickRemoveItemFromBasket = () => {
      // this.props.removeItemFromBasket(this.props.basketItem);
      // this.props.decrementItemsCount(this.props.basketItem.quantity);
    }

    render() {
      console.log(this.props.basketItem);
      return (
        <>
          <td><img className="basket-img" src={this.props.basketItem.img} alt={this.props.basketItem.title}/></td>
          <td>{ this.props.basketItem.title }</td>
          <td>{ this.props.basketItem.quantity }</td>
          <td>{ this.props.basketItem.price }</td>
          <td>{ this.props.basketItem.quantity * this.props.basketItem.price }</td>
          <td><Button onClick={ this.onClickRemoveItemFromBasket } variant="danger">Remove from Basket</Button></td>
        </>
      );
    }
}

BasketItem.propTypes = {
  basketItem: {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }
};

const mapDispatchToProps = dispatch => {
  return {
    removeItemFromBasket: (payload) => dispatch(removeFromBasket(payload)),
    decrementItemsCount: (payload) => dispatch(decrementBasketCount(payload))
  };
};

export default connect(null, mapDispatchToProps)(BasketItem);
