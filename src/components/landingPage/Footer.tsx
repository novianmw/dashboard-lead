import { footerLinks, socialMedia } from '@/app/constant'
import Image from 'next/image'
import { RiVipCrownLine } from 'react-icons/ri'

export default function Footer() {
    return (
        <section className='flex justify-center items-center sm:py-16 py-6 flex-col '>
            <div className='flex justify-center items-start md:flex-row flex-col mb-8 w-full'>
                <div className='flex flex-1 flex-col justify-start mr-10 px-10'>
                    <div className="flex flex-row items-center gap-8 p-3">
                        <RiVipCrownLine className="w-5 h-5" />
                        <h1 className="font-bold text-[22px]">Lead</h1>
                    </div>
                    <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[310px]'>
                        A new way to make the payments easy, reliable and secure.
                    </p>
                </div>
                <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
                    {footerLinks.map((footerLink) => (
                        <div key={footerLink.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                            <h4 className='font-poppins font-medium text-[18px] leading-[27px]'>
                                {footerLink.title}
                            </h4>
                            <ul className='list-none'>
                                {footerLink.links.map((link, index) => (
                                    <li
                                        key={link.name}
                                        className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                                            index !== footerLink.links.length - 1 ? 'my-4' : 'my-0'
                                        }`}>
                                        {link.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45] px-6">
                <p className="font-poppins font-normal text-center text-[18px] leading-[27px]">
                    2021 Hoobank Allright Reserved.
                </p>
                <div className="flex flex-row md:mt-0 mt-6">
                    {socialMedia.map((social, index) => (
                        <Image key={social.id} src={social.iconUrl} alt={social.id} width={21} height={12} className={`object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`} />
                    ))}
                </div>
            </div>
        </section>
    )
}
