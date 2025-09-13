import classNames from 'classnames';
import React from 'react';
import { Styles } from '../model/types';
import Link from 'next/link';

const navItems = [
  {
    title: 'watches',
    href: '/watches',
  },
  {
    title: 'about',
    href: '/about',
  },
  {
    title: 'find a retailer',
    href: '/retailers',
  },
];

export const NavList = ({styles}: Styles) => {
  return (
    <div className={classNames(styles.navList)}>
      {navItems.map((navItem, index) => (
        <div key={index} className={classNames(styles.navItem)}>
          <Link href={navItem.href}>
            <span>{navItem.title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};
