"use client";

import { usePathname } from "next/navigation";
import Button from "@/components/services/button";

interface ServicesIntroProps {
  text: string;
}

const ServicesIntro = ({ text }: ServicesIntroProps) => {
  const pathname = usePathname(); // Get current route

  return (
    <div>
      <div className="py-8 flex flex-col items-center justify-center">
        <img src="footer-logo.svg" alt="logo" className="w-36 md:w-44" />
        <div className="text-lg lg:text-5xl mt-3 md:mt-4">{text}</div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row items-center md:justify-center space-y-2 md:space-x-24">
        <Button text="Service Details" url="service" active={pathname.includes("service")} />
        <Button text="Reasons for Introduction" url="installment" active={pathname.includes("installment")} />
        <Button text="Price Information" url="pricing" active={pathname.includes("pricing")} />
      </div>
    </div>
  );
};

export default ServicesIntro;
