import React, { Component } from 'react'
import { connect } from 'react-redux';

import { Table } from 'react-bootstrap';

import  BasketItem  from "../BasketItem";

class Basket extends Component {
    componentDidUpdate() {

    }

    render() { 
        let basketArray = this.props.basket
        
        console.log("Basket", basketArray === undefined || basketArray.length == 0);
        const basket =(basketArray === undefined || basketArray.length == 0)? basketArray.map( basketItem => {
            return (
                <tr key={basketItem.id}>
                    <BasketItem basketItem={basketItem}/>
                </tr>
            )
        }): (<tr >
                <td className="text-center" colSpan='6'>List Empty</td>   
            </tr>)
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
 
const mapStateToProps = state => {
    
    return {
        basket : state.basket,
    }
}
 
export default connect(mapStateToProps)( Basket);