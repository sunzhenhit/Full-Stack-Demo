import React from 'react';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="data-list">
  

      {props.items.map(items => {

        return (
          <div key={items._id} className="data-list-item">
            <div className="details">
              <div className='data-item'> {items._id}</div>
              <div className='data-item'> {items.count}</div>
            </div>
          </div>
        );
      })}
   </div>
  );
}
