"use client"

import PaginationBlock from '@/components/blog/PaginationBlock'
import { Separator } from '@/components/ui/separator'
import SeparatorBlack from '@/components/ui/separator-black'
import MaxWidthContainer from '@/styles/MaxWidthContainer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLink, FaFacebook, FaLinkedin, FaReddit, FaWhatsapp, FaTwitter } from 'react-icons/fa'
import { TbBrandLinkedinFilled, TbBrandFacebookFilled, TbBrandXFilled } from 'react-icons/tb'

const shareSocialsIcons = [
    { name: "copy link", icon: FaLink },
    { name: "Facebook", icon: FaFacebook },
    { name: "LinkedIn", icon: FaLinkedin },
    { name: "RedditIcon", icon: FaReddit },
    { name: "Whatsapp", icon: FaWhatsapp },
    { name: "X", icon: FaTwitter }
]

// Fake data for Sidebar Blog links
const sideBarBlogLinks = [
    { title: "How podcasts change the way we learn", author: "Jacob Anderson", minRead: 7 },
    { title: "How to create a realistic monthly budget", author: "William Parker", minRead: 4 },
]

const page = () => {
    return (
        <div className='w-full relative pb-20 sm:pb-22 md:pb-24 lg:pb-28'>
            <MaxWidthContainer>
                <div className='flex flex-col justify-center items-center gap-y-5 sm:gap-y-6 md:gap-y-7 lg:gap-y-8 text-center'>
                    <p className={'text-xs md:text-sm font-medium capitalise text-neutral-700'}> Home {">"} All blogs </p>
                    <div className='flex flex-col gap-2'>
                        <h1 className='max-w-5xl w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-merriweather leading-snug'>
                            Best productivity hacks for creative freelancers today
                        </h1>
                        <p className='text-neutral-700 font-medium text-sm md:text-base'>Smart tools and routines to help freelancers stay organized, inspired, and productive.</p>
                    </div>
                    <p className='text-neutral-700 text-sm'>by <Link href={"#author"} className='text-black font-medium hover:bg-emerald-300'> Danish Khan </Link> | 5 min read </p>
                </div>

                <div className='flex flex-col lg:flex-row gap-y-24 gap-x-20 justify-between mt-12 sm:mt-14 md:mt-16 lg:mt-20'>
                    {/* Main Blog Full with Pagination */}
                    <div className='w-full max-w-full lg:max-w-5xl flex flex-col gap-y-5 md:gap-y-10'>
                        <Image
                            src={"/images/featured-image.png"}
                            alt='featured.img'
                            height={1000}
                            width={1000}
                            className={'w-full border border-black group-hover:grayscale-100 group-active:grayscale-100 group-focus-within:grayscale-100 aspect-auto md:aspect-video'}
                        />

                        {/*  Content of Blog */}
                        <div className='flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12'>
                            <div className='flex flex-col gap-y-2'>
                                <h2 className='font-merriweather font-medium text-xl md:text-2xl lg:text-3xl'>Introduction</h2>
                                <p className='text-sm md:text-base text-neutral-700'>Creative freelancers face constant pressure to deliver high quality work while managing deadlines, communication, and personal time. Productivity plays a major role in staying consistent and competitive in this growing industry. The ability to focus, organize projects, and manage energy levels can directly impact earnings and professional reputation. When workflows are structured, creativity becomes more enjoyable and sustainable.Freelancers who adopt smart systems are able to finish tasks faster, take on more opportunities, and maintain a healthier balance between work and life.</p>
                            </div>

                            <div className='flex flex-col gap-y-2'>
                                <h2 className='font-merriweather font-medium text-xl md:text-2xl lg:text-3xl'>Why smart routines improve efficiency</h2>
                                <p className='text-sm md:text-base text-neutral-700'>Freelancers need flexibility, but structure is what keeps projects moving. Creating a daily routine helps avoid distractions and improves concentration. Planning tasks in advance and setting priorities keeps workload under control. This leads to a more focused mindset and better results in less time.</p>
                            </div>

                            <div className='flex flex-col gap-y-2'>
                                <h2 className='font-merriweather font-medium text-xl md:text-2xl lg:text-3xl'>Tools that enhance creativity and workflow</h2>
                                <p className='text-sm md:text-base text-neutral-700'>Digital tools make it easier for freelancers to stay organized and productive. Simple systems for tracking work, storing ideas, and scheduling tasks remove confusion and reduce stress. With the right tools, freelancers can simplify complex work, collaborate smoothly, and protect their creative energy for what matters most.</p>
                            </div>

                            <div className='flex flex-col gap-y-2'>
                                <h2 className='font-merriweather font-medium text-xl md:text-2xl lg:text-3xl'>Conclusion</h2>
                                <p className='text-sm md:text-base text-neutral-700'>Productivity is essential for creative freelancers who want to grow in a competitive market. Smart routines, helpful tools, and healthy habits make work more organized and enjoyable. By improving focus and structure, freelancers can deliver better outcomes and take on new opportunities with confidence. Productivity is not just about doing more. It is about working smarter and creating a sustainable path for long term success.</p>
                            </div>
                        </div>
                        <SeparatorBlack />

                        {/*  Paginations -> Previous and Next Blogs */}
                        <PaginationBlock />
                    </div>


                    {/* Sidebar Extras */}
                    <div className='flex flex-col w-full lg:max-w-sm gap-y-6 sm:gap-y-7 md:gap-y-8 lg:gap-y-10'>
                        {/* Share Post */}
                        <div className='flex flex-row justify-between items-center'>
                            <p className='text-xl md:text-2xl font-merriweather'>Share post</p>
                            <div className='flex flex-row gap-3 justify-center items-center'>
                                {shareSocialsIcons.map((item, index) => {
                                    const Icon = item.icon
                                    return (
                                        <Icon
                                            key={index}
                                            className="w-4.5 h-4.5 md:w-5 md:h-5 cursor-pointer hover:scale-115 transition-all ease-in-out duration-200"
                                        />
                                    )
                                })}
                            </div>
                        </div>
                        <Separator className='bg-neutral-800 w-screen' />

                        {/* Author Information */}
                        <div className='flex flex-col gap-3.5'>
                            <p className='text-xl md:text-2xl font-merriweather'>Author&apos;s info</p>
                            <div className='flex flex-row gap-5'>
                                <Image
                                    src={"/images/author-new.jpg"}
                                    alt="author"
                                    height={1000}
                                    width={1000}
                                    loading='lazy'
                                    className='h-full w-full max-w-20 md:max-w-22 lg:max-w-24 aspect-square border border-black'
                                />
                                <div className='flex flex-col justify-between items-stretch'>
                                    <div className='flex flex-col'>
                                        <p className='text-base md:text-lg lg:text-xl font-medium font-merriweather'> <Link href={"#author"} className='hover:bg-emerald-300'>Danish Khan</Link></p>
                                        <p className='text-[10px] md:text-xs font-medium text-neutral-700'>Founder & Editor-in-chief</p>
                                    </div>
                                    <div className='flex flex-row justify-start items-start gap-2'>
                                        <TbBrandLinkedinFilled className='h-5 w-5 md:h-6 md:w-6 hover:scale-105 hover:-rotate-20 transition-all ease-in duration-200' />
                                        <TbBrandFacebookFilled className='h-5 w-5 md:h-6 md:w-6 hover:scale-105 hover:-translate-y-1 transition-all ease-in duration-200' />
                                        <TbBrandXFilled className='h-5 w-5 md:h-6 md:w-6 hover:scale-105 hover:rotate-20 transition-all ease-in duration-200' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Separator className='bg-neutral-800 w-screen' />

                        {/* Editor's choice */}
                        <div className='flex flex-col gap-3.5'>
                            <p className='text-xl md:text-2xl font-merriweather'>Editor&apos;s choice</p>
                            <div className='flex flex-row gap-5'>
                                <Link href={"/blog/slug"} className='h-full w-full max-w-32 sm:max-w-36 md:max-w-40 lg:max-w-44'>
                                    <Image
                                        src={"/images/zhang-ziyu-zxQgUCk4B5A-unsplash.jpg"}
                                        alt="author"
                                        height={1000}
                                        width={1000}
                                        loading='lazy'
                                        className='h-full w-full max-w-32 sm:max-w-36 md:max-w-40 lg:max-w-44 aspect-video border border-black'
                                    />
                                </Link>
                                <div className='flex flex-col justify-between items-stretch gap-y-1.5'>
                                    <div className='flex flex-col'>
                                        <p className='text-base md:text-lg lg:text-xl font-medium font-merriweather line-clamp-2'> <Link href={"/blog/slug"} className='hover:bg-emerald-300'>How remote work is reshaping modern lifestyles</Link></p>
                                    </div>
                                    <p className='text-[10px] md:text-xs font-medium text-neutral-700'>by <Link href={"#author"} className='hover:underline font-medium text-black'>Danish Khan</Link> | 5 min read</p>
                                </div>
                            </div>
                        </div>
                        <Separator className='bg-neutral-800 w-screen' />


                        {/* Recent Posts */}
                        <div className='flex flex-col gap-3.5'>
                            <p className='text-xl md:text-2xl font-merriweather'>Recent Posts</p>
                            {sideBarBlogLinks.map((item, index) => (
                                <div className='flex flex-col justify-start items-start gap-y-2.5 group' key={index}>
                                    <Link href={"/blog/slug"}>
                                        <h2 className='text-base md:text-lg font-merriweather group-hover:bg-cyan-300 group-active:bg-cyan-300 group-focus-within:bg-cyan-300'>{item.title}</h2>
                                    </Link>
                                    <p className='text-[10px] md:text-xs'>by <span className='hover:font-semibold hover:underline transition-all ease-in duration-200'>{item.author}</span> | {item.minRead} min read</p>
                                    <Separator className='bg-neutral-600 w-screen' />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </MaxWidthContainer>
        </div>
    )
}

export default page