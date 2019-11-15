import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button, Form, FormControl } from 'react-bootstrap';

import {searchByTitle, searchByPrice} from '../../Actions'

class Search extends Component {
    constructor(props) {
        super(props);
        this.title = '';
        this.maxPrice = 0;
        

    }
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        this.props.onChangeTitle(this.title);
        this.props.onChangePrice(this.maxPrice);
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
            <Form inline>
                <h2>Search</h2>
                <FormControl onChange={this.onInputTitleChange} type="text" placeholder="Search by title" className="mr-sm-2" />
                <FormControl onChange={this.onInputPriceChange} type="number" placeholder="Search by price" className="mr-sm-2" />
                <Button  onClick={ this.onSubmit} variant="outline-success">Search</Button>
            </Form>
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