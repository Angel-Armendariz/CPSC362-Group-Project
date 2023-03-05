import React from 'react';
import Catalog from '../../Components/Catalog/catalog';

const items = [
  { id: 1, title: 'Item 1', image: 'https://www.clipartmax.com/png/small/180-1809318_picture-300-x-300-pixel.png' },
  { id: 2, title: 'Item 2', image: 'https://www.clipartmax.com/png/small/180-1809318_picture-300-x-300-pixel.png' },
  { id: 3, title: 'Item 3', image: 'https://www.clipartmax.com/png/small/180-1809318_picture-300-x-300-pixel.png' },
  { id: 4, title: 'Item 4', image: 'https://www.clipartmax.com/png/small/180-1809318_picture-300-x-300-pixel.png' },
  { id: 5, title: 'Item 5', image: 'https://www.clipartmax.com/png/small/180-1809318_picture-300-x-300-pixel.png' },
];

const Lifestyle = () => {
  return (
    <div>
      <Catalog items={items} header="Lifestyle" />
    </div>
  );
};

export default Lifestyle;
