import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="data-list">
  

      {props.items.map(items => {

        return (
          <div key={items._id} className="data-list-item">
            <div className="details">
              <div className='data-item'> {items.orderId}</div>
              <div className='data-item'> {items.companyName}</div>
              <div className='data-item'> {items.customerAddress}</div>
              <div className='data-item'> {items.orderedItem}</div>
            </div>
            <div className="controls">
              <button onClick={props.deleteItem.bind(null, items.orderId)} className="delete">Delete</button>
            </div>
          </div>
        );

      })}
   </div>
  );
}
