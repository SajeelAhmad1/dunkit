"use client"
import { FormattedMessage, useIntl } from "react-intl";
import { Check, Minus } from "lucide-react";
import { useMemo } from "react";

const OwnerPriceCard = () => {

    const intl = useIntl();

    const {initialCost, operatingCost, otherExpenses} = useMemo(() => {
        const initialCost = [
            { feature: intl.formatMessage({ id: "OwnerPriceCard.purchaseCost", defaultMessage: "Purchase cost" }), available: true },
            { feature: intl.formatMessage({ id: "OwnerPriceCard.freightCharges", defaultMessage: "Freight charges" }), available: true },
            { feature: intl.formatMessage({ id: "OwnerPriceCard.installationFee", defaultMessage: "Installation fee" }), available: true },
            { feature: intl.formatMessage({ id: "OwnerPriceCard.paymentSystemImplementationCosts", defaultMessage: "Payment system implementation costs" }), available: true },
            { feature: intl.formatMessage({ id: "OwnerPriceCard.allOtherInitialCosts", defaultMessage: "All other initial costs" }), available: true },
        ];
        const operatingCost = [
            { feature: intl.formatMessage({ id: "OwnerPriceCard.paymentSystemUsageFee", defaultMessage: "Payment system usage fee" }), available: true },
            { feature: intl.formatMessage({ id: "OwnerPriceCard.collectionWashingAndRefillCosts", defaultMessage: "Collection, washing and refill costs" }), available: true },
            { feature: intl.formatMessage({ id: "OwnerPriceCard.appOperationCosts", defaultMessage: "App operation costs" }), available: true },
            { feature: intl.formatMessage({ id: "OwnerPriceCard.clothingMaintenanceCosts", defaultMessage: "Clothing maintenance costs" }), available: true },
            { feature: intl.formatMessage({ id: "OwnerPriceCard.allOtherOperatingCosts", defaultMessage: "All other operating costs" }), available: true },
        ];
        const otherExpenses = [
            { feature: intl.formatMessage({ id: "OwnerPriceCard.damageFeeForRentalItems", defaultMessage: "Damage fee for rental items *" }), available: true },
            { feature: intl.formatMessage({ id: "OwnerPriceCard.theftOrLossOfRentalItems", defaultMessage: "Theft or loss of rental items *" }), available: true },
            { feature: intl.formatMessage({ id: "OwnerPriceCard.damageToStorageShelves", defaultMessage: "Damage to storage shelves *" }), available: true },
            { feature: intl.formatMessage({ id: "OwnerPriceCard.inquiryReceptionFee", defaultMessage: "Inquiry reception fee" }), available: true },
            { feature: intl.formatMessage({ id: "OwnerPriceCard.allOtherExpenses", defaultMessage: "All other expenses" }), available: true },
        ];
          
          return { initialCost, operatingCost, otherExpenses };
    }, [intl]);        

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
