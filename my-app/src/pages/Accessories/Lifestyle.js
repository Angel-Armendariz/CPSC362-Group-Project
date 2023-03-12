import React from 'react';
import Catalog from '../../Components/Catalog/catalog';
import { PRODUCTS } from '../Cart/LifestyleProducts';
const Lifestyle = () => {
  return (
    <div>
      <Catalog PRODUCTS={PRODUCTS} header="Lifestyle" />
    </div>
  );
};

export default Lifestyle;
