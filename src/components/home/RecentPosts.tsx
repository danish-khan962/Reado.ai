import React from 'react'
import MaxWidthContainer from '@/styles/MaxWidthContainer'
import SeparatorBlack from '../ui/separator-black'
import CommonBlogCard from '../common/CommonBlogCard'
import { prisma } from '@/lib/prisma'

interface PostItem {
  id: string
  title: string
  slug: string
  category: string
  readTime: number
  banners: string[]
  author: {
    name: string
  } | null
}

const RecentPosts = async () => {
    const recentPosts: PostItem[] = await prisma.post.findMany({
        take: 6,
        orderBy: { createdAt: 'desc' },
        include: {
            author: {
                select: { name: true },
            },
        },
    })

    return (
        <div className='w-full relative py-10 sm:py-12 md:py-16 lg:py-20'>
            <MaxWidthContainer className='flex flex-col'>
                <h1 className='font-medium font-merriweather leading-tight text-4xl md:text-5xl lg:text-6xl max-w-xs md:max-w-2xl w-full' style={{ wordSpacing: '4px', letterSpacing: '0.5px' }}>
                    Recent Posts
                </h1>
                <SeparatorBlack className='mt-5' />

                <div className='grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-5 lg:gap-8 mt-8'>
                    {recentPosts.map((post: PostItem, idx: number) => (
                        <CommonBlogCard 
                            key={post.id}
                            idNumber={String(idx + 1).padStart(2, '0')}
                            title={post.title}
                            slug={post.slug}
                            category={post.category}
                            author={post.author?.name || 'Editorial Team'}
                            minRead={post.readTime}
                            image={post.banners?.[0] || '/images/featured-image.png'}
                        />
                    ))}
                </div>
            </MaxWidthContainer>
        </div>
    )
}

export default RecentPosts