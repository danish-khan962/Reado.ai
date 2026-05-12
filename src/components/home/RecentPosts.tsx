import MaxWidthContainer from '@/styles/MaxWidthContainer'
import React from 'react'
import { Button } from '../ui/button'
import SeparatorBlack from '../ui/separator-black'
import StyleCard from '../common/CommonBlogCard'

const RecentPosts = () => {
  return (
    <div className='mt-10 sm:mt-12 md:mt-16 lg:mt-20 w-full relative'>
        <MaxWidthContainer>
            <div className='w-full flex flex-row justify-between items-center'>
                <h1 className='font-medium font-merriweather leading-tight text-4xl md:text-5xl lg:text-6xl max-w-2xl w-full' style={{ wordSpacing: '4px', letterSpacing: '0.5px' }}>Recent Posts</h1>
                <Button>View All</Button>
            </div>
            <SeparatorBlack className='mt-5'/>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-5 lg:gap-7 mt-4 sm:mt-5 md:mt-6 lg:mt-7'>
                <StyleCard />
                <StyleCard />
                <StyleCard />
                <StyleCard />
                <StyleCard />
                <StyleCard />
                <StyleCard />
                <StyleCard />
                <StyleCard />
            </div>
        </MaxWidthContainer>
    </div>
  )
}

export default RecentPosts