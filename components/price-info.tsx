"use client"
import { useState } from "react";
import ServicesIntro from "@/components/services/service-intro";
import GymUserPrice from "@/components/services/gym-user-price";
import OwnerPriceCard from "@/components/services/owner-price-card";
import Inquiries from "@/components/services/inquiries";

const PriceInfo = () => {
    const [isOwner, setIsOwner] = useState(false);
    const text = "Price information";

    return (
        <div className=" flex flex-col">
            <main className="flex-1 pb-32">
                <div className="relative space-y-10 mt-20">
                    <ServicesIntro text={text} />

                    <div className="flex justify-center space-x-4 mt-40">
                        <span className="text-lg font-semibold text-gray-500">
                            Gym User
                        </span>
                        <button
                            onClick={() => setIsOwner(!isOwner)}
                            className={`w-20  flex items-center rounded-full bg-gray-300 p-1 transition-all duration-300 ${
                                isOwner ? "justify-end" : " justify-start"
                            }`}
                        >
                            <div className="w-6 h-6 bg-red-600 rounded-full shadow-md"></div>
                        </button>
                        <span className="text-lg font-semibold text-gray-500">
                            Gym Owner
                        </span>
                    </div>

                    {isOwner ? <OwnerPriceCard/> : <GymUserPrice /> }
                    <p className="px-4 md:px-0 mb-40 flex justify-center">* Excluding cases where the store is clearly negligent regarding damage or theft of clothing.
                    </p>
                <Inquiries/>
                </div>
            </main>
        </div>
    );
};

export default PriceInfo;
