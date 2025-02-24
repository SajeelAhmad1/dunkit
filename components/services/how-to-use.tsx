'use client'
import { useIntl } from "react-intl";
// Todo: translation

import { FormattedMessage,  } from "react-intl";

const HowToUse = () => {

        const intl =  useIntl();

    const data = [
        {
            img: "qr.svg",
            heading: "Scan the QR code",
            text: intl.formatMessage({id:"HowToUse.Qr", defaultMessage:"Open the QR code scanning screen of the Dunkit app. Scan the QR code on the storage bag of your rental item with the app to unlock it!"}),
            list: []
        },
        {
            img: "renting.svg",
            heading: "Start renting",
            text: "Just scan the QR code and once the bag is unlocked, you can start using it!",
            list: []
        },
        {
            img: "return.svg",
            heading: "Return rental items",
            text: "Once you've finished using the rental items, follow the instructions in the app to return them.",
            list: [
                "All rental items must be returned at the store.",
                "Instructions may vary depending on the store."
            ]
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
            <h2 className="font-bold mb-8">
                <FormattedMessage id={"HowTwoUse.HTDunkit"} defaultMessage={"How to use Dunkit"}/>
            </h2>
            <div className="mt-10 flex flex-col gap-10">
                {data.map((item, index) => (
                    <div 
                        className="flex flex-col md:flex-row  items-center w-full space-y-8" 
                        key={index}
                    >
                        <div className="w-3/4 md:w-[50%] mb-4md:mb-0">
                            <img src={`/${item.img}`} alt="" className="w-64 h-64" />
                        </div>
                        <div className="flex flex-col items-start w-3/4 md:w-[55%] gap-4">
                            {/* h3 and h5 in one line */}
                            <div className="flex items-center gap-2 md:gap-4">
                                <h3 className="text-red-800 font-bold">0{index + 1}</h3>
                                <h5 className="text-secondary text-2xl font-semibold">{item.heading}</h5>
                            </div>

                            {/* Text content */}
                            <div className="text-left max-w-md">
                                <p className="mt-2">{item.text}</p>
                                {item.list.length > 0 && (
                                    <ul className="list-disc list-inside mt-2">
                                        {item.list.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowToUse;
