import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import './ItemList.css';
import goods from '../../data/Data';
import Item from '../Item';
import Loading from '../Loading';
import { showLoading } from '../../Actions/commonAction';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.props.showLoading(true);


  }
    goods = [];

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

    render() {
      this.fetchDate();

      if (this.props.isLoading) {
        return <Loading/>;
      } else {
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
    }

    static propTypes = {
      title: PropTypes.string,
      maxPrice: PropTypes.number,
      searchText: PropTypes.string,
      isLoading: PropTypes.bool.isRequired,
      showLoading: PropTypes.func.isRequired
    }
}

const mapStateToProps = state => {
  return {
    title: state.search.title,
    maxPrice: state.search.maxPrice,
    isLoading: state.common.isLoading
  };
};

const dispatchPropsToState = (dispatch) => {
  return { ...bindActionCreators({ showLoading }, dispatch) };
};

export default connect(mapStateToProps, dispatchPropsToState)(ItemList);
