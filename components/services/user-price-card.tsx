"use client"
import { FormattedMessage } from "react-intl";
import { basic, plus, pro } from "./user-plans";
import { Check, Minus } from "lucide-react";

const UserPriceCard = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:justify-center space-x-0 md:space-x-6 space-y-4 md:space-y-0">
            {/* Basic Plan  */}
            <div className="w-3/4 md:w-1/4 border border-gray-300 rounded-lg p-4 py-8">
                <h1 className="text-5xl">Basic</h1>
                <p className="text-lg font-medium mt-2">1,480 yen/month 
                    <FormattedMessage id={"UserPriceCard/exclud"} defaultMessage={"(excluding tax)"}/>
                </p>
                <p className="text-gray-400 mt-2">
                <FormattedMessage id={"UserPriceCard.plan-lightgym"} defaultMessage={"A plan for light gym users who want to train casually at the gym"}/>
                </p>

                <hr className="mt-4 w-1/8 text-gray-300" />

                <div className="mt-4 space-y-4">
                    {basic.map((item, index) => (
                        <div key={index} className="flex items-center gap-x-4">
                            {item.available ? (
                                <Check size={18} className="text-white bg-secondary p-0.5 rounded-full" />
                            ) : (
                                <Minus size={18} className="text-white bg-gray-400 p-0.5 rounded-full" />
                            )}
                            <span className="text-sm">{item.feature}</span>
                        </div>
                    ))}
                </div>
            </div>
            {/* Plus  */}
            <div className="w-3/4 md:w-1/4 border border-gray-300 rounded-lg p-4 py-8">
                <h1 className="text-5xl">Plus</h1>
                <p className="text-lg font-medium mt-2">1,980 yen/month 
                <FormattedMessage id={"UserPriceCard.exclud-puls"} defaultMessage={"(excluding tax)"}/>
                </p>
                <p className="text-gray-400 mt-2">
                <FormattedMessage id={"UserPriceCard.plan-gym"} defaultMessage={"A plan for gym goers who want to train at a high level"}/>
                </p>

                <hr className="mt-4 w-1/8 text-gray-300" />

                <div className="mt-4 space-y-4">
                    {plus.map((item, index) => (
                        <div key={index} className="flex items-center gap-x-4">
                            {item.available ? (
                                <Check size={18} className="text-white bg-secondary p-0.5 rounded-full" />
                            ) : (
                                <Minus size={18} className="text-white bg-gray-400 p-0.5 rounded-full" />
                            )}
                            <span className="text-sm">{item.feature}</span>
                        </div>
                    ))}
                </div>
            </div>
            {/* Pro  */}
            <div className="w-3/4 md:w-1/4 border-[1.5px] border-secondary rounded-lg p-4">
                <span className="text-xs bg-gradient-to-r from-secondary to-red-700 rounded-full text-white px-2 py-1">
                    recommendation
                </span>
                <h1 className="text-5xl mt-4">Pro</h1>
                <p className="text-lg font-medium mt-2">2,480 yen/month 
                <FormattedMessage id={"UserPriceCard.exclud-pro"} defaultMessage={"(excluding tax)"}/>

                </p>
                <p className="text-gray-400 mt-2">
                <FormattedMessage id={"UserPriceCrad.a-plan"} defaultMessage={"A plan for advanced gym users who want to get serious about their training at any time."}/>
                </p>

                <hr className="mt-4 w-1/8 text-gray-300" />

                <div className="mt-4 space-y-4">
                    {pro.map((item, index) => (
                        <div key={index} className="flex items-center gap-x-4">
                            {item.available ? (
                                <Check size={18} className="text-white bg-secondary p-0.5 rounded-full" />
                            ) : (
                                <Minus size={18} className="text-white bg-gray-400 p-0.5 rounded-full" />
                            )}
                            <span className="text-sm">{item.feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserPriceCard;
