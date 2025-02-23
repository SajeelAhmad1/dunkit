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

    return () => {
      window.removeEventListener('langChange', (e: any) => {
        setLanguage(e.detail);
      });
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <IntlProvider
          locale="en"
          messages={(messages as any)[language.toLowerCase()]}
        >
        <Header />
        <main>{children}</main>
        <Footer />
        </IntlProvider>
      </body>
    </html>
  );
}
