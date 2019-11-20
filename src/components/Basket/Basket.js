import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Table, Button, Modal } from 'react-bootstrap';

import BasketItem from '../BasketItem';
import { showPurchaseModal } from '../../Actions/commonAction';
import { emptyBasket } from '../../Actions/basketAction';
import { buyItems } from '../../Actions/BuyAction';

class Basket extends Component {
  handleClose = () => {
    this.props.showPurchaseModal(false);
  }

  handleShow = () => {
    this.props.showPurchaseModal(true);
  }

  savePurchase = () => {
    this.props.emptyBasket();
    this.props.showPurchaseModal(false);

  }

  render() {
    console.log('totalPrice', this.props.totalPrice);
    const basketArray = this.props.basket;
    const emptyTableRow = (<tr > <td className="text-center" colSpan='6'>List Empty</td></tr>);
    const totalTableRow = (<tr >
      <td className="text-center" colSpan='4'>Total Price</td>
      <td className="text-center" colSpan='2'>{this.props.totalPrice + ' ֏'}</td>
    </tr>);
    const basket = (basketArray.map(basketItem => {
      return (
        <tr key={basketItem.id}>
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
      </>
    );
  }
}

Basket.propTypes = {
  basket: PropTypes.array,
  title: PropTypes.string,
  img: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
  totalPrice: PropTypes.number,
  show: PropTypes.bool,
  showPurchaseModal: PropTypes.func,
  emptyBasket: PropTypes.func
};

const mapStateToProps = state => {
  return {
    basket: state.basket.basket,
    totalPrice: state.basket.totalPrice,
    show: state.common.showPopup
  };
};

const dispatchStateToProps = dispatch => {
  return { ...bindActionCreators({ showPurchaseModal, emptyBasket, buyItems }, dispatch) };
};

export default connect(mapStateToProps, dispatchStateToProps)(Basket);
