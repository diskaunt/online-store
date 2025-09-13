import React from 'react';
import Image from 'next/image';
import { Product } from '../../model/types';
import classNames from 'classnames';
import styles from '../../collections.module.sass'

const ProductCard = ({ image, name, models }: Product) => {
  return (
    <div className={classNames(styles.card)}>
      <div className={classNames(styles.imageWrapper)}>
        <Image
				className={classNames(styles.image)}
          width={350}
          height={456}
          src={image}
          alt='picture of the watch'
        />
      </div>
      <div className={classNames(styles.descr)}>
        <div className={classNames(styles.name)}>
          <p>{name}</p>
        </div>
        <div className={classNames(styles.models)}>
          <span>{models}&nbsp;models</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
