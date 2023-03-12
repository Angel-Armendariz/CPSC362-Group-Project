import React, { useContext } from "react";
import { ShopContext } from "./shop-context";
import '../../Components/Catalog/catalog.css';

export const Product = (props) => {
  const { id, productName, price, productImage, path } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="catalog-item-container">
    <a href={path}>
      <img className="catalog-item" src={productImage} alt={productName} />
    </a>
      <div>
        <p className="catalog-item-name">
          <b>{productName}</b>
        </p>
        <p className="catalog-item-price"> ${price}</p>
      </div>
      <button className="catalog-item-button" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};

export const Products = () => {
  return (
    <div>
      {Products.map((product) => (
        <Product id={product.id} data={product} />
      ))}
    </div>
  );
};
