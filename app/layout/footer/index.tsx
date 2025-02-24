"use client"

// Todo: Translation

import MaxWidth from '@/components/max-width';
import {
  Facebook,
  Instagram,
  Link2,
  Linkedin,
  Twitter,
  LucideIcon,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FormattedMessage } from 'react-intl';

const socialLinks: { icon: LucideIcon; url: string }[] = [
  { icon: Link2, url: '#' },
  { icon: Instagram, url: '#' },
  { icon: Facebook, url: '#' },
  { icon: Linkedin, url: '#' },
  { icon: Twitter, url: '#' },
];

type NavMenuItem = {
  name: string;
  path: string;
};

export const navMenu: NavMenuItem[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Sevices',
    path: '/service',
  },
  {
    name: 'Company Profile',
    path: '/company-profile',
  },
  {
    name: 'News',
    path: '/news',
  },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const router  = useRouter();
  return (
    <div className='relative '>
      <MaxWidth className='flex flex-col items-center justify-center gap-12 py-12 '>
        <div className='flex items-center justify-center '>
          <img
            src='/footer-logo.svg'
            alt='dunkit logo'
            className='w-[250px] lg:[300px] h-[60px]'
          />
        </div>
        <div className='flex items-center flex-wrap gap-8 '>
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-primary p-2 rounded-full text-white hover:scale-125 transform duration-300 ease-in-out'
            >
              <item.icon size={24} />
            </a>
          ))}
        </div>
        <div className='flex items-center flex-wrap gap-8'>
          {navMenu?.map((item: NavMenuItem, i: number) => {
            return (
              <div
              onClick = {()=>router.push(item.path)}
                key={i}
                className=' hover:underline '
              >
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
        <div>
          <p>
            <FormattedMessage id={"Footer.hams"} defaultMessage={"Hamamatsucho Diamond Building 2F, 2-2-15 Hamamatsucho, Minato-ku, Tokyo 105-0013"}/>
          </p>
        </div>

        <div
          onClick={scrollToTop}
          className=' absolute top-[35%] right-[15%] hidden cursor-pointer animate-bounce rounded-full bg-primary w-32 h-32 lg:flex items-center justify-center text-white hover:bg-white hover:border border-primary hover:text-primary transform duration-300 ease-in-out'
        >
          <p>
            <FormattedMessage id={"Footer.back"} defaultMessage={"Back to top"}/>
          </p>
        </div>
      </MaxWidth>
    </div>
  );
};

export default Footer;
