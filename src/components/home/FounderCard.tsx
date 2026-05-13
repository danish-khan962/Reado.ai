import MaxWidthContainer from '@/styles/MaxWidthContainer'
import React from 'react'
import Image from 'next/image'
import { HugeiconsIcon } from '@hugeicons/react'
import { CircleSmallIcon } from '@hugeicons/core-free-icons'

const FounderCard = () => {
    return (
        <div className='mt-14 sm:mt-16 md:mt-20 lg:mt-24 w-full relative py-10 sm:py-12 md:py-16 lg:py-20' >
            <MaxWidthContainer className='flex flex-col justify-center items-center gap-y-5'>
                <div className='max-w-2xl w-full p-2.5 border border-black group'>
                    <Image
                        src={"/images/Gemini_Generated_Image_j8qo3hj8qo3hj8qo.png"}
                        alt='founder.img'
                        height={1000}
                        width={1000}
                        className='h-fit w-fit object-cover object-center border border-black'
                    />
                </div>

                <p className='mt-5 sm:mt-5.5 md:mt-6 lg:mt-7 max-w-5xl w-full text-center text-base sm:text-lg md:text-xl lg:text-2xl font-merriweather font-medium'>
                    This platform was started with a simple idea: to share stories that spark curiosity and inspire conversations. Our team of writers and creators is dedicated to bringing thoughtful and diverse voices together. We hope you find value in every read.
                </p>

                <div className='flex flex-row justify-center items-center gap-1.5 md:gap-2 lg:gap-3'>
                    <span className='font-light text-xs'>----------------------</span>
                    <div className='flex flex-row justify-center items-center'>
                        <HugeiconsIcon icon={CircleSmallIcon} size={14} />
                        <HugeiconsIcon icon={CircleSmallIcon} size={14} className='-ml-0.5' />
                        <HugeiconsIcon icon={CircleSmallIcon} size={14} className='-ml-0.5' />
                    </div>
                    <span className='font-light text-xs'>-----------------------</span>
                </div>

                <div className='flex flex-col justify-center items-center text-center gap-0.5'>
                    <p className='text-base md:text-lg lg:text-xl font-semibold font-playfairDisplay'> Danish Khan </p>
                    <p className='font-light text-xs md:text-sm lg:text-base'> Founder & Editor-in-Chief </p>
                </div>
            </MaxWidthContainer>
        </div>
    )
}

export default FounderCard