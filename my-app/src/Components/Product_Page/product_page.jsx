import React from "react";
import "./product_page.css";

const Product_Page = ({path, item, related_1, related_2, related_3, related_4}) => {
    return (
        <div className = "product-page-container">
            <div className = "path-container">
                <div className = "path-home-container">
                    <h6 /*change to a link*/ className = "path-home">Home</h6>
                </div>
    
                <div className = "path-category-container">
                    <h6 /*change to a link*/ className = "path-category">{path.category}</h6>
                </div>

                <div className = "path-type-container">
                    <h6 /*change to a link*/ className = "path-type">{path.type}</h6>
                </div>

                <div className = "path-item-container">
                    <h6 /*change to a link*/ className = "path-item">{path.item}</h6>
                </div>
            </div>

            <div className = "item-container">
                <img className = "item-image" src = {item.image} alt = {item.name} />

                <div className = "item-details">
                    <div className = "item-name-container">
                        <h1 className = "item-name">{item.name}</h1>
                    </div>

                    <div className = "item-price-container">
                        <h2 className = "item-price">{item.price}</h2>
                    </div>

                    <div className = "line-container">
                        <div className = "line"></div>
                    </div>

                    /* Needs if-else for one-size*/
                    <div className = "size-container">
                        <div className = "size-text-container">
                            <h2 className = "size-text">Size</h2>
                        </div>

                        <div className = "size-xs-container">
                            <h3 className = "size-xs">XS</h3>
                        </div>

                        <div className = "size-s-container">
                            <h3 className = "size-s">S</h3>
                        </div>

                        <div className = "size-m-container">
                            <h3 className = "size-m">M</h3>
                        </div>
    
                        <div className = "size-l-container">
                            <h3 className = "size-l">L</h3>
                        </div>

                        <div className = "size-xl-container">
                            <h3 className = "size-xl">XL</h3>
                        </div>

                        <div className = "size-2xl-container">
                            <h3 className = "size-2xl">2XL</h3>
                        </div>
                    </div>

                    /*Needs to be responsize based on the buttons*/
                    <div className = "quantity-container">
                        <div className = "quantity-minus">
                        </div>
                        
                        <div className = "quantity-number-container">
                            <h3 className = "quantity-number">1</h3>
                        </div>

                        <div className = "quantity-plus">
                        </div>
                    </div>

                    <div className = "add-to-cart-container">
                        <h2 className = "add-to-cart">Add to Cart</h2>
                    </div>

                    <div className = "item-info-container">
                        <p className = "item-info">{item.info}</p>
                    </div>
                </div>
            </div>

            <div className = "related-items-container">
                <div className = "related-items-title-container">
                    <h2 className = "related-items-title">Related Items</h2>
                </div>

                <div className = "related-items-row">
                    <div className = "related-items-1-container">
                        <img className = "related-items-1-image" src = {related_1.image} alt = {related_1.name} />
                        
                        <div className = "related-items-1-name-container">
                            <h3 className = "related-items-1-name">{related_1.name}</h3>
                        </div>

                        <div className = "related-items-1-price-container">
                            <h4 className = "related-items-1-price">{related_1.price}</h4>
                        </div>
                    </div>

                    <div className = "related-items-2-container">
                        <img className = "related-items-2-image" src = {related_2.image} alt = {related_2.name} />
                        
                        <div className = "related-items-2-name-container">
                            <h3 className = "related-items-2-name">{related_2.name}</h3>
                        </div>

                        <div className = "related-items-2-price-container">
                            <h4 className = "related-items-2-price">{related_2.price}</h4>
                        </div>
                    </div>

                    <div className = "related-items-3-container">
                        <img className = "related-items-3-image" src = {related_3.image} alt = {related_3.name} />
                        
                        <div className = "related-items-3-name-container">
                            <h3 className = "related-items-3-name">{related_3.name}</h3>
                        </div>

                        <div className = "related-items-3-price-container">
                            <h4 className = "related-items-3-price">{related_3.price}</h4>
                        </div>
                    </div>

                    <div className = "related-items-4-container">
                        <img className = "related-items-4-image" src = {related_4.image} alt = {related_4.name} />
                        
                        <div className = "related-items-4-name-container">
                            <h3 className = "related-items-4-name">{related_4.name}</h3>
                        </div>

                        <div className = "related-items-4-price-container">
                            <h4 className = "related-items-4-price">{related_4.price}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product_Page;