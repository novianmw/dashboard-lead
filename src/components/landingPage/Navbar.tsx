import { navLinks } from "@/app/constant";
import { RiVipCrownLine } from "react-icons/ri";
import { Separator } from "../ui/separator";

export default function Navbar() {
    return (
        <section className="w-full">
            <div className="flex justify-between items-center">
                <div className="flex flex-row items-center gap-8 p-6">
                    <RiVipCrownLine className="w-5 h-5" />
                    <h1 className="font-bold text-[22px]">Lead</h1>
                </div>
                <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                    {navLinks.map((nav, index) => (
                        <li
                            key={index}
                            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} mr-10`}>
                            <a href={`${nav.route}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <Separator className="w-full"/>
        </section>
    )
}