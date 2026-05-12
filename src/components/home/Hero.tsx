"use client"

import MaxWidthContainer from '@/styles/MaxWidthContainer'
import Image from 'next/image'
import React, { useState } from 'react'
import { Separator } from '../ui/separator'
import Marquee from "react-fast-marquee"
import {
    MoneyBag02Icon,
    HealthIcon,
    Briefcase01Icon,
    Restaurant01Icon,
    Airplane01Icon,
    Home01Icon,
    Book02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from '@hugeicons/react'
import Link from 'next/link'

const Hero = () => {

    // Marquee Categories
    const categories = [
        { name: "Finance", icon: MoneyBag02Icon, urlHref: "/" },
        { name: "Health", icon: HealthIcon, urlHref: "/" },
        { name: "Business", icon: Briefcase01Icon, urlHref: "/" },
        { name: "Food", icon: Restaurant01Icon, urlHref: "/" },
        { name: "Travel", icon: Airplane01Icon, urlHref: "/" },
        { name: "Lifestyle", icon: Home01Icon, urlHref: "/" },
        { name: "Education", icon: Book02Icon, urlHref: "/" },
    ];

    return (
        <div className='py-5'>
            <MaxWidthContainer className='flex flex-col justify-between items-center gap-12 md:gap-14'>
                <Image
                    src={"/images/hero-icon.svg"}
                    alt='reado.ai'
                    height={1000}
                    width={1000}
                    className='w-full h-full'
                />

                {/* ⚡ CSS and Marquee Alignment needs to be fixed.... */}

                <div className="w-full py-2.5 sm:py-3 md:py-3.5 bg-black overflow-hidden flex items-center text-white">
                    <Marquee
                        speed={15}
                        gradient={true}
                        gradientColor="black"
                        gradientWidth={80}
                        autoFill
                        pauseOnHover={true}
                    >
                        <div className="flex items-center gap-10 sm:gap-12 md:gap-14 lg:gap-20 px-4">
                            {categories.map((category, index) => (
                                <div
                                    key={index}
                                    className='flex flex-row gap-10 sm:gap-12 md:gap-14 lg:gap-20 justify-center items-center group'>
                                    <Link href={category.urlHref}>
                                        <div
                                            // key={index}
                                            className="flex items-center gap-2 whitespace-nowrap"
                                        >
                                            <div className='bg-white text-black rounded-full p-1 md:p-1.5 group-hover:bg-white/85 transition-all ease-in duration-200'>
                                                <HugeiconsIcon icon={category.icon} size={15} />
                                            </div>
                                            <p className="font-semibold uppercase text-[9px] sm:text-[10.5px] md:text-xs group-hover:text-white/85 transition-all ease-in duration-200">
                                                {category.name}
                                            </p>

                                        </div>
                                    </Link>
                                    <Separator orientation='vertical' className='bg-white' />
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </div>

            </MaxWidthContainer>
        </div>
    )
}

export default Hero