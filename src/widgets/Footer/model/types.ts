export type Nav = {
  styles: { [key: string]: string };
};

export type NavItem = {
  title: string | React.ReactNode;
  items: string[];
};
