import React from "react";
import { PRODUCTS } from "../../pages/Cart/products";
import { Product } from "../../pages/Cart/product";
import './catalog.css';

export const Catalog = ({header}) => {
  return (
    <div>
      <div>
        <h1 className="pageName">{header}</h1>
      </div>

      <div className="item-list">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};


export default Catalog;


