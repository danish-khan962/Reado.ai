"use client"

import AuthorProfileCard from '@/components/author/AuthorProfileCard'
import CommonBlogCard from '@/components/common/CommonBlogCard'
import PodcastCard from '@/components/common/PodcastCard'
import {
  Select, SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import SeparatorBlack from '@/components/ui/separator-black'
import MaxWidthContainer from '@/styles/MaxWidthContainer'
import React, { useState } from 'react'

const page = () => {

  const [activeTab, setActiveTab] = useState<"blogs" | "podcasts">("blogs")

  return (
    <div className='w-full relative pb-8 sm:pb-10 md:pb-12 lg:pb-14'>
      <MaxWidthContainer className='flex flex-col lg:flex-row gap-20 items-start'>
        <AuthorProfileCard className='lg:sticky top-20 shrink-0' />
        <div className='flex flex-col'>
          <div className='flex flex-row justify-between items-center'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold font-playfairDisplay'>All posts</h1>
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
          <div className="flex flex-row gap-5 md:gap-8 lg:gap-12 mt-8 mb-4">
            <button
              onClick={() => setActiveTab("blogs")}
              className={`font-semibold ${activeTab === "blogs"
                ? "text-black border-b-2 border-black"
                : "text-neutral-500"
                }`}
            >
              Blogs
            </button>

            <button
              onClick={() => setActiveTab("podcasts")}
              className={`font-semibold ${activeTab === "podcasts"
                ? "text-black border-b-2 border-black"
                : "text-neutral-500"
                }`}
            >
              Podcasts
            </button>
          </div>
          <div className="mt-4 md:mt-6 lg:max-h-[80vh] lg:overflow-y-auto lg:pr-2">
            {activeTab === "blogs" ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
                <CommonBlogCard />
                <CommonBlogCard />
                <CommonBlogCard />
                <CommonBlogCard />
                <CommonBlogCard />
                <CommonBlogCard />
                <CommonBlogCard />
                <CommonBlogCard />
                <CommonBlogCard />
                <CommonBlogCard />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3">
                <PodcastCard />
                <PodcastCard />
                <PodcastCard />
                <PodcastCard />
              </div>
            )}
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  )
}

export default page