"use client";
import { useMemo } from "react";
// Todo: Translation

import { FormattedMessage, useIntl } from "react-intl";

const Features = () => {
  const intl = useIntl();

  const data = useMemo(
    () => [
      {
        img: "no-cost.PNG",
        heading: intl.formatMessage({
          id: "Feature.noCost",
          defaultMessage: "No Cost",
        }),
        text: intl.formatMessage({
          id: "Feature.noCostText",
          defaultMessage:
            "Dunkit does not charge any initial fees or usage fees to gyms. You can set up the service with absolutely no budget.",
        }),
      },
      {
        img: "no-operation.PNG",
        heading: intl.formatMessage({
          id: "Feature.noOperation",
          defaultMessage: "No Operation",
        }),
        text: intl.formatMessage({
          id: "Feature.noOperationText",
          defaultMessage:
            "Dunkit will handle tasks such as washing, collection, and refilling free of charge, so you can use Dunkit without increasing the number of staff operations.",
        }),
      },
      {
        img: "revenue-share.PNG",
        heading: intl.formatMessage({
          id: "Feature.revenueShare",
          defaultMessage: "Revenue Share",
        }),
        text: intl.formatMessage({
          id: "Feature.revenueShareText",
          defaultMessage:
            "Dunkit has implemented a revenue sharing system that returns a portion of sales to partner gyms.",
        }),
      },
    ],
    [intl]
  );

  return (
    <div className="flex flex-col items-center space-y-20">
      <div className="flex flex-col items-center space-y-4 px-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          <FormattedMessage
            id={"Feature.featureofDunk"}
            defaultMessage={"Features of Dunkit"}
          />
        </h1>
        <p className="text-xl sm:text-2xl lg:text-2xl text-red-800 text-center">
          <FormattedMessage
            id={"Feature.creatSys"}
            defaultMessage={
              "Dunkit has created a system that minimizes the burden on gym owners."
            }
          />
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center w-3/4 md:w-1/5 mx-10"
            >
              <img src={`/${item.img}`} alt="" className="h-52" />
              <h1 className="text-xl font-semibold">{item.heading}</h1>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Features;
