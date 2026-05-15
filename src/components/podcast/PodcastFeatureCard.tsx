import React from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { CircleSmallIcon, Antenna, SoundcloudIcon, SpotifyIcon } from '@hugeicons/core-free-icons'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'


// Podcast Embeddings and links
const podcastEmbeddings = [
    {name: "Apple Music", icon: Antenna, urlHref: "/"},
    {name: "Sound Cloud", icon: SoundcloudIcon, urlHref: "/"},
    {name: "Spotify", icon: SpotifyIcon, urlHref: "/"},
]

const PodcastFeatureCard = () => {
    return (
        <div className='max-w-5xl w-full flex flex-col gap-y-3 border border-black p-2.5 group'>
            <div className='w-full flex flex-row justify-between items-center gap-x-2'>
                <div className='flex flex-row justify-center items-center'>
                    <HugeiconsIcon icon={CircleSmallIcon} size={14} />
                    <HugeiconsIcon icon={CircleSmallIcon} size={14} className='-ml-0.5' />
                    <HugeiconsIcon icon={CircleSmallIcon} size={14} className='-ml-0.5' />
                </div>
                {/* <p className='text-[10px] md:text-xs font-normal uppercase'> Featured </p> */}
                <p className='text-[10px] md:text-xs font-normal uppercase'> {'[No. 19]'} </p>
            </div>

            <div className='flex flex-col md:flex-row justify-start items-start gap-3'>
                <div className='max-w-none md:max-w-xs w-full'>
                    <Image
                        src={"/images/podcast.jpg"}
                        alt='podcast.img'
                        height={1000}
                        width={1000}
                        className='h-full w-full object-cover object-center aspect-video md:aspect-square border border-black hover:grayscale-100 active:grayscale-100 focus-within:grayscale-100'
                    />
                </div>

                <div className='h-full flex flex-col justify-between items-stretch gap-y-5'>
                    <div className='flex flex-col justify-start items-start gap-2.5'>
                        <h3 className='leading-snug font-medium font-merriweather text-lg md:text-xl lg:text-2xl group-hover:bg-green-300'> The remote revolution - rethinking work and culture </h3>
                        <p className='text-[10px] md:text-xs font-medium text-neutral-700'> by <span className='hover:font-semibold hover:underline transition-all ease-in duration-200'> {"Danish Khan"} </span> | 1hr 05min </p>
                        <Button> Play Episode </Button>
                    </div>

                    <div className='flex flex-row items-center gap-x-1.5 md:gap-2 lg:gap-4'>
                        <p className='text-sm'>Listen on:</p>
                        <div className='flex flex-row justify-center items-center gap-1'>
                            {podcastEmbeddings.map((podcastSource, index) => (
                                <div key={index} className='bg-black hover:bg-green-950 active:bg-green-950 focus-within:bg-green-950 p-1 md:p-1.5 rounded-full hover:scale-105 active:scale-105 focus-within:scale-105 '>
                                    <Link href={podcastSource.urlHref}>
                                        <HugeiconsIcon icon={podcastSource.icon} size={15} className='text-white' />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PodcastFeatureCard