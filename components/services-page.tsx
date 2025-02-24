import ExpComp from "@/components/services/exp-comp"
import HowToUse from "@/components/services/how-to-use"
import Promotion from "@/components/services/promotion"
import ServicesIntro from "@/components/services/service-intro"


const ServicesPage = () => {

  const text = "Subscription-based rental clothing"
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 pb-32"> 
        
        <div className="relative space-y-20 mt-20"> 
          <ServicesIntro text = {text}/>
          <ExpComp />
          <HowToUse/>
          {/* <Promotion/> */}
        </div>
      </main>
    </div>
  )
}

export default ServicesPage