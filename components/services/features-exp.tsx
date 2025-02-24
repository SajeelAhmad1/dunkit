const FeaturesExp = () => {

    const data = [
        {
            img: "no-cost.svg",
            heading: "No Cost",
            text: "Dunkit is easy to install, and does not charge gyms any initial fees, installation fees, contract fees, monthly fees, laundry fees, or any other financial costs. All you need to do is lend us a place to set up Dunkit, and you can set it up completely free of charge.",
        },
        {
            img: "no-operation.svg",
            heading: "No Operation",
            text: "We handle all the collection, washing and refilling work required for running the service.In addition, since it is a completely unmanned rental service, it can be operated 24 hours a day, 265 days a year without the help of staff.",
        },
        {
            img: "revenue-share.svg",
            heading: "Revenue Share",
            text: `In addition to being risk-free, Dunkit also monetizes vacant space. When certain conditions are met for each store, a portion of Dunkit's revenue is returned to the store.`,

        }
    ]
    return (
        <div className="w-full flex flex-col items-center space-y-10 md:space-y-0">
            <div className="flex flex-col items-center space-y-4">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center">
                    Learn more about Dunkit&apos;s features
                </h1>

            </div>
            <div className="flex flex-col items-center space-y-12">
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-col md:flex-row items-center md:justify-center w-3/4 md:w-4/5 mx-10">
                                <div className="w-[30%]">
                                    <img src={`/${item.img}`} alt="" className="h-40" />
                                </div>                                
                                <div className="w-[90%] md:w-[55%] flex flex-col  justify-center">
                                    <h1 className="text-3xl font-semibold">
                                        {item.heading}
                                    </h1>
                                    <p className="mt-4">{item.text}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default FeaturesExp;