import { features } from "@/app/constant"
import Image from "next/image"
import Button from "@/components/landingPage/Button"


export default function Business() {
    // const FeatureCard = () => (
    //     <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb:0"} feature-card`}>
    //         <div className="w-[64px] h-[64px] rounded-full bg-dimBlue flex justify-center items-center">
    //             <Image src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    //         </div>
    //         <div className="flex flex-1 flex-col ml-3">
    //                 <h4 className="font-poppins font-semibold text-[18px] leading-[23px] mb-1">
    //                     {title}
    //                 </h4>
    //                     <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
    //                         {content}
    //                     </p>
    //             </div>
    //     </div>
    // )
    return (
        <section id="features" className="flex flex-col px-12 py-12">
            <div className="flex-col flex justify-center items-start">
                <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full">You do the business. <br className="sm:block hidden"></br>we'll handle the money.</h2>
                <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">With the right credit card, you can improve your financial life by building credit, earning reward and saving money. But with hundreds of credit cards on the market</p>
                <Button/>
            </div>
            <div className="flex flex-col justify-conter items-center md:ml-10 ml-0 md:mt-10 mt-0 relative">
                {features.map((feature, index) => (
                    <div key={index} className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb:0"} feature-card`}>
                        <div className="w-[64px] h-[64px] rounded-full bg-dimBlue flex justify-center items-center">
                            <Image src={feature.iconUrl} width={10} height={10} alt="icon" className="w-[50%] h-[50%] object-contain" />
                        </div>
                        <div className="flex flex-1 flex-col ml-3">
                            <h3 className="font-poppins font-semibold text-[18px] leading-[23px] mb-1">
                                {feature.title}
                            </h3>
                            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
                                {feature.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
