"use client";

import { usePathname } from "next/navigation";
import Button from "@/components/services/button";
import { FormattedMessage, useIntl } from "react-intl"

interface ServicesIntroProps {
  text: string;
}

const ServicesIntro = ({ text }: ServicesIntroProps) => {
  const pathname = usePathname(); // Get current route

    const intl = useIntl();
  return (
    <div>
      <div className="py-8 flex flex-col items-center justify-center">
        <img src="footer-logo.svg" alt="logo" className="w-36 md:w-44" />
        <div className="text-lg lg:text-5xl mt-3 md:mt-4">
          {text}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row items-center md:justify-center space-y-2 md:space-x-24">
          <Button 
          text= {intl.formatMessage({id:"ServicesIntro.serdetail", defaultMessage:"Service Details"})}
          url={"service"} />
          <Button 
          text= {intl.formatMessage({id:"ServicesIntro.resonintro", defaultMessage:"Reasons for Introduction"})}
           url={"installment"} />
          <Button 
          text={intl.formatMessage({id:"ServicesIntro.priceinfo", defaultMessage:"Price Information"})} 
          url={"pricing"} />
      </div>
    </div>
  );
};

export default ServicesIntro;
