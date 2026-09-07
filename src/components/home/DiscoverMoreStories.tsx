import MaxWidthContainer from '@/styles/MaxWidthContainer'
import SeparatorBlack from '../ui/separator-black'
import CommonBlogCard from '../common/CommonBlogCard'
import { Separator } from '../ui/separator'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'

interface SidebarPost {
  id: string
  title: string
  slug: string
  readTime: number
  author: {
    name: string
  } | null
}

const DiscoverMoreStories = async () => {
    //  Fetch 3 stories for the left and middle bento cards
    const discoverPosts = await prisma.post.findMany({
        take: 3,
        include: {
            author: {
                select: { name: true },
            },
        },
        orderBy: { createdAt: 'desc' },
    })

    // Fetch the most recent posts strictly for the rightmost text list
    const recentSidebarPosts: SidebarPost[] = await prisma.post.findMany({
        take: 3,
        orderBy: { createdAt: 'desc' },
        include: {
            author: {
                select: { name: true },
            },
        },
    })

    const card1 = discoverPosts[0]
    const card2 = discoverPosts[1]
    const middleCard = discoverPosts[2]

    return (
        <div className='w-full relative py-10 sm:py-12 md:py-16 lg:py-20'>
            <MaxWidthContainer className='flex flex-col'>
                <h1 className='font-medium font-merriweather leading-tight text-4xl md:text-5xl lg:text-6xl max-w-xs md:max-w-2xl w-full' style={{ wordSpacing: '4px', letterSpacing: '0.5px' }}>Discover more stories</h1>
                <SeparatorBlack className='mt-5' />

                <div className='mt-8 flex flex-col lg:flex-row gap-x-8 gap-y-5'>
                    <div className='flex flex-row lg:flex-col gap-x-2 gap-y-5'>
                        <CommonBlogCard 
                            idNumber="01"
                            title={card1?.title}
                            slug={card1?.slug}
                            category={card1?.category}
                            author={card1?.author?.name}
                            minRead={card1?.readTime}
                            image={card1?.banners?.[0]}
                            titleClassName='group-hover:bg-teal-200 group-active:bg-teal-200 group-focus-within:bg-teal-200 lg:text-lg' 
                        />
                        <CommonBlogCard 
                            idNumber="02"
                            title={card2?.title}
                            slug={card2?.slug}
                            category={card2?.category}
                            author={card2?.author?.name}
                            minRead={card2?.readTime}
                            image={card2?.banners?.[0]}
                            titleClassName='group-hover:bg-teal-200 group-active:bg-teal-200 group-focus-within:bg-teal-200 lg:text-lg' 
                        />
                    </div>

                    <CommonBlogCard 
                        idNumber="03"
                        title={middleCard?.title}
                        slug={middleCard?.slug}
                        category={middleCard?.category}
                        author={middleCard?.author?.name}
                        minRead={middleCard?.readTime}
                        image={middleCard?.banners?.[0]}
                        titleClassName='group-hover:bg-teal-200' 
                    />

                    <div className='max-w-none lg:max-w-xs w-full mt-6 lg:mt-0 flex flex-col gap-y-3.5 sm:gap-y-4 md:gap-y-5 lg:gap-y-7'>
                        {recentSidebarPosts.map((item: SidebarPost) => (
                            <div className='flex flex-col justify-start items-start gap-y-2.5 group' key={item.id}>
                                <Link href={item.slug ? `/blog/${item.slug}` : "/blog"}>
                                    <h2 className='text-base md:text-lg font-merriweather group-hover:bg-cyan-300 group-active:bg-cyan-300 group-focus-within:bg-cyan-300'>{item.title}</h2>
                                </Link>
                                <p className='text-[10px] md:text-xs'>by <span className='hover:font-semibold hover:underline transition-all ease-in duration-200'>{item.author?.name || "Editorial Team"}</span> | {item.readTime} min read</p>
                                <Separator className='bg-neutral-800 w-screen' />
                            </div>
                        ))}
                    </div>
                </div>
            </MaxWidthContainer>
        </div>
    )
}

export default DiscoverMoreStories