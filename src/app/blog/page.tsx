"use client"

import MaxWidthContainer from '@/styles/MaxWidthContainer'
import React, { useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react';
import { Airplane01Icon, Book02Icon, BorderFullIcon, Briefcase01Icon, HealthIcon, Home01Icon, MoneyBag02Icon, Restaurant01Icon } from '@hugeicons/core-free-icons';
import { Button } from '@/components/ui/button';
import CommonBlogCard from '@/components/common/CommonBlogCard';

const filterCategories = [
    { name: "All", icon: BorderFullIcon },
    { name: "Finance", icon: MoneyBag02Icon },
    { name: "Health", icon: HealthIcon },
    { name: "Business", icon: Briefcase01Icon },
    { name: "Food", icon: Restaurant01Icon },
    { name: "Travel", icon: Airplane01Icon },
    { name: "Lifestyle", icon: Home01Icon },
    { name: "Education", icon: Book02Icon },
];

const blogs = Array.from({ length: 25 });

const page = () => {

    const [visibleCards, setVisibleCards] = useState(9);

    React.useEffect(() => {
        if (window.innerWidth < 768) {
            setVisibleCards(10);
        }
    }, []);

    const loadMoreCards = () => {
        setVisibleCards((prev) => prev + 6);
    };

    return (
        <div className='w-full relative pb-8 sm:pb-10 md:pb-12 lg:pb-14'>
            <MaxWidthContainer className='flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center max-w-5xl w-full gap-y-5 md:gap-y-8 py-10 sm:py-12 md:py-16 lg:py-20'>
                    <h1 className='font-medium font-merriweather leading-tight text-4xl md:text-5xl lg:text-6xl max-w-2xl w-full text-center' style={{ wordSpacing: '4px', letterSpacing: '0.5px' }}>Blogs</h1>
                    <div className='flex flex-row gap-x-4 sm:gap-x-5 md:gap-x-6 lg:gap-x-8 gap-y-2 flex-wrap justify-center items-center'>
                        {filterCategories.map((filterOption, index) => (
                            <Button
                                className='cursor-pointer h-8 md:h-10 hover:rounded-full transition-all ease-in-out duration-200'
                                key={index}
                                size={'lg'}>
                                <div className='bg-white text-black rounded-full p-0.5 md:p-1 group-hover:bg-white/85 transition-all ease-in duration-200'>
                                    <HugeiconsIcon icon={filterOption.icon} size={12} />
                                </div>
                                <p className="font-semibold uppercase text-[9px] sm:text-[10.5px] md:text-xs group-hover:text-white/85 transition-all ease-in duration-200">
                                    {filterOption.name}
                                </p>
                            </Button>
                        ))}
                    </div>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-5 lg:gap-8'>
                    {blogs.slice(0, visibleCards).map((_, index) => (
                        <CommonBlogCard key={index} />
                    ))}
                </div>

                <div className='mt-8 flex justify-center items-center'>
                    {visibleCards < blogs.length ? (
                        <Button
                            size={'lg'}
                            onClick={loadMoreCards}
                        >
                            Load More
                        </Button>
                    ) : (
                        <p className='text-sm md:text-base text-neutral-500 font-medium uppercase'>
                            That&apos;s everything for now.
                        </p>
                    )}
                </div>
            </MaxWidthContainer>
        </div>
    )
}

export default page