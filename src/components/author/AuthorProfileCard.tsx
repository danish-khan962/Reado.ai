import React from 'react'
import Image from 'next/image'
import { Cascadia_Code } from 'next/font/google'
import { BsLinkedin, BsFacebook, BsTwitterX, BsCake2 } from "react-icons/bs"
import SeparatorBlack from '../ui/separator-black'
import { cn } from '@/lib/utils'

const cascadiaCode = Cascadia_Code({
    subsets: ['latin'],
    weight: ["200", "300", "400", "500", "600", "700"]
})

type AuthorProfileCard = {
    className?: string
}

const AuthorProfileCard = ({className}: AuthorProfileCard) => {
    return (
        <div className={cn(
            "max-w-sm w-full border-2 border-black p-2 md:p-3 flex flex-col justify-center items-center gap-2",
            className
        )}>
            <div className='w-full flex flex-row justify-between items-center'>
                <p className='text-xs md:text-sm font-merriweather bg-neutral-300 p-1 rounded hover:bg-neutral-300/80'>User Id: <span className={`${cascadiaCode.className} font-medium`}>@HX789462vya5</span></p>
                <div className='flex flex-row justify-between items-center gap-1.5 md:gap-2'>
                    <BsLinkedin className='h-5 w-5 hover:scale-115 transition-all ease-in-out duration-200' />
                    <BsFacebook className='h-5 w-5 hover:scale-115 transition-all ease-in-out duration-200' />
                    <BsTwitterX className='h-5 w-5 hover:scale-115 transition-all ease-in-out duration-200' />
                </div>
            </div>
            <div className="relative w-full h-60 overflow-hidden border border-black">
                <Image
                    src="/images/author-new.jpg"
                    alt="author"
                    fill
                    className="object-cover object-top"
                />
            </div>

            <div className="w-full bg-linear-to-tl from-neutral-600 via-[#0A0A0A]/80 to-[#212121] flex flex-row justify-between items-center py-2 px-4 rounded-lg">
                <div className='flex flex-row justify-center items-center gap-2'>
                    <Image
                        src={"/images/indian flag.jpg"}
                        alt='user nationality'
                        height={1000}
                        width={1000}
                        className='h-6 w-6 rounded-full object-center object-cover'
                    />
                    <p className='text-sm font-semibold font-merriweather text-neutral-300 backdrop-blur-sm'>Danish Khan</p>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 p-2 rounded bg-linear-to-bl from-pink-300 via-pink-400 to-pink-500'>
                    <BsCake2 />
                    <p className='text-xs font-mono'> 04 Sep, 2004 </p>
                </div>
            </div>

            <SeparatorBlack className='w-full mt-3' />

            <div className='max-h-32 h-full relative w-full mt-3 resize-none border-2 border-neutral-600 outline-none cursor-none p-2 overflow-y-scroll text-sm md:text-base leading-snug bg-white/85'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit enim sunt quae iste ducimus mollitia necessitatibus ad corrupti accusantium, officia aspernatur saepe, labore similique explicabo a dignissimos voluptate culpa, cumque beatae suscipit. Fugit, est ratione. Aut animi molestiae laudantium nemo maxime reiciendis repudiandae sed reprehenderit doloremque. Iste magni ipsam commodi eos atque numquam est facere, possimus quas expedita harum sed culpa doloribus soluta fuga non minus facilis ratione neque, quo animi. Temporibus minus quaerat officiis animi adipisci obcaecati incidunt magni ducimus! Facilis natus, sit quod obcaecati, minima, at deleniti itaque tenetur saepe quidem similique ratione neque iusto eligendi incidunt ut?
            </div>
        </div>
    )
}

export default AuthorProfileCard