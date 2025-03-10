import React from "react";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  icon?: LucideIcon;
  animation?: boolean;
  imageSrc?: string;
  imageClass?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  icon,
  animation,
  imageSrc,
  imageClass,
  imageWidth = 200,
  imageHeight = 200,
  imageAlt = "dunkit",
  ...props
}) => {
  const Icon = icon;
  return (
    <button
      className={`cursor-pointer relative px-5 py-2 flex items-center gap-8 border border-gray-400 rounded-full bg-white
      overflow-hidden transition-all duration-700 ease-in-out group ${className}`}
      {...props}
    >
      {/* Animated Background */}
      {animation && (
        <span
          className="absolute inset-0 bg-gradient-primary transform -translate-x-full 
          group-hover:translate-x-0 transition-all duration-500 ease-in-out"
        ></span>
      )}

      {/* Button Text */}
      <span
        className={`relative z-10 uppercase text-primary transition-all duration-300 ease-in-out ${
          animation
            ? "group-hover:text-white group-hover:translate-x-2"
            : "hover:text-primary"
        }`}
      >
        {children}
      </span>

      {/* Arrow Icon */}
      {Icon && (
        <div
          className="relative z-10 bg-primary rounded-full p-1 text-white transition-all duration-500 
          group-hover:bg-transparent group-hover:text-transparent "
        >
          <Icon />
        </div>
      )}
      {imageSrc && (
        <div className={` `}>
          <Image
            src={imageSrc}
            width={imageWidth}
            height={imageHeight}
            alt={imageAlt}
            className={imageClass}
          />
        </div>
      )}
    </button>
  );
};

export default Button;
