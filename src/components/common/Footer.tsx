"use client"

import MaxWidthContainer from '@/styles/MaxWidthContainer'
import React, { useState } from 'react'
import SeparatorMain from '../ui/separator-black'
import Image from 'next/image'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Separator } from '../ui/separator'
import SeparatorWhite from '../ui/separator-white'

const Footer = () => {

    // Footer Navigation links
    const footerNavlinks = [
        {
            title: "Pages", links: [
                { name: "Home", urlHref: "/" },
                { name: "Blog", urlHref: "/blog" },
                { name: "Authors", urlHref: "/podcast" },
                { name: "Categories", urlHref: "/about" },
                { name: "Podcast", urlHref: "/contact" },
                { name: "About/Contact", urlHref: "/contact" },
                { name: "Subscribe", urlHref: "/contact" },
            ]
        },
        {
            title: "Categories", links: [
                { name: "Finance", urlHref: "/" },
                { name: "Health", urlHref: "/" },
                { name: "Business", urlHref: "/" },
                { name: "Food", urlHref: "/" },
                { name: "Travel", urlHref: "/" },
                { name: "Tech", urlHref: "/" },
                { name: "Lifestyle", urlHref: "/" },
            ]
        },
        {
            title: "Socials", links: [
                { name: "Facebook", urlHref: "/" },
                { name: "Twitter/X", urlHref: "/" },
                { name: "LinkedIn", urlHref: "/" },
                { name: "Instagram", urlHref: "/" },
                { name: "Youtube", urlHref: "/" },
                { name: "Pinterest", urlHref: "/" },
                { name: "Discord", urlHref: "/" },
            ]
        },
    ]

    return (
        <footer className='bg-black py-8 sm:py-10 md:py-16 lg:py-18 text-white'>
            <MaxWidthContainer className='flex flex-col justify-start items-start gap-8'>
                <SeparatorWhite className='w-full' />

                <div className='flex flex-col lg:flex-row justify-between items-start w-full gap-10'>
                    <div className='flex flex-col justify-start items-start gap-y-2.5'>
                        <Image
                            src={"/images/logo-secondary.svg"}
                            alt='reado.ai'
                            height={1000}
                            width={1000}
                            className='h-fit w-fit'
                        />
                        <p className='text-white font-playfairDisplay text-base lg:text-lg mt-3'>Never miss an update</p>
                        <div className='border-2 border-white/15 rounded-md px-5 py-2 w-full flex flex-row justify-between items-center gap-x-1'>
                            <input type="text" placeholder='Subscribe your email' className='placeholder:text-neutral-500 sm:placeholder:text-sm md:placeholder:text-base border-none outline-none text-white' />
                            <Button className='uppercase bg-white/90 text-black hover:bg-white/75 cursor-pointer font-semibold'>Subscribe</Button>
                        </div>
                        <p className='text-[10px] sm:text-xs md:text-sm font-medium text-white/60'>By subscribing to Reado&apos;s newsletter, you agree to our <Link href={"/privacy-policy"} className='text-white/85 hover:text-white/75 transition-colors ease-out duration-200'>Privacy Policy</Link>.</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-6 gap-x-24'>
                        {footerNavlinks.map((item, index) => (
                            <div className='flex flex-col justify-start items-start' key={index}>
                                <h2 className='font-semibold font-playfairDisplay text-base md:text-lg'>{item.title}</h2>
                                <ul className='flex flex-row flex-wrap lg:flex-col justify-start items-start gap-x-5 gap-y-2.5 mt-4'>
                                    {item.links.map((link, index) => (
                                        <Link href={link.urlHref} key={index}>
                                            <li className='text-white/60 uppercase text-xs md:text-[13px] hover:text-white/80 transition-all ease-in duration-200'>{link.name}</li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <SeparatorWhite className='w-full' />

                 <div className='w-full flex flex-col justify-center items-center md:flex-row md:justify-between text-xs md:text-sm'>
                    <p className='text-neutral-400'>Developed by <Link href={"/"} className='font-semibold text-neutral-300 hover:scale-105 transition-all ease-in duration-200 hover:text-white hover:underline'>Danish</Link></p>
                    <p className='text-neutral-400'>&copy; 2026 Reado. All Rights Reserved.</p>
                </div>
            </MaxWidthContainer>

        </footer>
    )
}

export default Footer