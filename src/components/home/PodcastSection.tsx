import React from 'react'
import SeparatorBlack from '../ui/separator-black'
import MaxWidthContainer from '@/styles/MaxWidthContainer'
import PodcastCard from '../common/PodcastCard'
import { Button } from '../ui/button'

const PodcastSection = () => {
    return (
        <div className='w-full relative py-10 sm:py-12 md:py-16 lg:py-20'>
            <MaxWidthContainer>
                <div className='w-full flex flex-row justify-between items-center'>
                    <h1 className='font-medium font-merriweather leading-tight text-4xl md:text-5xl lg:text-6xl max-w-xs md:max-w-2xl w-full' style={{ wordSpacing: '4px', letterSpacing: '0.5px' }}>Podcasts</h1>
                    <Button>
                        Listen All Podcasts
                    </Button>
                </div>
                <SeparatorBlack className='mt-5' />

                <div className='mt-5 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-7'>
                    <PodcastCard />
                    <PodcastCard />
                </div>
            </MaxWidthContainer>
        </div>
    )
}

export default PodcastSection