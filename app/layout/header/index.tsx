// @/layout/header/index.tsx
"use client";

// Todo : Translation

import Button from "@/components/button";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import React, { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FormattedMessage, useIntl } from "react-intl";
import LanguageToggle from "@/components/Elements/LanguageToggle";
import Image, { StaticImageData } from "next/image";

type NavMenuSubItem = {
  imageSrc: StaticImageData | string;
  title: string;
  description: string;
  path: string;
};
type NavMenuItem = {
  name: string;
  path: string;
  children?: NavMenuSubItem[];
};

const Header = ({ isDark }: { isDark: boolean }) => {
  const pathname = usePathname();
  // Check if a route is active
  const isActive = (path: string) => pathname === path;
  const [openMobilNav, setOpenMobilNav] = React.useState(false);
  const [openSubMenu, setOpenSubMenu] = React.useState<string | null>(null);
  const router = useRouter();
  const intl = useIntl();

  const handleNavigation = (event: React.MouseEvent, path: string) => {
    event.stopPropagation();
    router.push(path);
  };

  const navMenu: NavMenuItem[] = useMemo(
    () => [
      {
        name: intl.formatMessage({ id: "nav.Home", defaultMessage: "Home" }),
        path: "/",
      },
      {
        name: intl.formatMessage({
          id: "nav.Services",
          defaultMessage: "Services",
        }),
        path: "/service",
        children: [
          {
            imageSrc: "/rental-wear.svg",
            title: intl.formatMessage({
              id: "nav.subbasedrentalclothing",
              defaultMessage: "Subscription-based rental clothing",
            }),
            description: intl.formatMessage({
              id: "nav.detailsrental",
              defaultMessage:
                "Details and features of the subscription-based rental clothing, shoes, and towels",
            }),
            path: "/service",
          },
          {
            imageSrc: "message-image.svg",
            title: intl.formatMessage({
              id: "nav.reasonsforintroduction",
              defaultMessage: "Reasons for introduction",
            }),
            description: intl.formatMessage({
              id: "nav.reasonsforintroductiondetails",
              defaultMessage: "Benefits and burdens for gym owners",
            }),
            path: "/installment",
          },
          {
            imageSrc: "/dollar-image.svg",
            title: intl.formatMessage({
              id: "nav.pricing",
              defaultMessage: "Price Information",
            }),
            description: intl.formatMessage({
              id: "nav.pricingdetails",
              defaultMessage: "Dunkit rental clothing prices",
            }),
            path: "/pricing",
          },
        ],
      },
      {
        name: intl.formatMessage({
          id: "nav.CompanyProfile",
          defaultMessage: "Company Profile",
        }),
        path: "/company",
      },
      {
        name: intl.formatMessage({ id: "nav.News", defaultMessage: "News" }),
        path: "/news",
      },
    ],
    [intl]
  );

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

  // const isDark =
  //   pathname === '/' ||
  //   pathname === '/service' ||
  //   pathname === '/installment' ||
  //   pathname === '/pricing'
  //     ? false
  //     : true;

  const textClass = isDark ? "text-warm-gray" : "text-white";
  const textClassB = isDark ? "text-black" : "text-warm-gray";

  return (
    <>
      {/* desktop nav */}
      <div className="backdrop-blur-sm w-full absolute top-0 z-[999] border-b border-[#ffffff99]">
        <header
          className={`py-3 hidden lg:flex items-center justify-between relative  max-w-[1280px] mx-auto px-4 py-1  z-[100] `}
        >
          <div
            className="flex items-center cursor-pointer"
            onClick={() => (pathname !== "/" ? router.push("/") : null)}
          >
            <Image
              // src={isDark ? "/dunkit-black.svg" : '/logo.svg'}
              src={isDark ? "/dunkit-black.svg" : "/logo.svg"}
              width={200}
              height={40}
              alt="dunkit logo"
              className="w-[200px] h-[40px]"
            />
          </div>
          <div className="flex gap-16">
            <div className="flex items-center">
              <nav className="flex items-center gap-12">
                <ul className="flex items-center justify-center gap-4 font-semibold">
                  {navMenu?.map((item: NavMenuItem, i: number) => {
                    const active = isActive(item.path);
                    return (
                      <div
                        onClick={(event) => handleNavigation(event, item.path)}
                        key={i}
                        className={` relative group px-3 py-2 text-sm cursor-pointer ${
                          active
                            ? ` font-bold  ${textClass} `
                            : ` font-normal ${textClassB}`
                        } `}
                      >
                        <button className="hover:opacity-100 flex items-center gap-1 cursor-pointer">
                          <span
                            className={`text-sm ${
                              active
                                ? "font-bold"
                                : "font-normal hover:font-bold"
                            } ${
                              active ? textClass : textClassB
                            } hover:${textClass}`}
                          >
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
                            className="fixed top-[30px] left-0 transition group-hover:translate-y-5
                       translate-y-8 opacity- invisible group-hover:opacity-100 group-hover:visible
                        duration-500 ease-in-out group-hover:transform 2-50 min-w-[568px] transform w-screen"
                          >
                            <div className="relative top-6 p-6 bg-white  shadow-2xl w-full">
                              <div
                                className="w-10 h-10 bg-white transform rotate-45 absolute top-8 2-8 translate-x-0 transition-transform group-hover:translate-x-[12ron]
                         duration-500 ease-in-out rounded-sm"
                              />
                              <div className="relative z-10">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                  {item.children?.map(
                                    (child: NavMenuSubItem, idx: number) => {
                                      // const IconComponent = child.icon;
                                      return (
                                        <div
                                          onClick={(event) =>
                                            handleNavigation(event, child.path)
                                          }
                                          key={`${i}-${idx}`}
                                          className="flex items-center gap-4 hover:bg-gray-100 rounded-2xl p-4 cursor-pointer"
                                        >
                                          {child.imageSrc && (
                                            <div className="p-3 bg-gradient-primary text-white rounded-full">
                                              <Image
                                                src={child.imageSrc}
                                                width={30}
                                                height={30}
                                                alt="dunkit"
                                                className="text-white"
                                              />
                                            </div>
                                          )}
                                          <div className="flex flex-col">
                                            <div className=" text-black">
                                              {child.title}
                                            </div>
                                            <div className="text-black/50 text-xs">
                                              {child.description}
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    }
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div
              onClick={() => router.push("/contact")}
              className="relative cursor-pointer px-5 py-2 flex items-center gap-8 border border-gray-400 rounded-full bg-white
                       overflow-hidden transition-all duration-700 ease-in-out group"
            >
              <span
                className="absolute inset-0 bg-gradient-primary transform -translate-x-full 
                  group-hover:translate-x-0 transition-all duration-500 ease-in-out"
              ></span>
              <button className="relative z-10 uppercase  transition-all duration-300 ease-in-out group-hover:text-white group-hover:translate-x-2">
                <Image
                  width={20}
                  height={20}
                  src={"/right-arrow.svg"}
                  alt={"dunkit arrow"}
                />
                <FormattedMessage
                  id={"Header.inquiry"}
                  defaultMessage={"Inquiry"}
                />
              </button>
            </div>
          </div>
        </header>

        {/* mobile nav */}
        <header className="relative flex lg:hidden items-center justify-between bg-white border-b border-white  px-4 py-2 z-[100]">
          <div
            className="flex items-center"
            onClick={() => (pathname !== "/" ? router.push("/") : null)}
          >
            <Image
              src="/logo.svg"
              width={200}
              height={40}
              alt="dunkit logo"
              className="w-[200px]"
            />
          </div>
          <div className="">
            {!openMobilNav ? (
              <Menu onClick={handleToggleMobileNav} />
            ) : (
              <button
                onClick={handleToggleMobileNav}
                className="absolute top-4 right-3"
              >
                <X />
              </button>
            )}
          </div>
          <div
            className={`flex flex-col  items-center  lg:hidden fixed  right-0 h-screen w-full bg-white shadow-lg transform
              ${openMobilNav ? "top-12 -translate-y-0" : "-translate-y-full"} 
              transition-transform duration-300 ease-in-out z-[200]`}
          >
            <div className="p-4">
              <ul className="mt-4 space-y-8 flex flex-col items-center text-xl">
                {navMenu.map((item, i) => (
                  <li
                    onClick={() => {
                      setOpenMobilNav(!openMobilNav);
                    }}
                    key={i}
                  >
                    <div className="flex justify-between items-center ">
                      <div
                        className="block py-2 px-4 hover:bg-gray-200"
                        onClick={() => {
                          if (item.children) {
                            handleToggleSubMenu(item.name);
                          }
                          router.push(item.path);
                        }}
                      >
                        {item.name}
                      </div>
                      {item.children && (
                        <button onClick={() => handleToggleSubMenu(item.name)}>
                          <ChevronDown
                            className={`transform text-white transition-transform ${
                              openSubMenu === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>
                    {item.children && openSubMenu === item.name && (
                      <ul className="ml-4 mt-2">
                        {item.children.map((subItem, j) => (
                          <li key={j}>
                            <div
                              onClick={() => router.push(subItem.path)}
                              className="block py-1 px-4 hover:bg-gray-200"
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
                router.push("/contact");
                setOpenMobilNav(!openMobilNav);
              }}
              className="block px-4 mt-4"
            >
              <Button
                // icon={ArrowRight}
                imageSrc={"/right-arrow.svg"}
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
