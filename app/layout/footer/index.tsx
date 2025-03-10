"use client";

// Todo: Translation

import MaxWidth from "@/components/max-width";
import {
  Facebook,
  Instagram,
  Link2,
  Linkedin,
  Twitter,
  LucideIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { FormattedMessage, useIntl } from "react-intl";

const socialLinks: { icon: LucideIcon; url: string }[] = [
  { icon: Link2, url: "#" },
  { icon: Instagram, url: "#" },
  { icon: Facebook, url: "#" },
  { icon: Linkedin, url: "#" },
  { icon: Twitter, url: "#" },
];

type NavMenuItem = {
  name: string;
  path: string;
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const intl = useIntl();

  const navMenu = useMemo(
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
      },
      {
        name: intl.formatMessage({
          id: "nav.CompanyProfile",
          defaultMessage: "Company Profile",
        }),
        path: "/company-profile",
      },
      {
        name: intl.formatMessage({ id: "nav.News", defaultMessage: "News" }),
        path: "/news",
      },
    ],
    [intl]
  );

  const router = useRouter();
  return (
    <div className="relative ">
      <MaxWidth className="flex flex-col items-center justify-center gap-12 py-12 ">
        <div className="flex items-center justify-center ">
          <img
            src="/footer-logo.svg"
            alt="dunkit logo"
            className="w-[250px] lg:[300px] h-[60px]"
          />
        </div>
        <div className="flex items-center flex-wrap gap-8 ">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-primary p-2 rounded-full text-white hover:scale-125 transform duration-300 ease-in-out"
            >
              <item.icon size={24} />
            </a>
          ))}
        </div>
        <div className="flex items-center flex-wrap gap-8">
          {navMenu?.map((item: NavMenuItem, i: number) => {
            return (
              <div
                onClick={() => router.push(item.path)}
                key={i}
                className=" hover:underline cursor-pointer"
              >
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
        <div>
          <p>
            <FormattedMessage
              id={"Footer.hamamatsucho"}
              defaultMessage={
                "Hamamatsucho Diamond Building 2F, 2-2-15 Hamamatsucho, Minato-ku, Tokyo 105-0013"
              }
            />
          </p>
        </div>

        <div
          onClick={scrollToTop}
          className=" absolute top-[35%] right-[15%] hidden cursor-pointer animate-bounce rounded-full bg-gradient-primary w-32 h-32 lg:flex items-center justify-center text-white hover:bg-white hover:border border-primary hover:text-primary transform duration-300 ease-in-out"
        >
          <p>
            <FormattedMessage
              id={"Footer.back"}
              defaultMessage={"Back to top"}
            />
          </p>
        </div>
      </MaxWidth>
    </div>
  );
};

export default Footer;
