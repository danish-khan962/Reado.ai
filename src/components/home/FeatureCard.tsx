import React from 'react'
import { cn } from '@/lib/utils'
import { HugeiconsIcon } from '@hugeicons/react'
import { CircleSmallIcon } from '@hugeicons/core-free-icons'
import Image from 'next/image'

type featureCardProps = {
    className?: string,
    image?: string,
    featureType?: string,
    idNumber?: number,
    category?: string,
    author?: string,
    minRead?: number,
    title?: string,
}

const FeatureCard = ({ className, image, featureType, idNumber, category, author, minRead, title }: featureCardProps) => {
    return (
        <div className={cn(
            "max-w-5xl w-full bg-transparent border border-neutral-900 p-2.5 flex flex-col justify-center items-center gap-3 group"
        )}>
            <div className='w-full flex flex-row justify-between items-center gap-x-2'>
                <div className='flex flex-row justify-center items-center'>
                    <HugeiconsIcon icon={CircleSmallIcon} size={14} />
                    <HugeiconsIcon icon={CircleSmallIcon} size={14} className='-ml-0.5'/>
                    <HugeiconsIcon icon={CircleSmallIcon} size={14} className='-ml-0.5'/>
                </div>
                <p className='text-[10px] md:text-xs font-normal uppercase'> Featured </p>
                <p className='text-[10px] md:text-xs font-normal uppercase'> {'[No. 19]'} </p>
            </div>

            <Image
            src={"/images/featured-image.png"}
            alt='featured.img'
            height={1000}
            width={1000}
            className='h-full w-full border border-black group-hover:grayscale-100 group-active:grayscale-100 group-focus-within:grayscale-100'
            />

            <div className='w-full flex flex-row justify-between items-center'>
                <p className='text-[10px] md:text-xs font-medium uppercase text-neutral-700'> TECH </p>
                <p className='text-[10px] md:text-xs font-medium text-neutral-700'> by {"Danish Khan"} | {7} min read </p>
            </div>

            <span className='w-full font-medium font-merriweather leading-snug text-xl md:text-2xl lg:text-[28px] group-hover:bg-violet-400 group-active:bg-violet-400 group-focus-within:bg-violet-400'>
                Best productivity hacks for creative freelancers today
            </span>
        </div>
    )
}

export default FeatureCard