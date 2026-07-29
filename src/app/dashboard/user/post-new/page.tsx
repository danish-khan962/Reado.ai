"use client"

import SeparatorBlack from '@/components/ui/separator-black'
import SeparatorWhite from '@/components/ui/separator-white'
import React, { useState } from 'react'
import { LuUpload } from 'react-icons/lu'
import { GrCloudUpload } from 'react-icons/gr'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { IoSparkles } from "react-icons/io5"
import { AiTwotoneClockCircle } from 'react-icons/ai'
import Image from 'next/image'
import { Airplane01Icon, Book02Icon, BorderFullIcon, Briefcase01Icon, HealthIcon, Home01Icon, MoneyBag02Icon, Restaurant01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Button } from '@/components/ui/button'
import MarkdownEditor from '@/components/markdown/MarkdownEditor'
import PromptBox from '@/components/ai/PromptBox'

const postCategories = [
  { name: "All", icon: BorderFullIcon },
  { name: "Finance", icon: MoneyBag02Icon },
  { name: "Health", icon: HealthIcon },
  { name: "Business", icon: Briefcase01Icon },
  { name: "Food", icon: Restaurant01Icon },
  { name: "Travel", icon: Airplane01Icon },
  { name: "Lifestyle", icon: Home01Icon },
  { name: "Education", icon: Book02Icon },
];


