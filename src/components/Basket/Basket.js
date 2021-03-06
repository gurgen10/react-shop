import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Table, Button, Modal } from 'react-bootstrap';

import BasketItem from '../BasketItem';
import { showPurchaseModal, decrementBasketCount } from '../../Actions/commonAction';
import { emptyBasket } from '../../Actions/basketAction';
import { buyItems } from '../../Actions/BuyAction';

/**
 * Class represents a basket.
 * @extends Component
 */
class Basket extends Component {
  /**
   * handel a closing a modal
   * @returns {void}
   */
  handleClose = () => {
    this.props.showPurchaseModal(false);
  }

  /**
   * handel a opening a modal
   * @returns {void}
   */
  handleShow = () => {
    this.props.showPurchaseModal(true);
  }

  /**
   * Save purchased items
   * @returns {void}
   */
  savePurchase = () => {
    let quantity = 0;
    this.props.basket.forEach(el => {
      quantity += el.quantity;
    });
    this.props.decrementBasketCount();
    this.props.emptyBasket(quantity);
    this.props.buyItems(this.props.basket);
    this.props.showPurchaseModal(false);
  }

  /**
   * Render Basket page
   * @returns {void}
   */
  render() {
    const totalStyle = {
      background: 'yellow'
    };

    const basketArray = this.props.basket;
    const emptyTableRow = (<tr><td className="text-center" colSpan='6'>List Empty</td></tr>);
    const totalTableRow = (<tr style={totalStyle}>
      <td className="text-center" colSpan='4'><strong>Total Price</strong></td>
      <td className="text-center" ><b>{this.props.totalPrice + ' ֏'}</b></td>
    </tr>);
    const basket = (basketArray.map((basketItem, index) => {
      return (
        <tr key={index}>
          <BasketItem basketItem={basketItem} quantity={basketItem.quantity}/>
        </tr>
      );
    }));
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
            {basket.length > 0 ? basket : emptyTableRow}
            {basket.length > 0 ? totalTableRow : (<tr></tr>)}
          </tbody>
        </Table>
        <div><Button onClick={this.handleShow} variant="success">Purchase</Button></div>
        {this.showModal()}
      </>
    );
  }

  /**
   * Modal view jsx code
   * @returns {void}
   */
  showModal = () => {
    return (
      <Modal show={this.props.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Purchase Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to buy all thise items?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
              Close
          </Button>
          <Button variant="primary" onClick={this.savePurchase}>
              Save Purchase
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
}

/** Prop Types validation for basket page */
Basket.propTypes = {
  basket: PropTypes.array,
  title: PropTypes.string,
  img: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
  totalPrice: PropTypes.number,
  show: PropTypes.bool,
  showPurchaseModal: PropTypes.func,
  emptyBasket: PropTypes.func,
  buyItems: PropTypes.func,
  decrementBasketCount: PropTypes.func
};

/**
 * Redux mapStateToProps function
 * @param {Object} state - gets current state and pass to props
 * @returns {Object} state to props object
 */
const mapStateToProps = state => {
  return {
    basket: state.basket.basket,
    totalPrice: state.basket.totalPrice,
    show: state.common.showPopup
  };
};

/**
 * Redux dispatchStateToProps function
 * @param {Object} dispatch - gets current state and pass to props
 * @returns {Object} props methods to change state
 */
const dispatchStateToProps = dispatch => {
  return { ...bindActionCreators({ showPurchaseModal, emptyBasket, buyItems, decrementBasketCount }, dispatch) };
};

/** connect redux function */
export default connect(mapStateToProps, dispatchStateToProps)(Basket);
