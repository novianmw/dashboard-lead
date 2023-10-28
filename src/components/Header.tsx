import { RiNotification2Line } from "react-icons/ri"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"

export default function Header() {
    return (
        <header className="w-full border-b-2">
            <div className="w-full flex justify-between items-center mx-auto px-8 py-5">
                <div className="flex-col">
                    <h2 className="font-bold text-[22px]">Dashboard</h2>
                    <p className="font-normal text-[16px]">Dashboard / Overview</p>
                </div>
                <div className="flex items-center gap-5">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src="https://github.com/novianmw.png" />
                                <AvatarFallback>N</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[250px]" align="end">
                            <DropdownMenuLabel>
                                <div className="flex flex-col">
                                    <p className="font-semibold text-[16px]">novianmw</p>
                                    <p className="font-light text-[14px]">novian.mulyoadi.w@gmail.com</p>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    Profile
                                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Bank
                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Report
                                    <DropdownMenuShortcut>⌘R</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                Log out
                                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="border rounded-full p-3">
                            <RiNotification2Line className="w-5 h-5" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Notification</DropdownMenuLabel>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}