const page = () => {

  const [markdown, setMarkdown] = useState("");
  return (
    <form className='relative flex flex-col px-4 md:px-6 py-5 gap-5 md:gap-8 lg:gap-10'>
      <div className='flex flex-row justify-between items-center'>
        <h1 className='font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfairDisplay'>Create New Story</h1>
        {/* Upload Post button */}
        <button className='flex flex-row gap-2 justify-center items-center bg-linear-to-bl from-[#212121] via-[#2A2A2A] to-[#0A0A0A] text-white/90 font-semibold py-2 px-5 text-sm md:text-base lg:text-lg hover:bg-linear-to-bl hover:from-[#000000] hover:via-[#121212] hover:to-[#0A0A0A]'><LuUpload />  Post</button>
      </div>

      <SeparatorBlack />

      <div className='w-full flex flex-col lg:flex-row gap-12'>
        {/* First form user-input */}
        <div className='w-full flex flex-col gap-5 md:gap-8 lg:gap-10'>
          {/* Post Title */}
          <input type="text" placeholder='Enter story title' className='pt-5 placeholder:text-2xl placeholder:sm:text-3xl placeholder:md:text-4xl placeholder:lg:text-5xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl outline-none border-b-2 border-neutral-800 font-merriweather font-bold text-wrap max-w-full w-full' />

          {/* Excerpt */}
          <textarea placeholder='Enter your excerpt here...' className='w-full outline-none border-2 border-black p-2 resize-none'></textarea>

          {/* Images/Banner set */}
          <div className='bg-black/90 text-white/95 p-4 md:p-6 lg:p-8'>
            <p className='text-white font-semibold font-merriweather text-lg md:text-xl'>Add story visuals</p>
            <SeparatorWhite className='py-2' />
            {/* Drag and Drop images */}
            <div className='w-full bg-black/50 border-2 border-dashed border-neutral-500 hover:border-white/95 rounded-xl mt-5 hover:bg-black/25 transition-all ease-in-out duration-200 flex flex-col justify-center items-center py-14 sm:py-20 md:py-24 lg:py-28 text-center gap-y-5'>
              <GrCloudUpload className='text-2xl md:text-3xl' />
              <p className='font-medium text-xs md:text-sm lg:text-base tracking-tight text-neutral-400'>Drag and drop banner images or <span className='hover:font-semibold underline text-white'>Browse</span></p>
              <span className='font-normal text-xs lg:text-sm text-neutral-500'>Recommened size: 1920x180px (.jpg, .png, .webp)</span>
            </div>

            {/* Uploaded images preview */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 md:mt-14'>
              <div className='relative w-full'>
                <Image
                  src={"/images/zhang-ziyu-zxQgUCk4B5A-unsplash.jpg"}
                  alt='image-set'
                  height={1000}
                  width={1000}
                  className='h-full w-full rounded-2xl md:rounded-3xl'
                />
                <RiDeleteBin6Line
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl text-white bg-black/70 hover:bg-black/90 transition-all ease-in-out duration-200 rounded-full p-2 cursor-pointer"
                />
              </div>
              <div className='relative w-full'>
                <Image
                  src={"/images/zhang-ziyu-zxQgUCk4B5A-unsplash.jpg"}
                  alt='image-set'
                  height={1000}
                  width={1000}
                  className='h-full w-full rounded-2xl md:rounded-3xl'
                />
                <RiDeleteBin6Line
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl text-white bg-black/70 hover:bg-black/90 transition-all ease-in-out duration-200 rounded-full p-2 cursor-pointer"
                />
              </div>
              <div className='relative w-full'>
                <Image
                  src={"/images/zhang-ziyu-zxQgUCk4B5A-unsplash.jpg"}
                  alt='image-set'
                  height={1000}
                  width={1000}
                  className='h-full w-full rounded-2xl md:rounded-3xl'
                />
                <RiDeleteBin6Line
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl text-white bg-black/70 hover:bg-black/90 transition-all ease-in-out duration-200 rounded-full p-2 cursor-pointer"
                />
              </div>
              <div className='relative w-full'>
                <Image
                  src={"/images/zhang-ziyu-zxQgUCk4B5A-unsplash.jpg"}
                  alt='image-set'
                  height={1000}
                  width={1000}
                  className='h-full w-full rounded-2xl md:rounded-3xl'
                />
                <RiDeleteBin6Line
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl text-white bg-black/70 hover:bg-black/90 transition-all ease-in-out duration-200 rounded-full p-2 cursor-pointer"
                />
              </div>
            </div>

          </div>

          {/* Markdown text-content */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 min-h-100 overflow-hidden">
            <MarkdownEditor
              className="dark-theme"
              markdown={markdown}
              onChange={setMarkdown}
              placeholder="Begin writing your story here..."
            />
          </div>
        </div>

        {/* Second form AI data to post */}
        <div className='flex flex-col max-w-full lg:max-w-sm w-full gap-y-5 sm:gap-y-6 md:gap-y-7 lg:gap-y-8'>
          {/* Category card */}
          <div className='flex flex-col gap-3 bg-linear-to-bl from-[#121212] via-[#0A0A0A] to-[#212121] rounded-xl p-3 sm:p-4 md:p-5 lg:p-5.5'>
            <span className='text-white font-semibold text-lg md:text-xl lg:text-2xl font-playfairDisplay'>Category</span>
            <SeparatorWhite className='mb-3' />
            <div className='grid grid-cols-3 md:grid-cols-3 gap-2 sm:gap-3 md:gap-3.5'>
              {postCategories.map((postOption, index) => (
                <Button
                  className='cursor-pointer h-8 md:h-10 hover:rounded-full transition-all ease-in-out duration-200 border-white/80'
                  key={index}
                  size={'lg'}>
                  <div className='bg-white text-black rounded-full p-0.5 md:p-1 group-hover:bg-white/85 transition-all ease-in duration-200'>
                    <HugeiconsIcon icon={postOption.icon} size={12} />
                  </div>
                  <p className="font-semibold uppercase text-[9px] sm:text-[10.5px] md:text-xs group-hover:text-white/85 transition-all ease-in duration-200">
                    {postOption.name}
                  </p>
                </Button>
              ))}
            </div>
            <p className='text-neutral-400 tracking-tight leading-snug italic text-xs md:text-sm mt-5'><span className='font-medium font-playfairDisplay text-lg text-neutral-300 underline'>Note:</span> Reado's Artificial Intelligence(AI) model automatically selects the best suitable tag based on the context of your post's content. However, you can change the tag accordingly if you want to.</p>
          </div>

          {/* Estimated Read time */}
          <div className='flex flex-col gap-3 bg-linear-to-bl from-[#121212] via-[#0A0A0A] to-[#212121] rounded-xl p-3 sm:p-4 md:p-5 lg:p-5.5'>
            <span className='text-white font-semibold text-lg md:text-xl lg:text-2xl font-playfairDisplay'>Estimated Read Time</span>
            <SeparatorWhite className='mb-3' />
            <div className='flex flex-row justify-around items-center gap-5'>
              <span className='font-medium text-neutral-500 flex flex-row justify-center items-center gap-2'>AI calculated ERT: <AiTwotoneClockCircle className='text-lg text-neutral-300' /> </span>
              <div className='relative font-semibold font-merriweather text-lg sm:text-xl md:text-2xl text-white/90 bg-white/5 py-2 px-5 border-2 border-white/15'>
                5 min
                <IoSparkles className='text-white absolute -top-3 -right-3' />
              </div>
            </div>
            <p className='text-neutral-400 tracking-tight leading-snug italic text-xs md:text-sm mt-5'><span className='font-medium font-playfairDisplay text-lg text-neutral-300 underline'>Note:</span> Reado's Artificial Intelligence(AI) model automatically selects the best suitable tag based on the context of your post's content. However, you can change the tag accordingly if you want to.</p>
          </div>
        </div>
      </div>

      {/* <PromptBox className='fixed bottom-5' /> */}
    </form>
  )
}

export default page