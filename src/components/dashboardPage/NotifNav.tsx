import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { RiNotification2Line } from "react-icons/ri"

export default function NotifNav() {
    return (
        <section className="flex items-center">
            <DropdownMenu>
                <DropdownMenuTrigger className="border rounded-full p-2">
                    <RiNotification2Line className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Notification</DropdownMenuLabel>
                </DropdownMenuContent>
            </DropdownMenu>
        </section>
    )
}
