import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'

const SubscribeForm = () => {
    return (
        <form className='bg-white w-full px-4 sm:px-6 md:px-6.5 lg:px-7 py-7 sm:py-8 md:py-9 lg:py-10 flex flex-col gap-y-8 border-4 border-black/50 rounded-xl hover:border-black active:border-black focus-within:border-black transition duration-200 ease-in'>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-col justify-start items-start gap-y-2'>
                    <p className='font-merriweather font-semibold text-xl'> Don't miss a thing </p>
                    <p className='font-normal leading-snug text-sm md:text-base'>Subscribe to get updates straight to your inbox.</p>
                </div>
                <Image
                    src={"/images/VbWuHC2vely05QKSElKrUlByNI.svg"}
                    alt='form bar'
                    height={1000}
                    width={1000}
                    className='w-fit h-fit'
                />
            </div>

            <div className='border-2 border-black/15 rounded-md px-2 md:px-5 py-2 w-full flex flex-row justify-between items-center gap-x-1 shrink'>
                <input type="text" placeholder='Subscribe your email' className='placeholder:text-neutral-500 placeholder:text-[14px] sm:placeholder:text-sm text-black md:placeholder:text-base border-none outline-none min-w-0 flex-1' />
                <Button className='uppercase bg-black text-white cursor-pointer font-semibold'>Subscribe</Button>
            </div>
        </form>
    )
}

export default SubscribeForm