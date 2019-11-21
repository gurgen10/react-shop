import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Button, Form, FormControl } from 'react-bootstrap';

import { searchByTitle, searchByPrice } from '../../Actions/searchAction';
import { showLoading } from '../../Actions/commonAction';

class Search extends Component {
  constructor(props) {
    super(props);
    this.title = '';
    this.maxPrice = 0;
  }

  updateSearchState() {
    this.props.searchByTitle(this.title);
    this.props.searchByPrice(this.maxPrice);
  }

    onInputTitleChange = (e) => {
      e.preventDefault();
      this.title = e.target.value;
    }

    onInputPriceChange = (e) => {
      this.maxPrice = e.target.value;
    }

    onSubmit = (e) => {
      e.preventDefault();
      this.props.showLoading(true);
      this.updateSearchState();
    }

    render() {
      return (
        <Form inline>
          <h2>Search</h2>
          <FormControl onChange={this.onInputTitleChange} type="text" placeholder="Search by title" className="mr-sm-2" />
          <FormControl onChange={this.onInputPriceChange} type="number" placeholder="Search by price" className="mr-sm-2" />
          <Button onClick={ this.onSubmit} variant="outline-success">Search</Button>
        </Form>
      );
    }
}

Search.propTypes = {
  title: PropTypes.string,
  maxPrice: PropTypes.number,
  searchByTitle: PropTypes.func,
  searchByPrice: PropTypes.func,
  showLoading: PropTypes.func
};

const mapDispatchToProps = dispatch => {
  return { ...bindActionCreators({ searchByTitle, searchByPrice, showLoading }, dispatch) };
};

export default connect(null, mapDispatchToProps)(Search);
