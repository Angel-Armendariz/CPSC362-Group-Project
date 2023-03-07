import React from 'react';
import './catalog.css';

const Catalog = ({ items, header }) => {
  return (
    <div className="catalog-container">
      <h1 className='pageName'>{header}</h1>
      <div className="item-list">
        {items.map(item => (
          <div className='catalog-item-container' key={item.id} >
            <a href={item.path}>
              <img className="catalog-item" src={item.image} alt={item.title} />
            </a>
            <h2 className='catalog-item-name'>{item.title}</h2>
            <h3 className='catalog-item-price'>{item.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Catalog;
//add 2 new variables to the Catalog function for price and path for button