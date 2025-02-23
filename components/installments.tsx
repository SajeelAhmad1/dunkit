import ServicesIntro from "@/components/services/service-intro"
import Features from "@/components/services/features"
import FeaturesExp from "@/components/services/features-exp"
import Inquiries from "@/components/services/inquiries"


const InstallmentsPage = () => {
    const text = "Reasons for introduction"
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 pb-32">

                <div className="relative space-y-40 mt-20">
                    <ServicesIntro text={text} />
                    <Features />
                    <FeaturesExp />
                    <Inquiries />
                </div>
            </main>
        </div>
    )
}

export default InstallmentsPage