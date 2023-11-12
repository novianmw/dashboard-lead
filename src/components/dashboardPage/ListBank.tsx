import { Avatar, AvatarFallback } from "../ui/avatar"
import { Separator } from "../ui/separator"
import AddBank from "./AddBank"

export default function ListBank() {
    return (
        <section className="w-full">
            <div className="flex flex-col items-center px-8 py-5">
                <div className="w-full border-2 rounded-xl px-8 py-5">
                    <div className="flex flex-col items-start">
                        <div className="pb-5">
                            <h2 className="font-semibold text-[22px]">List Bank</h2>
                            <p className="font-normal text-[14px]">You have 3 Banks listed</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center pb-3">
                        <div className="flex">
                            <Avatar>
                                <AvatarFallback>-</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="w-full flex flex-row justify-between items-center">
                            <div className="flex flex-col items-center px-8">
                                <div className="items-start">
                                    <h3 className="font-semibold text-[16px]">Mandiri</h3>
                                    <p className="font-normal text-[16px]">PT Bank Mandiri Tbk.</p>
                                </div>
                            </div>
                            <div className="flex items-end">
                                <p className="">IDR 22,000,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center pb-3">
                        <div className="flex">
                            <Avatar>
                                <AvatarFallback>-</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="w-full flex flex-row justify-between items-center">
                            <div className="flex flex-col items-center px-8">
                                <div className="items-start">
                                    <h3 className="font-semibold text-[16px]">BCA</h3>
                                    <p className="font-normal text-[16px]">PT Bank Central Asia Tbk.</p>
                                </div>
                            </div>
                            <div className="flex items-end">
                                <p className="">IDR 7,500,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center pb-3">
                        <div className="flex">
                            <Avatar>
                                <AvatarFallback>-</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="w-full flex flex-row justify-between items-center">
                            <div className="flex flex-col items-center px-8">
                                <div className="items-start">
                                    <h3 className="font-semibold text-[16px]">BNI</h3>
                                    <p className="font-normal text-[16px]">PT Bank Negara Indonesia Tbk.</p>
                                </div>
                            </div>
                            <div className="flex items-end">
                                <p className="">IDR 3,300,000</p>
                            </div>
                        </div>
                    </div>
                    <Separator />
                    <AddBank />
                </div>
            </div>
        </section>
    )
}
