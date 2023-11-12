import { ClerkProvider, UserButton } from "@clerk/nextjs"
import "../globals.css"
import type { Metadata } from "next"
import { Jost } from "next/font/google"

const jost = Jost({
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Dashboard Lead",
    description: "An Dashboard for manage your finance",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={jost.className}>
                    <section className="w-full flex flex-row items-start">
                        {children}
                    </section>
                </body>
            </html>
        </ClerkProvider>
    )
}
