import { RiNotification2Line } from "react-icons/ri"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import UserNav from "./UserNav"
import NotifNav from "./NotifNav"
import { UserButton } from "@clerk/nextjs"

export default function Header() {
    return (
        <header className="w-full border-b-2">
            <div className="w-full flex justify-between items-center mx-auto px-8 py-5">
                <div className="flex-col">
                    <h2 className="font-bold text-[22px]">Dashboard</h2>
                    <p className="font-normal text-[16px]">Dashboard / Overview</p>
                </div>
                <div className="flex items-center gap-5">
                    <NotifNav />
                    <UserButton afterSignOutUrl="/"/>
                    {/* <UserNav /> */}
                </div>
            </div>
        </header>
    )
}
