import Business from "@/components/landingPage/Business"
import Footer from "@/components/landingPage/Footer"
import Hero from "@/components/landingPage/Hero"
import Navbar from "@/components/landingPage/Navbar"
import Stats from "@/components/landingPage/Stats"


export default function Home() {
    return (
        <main className="bg-indigo-800/30 w-full flex justify-center items-center">
            <div className="w-full xl:max-w-[1280px]">
                <Navbar/>
                <Hero/>
                <Stats/>
                <Business/>
                <Footer/>
            </div>
        </main>
    )
}
