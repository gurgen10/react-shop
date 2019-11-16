import React, { Component } from 'react';
import {connect} from 'react-redux';
import './ItemList.css';
import goods from '../../data/Data';
import Item from '../../components/Item';



class ItemList extends Component {
    goods = [];
    componentWillMount() {
        this.goods = goods;

    }
    componentDidUpdate() {
        this.goods = goods;

    }
    
    render() { 
        this.goods = goods.filter( item => {
            let title = this.props.title.trim().toLowerCase();
            let maxPrice = this.props.maxPrice;
            return (item.title.toLowerCase().indexOf(title) !== -1 || title === "" ) &&
             (item.price <= maxPrice ||  maxPrice === 0)
        })
        
        if(this.goods.length > 0) {
            const items = this.goods.map(item => {
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
        } else {
            return (
                <h2 className="text-danger">No item to show</h2>
            );
            
        }

        
        
    }
}

const mapStateToProps = state => {
    
    return{
        title : state.search.title,
        maxPrice: state.search.maxPrice,
    }
}
 
export default connect(mapStateToProps)( ItemList);