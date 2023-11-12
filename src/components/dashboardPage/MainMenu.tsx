"use client"
import { RiBankLine, RiBookOpenLine, RiFunctionLine, RiVipCrownLine } from "react-icons/ri"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { buttonVariants } from "../ui/button"

// interface MainMenuProps {
//     items: {
//         logo: ReactNode
//         title: string
//         href: string
//     }[]
// }

const MainMenuItems = [
    {
        title: "Dashboard",
        href: "/dashboard/",
        logo: <RiFunctionLine className="w-5 h-5" />,
    },
    {
        title: "Statistic",
        href: "/dashboard/statistic",
        logo: <RiBankLine className="w-5 h-5" />,
    },
    {
        title: "Report",
        href: "/dashboard/report",
        logo: <RiBookOpenLine className="w-5 h-5" />,
    },
]

export default function MainMenu() { // { items }: MainMenuProps
    const pathname = usePathname()
    return (
        <section className="w-[300px] flex flex-col items-start border-2 h-screen">
            <div className="w-full flex flex-col items-start px-8 py-5">
                <div className="flex flex-row items-center gap-8 p-3">
                    <RiVipCrownLine className="w-5 h-5" />
                    <h1 className="font-bold text-[22px]">Lead</h1>
                </div>
            </div>
            <div className="w-full h-full flex flex-col items-start">
                <div className="flex flex-col items-start h-full w-full">
                    <div className="px-8 py-5">
                        <p className="font-light text-[14px] uppercase">General</p>
                    </div>
                    <div className="w-full h-full flex flex-col justify-between items-center">
                        <nav className={cn("w-full flex flex-col items-start")}>
                            {MainMenuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        buttonVariants({ variant: "ghost" }),
                                        pathname === item.href ? "bg-slate-100 hover:bg-muted" : "hover:bg-slate-100 hover:underline",
                                        " w-full flex flex-row items-center p-8",
                                    )}>
                                    <div className="w-full flex flex-row items-center py-2 gap-5">
                                        <div className="p-3 border-2 rounded-full">{item.logo}</div>
                                        <h2 className="font-normal text-[16px]">{item.title}</h2>
                                    </div>
                                </Link>
                            ))}
                        </nav>
                        <div className="w-full flex flex-col items-start px-8 py-5">
                            <div className="flex flex-row items-center gap-5">
                                <div className="p-3">
                                    <RiVipCrownLine className="w-5 h-5" />
                                </div>
                                <div className="flex-col">
                                    <p className="font-normal text-[16px]">2023 Lead</p>
                                    <p className="font-normal text-[12px]">licensed 09/20/2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

/* <nav className="w-full flex flex-col items-start">
                            {items.map((item) => (
                                <Link key={item.href} href={item.href} className={cn(
                                    buttonVariants({ variant: "ghost" }),
                                    pathname === item.href ? "bg-muted hover:bg-muted" : "hover:bg-transparent hover:underline",
                                    " w-full flex flex-row items-center p-8"
                                    )}>
                                    <div className="w-full flex flex-row items-center py-2 gap-5">
                                        <div className="p-3 border-2 rounded-full">
                                            {item.logo}
                                        </div>
                                        <h2 className="font-normal text-[16px]">
                                            {item.title}
                                        </h2>
                                    </div>
                                </Link>
                            ))}
                        </nav> */

// <section className="w-[300px] flex flex-col items-start border-2 h-screen">
//             <div className="w-full flex flex-col items-start px-8 py-5">
//                 <div className="flex flex-row items-center gap-8 p-3">
//                     <RiVipCrownLine className="w-5 h-5" />
//                     <h1 className="font-bold text-[22px]">Lead</h1>
//                 </div>
//             </div>
//             <div className="w-full h-full flex flex-col items-start">
//                 <div className="h-full px-8 pb-10">
//                     <div className="pb-2">
//                         <p className="font-light text-[14px] uppercase">General</p>
//                     </div>
//                     <div className="w-full h-full flex flex-col justify-between items-center">
//                         <div className="w-full flex flex-col items-start">
//                             <div className="flex flex-row items-center py-2 gap-5">
//                                 <div className="p-3 border-2 rounded-full">
//                                     <RiFunctionLine className="w-5 h-5" />
//                                 </div>
//                                 <h2 className="font-normal text-[16px]">Dashboard</h2>
//                             </div>
//                             <div className="flex flex-row items-center py-2 gap-5">
//                                 <div className="p-3 border-2 rounded-full">
//                                     <RiBankLine className="w-5 h-5" />
//                                 </div>
//                                 <h2 className="font-normal text-[16px]">Statistic</h2>
//                             </div>
//                             <div className="flex flex-row items-center py-2 gap-5">
//                                 <div className="p-3 border-2 rounded-full">
//                                     <RiBookOpenLine className="w-5 h-5" />
//                                 </div>
//                                 <h2 className="font-normal text-[16px]">Report</h2>
//                             </div>
//                         </div>
//                         <div className="w-full flex flex-col items-start">
//                             <div className="flex flex-row items-center gap-5">
//                                 <div className="p-3">
//                                     <RiVipCrownLine className="w-5 h-5" />
//                                 </div>
//                                 <div className="flex-col">
//                                     <p className="font-normal text-[16px]">2023 Lead</p>
//                                     <p className="font-normal text-[12px]">licensed 09/20/2023</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
