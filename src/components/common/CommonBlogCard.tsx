import React from 'react'
import { cn } from '@/lib/utils'
import { HugeiconsIcon } from '@hugeicons/react'
import { CircleSmallIcon } from '@hugeicons/core-free-icons'
import Image from 'next/image'

type commonBlogCardProps = {
    className?: string,
    image?: string,
    imageClassName?: string,
    featureType?: string,
    idNumber?: number,
    category?: string,
    categoryClassName?: string,
    author?: string,
    authorClassName?: string,
    minRead?: number,
    title?: string,
    titleClassName?: string
}

const CommonBlogCard = ({ className, image, imageClassName, featureType, idNumber, category, categoryClassName, author, authorClassName, minRead, title, titleClassName }: commonBlogCardProps) => {
    return (
        <div className={cn(
            "max-w-5xl w-full bg-transparent border border-neutral-900 p-2.5 flex flex-col justify-center items-center gap-3 group",
            className
        )}>
            <div className='w-full flex flex-row justify-between items-center gap-x-2'>
                <div className='flex flex-row justify-center items-center'>
                    <HugeiconsIcon icon={CircleSmallIcon} size={14} />
                    <HugeiconsIcon icon={CircleSmallIcon} size={14} className='-ml-0.5'/>
                    <HugeiconsIcon icon={CircleSmallIcon} size={14} className='-ml-0.5'/>
                </div>
                {/* <p className='text-[10px] md:text-xs font-normal uppercase'> Featured </p> */}
                <p className='text-[10px] md:text-xs font-normal uppercase'> {'[No. 19]'} </p>
            </div>

            <Image
            src={"/images/featured-image.png"}
            alt='featured.img'
            height={1000}
            width={1000}
            className={cn('h-full w-full border border-black group-hover:grayscale-100 group-active:grayscale-100 group-focus-within:grayscale-100', imageClassName)}
            />

            <div className='w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-2'>
                <p className={cn('text-[10px] md:text-xs font-medium uppercase text-neutral-700', categoryClassName)}> TECH </p>
                <p className={cn('text-[10px] md:text-xs font-medium text-neutral-700', authorClassName)}> by <span className='hover:font-semibold hover:underline transition-all ease-in duration-200'> {"Danish Khan"} </span> | {7} min read </p>
            </div>

            <span className={cn('w-full font-medium font-merriweather leading-snug text-base sm:text-lg md:text-xl lg:text-2xl group-hover:bg-orange-300 group-active:bg-orange-300 group-focus-within:bg-orange-300', titleClassName)}>
                Best productivity hacks for creative freelancers today
            </span>
        </div>
    )
}

export default CommonBlogCard