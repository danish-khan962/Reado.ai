import { Separator } from '@/components/ui/separator';
import SeparatorBlack from '@/components/ui/separator-black'
import SeparatorWhite from '@/components/ui/separator-white';
import Image from 'next/image';
import React from 'react'
import { MdOutlinePublishedWithChanges } from "react-icons/md";

// Stats
const DatabaseStats = [
  { statsName: "Registered Users", count: "1280", analytics: "12.5% vs last month", analyticsSentiment: "positive" },
  { statsName: "Total Published Blogs", count: "432", analytics: null, analyticsSentiment: "neutral" },
  { statsName: "Total Platform Reads", count: "109.6k", analytics: "8.6% vs last month", analyticsSentiment: "positive" },
]

const page = () => {
  return (
    <div className='p-4 sm:p-6 md:p-8 lg:p-10'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-merriweather tracking-tight'>Editor&apos;s Dashboard</h1>
      <p className='font-medium tracking-tight text-neutral-500 text-sm md:text-base lg:text-lg mt-2'>Manage homepage curations and platform stats.</p>
      <SeparatorBlack className='mt-4' />

      <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 py-8 md:py-10'>
        {DatabaseStats.map((dbStats, index) => (
          <div
            key={index}
            className='p-4 md:p-6 lg:-8 border-2 border-black flex flex-col gap-3'>
            <p className='text-xs md:text-sm lg:text-base text-neutral-800 uppercase font-medium tracking-tight'> {dbStats.statsName} </p>
            <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight'>{dbStats.count}</h2>
            <p className={`text-xs md:text-sm lg:text-base font-semibold 
              ${dbStats.analyticsSentiment === "positive" ? ("text-green-700") : ("text-red-600")}`}> {dbStats.analytics}
            </p>
          </div>
        ))}
      </div>


      <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {/* Featured Hero Post */}
        <div className='max-w-4xl w-full bg-linear-to-bl from-[#0A0A0A] via-[#212121] to-[#121212] text-white/90 p-3 sm:p-4 md:p-4 lg:p-5'>
          <div className='flex flex-row justify-between items-center gap-4'>
            <p className='font-semibold font-merriweather text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight'>Featured Hero Post</p>
            <button className='flex flex-row justify-between items-center gap-2 py-1 px-5 text-xs md:text-sm lg:text-base font-semibold bg-white text-black hover:scale-105 transition-all ease-in-out duration-200'>Change <MdOutlinePublishedWithChanges /></button>
          </div>
          <SeparatorWhite className='mt-2'/>

          <div className='relative'>
            <div className='relative w-full h-full mt-5 md:mt-6 lg:mt-7'>
              <Image
                src={"/images/featured-image.png"}
                alt=''
                height={1000}
                width={1000}
                className='w-full h-fit'
              />
            </div>

            <div className='absolute bottom-0 p-2 md:p-4 flex flex-col gap-1.5 md:gap-2 lg:gap-3 bg-black/30 backdrop-blur-xs w-full rounded-t-3xl'>
              {/* Tag */}
              <div className='flex flex-row items-center gap-4'>
                <span className='bg-black/30 py-0.5 px-6 border-black text-xs md:text-sm lg:text-base'> TECH </span>
                <span className='bg-black/30 py-0.5 px-6 border-black text-xs md:text-sm lg:text-base'> 5 min read </span>
              </div>
              {/* Title */}
              <h1 className='font-medium text-xl md:text-2xl lg:text-3xl tracking-tight leading-tight font-merriweather'>Best productive hacks for creative freelancers today</h1>
              {/* Author name */}
              <p className='text-sm lg:text-base text-white text-right'>By - <span className='font-playfairDisplay font-medium'>Danish Khan</span></p>
            </div>
          </div>
        </div>

        {/* Editor's Choice */}
        <div className='max-w-4xl w-full bg-linear-to-bl from-[#0A0A0A] via-[#212121] to-[#121212] text-white/90 p-3 sm:p-4 md:p-4 lg:p-5'>
          <div className='flex flex-row justify-between items-center gap-4'>
            <p className='font-semibold font-merriweather text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight'>Editor&apos;s Choice</p>
            <button className='flex flex-row justify-between items-center gap-2 py-1 px-5 text-xs md:text-sm lg:text-base font-semibold bg-white text-black hover:scale-105 transition-all ease-in-out duration-200'>Change <MdOutlinePublishedWithChanges /></button>
          </div>
          <SeparatorWhite className='mt-2'/>

          <div className='relative'>
            <div className='relative w-full h-full mt-5 md:mt-6 lg:mt-7'>
              <Image
                src={"/images/zhang-ziyu-zxQgUCk4B5A-unsplash.jpg"}
                alt=''
                height={1000}
                width={1000}
                className='w-full h-fit'
              />
            </div>

            <div className='absolute bottom-0 p-2 md:p-4 flex flex-col gap-1.5 md:gap-2 lg:gap-3 bg-black/30 backdrop-blur-xs w-full rounded-t-3xl'>
              {/* Tag */}
              <div className='flex flex-row items-center gap-4'>
                <span className='bg-black/30 py-0.5 px-6 border-black text-xs md:text-sm lg:text-base uppercase'> LIFESTYLE </span>
                <span className='bg-black/30 py-0.5 px-6 border-black text-xs md:text-sm lg:text-base'> 5 min read </span>
              </div>
              {/* Title */}
              <h1 className='font-medium text-xl md:text-2xl lg:text-3xl tracking-tight leading-tight font-merriweather'>How remote work is reshaping modern lifestyles</h1>
              {/* Author name */}
              <p className='text-sm lg:text-base text-white text-right'>By - <span className='font-playfairDisplay font-medium'>Danish Khan</span></p>
            </div>
          </div>
        </div>

        {/* Watch Section */}
        <div className='max-w-4xl w-full bg-linear-to-bl from-[#0A0A0A] via-[#212121] to-[#121212] text-white/90 p-3 sm:p-4 md:p-4 lg:p-5'>
           <div className='flex flex-row justify-between items-center gap-4'>
            <p className='font-semibold font-merriweather text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight'>Watch Section</p>
            <button className='flex flex-row justify-between items-center gap-2 py-1 px-5 text-xs md:text-sm lg:text-base font-semibold bg-white text-black hover:scale-105 transition-all ease-in-out duration-200'>Change <MdOutlinePublishedWithChanges /></button>
          </div>
          <SeparatorWhite className='mt-2' />

          <div className='grid grid-cols-1 gap-2 mt-8'>
            {/* 1st */}
            <div className='flex flex-row items-center gap-x-4'>
              <Image 
              src={"/images/emma-simpson-mNGaaLeWEp0-unsplash.jpg"}
              alt=''
              height={1000}
              width={1000}
              className='h-16 md:h-18 lg:h-20 w-auto'
              />
              <div className='flex flex-col leading-snug gap-1'>
                <h2 className='font-medium tracking-tight text-lg sm:text-xl md:text-2xl leading-tighter line-clamp-1'>Best productive hacks for creative freelancers today</h2>
                <span className='text-xs md:text-sm font-playfairDisplay font-semibold text-neutral-400'>Danish Khan</span>
              </div>
            </div>
            <Separator className='bg-white' />
            {/* 2nd */}
            <div className='flex flex-row items-center gap-x-4'>
              <Image 
              src={"/images/emma-simpson-mNGaaLeWEp0-unsplash.jpg"}
              alt=''
              height={1000}
              width={1000}
              className='h-16 md:h-18 lg:h-20 w-auto'
              />
              <div className='flex flex-col leading-snug gap-1'>
                <h2 className='font-medium tracking-tight text-lg sm:text-xl md:text-2xl leading-tighter line-clamp-1'>Best productive hacks for creative freelancers today</h2>
                <span className='text-xs md:text-sm font-playfairDisplay font-semibold text-neutral-400'>Danish Khan</span>
              </div>
            </div>
            <Separator className='bg-white' />
            {/* 3rd */}
            <div className='flex flex-row items-center gap-x-4'>
              <Image 
              src={"/images/emma-simpson-mNGaaLeWEp0-unsplash.jpg"}
              alt=''
              height={1000}
              width={1000}
              className='h-16 md:h-18 lg:h-20 w-auto'
              />
              <div className='flex flex-col leading-snug gap-1'>
                <h2 className='font-medium tracking-tight text-lg sm:text-xl md:text-2xl leading-tighter line-clamp-1'>Best productive hacks for creative freelancers today</h2>
                <span className='text-xs md:text-sm font-playfairDisplay font-semibold text-neutral-400'>Danish Khan</span>
              </div>
            </div>
            <Separator className='bg-white' />
            {/* 4rth */}
            <div className='flex flex-row items-center gap-x-4'>
              <Image 
              src={"/images/emma-simpson-mNGaaLeWEp0-unsplash.jpg"}
              alt=''
              height={1000}
              width={1000}
              className='h-16 md:h-18 lg:h-20 w-auto'
              />
              <div className='flex flex-col leading-snug gap-1'>
                <h2 className='font-medium tracking-tight text-lg sm:text-xl md:text-2xl leading-tighter line-clamp-1'>Best productive hacks for creative freelancers today</h2>
                <span className='text-xs md:text-sm font-playfairDisplay font-semibold text-neutral-400'>Danish Khan</span>
              </div>
            </div>
            <Separator className='bg-white' />
          </div>
        </div>

        {/* Discover Stories*/}
        <div className='max-w-4xl w-full bg-linear-to-bl from-[#0A0A0A] via-[#212121] to-[#121212] text-white/90 p-3 sm:p-4 md:p-4 lg:p-5'>
           <div className='flex flex-row justify-between items-center gap-4'>
            <p className='font-semibold font-merriweather text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight'>Discover Stories</p>
            <button className='flex flex-row justify-between items-center gap-2 py-1 px-5 text-xs md:text-sm lg:text-base font-semibold bg-white text-black hover:scale-105 transition-all ease-in-out duration-200'>Change <MdOutlinePublishedWithChanges /></button>
          </div>
          <SeparatorWhite className='mt-2' />

          <div className='grid grid-cols-1 gap-2 mt-8'>
            {/* 1st */}
            <div className='flex flex-row items-center gap-x-4'>
              <Image 
              src={"/images/emma-simpson-mNGaaLeWEp0-unsplash.jpg"}
              alt=''
              height={1000}
              width={1000}
              className='h-16 md:h-18 lg:h-20 w-auto'
              />
              <div className='flex flex-col leading-snug gap-1'>
                <h2 className='font-medium tracking-tight text-lg sm:text-xl md:text-2xl leading-tighter line-clamp-1'>Best productive hacks for creative freelancers today</h2>
                <span className='text-xs md:text-sm font-playfairDisplay font-semibold text-neutral-400'>Danish Khan</span>
              </div>
            </div>
            <Separator className='bg-white' />
            {/* 2nd */}
            <div className='flex flex-row items-center gap-x-4'>
              <Image 
              src={"/images/emma-simpson-mNGaaLeWEp0-unsplash.jpg"}
              alt=''
              height={1000}
              width={1000}
              className='h-16 md:h-18 lg:h-20 w-auto'
              />
              <div className='flex flex-col leading-snug gap-1'>
                <h2 className='font-medium tracking-tight text-lg sm:text-xl md:text-2xl leading-tighter line-clamp-1'>Best productive hacks for creative freelancers today</h2>
                <span className='text-xs md:text-sm font-playfairDisplay font-semibold text-neutral-400'>Danish Khan</span>
              </div>
            </div>
            <Separator className='bg-white' />
            {/* 3rd */}
            <div className='flex flex-row items-center gap-x-4'>
              <Image 
              src={"/images/emma-simpson-mNGaaLeWEp0-unsplash.jpg"}
              alt=''
              height={1000}
              width={1000}
              className='h-16 md:h-18 lg:h-20 w-auto'
              />
              <div className='flex flex-col leading-snug gap-1'>
                <h2 className='font-medium tracking-tight text-lg sm:text-xl md:text-2xl leading-tighter line-clamp-1'>Best productive hacks for creative freelancers today</h2>
                <span className='text-xs md:text-sm font-playfairDisplay font-semibold text-neutral-400'>Danish Khan</span>
              </div>
            </div>
            <Separator className='bg-white' />
            {/* 4rth */}
            <div className='flex flex-row items-center gap-x-4'>
              <Image 
              src={"/images/emma-simpson-mNGaaLeWEp0-unsplash.jpg"}
              alt=''
              height={1000}
              width={1000}
              className='h-16 md:h-18 lg:h-20 w-auto'
              />
              <div className='flex flex-col leading-snug gap-1'>
                <h2 className='font-medium tracking-tight text-lg sm:text-xl md:text-2xl leading-tighter line-clamp-1'>Best productive hacks for creative freelancers today</h2>
                <span className='text-xs md:text-sm font-playfairDisplay font-semibold text-neutral-400'>Danish Khan</span>
              </div>
            </div>
            <Separator className='bg-white' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page