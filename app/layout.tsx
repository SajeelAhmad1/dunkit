"use client"

// @/layout/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./layout/header";
import Footer from "./layout/footer";
import en from '../lang/en.json';
import jp from '../lang/jp.json';
import { IntlProvider } from 'react-intl';
import "./globals.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import AOS from "aos";
import "aos/dist/aos.css";

import { Inter } from 'next/font/google';

import LayoutWrapper from './layout-wrapper';
const inter = Inter({ subsets: ['latin'] });


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const messages = { en, jp };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  const [language, setLanguage] = useState('EN');


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lang = Cookies.get('lang');
      if (lang) {
        setLanguage(lang);
      }
    }

    window.addEventListener('langChange', (e: any) => {
      setLanguage(e.detail);
    });

    document.title = "Dunkit株式会社はサブスク型ジムレンタルウェアを提供しております。";

    return () => {
      window.removeEventListener('langChange', (e: any) => {
        setLanguage(e.detail);
      });
    };
  }, []);

  const [isDark, setIsDark] = useState(false);

    useEffect(() => {
      if (typeof window !== 'undefined') {
        setIsDark(window.location.pathname !== '/');
      }
    }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,  // Animation duration
      delay: 200,      // Delay before animation starts
      offset: 100,     // Offset from the top before animation triggers
      easing: "ease-in-out", 
    });
  }, []);
  return (

    <html lang="ja">
      <head>
        <link rel="icon" href="/v.png" />
      </head>
      <body className={inter.className}>
        
        <LayoutWrapper>
          
          <IntlProvider locale={language} messages={
            (messages as any)[language.toLocaleLowerCase()]
          }>
          <Header isDark={isDark} />
          {children}
        </IntlProvider>
          <Footer/>
          </LayoutWrapper>
      </body>
    </html>
  );
}