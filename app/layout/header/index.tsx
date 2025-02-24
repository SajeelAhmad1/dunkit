// @/layout/header/index.tsx
"use client"

// Todo : Translation

import Button from '@/components/button';
import {
  ArrowRight,
  ChevronDown,
  CircleDollarSign,
  Flag,
  LucideIcon,
  Menu,
  MessageCircle,
  X,
} from 'lucide-react';
import React from 'react';
import { useRouter } from 'next/navigation';
import { FormattedMessage } from 'react-intl';
import LanguageToggle from '@/components/Elements/LanguageToggle';
import Image from 'next/image';

type NavMenuSubItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  path: string;
};
type NavMenuItem = {
  name: string;
  path: string;
  children?: NavMenuSubItem[];
};

export const navMenu: NavMenuItem[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Sevice',
    path: '/service',
    children: [
      {
        icon: Flag,
        title: 'About Dunkit Rental Wear',
        description:
          'Details and features of the subscription-based rental clothing, shoes, and towels',
        path: '/service',
      },
      {
        icon: MessageCircle,
        title: 'Reasons for introduction',
        description: 'Benefits and burdens for gym owners',
        path: '/installment',
      },
      {
        icon: CircleDollarSign,
        title: 'Price information',
        description: 'Dunkit rental clothing prices',
        path: '/pricing',
      },
    ],
  },
  {
    name: 'Company Profile',
    path: '/company',
  },
  {
    name: 'News',
    path: '/news',
  },
];

