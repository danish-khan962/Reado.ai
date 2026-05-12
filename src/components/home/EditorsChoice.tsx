import MaxWidthContainer from '@/styles/MaxWidthContainer'
import React from 'react'
import SeparatorBlack from '../ui/separator-black'
import Image from 'next/image'
import { HugeiconsIcon } from '@hugeicons/react'
import { CircleSmallIcon } from '@hugeicons/core-free-icons'

const EditorsChoice = () => {
    return (
        <div className='mt-10 sm:mt-12 md:mt-16 lg:mt-20 w-full relative'>
            <MaxWidthContainer>
                <h1 className='font-medium font-merriweather leading-tight text-4xl md:text-5xl lg:text-6xl max-w-2xl w-full' style={{ wordSpacing: '4px', letterSpacing: '0.5px' }}>Editor&apos;s Choice</h1>
                <SeparatorBlack className='mt-5' />

                <div className='border border-black p-2.5 flex flex-col gap-y-2 w-full mt-8 group'>
                    <div className='w-full flex flex-row justify-between items-center gap-x-2'>
                        <div className='flex flex-row justify-center items-center'>
                            <HugeiconsIcon icon={CircleSmallIcon} size={14} />
                            <HugeiconsIcon icon={CircleSmallIcon} size={14} className='-ml-0.5' />
                            <HugeiconsIcon icon={CircleSmallIcon} size={14} className='-ml-0.5' />
                        </div>
                        {/* <p className='text-[10px] md:text-xs font-normal uppercase'> Featured </p> */}
                        <p className='text-[10px] md:text-xs font-normal uppercase'> {'[No. 19]'} </p>
                    </div>

                    <div className='relative'>
                        <Image
                            src={"/images/zhang-ziyu-zxQgUCk4B5A-unsplash.jpg"}
                            alt='editor&apos;s choice'
                            height={1000}
                            width={1000}
                            className='w-full max-h-130 h-full object-cover object-center grayscale-25 group-hover:grayscale-100 group-active:grayscale-100 group-focus-within:grayscale-100'
                        />
                        <div className='absolute top-6 left-6 sm:top-8 sm:left-8 md:top-10 md:left-10 lg:top-12 lg:right-12 flex flex-col gap-2 sm:gap-2.5 md:gap-3.5 lg:gap-5'>
                            <span className='text-white font-medium text-[10px] md:text-xs'> Lifestyle </span>
                            <div className='flex flex-col gap-1 bg-transparent'>
                                <span className='self-start text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-white font-medium font-merriweather group-hover:bg-fuchsia-300 group-active:bg-fuchsia-300 group-focus-within:bg-fuchsia-300' style={{ wordSpacing: "8px" }}>How remote work is</span>
                                <span className='self-start text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-white font-medium font-merriweather group-hover:bg-fuchsia-300 group-active:bg-fuchsia-300 group-focus-within:bg-fuchsia-300' style={{ wordSpacing: "8px" }}>reshaping modern lifestyles</span>
                            </div>
                            <p className='text-white font-medium text-[10px] md:text-xs'>by {"Danish Khan"} | {8} min read</p>
                        </div>
                    </div>

                </div>
            </MaxWidthContainer>
        </div>
    )
}

export default EditorsChoice