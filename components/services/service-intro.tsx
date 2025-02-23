import Button from "@/components/services/button"

interface ServicesIntroProps {
  text: string
}
const ServicesIntro = ({ text }: ServicesIntroProps) => {
  
  return (
    <div className="">
      <div className="py-8 flex flex-col  items-center justify-center">
        <img src="footer-logo.svg" alt="logo" className="w-36 md:w-44" />
        <div className="text-lg lg:text-5xl mt-3 md:mt-4">
          {text}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-center space-y-2 md:space-x-24">
          <Button text={"Service Details"} url={"service"} />
          <Button text={"Reasons for Introduction"} url={"installment"} />
          <Button text={"Price Information"} url={"pricing"} />
      </div>
    </div>

  )
}

export default ServicesIntro