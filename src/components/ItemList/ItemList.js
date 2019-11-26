import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import './ItemList.css';
import goods from '../../data/Data';
import Item from '../Item';
import Loading from '../Loading';
import { showLoading } from '../../Actions/commonAction';

/**
 * Representing a Item List.
 * @extends Component
 */
class ItemList extends Component {
  /**
   * Create an Item List
   * @param {Object} props - The props value
   */
  constructor(props) {
    super(props);
    this.props.showLoading(true);
  }

    goods = [];

    /**
     * Fetching goods from json
     * @returns {void}
     */
    fetchDate = () => {
      setTimeout(() => {
        this.goods = goods.filter(item => {
          const title = this.props.title.trim().toLowerCase();
          const itemTitle = item.title.trim().toLowerCase();
          const maxPrice = this.props.maxPrice;

          return (itemTitle.indexOf(title) !== -1 || title === '') && (item.price <= maxPrice || !maxPrice);
        });

        this.props.showLoading(false);
      }, 1500);
    }

    /**
     * Rendering Items List
     * @returns {void}
     */
    render() {
      this.fetchDate();

      if (this.props.isLoading) {
        return <Loading/>;
      } else {
        if (this.goods.length > 0) {
          const items = this.goods.map(item => {
            return (
              <li key={item.id}><Item
                item ={item}/></li>
            );
          });

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

    static propTypes = {
      basket: PropTypes.array,
      title: PropTypes.string,
      maxPrice: PropTypes.number,
      searchText: PropTypes.string,
      isLoading: PropTypes.bool,
      showLoading: PropTypes.func
    }
}

const mapStateToProps = state => {
  return {
    title: state.search.title,
    maxPrice: state.search.maxPrice,
    isLoading: state.common.isLoading,
    basket: state.basket.basket
  };
};

const dispatchPropsToState = (dispatch) => {
  return { ...bindActionCreators({ showLoading }, dispatch) };
};

export default connect(mapStateToProps, dispatchPropsToState)(ItemList);
