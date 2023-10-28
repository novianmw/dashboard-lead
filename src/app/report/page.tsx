import Header from "@/components/Header"
import Report from "./Report"

export default function page() {
    return (
        <section className="w-full">
            <div className="flex flex-col items-center">
                <Header />
                <Report />
            </div>
        </section>
    )
}
