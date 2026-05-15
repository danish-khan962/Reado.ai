import SubscribeForm from '@/components/home/SubscribeForm'
import MaxWidthContainer from '@/styles/MaxWidthContainer'
import React from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { Antenna, SoundcloudIcon, SpotifyIcon } from '@hugeicons/core-free-icons'
import Link from 'next/link'
import PodcastCard from '@/components/common/PodcastCard'
import PodcastFeatureCard from '@/components/podcast/PodcastFeatureCard'
import SeparatorBlack from '@/components/ui/separator-black'
import { Button } from '@/components/ui/button'

// Podcast Embeddings and links
const podcastEmbeddings = [
    { name: "Apple Music", icon: Antenna, urlHref: "/" },
    { name: "Sound Cloud", icon: SoundcloudIcon, urlHref: "/" },
    { name: "Spotify", icon: SpotifyIcon, urlHref: "/" },
]

const page = () => {
    return (
        <div className='w-full relative mt-6 md:mt-8 lg:mt-10'>
            <MaxWidthContainer className='flex flex-col' >
                <div className='flex flex-col xl:flex-row justify-between items-start lg:items-center gap-x-20 gap-y-5'>
                    <div className='max-w-5xl w-full flex flex-col justify-between items-stretch gap-y-5'>
                        <div className='flex flex-col justify-start items-start gap-3 md:gap-5'>
                            <h1 className='font-semibold font-merriweather leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-2xl w-full' style={{ wordSpacing: '4px', letterSpacing: '0.5px' }}>Reado Podcasts</h1>
                            <p className='max-w-sm md:max-w-xl leading-snug font-medium text-neutral-700 text-sm md:text-base'>
                                Conversations that uncover the ideas, struggles, and wins behind today&apos;s most inspiring creators and entrepreneurs.
                            </p>
                            <div className='flex flex-row items-center gap-x-1.5 md:gap-2 lg:gap-4'>
                                <p className='text-sm'>Listen on:</p>
                                <div className='flex flex-row justify-center items-center gap-1'>
                                    {podcastEmbeddings.map((podcastSource, index) => (
                                        <div key={index} className='bg-black hover:bg-green-950 active:bg-green-950 focus-within:bg-green-950 p-1 md:p-1.5 rounded-full hover:scale-105 active:scale-105 focus-within:scale-105 '>
                                            <Link href={podcastSource.urlHref}>
                                                <HugeiconsIcon icon={podcastSource.icon} size={22} className='text-white' />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <SubscribeForm
                            heading='Be the first to explore new episodes'
                            subheading='Subscribe to get latest podcast updates.'
                            placeholder='Your email for new episodes'
                        />
                    </div>

                    <PodcastFeatureCard />
                </div>

                <div className='py-20 sm:py-24 md:py-28 lg:py-32'>
                    <div className='w-full flex flex-row justify-between items-center'>
                        <h1 className='font-medium font-merriweather leading-tight text-4xl md:text-5xl lg:text-6xl max-w-xs md:max-w-2xl w-full' style={{ wordSpacing: '4px', letterSpacing: '0.5px' }}>Recent Podcasts</h1>
                        {/* <Button>
                            Listen All Podcasts
                        </Button> */}
                    </div>
                    <SeparatorBlack className='mt-5' />

                    <div className='mt-5 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-7'>
                        <PodcastCard />
                        <PodcastCard />
                        <PodcastCard />
                        <PodcastCard />
                    </div>
                </div>
            </MaxWidthContainer>
        </div>
    )
}

export default page