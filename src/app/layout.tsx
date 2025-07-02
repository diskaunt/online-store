import type { Metadata } from 'next';
import { Arimo } from 'next/font/google';
import './globals.sass';
import Header from '../components/Header/Header';
import Footer from '@/components/Footer/Footer';

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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