const Header = ({ isDark }: { isDark: boolean }) => {
  const [openMobilNav, setOpenMobilNav] = React.useState(false);
  const [openSubMenu, setOpenSubMenu] = React.useState<string | null>(null);
  const router = useRouter()


  const handleNavigation = (event: React.MouseEvent, path: string) => {
    event.stopPropagation();
    router.push(path);
  };


  // const location = useLocation();

  // const getBackground = () => {
  //   if (
  //     location.pathname === '/news' ||
  //     location.pathname === '/company' ||
  //     location.pathname !== '/'
  //   ) {
  //     return 'bg-white/70 text-black';
  //   } else {
  //     return 'bg-black/70 text-white';
  //   }
  // };

  const handleToggleMobileNav = () => {
    setOpenMobilNav(!openMobilNav);
  };

  const handleToggleSubMenu = (name: string) => {
    setOpenSubMenu(openSubMenu === name ? null : name);
  };

  const textClass = isDark ? "text-black/90" : "text-white";
  const textClassB = isDark ? "text-black/50" : "text-white/50";

  return (
    <>
      {/* desktop nav */}
      <div className='backdrop-blur-sm w-full absolute top-0 z-[999] border-b border-white'>
      <header
        className={`py-3 hidden lg:flex items-center justify-between relative  max-w-[1280px] mx-auto px-4 py-1  z-[100] `}
      >
        <div className='flex items-center'>
          <Image
            // src={isDark ? "/dunkit-black.svg" : '/logo.svg'}
            src={isDark ? "/dunkit-black.svg" : '/logo.svg'}
            width={200}
            height={40}
            alt='dunkit logo'
            className='w-[200px] h-[40px]'
          />
        </div>
        <div className='flex gap-16'>
        <div className='flex items-center'>
          <nav className='flex items-center gap-12'>
            <ul className='flex items-center justify-center gap-4 font-semibold'>
              {navMenu?.map((item: NavMenuItem, i: number) => {
                return (
                  <div
                  onClick={(event) => handleNavigation(event, item.path)}
                    key={i}
                    className={`${({ isActive }: { isActive: boolean }) =>
                      isActive
                        ? `relative group px-3 p2y-2 font-bold text-sm ${textClass} `
                        : `relative group px-3 py-2 text-sm ${textClassB}`} cursor-pointer`}
                  >
                    <button className='hover:opacity-100 flex items-center gap-1 cursor-pointer'>
                      <span className={`text-sm font-normal hover:font-medium ${textClassB} hover:${textClass}`}>
                        {item.name}
                      </span>
                      {item.children && (
                        <ChevronDown
                          size={16}
                          className={`group-hover:rotate-180 transform duration-500 ease-in-out ${textClassB}`}
                        />
                      )}
                    </button>
                    {item.children && item.children?.length > 0 && (
                      <div
                        className='fixed top-[30px] left-0 transition group-hover:translate-y-5
                       translate-y-8 opacity- invisible group-hover:opacity-100 group-hover:visible
                        duration-500 ease-in-out group-hover:transform 2-50 min-w-[568px] transform w-screen'
                        
                      >
                        <div className='relative top-6 p-6 bg-white  shadow-2xl w-full'>
                          <div
                            className='w-10 h-10 bg-white transform rotate-45 absolute top-8 2-8 translate-x-0 transition-transform group-hover:translate-x-[12ron]
                         duration-500 ease-in-out rounded-sm'
                          />
                          <div className='relative z-10'>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                              {item.children?.map(
                                (child: NavMenuSubItem, idx: number) => {
                                  const IconComponent = child.icon;
                                  return (
                                    <div
                                    onClick={(event) => handleNavigation(event, child.path)}
                                      key={`${i}-${idx}`}
                                      className='flex items-center gap-4 hover:bg-gray-100 rounded-2xl p-4 cursor-pointer'
                                    >
                                      <div className='p-2 bg-primary rounded-full'>
                                        {<IconComponent />}
                                      </div>
                                      <div className='flex flex-col'>
                                        <div className=' text-black'>
                                          {child.title}
                                        </div>
                                        <div className='text-black/50 text-xs'>
                                          {child.description}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                },
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              <span>
                <LanguageToggle isDark={isDark}/>
              </span>
            </ul>
          </nav>
        </div>
        <div
          onClick={() => router.push('/contact')}
          className=''
        >
          <Button
            icon={ArrowRight}
            animation
          >
            <FormattedMessage id={"Header.inquiry"} defaultMessage={"Inquiry"}/>
          </Button>
        </div>
        </div>
      </header>

      {/* mobile nav */}
      <header className='relative flex lg:hidden items-center justify-between bg-white border-b border-white  px-4 py-2 z-[100]'>
        <div className='flex items-center'>
          <Image
            src='/logo.svg'
            width={200}
            height={40}
            alt='dunkit logo'
            className='w-[200px]'
          />
        </div>
        <div className=''>
          {!openMobilNav ? (
            <Menu onClick={handleToggleMobileNav} />
          ) : (
            <button
              onClick={handleToggleMobileNav}
              className='absolute top-4 right-3'
            >
              <X />
            </button>
          )}
        </div>
        <div
          className={`flex flex-col  items-center  lg:hidden fixed  right-0 h-screen w-full bg-white shadow-lg transform
              ${openMobilNav ? 'top-12 -translate-y-0' : '-translate-y-full'} 
              transition-transform duration-300 ease-in-out z-[200]`}
        >

          <div className='p-4'>
            <ul className='mt-4 space-y-8 flex flex-col items-center text-xl'>
              {navMenu.map((item, i) => (
                <li 
                onClick={()=>{
                    setOpenMobilNav(!openMobilNav)
                }}
                key={i}>
                  <div className='flex justify-between items-center '>
                    <div

                      className='block py-2 px-4 hover:bg-gray-200'
                      onClick={() => {

                        if (item.children) {
                          handleToggleSubMenu(item.name);
                        }
                        router.push(item.path)
                      }}
                    >
                      {item.name}
                    </div>
                    {item.children && (
                      <button onClick={() => handleToggleSubMenu(item.name)}>
                        <ChevronDown
                          className={`transform text-white transition-transform ${openSubMenu === item.name ? 'rotate-180' : ''
                            }`}
                        />
                      </button>
                    )}
                  </div>
                  {item.children && openSubMenu === item.name && (
                    <ul className='ml-4 mt-2'>
                      {item.children.map((subItem, j) => (
                        <li key={j}>
                          <div
                            onClick={() => router.push(subItem.path)}

                            className='block py-1 px-4 hover:bg-gray-200'
                          >
                            {subItem.title}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div
            onClick={() => {
              router.push('/contact')
              setOpenMobilNav(!openMobilNav)
            }}

            className='block px-4 mt-4'
          >
            <Button
              icon={ArrowRight}
              animation
            >
              Inquiry
            </Button>
          </div>
        </div>
      </header>
      </div>
    </>
  );
};

export default Header;
