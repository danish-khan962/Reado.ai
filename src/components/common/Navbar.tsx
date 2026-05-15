"use client"

import MaxWidthContainer from '@/styles/MaxWidthContainer'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { HugeiconsIcon } from '@hugeicons/react'
import { MailAdd01Icon, Menu09Icon, MultiplicationSignIcon, Search01Icon } from '@hugeicons/core-free-icons'
import SeparatorBlack from '../ui/separator-black'

const NavigationLinks = [
    { name: "Home", urlHref: "/" },
    { name: "Blog", urlHref: "/blog" },
    { name: "Podcast", urlHref: "/podcast" },
]

const Navbar = () => {

    const pathname = usePathname();
    React.useEffect(() => {
        setIsNavOpen(false);
    }, [pathname]);

    // Navigation State for mobile
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <nav className='py-2 md:py-3 lg:py-4'>
            <MaxWidthContainer className='flex flex-col gap-2 md:gap-4 lg:gap-8'>
                <div className='flex flex-row justify-between items-center relative'>
                    <Link href={"/"}>
                        <Image
                            src={"/images/logo.svg"}
                            alt='reado.ai'
                            height={1000}
                            width={1000}
                            className='h-fit w-fit'
                        />
                    </Link>

                    <div className='flex flex-row justify-center items-center gap-2 md:gap-5'>
                        <div className='hidden lg:flex'>
                            {NavigationLinks.map((link, index) => (
                                <Link href={link.urlHref} key={index}>
                                    <span className='text-sm font-semibold ml-4 lg:ml-6 uppercase'>{link.name}</span>
                                </Link>
                            ))}
                        </div>

                        <Button className='flex flex-row justify-start items-center gap-1 bg-gray-400/20 px-2 py-1 rounded-md hover:bg-gray-400/20'>
                            <HugeiconsIcon icon={Search01Icon} size={12} className='text-neutral-600' />
                            <input type="text" placeholder='Search All' className='border-none outline-none placeholder:text-xs hidden lg:block placeholder:text-neutral-600 text-neutral-800' />
                        </Button>

                        <Button className='cursor-pointer'>
                            <span className='hidden lg:block'>SUBSCRIBE</span> <HugeiconsIcon icon={MailAdd01Icon} />
                        </Button>
                        <Button className='cursor-pointer block lg:hidden' onClick={toggleNav}>
                            {isNavOpen ? (<HugeiconsIcon icon={MultiplicationSignIcon} />) : (<HugeiconsIcon icon={Menu09Icon} />)}
                        </Button>
                    </div>
                </div>

                <div className='relative z-50'>
                    <SeparatorBlack />
                    {isNavOpen && (
                        <div className='absolute top-3 left-0 right-0 z-50 w-full min-h-[60vh] h-full bg-white/80 backdrop-blur-xl border border-black/10 rounded-lg flex flex-col gap-y-5 py-6 shadow-[1px_1px_16px_1px]'>
                            {NavigationLinks.map((link, index) => (
                                <Link href={link.urlHref} key={index}>
                                    <span className='text-xl font-semibold ml-4 lg:ml-6 uppercase'>{link.name}</span>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </MaxWidthContainer>
        </nav>
    )
}

export default Navbar