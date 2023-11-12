import { ClerkProvider } from "@clerk/nextjs"
import { Metadata } from "next"
import { Jost } from "next/font/google"

const jost = Jost({
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Lead",
    description: "An Saas application for manage your finance",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={jost.className}>
                    <section className="w-full hidden lg:flex flex-row items-start">
                        {children}
                    </section>
                </body>
            </html>
        </ClerkProvider>
    )
}
