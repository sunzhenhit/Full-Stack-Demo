import React from 'react';
import _ from 'lodash';
import ItemList from '../views/itemList';
import * as queryapi from '../../api/queryapi';

const DefualtPage = React.createClass({

  getInitialState: function() {
    return {
      items: []
    }
  },

  query : function(){
    var companyName =document.getElementById("companyName").value;
    var customerAddress =document.getElementById("customerAddress").value;
    var result;
    if(companyName!==''&&customerAddress===''){
      console.log(customerAddress) 
      result =queryapi.getItemsByCompanyName(companyName)
    }
    if(companyName===''&&customerAddress!==''){
      console.log(customerAddress) 
      result =queryapi.getItemsByCustomerAddress(customerAddress)
    }
    if(companyName!==''&&customerAddress!==''){
      result =queryapi.getItems(companyName,customerAddress)
    }

   
    result.then(items => {
      this.setState({items: items})
    });
    
  },
  deleteItem: function(orderId) {
    queryapi.deleteItem(orderId).then(() => {
      console.log("orederId"+orderId);
      const newItems = _.filter(this.state.items, items => items.orderId != orderId);
      console.log(newItems);
      this.setState({items: newItems})
    });

   

  },

  render: function() {
    return (
      <div>
      <div >Company Name</div>
      <input type='text' id='companyName' defaultValue='SuperTrader'/>
      <button className='query' onClick={this.query}> Query</button> 
      <div > Customer Address</div>
      <input type='text' id='customerAddress' defaultValue='Reeperbahn 153'/>
      <div className="data-list-item">
      <div className='data-item'> Order ID</div>
      <div className='data-item'> Company Name</div>
      <div className='data-item'> Customer Address</div>
      <div className='data-item'> Order Item</div>
      </div>
      
      <ItemList items={this.state.items} deleteItem={this.deleteItem} />
      </div>
        );
  }

});

export default DefualtPage;
