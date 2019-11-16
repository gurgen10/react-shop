import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Alert, Button} from 'react-bootstrap';
import './Item.css';
import {addToBasket, removeFromBasket} from '../../Actions/basketAction'

class Item extends Component {
    constructor(props) {
        super(props);

    }
    onClickAddItemToBasket = (e) => {
        e.preventDefault(); 
        console.log("dsvfevve",this.props.basket);
        this.props.addItemToBasket(this.props.item);

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

const mapStateToProps = state => {
    
    return {
        basket: state.basket
    }
}

const mapDispatchToProps = dispatch =>  {
    return {
        addItemToBasket: (payload) => dispatch(addToBasket(payload)),
        removeItemFromBasket: (payload) => dispatch(removeFromBasket(payload))
    }

}

 
export default connect(mapStateToProps, mapDispatchToProps) (Item);