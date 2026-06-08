import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import MaxWidthContainer from '@/styles/MaxWidthContainer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='reltaive w-full flex justify-center items-center min-h-screen h-full bg-linear-from-bl from-[#FAFAFA] via-[#F2F2F2] to-[#F0F0F0]'>
        <MaxWidthContainer className='flex flex-col md:flex-row justify-center items-center md:justify-between gap-x-20 gap-y-8'>
            <Image
                src={"/images/404.png"}
                alt='404 not found'
                height={1000}
                width={1000}
                className='max-w-xl w-full  object-center object-cover'
            />

            <div className='flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-start gap-4 bg-black/5 p-3 md:p-4 lg:p-6 rounded-2xl border-2 border-black/25'>
                <h1 className='font-extrabold text-[85px] md:text-[100px] lg:text-[120px] animate-pulse'>404</h1>
                <h2 className='text-4xl md:text-5xl lg:text-6xl font-semibold'>Oops! Page route not found.</h2>
                <p className='font-sm md:font-base lg:font-lg text-neutral-800 font-merriweather'>The article you&apos;re looking for couldn't be found. But don&apos;t worry—there are plenty of fascinating stories waiting to be discovered.</p>
                <Link href={"/"}>
                    <HoverBorderGradient className='shadow-2xl shadow-black inset-shadow-2xs'>Back to Home</HoverBorderGradient>
                </Link>
            </div>
        </MaxWidthContainer>
    </div>
  )
}

export default NotFound