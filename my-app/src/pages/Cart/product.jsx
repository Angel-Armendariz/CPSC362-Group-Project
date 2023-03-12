import React, { useContext } from "react";
import { ShopContext } from "./shop-context";
import '../../Components/Catalog/catalog.css';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="catalog-item-container">
      <img className="catalog-item" src={productImage} />
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
        <Product key={product.id} data={product} />
      ))}
    </div>
  );
};
