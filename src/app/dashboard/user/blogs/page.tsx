import RecentActivityCard from '@/components/dashboard/RecentActivityCard'
import SeparatorBlack from '@/components/ui/separator-black'
import React from 'react'
import {
  Select, SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const BlogsPage = () => {
  return (
    <div className='relative flex flex-col px-4 md:px-6 py-5 gap-5 md:gap-8 lg:gap-10'>
      <div className='w-full'>
        <div className='w-full flex flex-row justify-between items-center'>
          <h1 className='font-semibold tracking-tight font-playfairDisplay leading-tight text-2xl md:text-3xl lg:text-4xl max-w-2xl w-full' style={{ wordSpacing: '4px', letterSpacing: '0.5px' }}>
            All Blogs
          </h1>

          <Select>
            <SelectTrigger className="w-full max-w-48">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sort</SelectLabel>
                <SelectItem value="apple">Recent Posts</SelectItem>
                <SelectItem value="banana">Older Posts</SelectItem>
                <SelectItem value="blueberry">Most Popular</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <SeparatorBlack className='my-5 sm:my-6 md:my-8 lg:my-10' />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-5'>
          <RecentActivityCard />
          <RecentActivityCard />
          <RecentActivityCard />
          <RecentActivityCard />
          <RecentActivityCard />
          <RecentActivityCard />
          <RecentActivityCard />
          <RecentActivityCard />
        </div>
      </div>
    </div>
  )
}

export default BlogsPage