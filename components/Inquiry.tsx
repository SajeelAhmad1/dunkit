import MaxWidth from "@/components/max-width"
import { ArrowRight } from "lucide-react"
import { FormattedMessage } from "react-intl"

const Inquiry=()=> {
  return (
    <div className="min-h-screen">
      <div className="h-[300px] lg:h-[450px] "
      style={{
        backgroundImage:"url(/Inquiry.png)",
        backgroundSize: 'cover',
      }}
      >
        <div className="h-full w-full lg:w-[600px] mx-auto inset-0  backdrop-blur-lg flex items-center justify-center">
        <h2 className="   font-bold text-white  ">i n q u i r y</h2>
        </div> 
      </div>
      {/* { Form form INQUIRY section } */}
      <MaxWidth>
      <div className="w-full mx-auto lg:w-[600px] lg:mx-auto mb-10 ">
        <div className=" lg:gap-4 lg:grid lg:grid-cols-2 ">
            <div className="mt-20">
                <h5 className="font-bold ">
                  Last name
                  <FormattedMessage 
                  id="last_name"
                  defaultMessage="Last Name"
                  />
                </h5>
                <input className="p-2  lg:py-3 lg:px-2 w-full border mt-2 border-gray-400" placeholder="Yamada"/>
            </div>
            <div className="mt-3 lg:mt-20">
                <h5 className="font-bold ">given name</h5>
                <input className="p-2  lg:py-3 lg:px-2 w-full border border-gray-400 mt-2" placeholder="Taro"/>
            </div>
        </div>
        <div className="lg:gap-4 lg:grid lg:grid-cols-2 ">
            <div className="mt-3 lg:mt-20">
                    <h5 className="font-bold ">Company Name (Optional)</h5>
                    <input className="p-2  lg:py-3 lg:px-2 w-full border mt-2 border-gray-400" placeholder="XXX Co.,Ltd."/>
            </div>
            <div className="mt-3 lg:mt-20">
                    <h5 className="font-bold">Department, position, etc. (optional)</h5>
                    <input className="p-2  lg:py-3 lg:px-2 w-full border mt-2 border-gray-400" placeholder="Taro"/>
            </div>
        </div>
        <div>
        {/* { email address} */}
      <div className="mt-3 lg:mt-17">
        <div>
            <h5 className="font-bold">email address</h5>
        </div>
        <input className="w-full lg:w-full py-2 border mt-2 border-gray-400"/>
      </div>
      {/* { Inquriy contant } */}
      <div className="mt-14 lg:mt-13">
        <div>
                <h5 className="font-bold">Inquiry Content</h5>
            </div>
            <textarea placeholder="Enter here"  className="w-full h-[300px] px-5 py-2 border mt-2 border-gray-400"/>
        </div>
      </div>
      {/*>>>> { Send inquiry button } <<<<<<*/}
      <div className="flex justify-center mt-3 lg:mt-10">
      <button className="relative px-5 py-4 flex items-center gap-8 border border-gray-400 rounded-full bg-white 
  overflow-hidden transition-all duration-700 ease-in-out group ">
  {/* Background fill effect */}
  <span className="absolute inset-0 bg-linear-to-r from-red-500 to-red-700 transform -translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-in-out"></span>
  {/* Button Text */}
  <h6 className="relative z-10 hover:translate-x-2 uppercase text-red-500 group-hover:text-white transition-all duration-300">
    Send Inquiry
  </h6>
  {/* Arrow Icon */}
  <div className="group-hover:scale-0  transition-all duration-500 relative z-10 bg-red-500 rounded-full p-1 text-white   group-hover:text-red-500">
    <ArrowRight className=""/>
  </div>
</button>

        </div>
    </div>
      </MaxWidth>
    </div>
  )
}

export default Inquiry
