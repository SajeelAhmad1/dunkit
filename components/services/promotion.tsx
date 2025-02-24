"use client";
import { ArrowRight } from "lucide-react";
import { FormattedMessage } from "react-intl";

const Promotion = () => {
  return (
    <div className="flex flex-col items-center space-y-8 ">
      <div>
        <h1 className="text-3xl text-center font-bold mb-4">
          <FormattedMessage
            id={"Promotion.more"}
            defaultMessage={"More and more gyms are introducing Dunkit!"}
          />
        </h1>
      </div>
      <div className="flex items-center justify-center space-x-8">
        <img
          src="lifefit-gym.PNG"
          alt="LifeFit Logo"
          className="h-16 md:h-32 w-auto"
        />
        <img
          src="gym.PNG"
          alt="Kame Sun Gym Logo"
          className="h-16 md:h-52 w-auto"
        />
      </div>

      <div className="w-4/5 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0">
        <button
          className="flex items-center gap-8 border border border-gray-400 rounded-full px-4 py-2  cursor-pointer bg-white
           hover:bg-gray-100 hover:text-white transform transition-all duration-300 ease-in-out  "
        >
          <p className="text-secondary">
            <FormattedMessage
              id={"Promotion.pric"}
              defaultMessage={"Price Information"}
            />
          </p>
          <div className="rounded-full p-1 bg-gray-300 text-gray-100">
            <ArrowRight />
          </div>
        </button>
        <button
          className="flex items-center gap-8 rounded-full px-4 py-2  cursor-pointer bg-secondary
           hover:bg-gray-100 hover:text-white transform transition-all duration-300 ease-in-out  "
        >
          <p className="text-white hover:text-secondary">
            <FormattedMessage
              id={"Promotion.priec"}
              defaultMessage={
                " For consultation on implementation, please click here"
              }
            />
          </p>
          <div className="rounded-full p-1 bg-gray-300 text-white">
            <ArrowRight />
          </div>
        </button>
      </div>
    </div>
  );
};
export default Promotion;
