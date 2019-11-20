import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './Item.css';
import { addToBasket } from '../../Actions/basketAction';
import { incrementBasketCount } from '../../Actions/commonAction';

class Item extends Component {
    onClickAddItemToBasket = (e) => {
      e.preventDefault();
      this.props.addToBasket(this.props.item);
      this.props.incrementBasketCount();
    }

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
  item: {
    title: PropTypes.string,
    img: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number
  },
  addToBasket: PropTypes.func,
  incrementBasketCount: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    basket: state.basket
  };
};

const mapDispatchToProps = dispatch => {
  return { ...bindActionCreators({ addToBasket, incrementBasketCount }, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
