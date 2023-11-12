import { stats } from "@/app/constant"

export default function Stats() {
    return (
        <section className="flex justify-around items-center flex-row flex-wrap px-6">
            {stats.map((stat) => (
                <div key={stat.id} className='flex justify-start items-center flex-row'>
                    <h3 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]">
                        {stat.value}
                    </h3>
                        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
                            {stat.title}
                        </p>
                </div>
            ))}
        </section>
    )
}
