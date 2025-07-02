'use client';
import Button from '@/shared/Button';
import classNames from 'classnames';
import React, { MouseEvent, useCallback, useState } from 'react';

type Nav = {
  style: { [key: string]: string };
};

const NavItems: Array<{
  title: string | React.ReactNode;
  items: string[];
}> = [
  {
    title: 'Company',
    items: ['About', 'Careers', 'Press', 'Library', 'About Time', 'News'],
  },
  {
    title: 'Watches',
    items: [
      'All models',
      'New Models 2021',
      'Rare Handcrafts',
      'Jewelry & Accessories',
      'Movements',
      'Watch Finder',
    ],
  },
  {
    title: 'Support',
    items: [
      'FAQ',
      'Shipping',
      'Returns',
      'Warranty',
      'Manuals',
      'Find a Retailer',
    ],
  },
  {
    title: <>Privacy &amp;&nbsp;Terms</>,
    items: ['Terms & Conditions', 'Privacy Policy', 'Cookies'],
  },
];

const Nav = ({ style }: Nav) => {
  const [isActive, setActive] = useState<boolean>(false);

  const HandleActive = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    const target = event.target;
    setActive((prev) => !prev);
  }, []);

  return (
    <div className={classNames(style.nav)}>
      {NavItems.map((navItem, index) => (
        <div id={index.toString()} key={index} className={classNames(isActive ? style.active : null)}>
          <Button onclick={HandleActive} className={style.navTitle}>
            <h3>{navItem.title}</h3>
            <svg
              viewBox='0 0 11 11'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.0502 5.0127H6.1502H5.9877V4.8502V0.950195H5.0127V4.8502V5.0127H4.8502H0.950195V5.9877H4.8502H5.0127V6.1502V10.0502H5.9877V6.1502V5.9877H6.1502H10.0502V5.0127Z'
                fill='#111111'
              />
            </svg>
          </Button>
          <div
            className={classNames(
              style.navItems,
              isActive ? style.active : null
            )}
          >
            {navItem.items.map((item, index) => (
              <div key={index}>
                <a href='#'>{item}</a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Nav;
