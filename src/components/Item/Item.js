import React, { Component } from 'react';

import {Alert, Button} from 'react-bootstrap';
import './Item.css';

class Item extends Component {
    
    render() { 
        
        return ( 
           <>
            <Alert>cmsdkcvsklvnvgnwerklngvl</Alert>
                <Alert variant="success">
                    <div className="card item">
                        <Alert.Heading>{this.props.item.title}</Alert.Heading> 
                        <img src={this.props.item.img} className="item-img" alt={this.props.item.title}/>
                        <div className="item-desc">
                            <span>{this.props.item.price} $</span>
                            <Button variant="outline-success"><i className="icon-basket"></i></Button>
                            
                        </div>
                    </div>
                </Alert>
             
             </>   
           
         );
    }
}
 
export default Item;