import React from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    icon?: LucideIcon;
    animation?: boolean;
    props?: React.ReactElement;
}

const Button: React.FC<ButtonProps> = ({ children, className, icon, animation, ...props }) => {
    const Icon = icon;
  return (
      <button className={`cursor-pointer relative px-5 py-2 flex items-center gap-8 border border-gray-400 rounded-full bg-white 
  overflow-hidden transition-all duration-700 ease-in-out group 
  ${className}`} 
  {...props}>
    {animation &&  
  <span className="absolute inset-0 bg-linear-to-r from-red-500 to-red-700 transform -translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-in-out"></span>
    }
  {/* Button Text */}
  <span className={`relative z-10  uppercase text-red-500  ${animation ? "group-hover:text-white group-hover:translate-x-2 transition-all duration-300" : "hover:text-red-500"}`}>
  {children}
  </span>

  {/* Arrow Icon */}
  {Icon && 
  <div className="group-hover:scale-0  transition-all duration-500 relative z-10 bg-red-500 rounded-full p-1 text-white   group-hover:text-red-500">
    <Icon className=""/>
  </div>
}
</button>
 
  );
};

export default Button;


