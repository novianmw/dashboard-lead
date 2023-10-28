import Header from "@/components/Header"
import Statistics from "./Statistics"

export default function page() {
    return (
        <section className="w-full">
            <div className="flex flex-col items-center">
                <Header />
                <Statistics />
            </div>
        </section>
    )
}
