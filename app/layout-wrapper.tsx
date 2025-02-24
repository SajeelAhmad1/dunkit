'use client';

import client from '@/client';
import { Inter } from 'next/font/google';
import { Provider } from 'urql';
import { SessionProvider } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import SetContext from '@/components/Elements/SetContext';
import { AppContext, IUser } from '@/utils/context';
import en from '../lang/en.json';
import ja from '../lang/ja.json';
import { IntlProvider } from 'react-intl';
import Cookies from 'js-cookie';

const messages = { en, ja };
const inter = Inter({ subsets: ['latin'] });

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [context, setContext] = useState<any>({ fetching: true });
  const [language, setLanguage] = useState('ja');

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

  const setFetching = (fetching: boolean) => {
    (context as any).fetching = fetching;
    setContext({ ...context });
  };

  const setUser = (user: IUser) => {
    setContext({ ...context, user });
  };

  return (
    <IntlProvider
      locale="ja"
      messages={(messages as any)[language.toLowerCase()]}
    >
      <Toaster />
      <SessionProvider>
        <AppContext.Provider value={{ context, setUser, setFetching }}>
          <Provider value={client}>
            <SetContext />
            {children}
          </Provider>
        </AppContext.Provider>
      </SessionProvider>
    </IntlProvider>
  );
}