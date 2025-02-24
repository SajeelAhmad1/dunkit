'use client'
import { ArrowRight } from "lucide-react";
import { FormattedMessage } from "react-intl";

const Inquiries = () => {
    return (
        <div className="flex flex-col items-center space-y-10">
            <h1 className="text-3xl font-semibold text-center">
            <FormattedMessage id={"Inquiries.inq-reg"} defaultMessage={"Inquiries regarding implementation"}/>
            </h1>
            <button className="flex border border-black px-20 py-2">
                <div className=' p-1 '>
                    <ArrowRight />
                </div>
                <div className="underline text-xl">
                    <FormattedMessage id={"Inquiries.inq"} defaultMessage={"Inquiry"}/>
                </div>
            </button>
        </div>
    )
}
export default Inquiries;