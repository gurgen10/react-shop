import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Form, FormControl } from 'react-bootstrap';

import { searchByTitle, searchByPrice } from '../../Actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.title = '';
    this.maxPrice = 0;
  }

  updateSearchState() {
    this.props.onChangeTitle(this.title);
    this.props.onChangePrice(this.maxPrice);
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
  title: PropTypes.string.isRequired,
  maxPrice: PropTypes.number.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeTitle: (payload) => dispatch(searchByTitle(payload)),
    onChangePrice: (payload) => dispatch(searchByPrice(payload))
  };
};

export default connect(null, mapDispatchToProps)(Search);
