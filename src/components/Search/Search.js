import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Button, Form, FormControl } from 'react-bootstrap';

import { searchByTitle, searchByPrice } from '../../Actions/searchAction';
import { showLoading } from '../../Actions/commonAction';

/**
 * Representing a Search component.
 * @extends Component
 */
class Search extends Component {
  /**
   * Create Search component
   * @param {Object} props - The props value
   */
  constructor(props) {
    super(props);
    this.title = '';
    this.maxPrice = 0;
  }

  /**
   * Update search state
   * @returns {void}
   */
  updateSearchState() {
    this.props.searchByTitle(this.title);
    this.props.searchByPrice(this.maxPrice);
  }

  /**
   * Handling item search title input change ebent
   * @param {Object} e - The event value
   * @returns {void}
   */
  onInputTitleChange = (e) => {
    e.preventDefault();
    this.title = e.target.value;
  }

  /**
   * Handling item maxPrice  title input change ebent
   * @param {Object} e - The event value
   * @returns {void}
   */
  onInputPriceChange = (e) => {
    this.maxPrice = e.target.value;
  }

  /**
   * Do search items
   * @param {Object} e - The event value
   * @returns {void}
   */
  onSubmit = (e) => {
    e.preventDefault();
    this.props.showLoading(true);
    this.updateSearchState();
  }

  /**
   * Rendering Search component
   * @returns {void}
   */
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
