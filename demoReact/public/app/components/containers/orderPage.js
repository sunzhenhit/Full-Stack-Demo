import React from 'react';
import _ from 'lodash';
import OrderList from '../views/itemOrderList';
import * as queryapi from '../../api/queryapi';

const orderPage = React.createClass({

  getInitialState: function() {

    queryapi.getItemsOrder().then(items => {
      this.setState({items: items});
    
     });

    return {
      items:[]
    }
  }, 

  render: function() {
    return (
      <div>
      <div className="data-list-item">
      <div className='data-item'> Product</div>
      <div className='data-item'> Ordered Times</div>
      </div>
      
      <OrderList items={this.state.items}  />
      </div>
        );
  }

});

export default orderPage;
