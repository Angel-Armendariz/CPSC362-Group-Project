import React from 'react';
import Catalog from '../../Components/Catalog/catalog';
import '../Cart/Products';
const PRODUCTS = [
  {
    id: 1,
    productName: "Item 1",
    price: '100',
    productImage: 'https://www.clipartmax.com/png/small/180-1809318_picture-300-x-300-pixel.png',
    path:'/All'
  },
  {
    id: 2,
    productName: "Item 2",
    price: '100',
    productImage: 'https://www.clipartmax.com/png/small/180-1809318_picture-300-x-300-pixel.png',
    path:'/All'
  },
  {
    id: 3,
    productName: "Item 3",
    price: '100',
    productImage: 'https://www.clipartmax.com/png/small/180-1809318_picture-300-x-300-pixel.png',
    path:'/All'
  },
  {
    id: 4,
    productName: "Item 4",
    price: '100',
    productImage: 'https://www.clipartmax.com/png/small/180-1809318_picture-300-x-300-pixel.png',
    path:'/All'
  },
  {
    id: 5,
    productName: "Item 5",
    price: '100',
    productImage: 'https://www.clipartmax.com/png/small/180-1809318_picture-300-x-300-pixel.png',
    path:'/All'
  },
];
const Lifestyle = () => {
  return (
    <div>
      <h1 className='pageName'>Lifestyle</h1>
      <Catalog PRODUCTS={PRODUCTS} />
    </div>
  );
};

export default Lifestyle;
