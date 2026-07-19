import React from 'react'
import Image from 'next/image'
import { RiEdit2Fill, RiDeleteBin6Fill } from "react-icons/ri"

const RecentActivityCard = () => {
  return (
    <div className='relative flex flex-row justify-between items-center border-2 border-black'>
      <div className='absolute top-0 left-0 max-w-28 md:max-w-36 h-auto'>
        <Image
          src={"/images/featured-image.png"}
          alt='source-image'
          height={1000}
          width={1000}
          className='h-full w-full border-r-2 border-b-2 border-black'
        />
      </div>
      <div className='w-full p-4 sm:p-6 md:p-8 flex flex-col gap-1.5 md:gap-2'>
        <div className='ml-33.5 flex flex-row justify-between items-center'>
          <div className='text-xs md:text-sm font-medium text-white bg-black/80 py-1 px-4'>TECH</div>
          <span className='text-xs md:text-sm font-medium text-neutral-500'>2 hours ago</span>
        </div>

        <h1 className='mt-10 md:mt-12 font-medium text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight font-merriweather'>Best productive hacks for creative freelancers today</h1>

        <p className='text-xs md:text-sm lg:text-base leading-snug text-neutral-700 line-clamp-2'>
          Creative freelancers face constant pressure to deliver high quality work while managing deadlines, communication, and personal time. Productivity plays a major role in staying consistent and competitive in this growing industry.
          The ability to focus, organize projects, and manage energy levels can directly impact earnings and professional reputation. When workflows are structured, creativity becomes more enjoyable and sustainable.
        </p>

        <div className='flex flex-row items-center gap-x-5 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 mt-5'>
          {/* Edit Button */}
          <div className='text-xs md:text-sm lg:text-base font-medium py-1.5 md:py-2 px-4 md:px-6 border border-black flex flex-row justify-center items-center gap-3 hover:bg-black/90 hover:text-white/90 transition-all ease-in-out duration-200 active:bg-black/90 active:text-white/90 focus:bg-black/90 focus:text-white/90'> <RiEdit2Fill /> Edit Draft</div>
          {/* Delete Button */}
          <div className='text-xs md:text-sm lg:text-base font-medium py-1.5 md:py-2 px-4 md:px-6 border border-red-800 flex flex-row justify-center items-center gap-3 hover:bg-red-700 hover:text-white/90 transition-all ease-in-out duration-200 active:bg-red-700 active:text-white/90 focus:bg-red-700 focus:text-white/90 '> <RiDeleteBin6Fill /> Delete</div>
        </div>
      </div>
    </div>
  )
}

export default RecentActivityCard