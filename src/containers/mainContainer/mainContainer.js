import React, { Component } from 'react';
import Header from '../../components/Header';
import Search from '../../containers/Search';
import ListItems from '../../containers/ItemList';

class MainContainer extends Component {
    searchTextCallBack = (searchText) => {
        this.searchText = searchText;
        console.log("MainContainer: " + this.searchText);

    }
    
    render() { 
        return ( 
        <>
            <Header/>
            <Search searchTextCallBack={this.searchTextCallBack}/>
            <ListItems searchText={this.searchText}/>
        </> );
    }
}
 
export default MainContainer;