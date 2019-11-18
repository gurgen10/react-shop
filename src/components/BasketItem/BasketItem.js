import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import './BasketItem.css';
import { removeFromBasket} from '../../Actions/basketAction'

class BasketItem extends Component {
    onClickRemoveItemFromBasket = () => {
        this.props.removeItemFromBasket(this.props.basketItem)
    }

    render() { 
        
        return ( 
            <>
                <td><img className="basket-img" src={this.props.basketItem.img} alt={this.props.basketItem.title}/></td>
                <td>{this.props.basketItem.title}</td>
                <td>{this.props.basketItem.quantity}</td>
                <td>{this.props.basketItem.price}</td>
                <td>{this.props.basketItem.quantity * this.props.basketItem.price}</td>
                <td><Button onClick={this.onClickRemoveItemFromBasket} variant="danger">Remove from Basket</Button></td>
            </>
         ); 
    }
}


const mapDispatchToProps = dispatch =>  {
    return {
        
        removeItemFromBasket: (payload) => dispatch(removeFromBasket(payload))
    }

}

 
export default connect(null, mapDispatchToProps) (BasketItem);
 