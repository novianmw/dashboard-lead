import Cashflow from "@/components/dashboardPage/Cashflow"
import Header from "@/components/dashboardPage/Header"
import ListBank from "@/components/dashboardPage/ListBank"

export default function Home() {
    return (
        <section className="w-full flex flex-col items-center">
            <Header />
            <Cashflow />
            <ListBank />
        </section>
    )
}
