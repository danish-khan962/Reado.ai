import MaxWidthContainer from '@/styles/MaxWidthContainer'
import React from 'react'
import SeparatorBlack from '../ui/separator-black'
import { prisma } from '@/lib/prisma'
import EditorsChoiceSlider from './EditorsChoiceSlider'

const EditorsChoice = async () => {
    // Fetch all posts flagged for Editor's Choice
    let posts = await prisma.post.findMany({
        where: { isEditorsChoice: true },
        include: {
            author: {
                select: { name: true },
            },
        },
        orderBy: { createdAt: 'desc' },
    })

    // Fallback: If no posts are flagged yet, grab the 4 newest posts
    if (posts.length === 0) {
        posts = await prisma.post.findMany({
            take: 4,
            include: {
                author: {
                    select: { name: true },
                },
            },
            orderBy: { createdAt: 'desc' },
        })
    }

    return (
        <div className='mt-10 sm:mt-12 md:mt-16 lg:mt-20 w-full relative'>
            <MaxWidthContainer>
                <h1 className='font-medium font-merriweather leading-tight text-4xl md:text-5xl lg:text-6xl max-w-2xl w-full' style={{ wordSpacing: '4px', letterSpacing: '0.5px' }}>
                    Editor&apos;s Choice
                </h1>
                <SeparatorBlack className='mt-5' />

                <EditorsChoiceSlider posts={posts} />
            </MaxWidthContainer>
        </div>
    )
}

export default EditorsChoice