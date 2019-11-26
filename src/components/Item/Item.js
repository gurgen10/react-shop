import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './Item.css';
import { incrementBasketCount } from '../../Actions/commonAction';
import { addToBasket } from '../../Actions/basketAction';

/**
 * Representing a Item.
 * @extends Component
 */
class Item extends Component {
  /**
   * Handles click to Add Item button
   * @param {Object} e - Event parameter
   * @returns {void}
   */
  onClickAddItemToBasket = (e) => {
    e.preventDefault();

    this.props.addToBasket(this.props.item);
    this.props.incrementBasketCount();
  }

  /**
   * Renderong Item component
   * @returns {void}
   */
  render() {
    return (
      <>
        <Alert variant="success">
          <div className="card item">
            <Alert.Heading>{this.props.item.title}</Alert.Heading>
            <img src={this.props.item.img} className="item-img" alt={this.props.item.title}/>
            <div className="item-desc">
              <span>{this.props.item.price} $</span>
              <Button onClick={this.onClickAddItemToBasket} variant="outline-success"><i className="icon-basket"></i></Button>
            </div>
          </div>
        </Alert>
      </>
    );
  }
}

Item.propTypes = {
  basket: PropTypes.array,
  item: PropTypes.object,
  title: PropTypes.string,
  img: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
  addToBasket: PropTypes.func,
  incrementBasketCount: PropTypes.func
};

const mapStateToProps = state => {
  return {
    basket: state.basket.basket
  };
};

const mapDispatchToProps = dispatch => {
  return { ...bindActionCreators({ incrementBasketCount, addToBasket }, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
