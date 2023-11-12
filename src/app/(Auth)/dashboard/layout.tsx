import MainMenu from "@/components/dashboardPage/MainMenu"
import "@/app/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Dashboard Lead",
    description: "An Dashboard for manage your finance",
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="w-full hidden lg:flex flex-row items-start">
            <MainMenu />
            {children}
        </section>
    )
}
