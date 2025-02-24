import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import LayoutWrapper from './layout-wrapper';
import Header from './layout/header';
import Footer from './layout/footer';

const inter = Inter({ subsets: ['latin'] });

const metadataBase =
  process.env.NODE_ENV === 'production'
    ? 'https://dunkit.in'
    : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(metadataBase),
  title: {
    template: '%s | Dunkit',
    default: 'Dunkit',
  },
  description:
    'Dunkit株式会社はサブスク型ジムレンタルウェアを提供しております。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/v.png" />
      </head>
      <body className={inter.className}>
        <LayoutWrapper>
          <Header/>
          {children}
          <Footer/>
          </LayoutWrapper>
      </body>
    </html>
  );
}