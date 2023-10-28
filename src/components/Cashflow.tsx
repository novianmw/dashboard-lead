import { RiBankCard2Line, RiCashLine, RiLineChartLine, RiStockLine } from "react-icons/ri"
import { Separator } from "./ui/separator"

export default function Cashflow() {
    return (
        <section className="w-full">
            <div className="flex justify-between items-center">
                <div className="px-8 py-5">
                    <h2 className="font-bold text-[22px]">Cash Flow</h2>
                </div>
            </div>
            <div className="flex justify-between items-center px-8 py-5">
                <div className="w-[250px] border-2 rounded-xl px-8 py-2">
                    <div className="flex justify-between items-center">
                        <div className="flex items-start">
                            <h2 className="font-normal text-[16px]">Balance</h2>
                        </div>
                        <div className="flex items-end">
                            <RiCashLine className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="flex items-start">
                        <p className="font-semibold text-[22px]">IDR 32,800,000</p>
                    </div>
                </div>
                <div className="w-[250px] border-2 rounded-xl px-8 py-2">
                    <div className="w-full flex justify-between items-center">
                        <div className="flex items-start">
                            <h2 className="font-normal text-[16px]">Income</h2>
                        </div>
                        <div className="flex items-end">
                            <RiLineChartLine className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="flex items-start">
                        <p className="font-semibold text-[22px]">IDR 12,800,000</p>
                    </div>
                </div>
                <div className="w-[250px] border-2 rounded-xl px-8 py-2">
                    <div className="w-full flex justify-between items-center">
                        <div className="flex items-start">
                            <h2 className="font-normal text-[16px]">Outcome</h2>
                        </div>
                        <div className="flex items-end">
                            <RiStockLine className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="flex items-start">
                        <p className="font-semibold text-[22px]">IDR 3,000,000</p>
                    </div>
                </div>
                <div className="w-[250px] border-2 rounded-xl px-8 py-2">
                    <div className="w-full flex justify-between items-center">
                        <div className="flex items-start">
                            <h2 className="font-normal text-[16px]">Subscription</h2>
                        </div>
                        <div className="flex items-end">
                            <RiBankCard2Line className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="flex items-start">
                        <p className="font-semibold text-[22px]">IDR 500,000</p>
                    </div>
                </div>
            </div>
            <Separator className="my-5" />
        </section>
    )
}
