import type { Metadata } from 'next';
import { Arimo } from 'next/font/google';
import './globals.sass';
import Header from '../widgets/Header/Header';
import Footer from '@/widgets/Footer/Footer';
import classNames from 'classnames';
import styles from './page.module.sass'

const arimo = Arimo({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Store',
  description: 'Online store concept ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={arimo.className}>
      <body cz-shortcut-listen='true'>
        <div className={classNames(styles.contetnt)}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
