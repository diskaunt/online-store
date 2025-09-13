'use client';

import Button from '@/shared/components/Button/Button';
import classNames from 'classnames';
import React, { useState } from 'react';
import type { Styles, UtilityMenuItem } from '../model/types';

const utilityMenuItems: UtilityMenuItem[] = [
  {
    title: 'en',
    href: '/en',
    svg: (
      <svg
        width='16'
        height='17'
        viewBox='0 0 16 17'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M10.88 12.72L14.48 16.32L15.36 15.44L11.84 11.76L11.68 11.6L11.76 11.44C12.64 10.32 13.12 8.88 13.12 7.36C13.12 3.76 10.16 0.800003 6.56 0.800003C2.96 0.800003 0 3.76 0 7.36C0 10.96 2.96 13.92 6.56 13.92C8 13.92 9.44 13.44 10.56 12.56L10.72 12.48L10.88 12.72ZM6.56 12.72C3.6 12.72 1.28 10.32 1.28 7.44C1.28 4.56 3.68 2.16 6.56 2.16C9.44 2.16 11.84 4.56 11.84 7.44C11.84 10.4 9.52 12.72 6.56 12.72Z' />
      </svg>
    ),
  },
  {
    title: 'search',
    href: '/search',
    svg: (
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M13.6 14.9L18.1 19.4L19.2 18.3L14.8 13.7L14.6 13.5L14.7 13.3C15.8 11.9 16.4 10.1 16.4 8.2C16.4 3.7 12.7 0 8.2 0C3.7 0 0 3.7 0 8.2C0 12.7 3.7 16.4 8.2 16.4C10 16.4 11.8 15.8 13.2 14.7L13.4 14.6L13.6 14.9ZM8.2 14.9C4.5 14.9 1.6 11.9 1.6 8.3C1.6 4.7 4.6 1.7 8.2 1.7C11.8 1.7 14.8 4.7 14.8 8.3C14.8 12 11.9 14.9 8.2 14.9Z' />
      </svg>
    ),
  },
  {
    title: 'wishlist',
    href: '/wishlist',
    svg: (
      <svg
        width='21'
        height='17'
        viewBox='0 0 21 17'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M10.4804 16.2994L0.400391 6.21936L5.06104 0.800003H7.33717L10.4804 3.94323L13.5152 0.800003H15.7914L20.452 6.21936L10.4804 16.2994ZM1.91781 6.11097L10.4804 14.6736L19.043 6.11097L15.3578 1.88387H13.9488L10.372 5.46065L6.90362 1.88387H5.49458L1.91781 6.11097Z' />
      </svg>
    ),
  },
  {
    title: 'login',
    href: '/login',
    svg: (
      <svg
        width='22'
        height='20'
        viewBox='0 0 22 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M11 0.75C14.1756 0.75 16.75 3.32436 16.75 6.5C16.75 9.67564 14.1756 12.25 11 12.25C7.82436 12.25 5.25 9.67564 5.25 6.5C5.25 3.32436 7.82436 0.75 11 0.75Z'
          strokeWidth='1.5'
        />
        <path
          d='M1 19.5C3.14984 16.4863 6.82606 14.5 11 14.5C15.1739 14.5 18.8502 16.4863 21 19.5'
          strokeWidth='1.5'
        />
      </svg>
    ),
  },
  {
    title: 'cart',
    href: '/cart',
    svg: (
      <svg
        width='14'
        height='16'
        viewBox='0 0 14 16'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M13.8796 5.12C13.8796 4.88 13.7196 4.72 13.4796 4.72H10.5996V4.16C10.5996 2.32 9.07961 0.800003 7.23961 0.800003C5.39961 0.800003 3.87961 2.32 3.87961 4.16V4.64H0.999609C0.759609 4.64 0.599609 4.8 0.599609 5.04V15.6C0.599609 15.84 0.759609 16 0.999609 16H13.4796C13.7196 16 13.8796 15.84 13.8796 15.6V5.12ZM4.83961 4.16C4.83961 2.88 5.87961 1.76 7.23961 1.76C8.59961 1.76 9.63961 2.8 9.63961 4.16V4.64H4.83961V4.16ZM12.9196 15.04H1.55961V5.68H3.79961V7.6H4.83961V5.68H9.63961V7.6H10.6796V5.68H12.9196V15.04Z' />
      </svg>
    ),
  },
];

const UtilityMenu = ({ styles }: Styles) => {
  const [cartNumber, setCartNumber] = useState<number>(0);

  return (
    <div className={classNames('flex', styles.utilityMenuList)}>
      {utilityMenuItems.map((utilityItem, index) => (
        <div key={index} className={classNames(styles.utilityMenuItem)}>
          <Button
            onclick={() => setCartNumber((prev) => prev + 1)}
            className={styles.utilityMenuButton}
          >
            {utilityItem.svg}
            <span>
              {utilityItem.title}
              {index === utilityMenuItems.length - 1
                ? ' (' + cartNumber + ')'
                : ''}
            </span>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default UtilityMenu;
