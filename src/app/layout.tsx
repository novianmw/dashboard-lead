import MainMenu from "@/components/MainMenu"
import "./globals.css"
import type { Metadata } from "next"
import { Jost } from "next/font/google"
import { RiBankLine, RiBookOpenLine, RiFunctionLine } from "react-icons/ri"

const jost = Jost({
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Dashboard Lead",
    description: "An Dashboard for manage your finance",
}

const MainMenuItems = [
    {
        title: "Dashboard",
        href: "/",
        logo: <RiFunctionLine className="w-5 h-5" />,
    },
    {
        title: "Statistic",
        href: "/statistic",
        logo: <RiBankLine className="w-5 h-5" />,
    },
    {
        title: "Report",
        href: "/report",
        logo: <RiBookOpenLine className="w-5 h-5" />,
    },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={jost.className}>
                <div className="w-full flex flex-row items-start">
                    <MainMenu items={MainMenuItems} />
                    {children}
                </div>
            </body>
        </html>
    )
}
