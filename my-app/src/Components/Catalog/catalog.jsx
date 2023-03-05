import React from 'react';
import './catalog.css';

const Catalog = ({ items, header }) => {
  return (
    <div className="catalog-container">
      <h1 className='pageName'>{header}</h1>
      <div className="item-list">
        {items.map(item => (
          <div className='catalog-item-container' key={item.id} >
            <img className="catalog-item" src={item.image} alt={item.title} />
            <h2 className='catalog-item-name'>{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
