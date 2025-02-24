"use client"
import { FormattedMessage } from "react-intl";
import { initialCost, operatingCost, otherExpenses } from "./owner-plans";
import { Check, Minus } from "lucide-react";

const OwnerPriceCard = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:justify-center space-x-0 md:space-x-6 space-y-4 md:space-y-0">
            {/* Initial cost    */}
            <div className="w-3/4 md:w-1/4 border border-gray-300 rounded-lg p-4 py-12">
                <h1 className="text-4xl">
                    <FormattedMessage id={"OwnerPriceCard.intitial"} defaultMessage={"Initial cost"}/>
                </h1>
                <p className="text-gray-400 mt-2">
                <FormattedMessage id={"OwnerPriceCard.all-cost"} defaultMessage={"All costs involved in introducing Dunkit Rental Wear"}/>
                </p>

                <hr className="mt-4 w-1/8 text-gray-300" />

                <div className="mt-4 space-y-4">
                    {initialCost.map((item, index) => (
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
                <h2 className="mt-8 flex justify-center text-4xl">
                    0
                    <FormattedMessage id={"OwnerPriceCread.yen1"} defaultMessage={"Yen"}/>
                </h2>
            </div>
            {/* Operating costs */}
            <div className="w-3/4 md:w-1/4 border border-gray-300 rounded-lg p-4 py-12">
                <h1 className="text-4xl">
                <FormattedMessage id={"OwnerPriceCard.oprat"} defaultMessage={"Operating costs"}/>
                </h1>
                <p className="text-gray-400 mt-2">
                <FormattedMessage id={"OwnerPriceCard.oprat-rent"} 
                defaultMessage={" All costs incurred in providing Dunkit Rental Wear services"}/>
                </p>

                <hr className="mt-4 w-1/8 text-gray-300" />

                <div className="mt-4 space-y-4">
                    {operatingCost.map((item, index) => (
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
                <h2 className="mt-8 flex justify-center text-4xl">
                    0 
                    <FormattedMessage id={"OwnerPriceCread.yen2"} defaultMessage={"Yen"}/>
                </h2>
            </div>
            {/* Other expenses  */}
            <div className="w-3/4 md:w-1/4 border border-gray-300 rounded-lg p-4 py-12">

                <h1 className="text-4xl">
                <FormattedMessage id={"OwnerPriceCard.other"} defaultMessage={"Other expenses"}/>
                </h1>

                <p className="text-gray-400 mt-2">
                <FormattedMessage id={"OwnerPriceCard.incurred"} defaultMessage={" All costs incurred in the process of providing Dunkit rental clothing"}/>
                </p>

                <hr className="mt-4 w-1/8 text-gray-300" />

                <div className="mt-4 space-y-4">
                    {otherExpenses.map((item, index) => (
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
                <h2 className="mt-8 flex justify-center text-4xl">
                    0 
                    <FormattedMessage id={"OwnerPriceCread.yen3"} defaultMessage={"Yen"}/>
                </h2>
            </div>
        </div>
    );
};

export default OwnerPriceCard;
