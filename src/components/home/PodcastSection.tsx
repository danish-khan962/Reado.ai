import React from 'react'
import SeparatorBlack from '../ui/separator-black'
import MaxWidthContainer from '@/styles/MaxWidthContainer'

const PodcastSection = () => {
    return (
        <div className='w-full relative py-10 sm:py-12 md:py-16 lg:py-20'>
            <MaxWidthContainer>
                <h1 className='font-medium font-merriweather leading-tight text-4xl md:text-5xl lg:text-6xl max-w-xs md:max-w-2xl w-full' style={{ wordSpacing: '4px', letterSpacing: '0.5px' }}>Podcasts</h1>
                <SeparatorBlack className='mt-5' />
            </MaxWidthContainer>
        </div>
    )
}

export default PodcastSection