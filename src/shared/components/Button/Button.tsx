import classNames from 'classnames';
import React, { ReactNode } from 'react';

type Button = {
  onclick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  className?: string;
};

const Button = ({ onclick, children, className }: Button) => {
  return (
    <button onClick={onclick} className={classNames('button', className)}>
      {children}
    </button>
  );
};

export default Button;
