import React from 'react';
import ProductCard from './ui/ProductCard/ProductCard';
import { Product } from './model/types';
import classNames from 'classnames';
import styles from './collections.module.sass';

const products: Array<Product> = [
  {
    id: 1,
    image: '/lib/productImage/1600/GrandComplications.jpg',
    name: 'grand complications',
    models: 35,
  },
  {
    id: 2,
    image: '/lib/productImage/1600/complications.jpg',
    name: 'complications',
    models: 35,
  },
  {
    id: 3,
    image: '/lib/productImage/1600/calatrava.jpg',
    name: 'calatrava',
    models: 15,
  },
  {
    id: 4,
    image: '/lib/productImage/1600/Gondolo.jpg',
    name: 'gondolo',
    models: 7,
  },
  {
    id: 5,
    image: '/lib/productImage/1600/GoldenEllipse.jpg',
    name: 'golden Ellipse',
    models: 3,
  },
  {
    id: 6,
    image: '/lib/productImage/1600/nautilus.jpg',
    name: 'nautilus',
    models: 31,
  },
  {
    id: 7,
    image: '/lib/productImage/1600/Aquanaut.jpg',
    name: 'aquanaut',
    models: 17,
  },
  {
    id: 8,
    image: '/lib/productImage/1600/twenty~4.jpg',
    name: 'twenty~4',
    models: 12,
  },
  {
    id: 9,
    image: '/lib/productImage/1600/PocketWatches.jpg',
    name: 'pocket watches',
    models: 9,
  },
];

const Collections = () => {
  return (
    <div className={classNames(styles.content)}>
      <div className={classNames(styles.title)}>
        <h3>Collections</h3>
      </div>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Collections;
