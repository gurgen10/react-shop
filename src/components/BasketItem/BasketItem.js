import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './BasketItem.css';
import { removeFromBasket } from '../../Actions/basketAction';
import { decrementBasketCount } from '../../Actions/commonAction';

class BasketItem extends Component {
    onClickRemoveItemFromBasket = () => {
      this.props.removeFromBasket(this.props.basketItem);
      this.props.decrementBasketCount(this.props.basketItem.quantity);
    }

    render() {
      return (
        <>
          <td><img className="basket-img" src={this.props.basketItem.img} alt={this.props.basketItem.title}/></td>
          <td>{ this.props.basketItem.title }</td>
          <td>{ this.props.basketItem.quantity }</td>
          <td>{ this.props.basketItem.price + ' ֏' }</td>
          <td>{ (this.props.basketItem.quantity * this.props.basketItem.price) + ' ֏' }</td>
          <td><Button onClick={ this.onClickRemoveItemFromBasket } variant="danger">Remove from Basket</Button></td>
        </>
      );
    }
}

BasketItem.propTypes = {
  basketItem: PropTypes.object,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  removeFromBasket: PropTypes.func.isRequired,
  decrementBasketCount: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return { ...bindActionCreators({ removeFromBasket, decrementBasketCount }, dispatch) };
};

export default connect(null, mapDispatchToProps)(BasketItem);
