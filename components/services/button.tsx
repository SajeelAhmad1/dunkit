"use client";

import { useRouter } from "next/navigation";

interface ButtonProps {
  text: string;
  url: string;
  active?: boolean; // New prop to highlight button
}

const Button = ({ text, url, active }: ButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(url);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-2/3 md:w-[170px] relative border rounded-full px-8 py-4 text-left group overflow-hidden 
        ${
          active ? "border-secondary" : "border-gray-300"
        } hover:border-red-400 cursor-pointer`}
    >
      <p className="font-medium leading-tight relative z-10 text-black group-hover:text-white transition-colors duration-700">
        {text}
      </p>
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <path
          d="M 0 100 L 0 100 Q 50 -20 100 100 L 100 100 L 100 100 L 0 100 Z"
          fill="rgb(220 38 38)"
          className="transform translate-y-[100%] group-hover:translate-y-[-100%] transition-all duration-700 ease-in-out"
        />
        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          fill="rgb(220 38 38)"
          className="transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out delay-300"
        />
      </svg>
    </button>
  );
};

export default Button;
