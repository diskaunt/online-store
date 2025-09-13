'use client';
import Button from '@/shared/components/Button/Button';
import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import type { Nav, NavItem } from '../model/types';

const NavItems: NavItem[] = [
  {
    title: 'Company',
    items: [
      'About',
      'Careers',
      'Contact us',
      'Press',
      'Library',
      'About Time',
      'News',
    ],
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

const Nav = ({ styles }: Nav) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

	// Активирует аккардион и устанавлиевает активный индекс с стейт
  const HandleActive = useCallback((index: number) => {
    setActiveIndex((prev) => {
      if (document.documentElement.clientWidth <= 1034) {
        return prev === index ? null : index;
      }
      return null;
    });
  }, []);

  return (
    <div className={classNames(styles.nav)}>
      {NavItems.map((navItem, index) => (
        <div
          id={index.toString()}
          key={index}
          className={classNames(
            activeIndex === index ? styles.navItemActive : null,
            styles.navItem
          )}
        >
          <Button
            onclick={() => HandleActive(index)}
            className={styles.navTitle}
          >
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
          <div className={classNames(styles.navLinks)}>
            {navItem.items.map((item, index) => (
              <a className={classNames(styles.navLink)} key={index} href='#'>
                {item}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Nav;
