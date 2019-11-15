import React, { Component } from 'react';
import {connect} from 'react-redux';

import {searchByTitle, searchByPrice} from '../../Actions'

class Search extends Component {
    constructor(props) {
        super(props);
        this.title = '';
        this.maxPrice = 0;
        

    }
    
    onInputTitleChange = (e)=> {
        
        this.title = e.target.value;
        
    }
    onInputPriceChange = (e)=> {
        this.maxPrice = e.target.value;
        
    } 

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onChangeTitle(this.title);
        this.props.onChangePrice(this.maxPrice);
        console.log("OnSubmit", this.props);   
    }
    
    render() { 
        return ( 
        <div>
            <h2>Search</h2>
            <form className="form-control">
                <input  type='text' onChange={this.onInputTitleChange} name="searchText"/>
                <input  type='number' onChange={this.onInputPriceChange} name="priceText"/>
                <button className="btn btn-success" 
                onClick={ this.onSubmit}>Search</button>
            </form>
        </div> 
        );
    }
}

const mapStateToProps = state => {
    
    return{
        title : state.search.title,
        maxPrice: state.search.maxPrice,
    }
}


const mapDispatchToProps = dispatch => {
    return{
        onChangeTitle : (payload) => dispatch(searchByTitle(payload)),
        onChangePrice: (payload) => dispatch(searchByPrice(payload)),
    }
}

export default connect(null,mapDispatchToProps) (Search);