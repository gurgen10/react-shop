import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="card">
                <h3>{this.props.item.title}</h3>
                <img src={this.props.item.img} className="item-img" alt={this.props.item.title}/>
                <div className="item-desc">
                    <span>{this.props.item.price} $</span>
                    <button className="btn btn-success"><i className="icon-basket"></i></button>
                    
                </div>
            </div>
         );
    }
}
 
export default Item;