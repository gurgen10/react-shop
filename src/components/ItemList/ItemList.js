import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './ItemList.css';
import goods from '../../data/Data';
import Item from '../../components/Item';

class ItemList extends Component {
    goods = [];

    render() {
      this.goods = goods.filter(item => {
        const title = this.props.title.trim().toLowerCase();
        const itemTitle = item.title.trim().toLowerCase();
        const maxPrice = this.props.maxPrice;

        return (itemTitle.indexOf(title) !== -1 || title === '') && (item.price <= maxPrice || !maxPrice);
      });

      if (this.goods.length > 0) {
        const items = this.goods.map(item => {
          return (
            <li key={item.id}><Item item ={item}/></li>
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

    static propTypes = {
      title: PropTypes.string.isRequired,
      maxPrice: PropTypes.number.isRequired,
      searchText: PropTypes.string.isRequired
    }
}

const mapStateToProps = state => {
  return {
    title: state.search.title,
    maxPrice: state.search.maxPrice
  };
};

export default connect(mapStateToProps)(ItemList);
