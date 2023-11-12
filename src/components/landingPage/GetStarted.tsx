import Image from "next/image"
import { arrowUp } from "../../../public/assets"

export default function GetStarted() {
    return (
    <div className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-100 p-[2px] cursor-pointer">
        <div className="flex justify-center items-center flex-col bg-gradient-to-tr from-cyan-400 to-cyan-100 w-[100%] h-[100%] rounded-full">
            <div className="flex justify-center items-start flex-row">
                <p className="font-poppins font font-medium text-[18px] leading-[23px] mr-2">
                    <span className="text-gradient">Get</span>
                </p>
                    <Image src={arrowUp} alt='arrowUp' className="w-[23px] h-[23px] object-contain" />
            </div>
            <p className="font-poppins font font-medium text-[18px] leading-[23px]">
                <span className="text-gradient">Started</span>
            </p>
        </div>
    </div>
    )
}
