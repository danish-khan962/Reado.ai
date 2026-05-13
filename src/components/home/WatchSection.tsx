import MaxWidthContainer from '@/styles/MaxWidthContainer'
import React from 'react'
import { Button } from '../ui/button'
import SeparatorWhite from '../ui/separator-white'
import Image from 'next/image'
import { HugeiconsIcon } from '@hugeicons/react'
import { CircleSmallIcon } from '@hugeicons/core-free-icons'
import CommonBlogCard from '../common/CommonBlogCard'

const WatchSection = () => {
    return (
        <div className='mt-14 sm:mt-16 md:mt-20 lg:mt-24 w-full relative bg-black py-10 sm:py-12 md:py-16 lg:py-20'>
            <MaxWidthContainer className='text-neutral-200 flex flex-col gap-y-2'>
                <div className='w-full flex flex-row justify-between items-center'>
                    <h1 className='font-medium font-merriweather leading-tight text-4xl md:text-5xl lg:text-6xl max-w-2xl w-full text-neutral-100' style={{ wordSpacing: '4px', letterSpacing: '0.5px' }}>Watch</h1>
                    <Button className='bg-white text-black hover:bg-white/90'>View All Videos</Button>
                </div>
                <SeparatorWhite className='mt-5' />

                <div className='flex flex-col gap-y-2 mt-8 group'>
                    <div className='w-full h-full border border-white p-2.5 flex flex-col gap-y-2'>
                        <div className='w-full flex flex-row justify-between items-center gap-x-2'>
                            <div className='flex flex-row justify-center items-center'>
                                <HugeiconsIcon icon={CircleSmallIcon} size={14} />
                                <HugeiconsIcon icon={CircleSmallIcon} size={14} className='-ml-0.5' />
                                <HugeiconsIcon icon={CircleSmallIcon} size={14} className='-ml-0.5' />
                            </div>
                            {/* <p className='text-[10px] md:text-xs font-normal uppercase'> Featured </p> */}
                            <p className='text-[10px] md:text-xs font-normal uppercase'> {'[No. 19]'} </p>
                        </div>
                        <div className='flex flex-col lg:flex-row items-stretch gap-x-4 gap-y-3 lg:min-h-130'>
                            <Image
                                src={"/images/emma-simpson-mNGaaLeWEp0-unsplash.jpg"}
                                alt='temp.img'
                                height={1000}
                                width={1000}
                                className='max-w-3xl w-full h-full object-cover object-center grayscale-25 group-hover:grayscale-100 group-active:grayscale-100 group-focus-within:grayscale-100 border border-white'
                            />

                            <div className='flex-1 flex flex-col-reverse lg:flex-col justify-between gap-y-3 py-0 lg:py-1'>
                                <span className='self-start text-base sm:text-2xl md:text-3xl lg:text-4xl bg-transparent text-white group-hover:text-black font-medium font-merriweather group-hover:bg-yellow-600 leading-snug group-active:bg-yellow-600 group-focus-within:bg-yellow-600'>Quick fitness routines you can do anywhere</span>

                                <div className='w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-2'>
                                    <p className='text-[10px] md:text-xs font-medium uppercase text-neutral-400'> HEALTH </p>
                                    <p className='text-[10px] md:text-xs font-medium text-neutral-400'> by {"Danish Khan"} | {7} min read </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-0 md:mt-8'>
                    <CommonBlogCard className='border-white' categoryClassName='text-neutral-400' authorClassName='text-neutral-400' titleClassName='group-hover:text-black group-hover:bg-yellow-600 group-active:bg-yellow-600 group-focus-within:bg-yellow-600' imageClassName='border-white'/>
                    <CommonBlogCard className='border-white' categoryClassName='text-neutral-400' authorClassName='text-neutral-400' titleClassName='group-hover:text-black group-hover:bg-yellow-600 group-active:bg-yellow-600 group-focus-within:bg-yellow-600' imageClassName='border-white'/>
                    <CommonBlogCard className='border-white' categoryClassName='text-neutral-400' authorClassName='text-neutral-400' titleClassName='group-hover:text-black group-hover:bg-yellow-600 group-active:bg-yellow-600 group-focus-within:bg-yellow-600' imageClassName='border-white'/>
                </div>
            </MaxWidthContainer>
        </div>
    )
}

export default WatchSection