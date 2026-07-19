import InsightCardAI from '@/components/ai/InsightCardAI'
import Footer from '@/components/common/Footer'
import RecentActivityCard from '@/components/dashboard/RecentActivityCard'
import { Button } from '@/components/ui/button'
import SeparatorBlack from '@/components/ui/separator-black'
import React from 'react'
import { formatDateTime } from '@/lib/utils'
import { HiPlus } from "react-icons/hi"

// Stats
const userStatsCards = [
  { statsName: "Total Reads", count: "142.8k", analytics: "12.5% vs last month", analyticsSentiment: "positive" },
  { statsName: "Active Blogs", count: "35", analytics: null, analyticsSentiment: "neutral" },
  { statsName: "Podcast listeners", count: "9.4k", analytics: "-8.6% vs last month", analyticsSentiment: "negative" },
]

const page = () => {
  return (
    <div className='relative flex flex-col px-4 md:px-6 py-5 gap-5 md:gap-8 lg:gap-10'>
      <div className='flex flex-row gap-5 justify-between items-start bg-linear-to-bl from-[#212121] via-[#0A0A0A] to-[#121212] p-3 md:p-5 rounded-lg md:rounded-xl'>
        <div className='flex flex-col text-start gap-y-2'>
          <p className='text-sm md:text-base font-medium text-neutral-400'>Welcome Back,</p>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight font-merriweather bg-linear-to-tl from-[#FFFFFF] via-[#FAFAFA] to-[#F2F2F2] text-transparent bg-clip-text'>Danish</h2>
        </div>

        <div className='flex flex-col justify-end items-end gap-2'>
          <p className='text-sm md:text-base font-medium text-neutral-400'>{formatDateTime(new Date())}</p>
          <button className='bg-white/85 hover:bg-white/95 transition-all ease-in-out duration-200 font-medium text-sm sm:text-base md:text-lg lg:text-xl tracking-tight py-2 sm:py-3 md:py-4 px-5 sm:px-7 md:px-9 text-black/90 flex flex-row justify-center items-center gap-3'>
            <HiPlus />
            Add New
          </button>
        </div>
      </div>
      <SeparatorBlack />


      <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4'>
        {userStatsCards.map((userStats, index) => (
          <div
            key={index}
            className='p-4 md:p-6 lg:-8 border-2 border-black flex flex-col gap-3'>
            <p className='text-xs md:text-sm lg:text-base text-neutral-800 uppercase font-medium tracking-tight'> {userStats.statsName} </p>
            <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight'>{userStats.count}</h2>
            <p className={`text-xs md:text-sm lg:text-base font-semibold 
              ${userStats.analyticsSentiment === "positive" ? ("text-green-700") : ("text-red-600")}`}> {userStats.analytics}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Activity and AI Report */}
      <div className='mt-7 md:mt-8 flex flex-col lg:flex-row gap-8'>
        {/* Recent Activity */}
        <div className='max-w-5xl w-full'>
          <div className='w-full flex flex-row justify-between items-center'>
            <h1 className='font-semibold tracking-tight font-merriweather leading-tight text-2xl md:text-3xl lg:text-4xl max-w-2xl w-full' style={{ wordSpacing: '4px', letterSpacing: '0.5px' }}>
              Recent Activity
            </h1>
            <Button>Browse All activity</Button>
          </div>
          <SeparatorBlack className='mt-2' />

          <div className='grid grid-cols-1 gap-3 md:gap-4 mt-5'>
            <RecentActivityCard />
            <RecentActivityCard />
            <RecentActivityCard />
          </div>
        </div>

        {/* AI report */}
        <div className='max-w-full lg:max-w-md w-full flex flex-col gap-5'>
          <InsightCardAI />
        </div>
      </div>
    </div>
  )
}

export default page