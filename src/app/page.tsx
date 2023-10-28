import Cashflow from "@/components/Cashflow"
import Header from "@/components/Header"
import ListBank from "@/components/ListBank"

export default function Home() {
    return (
        <main className="w-full flex flex-col items-center">
            <Header />
            <Cashflow />
            <ListBank />
        </main>
    )
}
