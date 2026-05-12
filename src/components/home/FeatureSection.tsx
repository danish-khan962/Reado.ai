import MaxWidthContainer from '@/styles/MaxWidthContainer'
import React from 'react'
import SubscribeForm from './SubscribeForm'
import FeatureCard from './FeatureCard'

const FeatureSection = () => {
    return (
        <div className='w-full relative mt-6 md:mt-8 lg:mt-10'>
            <MaxWidthContainer className='flex flex-col xl:flex-row justify-between items-start lg:items-center gap-x-20 gap-y-5'>
                <div className='max-w-5xl w-full flex flex-col justify-between items-between gap-y-4 xl:gap-y-36.5'>
                    <div className='flex flex-col justify-start items-start gap-5 lg:gap-8'>
                        <h1 className='font-semibold font-merriweather leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-2xl w-full' style={{ wordSpacing: '4px', letterSpacing: '0.5px' }}>A modern magazine for curious minds</h1>
                        <p className='max-w-sm md:max-w-xl leading-snug font-medium text-neutral-700 text-sm md:text-base'>
                            Dive into well-crafted stories, interviews, and guides designed to inform, inspire, and keep you updated with the latest in news, and creativity.
                        </p>
                    </div>

                    <SubscribeForm />
                </div>

                <FeatureCard />
            </MaxWidthContainer>
        </div>
    )
}

export default FeatureSection