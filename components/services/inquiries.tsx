"use client"
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormattedMessage } from "react-intl";

const Inquiries = () => {
    const router = useRouter();

  return (
    <div className="relative h-[200px] lg:h-[250px] bg-cover bg-black/4 bg-center" style={{ backgroundImage: "url(/Inq.jpg)" }}>
      
      {/* Blurred Strip */}
      <div className="absolute inset-y-0 left-[10%] md:left-[22%] right-[10%] md:right-[22%] backdrop-blur-sm bg-black/40"></div>

      {/* Content on top of the blur */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="p-8 flex flex-col items-center space-y-6 text-white">
          <h1 className="text-3xl font-semibold text-center">
            <FormattedMessage id={"inquiry.regard"} defaultMessage={"Inquiries regarding implementation"}/>
          </h1>
          <button
          onClick={() => router.push("/contact")}
          className="space-x-8 flex items-center border border-white px-16 py-2 bg-white/20 backdrop-blur-md hover:bg-white/30 transition duration-300">
            <div className="p-1">
              <ArrowRight />
            </div>
            <div className="underline text-xl">
            <FormattedMessage id={"inquiry.IQ"} defaultMessage={"Inquiry"}/>
            </div>
          </button>
        </div>
      </div>

    </div>
  );
};

export default Inquiries;
