import React, { Component } from 'react';
import './ItemList.css';
import goods from '../../data/Data';
import Item from '../../components/Item';


class ItemList extends Component {
    componentDidMount() {
        console.log("ListItem:", this.props);
    }
    
    render() { 
        console.log(goods)

        const items = goods.map(item => {
            return(
           <li key={item.id}><Item item ={item}/></li>
            )
        })
        
        return ( 
        <>   
        <h2>{this.props.searchText}</h2>
        <ul className="item-list">
           {items}
        </ul> 
        </>);
        
    }
}
 
export default ItemList;