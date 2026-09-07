'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HugeiconsIcon } from '@hugeicons/react'
import { CircleSmallIcon } from '@hugeicons/core-free-icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'

interface EditorPost {
    id: string
    title: string
    category: string
    readTime: number
    slug: string
    banners: string[]
    author: {
        name: string
    } | null
}

interface EditorsChoiceSliderProps {
    posts: EditorPost[]
}

const EditorsChoiceSlider = ({ posts }: EditorsChoiceSliderProps) => {
    if (!posts || posts.length === 0) return null

    return (
        <div className='w-full mt-8'>
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect='fade'
                fadeEffect={{ crossFade: true }}
                slidesPerView={1}
                loop={posts.length > 1}
                autoplay={{
                    delay: 5000, 
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed={800}
                className='w-full'
            >
                {posts.map((post, index) => {
                    const rawImage = post.banners?.[0]
                    const image = rawImage && rawImage.trim() !== "" ? rawImage : "/images/zhang-ziyu-zxQgUCk4B5A-unsplash.jpg"
                    const authorName = post.author?.name || "Danish Khan"
                    const formattedIndex = String(index + 1).padStart(2, '0')

                    return (
                        <SwiperSlide key={post.id}>
                            <Link href={post.slug ? `/blog/${post.slug}` : "/blog"} className='border border-black p-2.5 flex flex-col gap-y-2 w-full group  bg-white'>
                                <div className='w-full flex flex-row justify-between items-center gap-x-2'>
                                    <div className='flex flex-row justify-center items-center'>
                                        <HugeiconsIcon icon={CircleSmallIcon} size={14} />
                                        <HugeiconsIcon icon={CircleSmallIcon} size={14} className='-ml-0.5' />
                                        <HugeiconsIcon icon={CircleSmallIcon} size={14} className='-ml-0.5' />
                                    </div>
                                    <p className='text-[10px] md:text-xs font-normal uppercase'> {`[No. ${formattedIndex}]`} </p>
                                </div>

                                <div className='relative'>
                                    <Image
                                        src={image}
                                        alt={post.title}
                                        height={1000}
                                        width={1000}
                                        unoptimized={image.startsWith('http')}
                                        className='w-full max-h-130 h-full object-cover object-center grayscale-25 group-hover:grayscale-100 group-active:grayscale-100 group-focus-within:grayscale-100 border border-black'
                                    />
                                    <div className='absolute top-6 left-6 sm:top-8 sm:left-8 md:top-10 md:left-10 lg:top-12 lg:right-12 flex flex-col gap-2 sm:gap-2.5 md:gap-3.5 lg:gap-5 max-w-4xl'>
                                        <span className='text-white font-medium text-[10px] md:text-xs uppercase drop-shadow-sm'> {post.category} </span>
                                        <div className='flex flex-col gap-1 bg-transparent'>
                                            <span className='self-start text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-white font-medium font-merriweather group-hover:bg-fuchsia-300 group-active:bg-fuchsia-300 group-focus-within:bg-fuchsia-300 px-2' style={{ wordSpacing: "8px" }}>
                                                {post.title}
                                            </span>
                                        </div>
                                        <p className='text-white font-medium text-[10px] md:text-xs drop-shadow-sm'>by <span className='hover:font-semibold hover:underline transition-all ease-in duration-200'> {authorName} </span> | {post.readTime} min read</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default EditorsChoiceSlider