import React, { Component } from 'react';

class Search extends Component {
    onInputTextChange = (e)=> {
        this.searchText = e.target.value;

    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchTextCallBack(this.searchText);
        
        
    }
    
    render() { 
        return ( 
        <div>
            <h2>Search</h2>
            <form className="form-control">
            <input  type='text' onChange={this.onInputTextChange} name="searchText"/>
            <button className="btn btn-success" onClick={this.onSubmit}>Search</button>
            </form>
        </div> 
        );
    }
}
 
export default Search;