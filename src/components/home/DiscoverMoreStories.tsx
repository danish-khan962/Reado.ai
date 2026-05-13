import MaxWidthContainer from '@/styles/MaxWidthContainer'
import SeparatorBlack from '../ui/separator-black'
import CommonBlogCard from '../common/CommonBlogCard'
import { Separator } from '../ui/separator'

// Fake data for Sidebar Blog links
const sideBarBlogLinsk = [
    {title: "How podcasts change the way we learn", author: "Jacob Anderson", minRead: 7},
    {title: "How to create a realistic monthly budget", author: "William Parker", minRead: 4},
    {title: "Top exercises to strenghten your core and back", author: "Simon Douge", minRead: 12},
]

const DiscoverMoreStories = () => {
    return (
        <div className='w-full relative py-10 sm:py-12 md:py-16 lg:py-20'>
            <MaxWidthContainer className='flex flex-col'>
                <h1 className='font-medium font-merriweather leading-tight text-4xl md:text-5xl lg:text-6xl max-w-xs md:max-w-2xl w-full' style={{ wordSpacing: '4px', letterSpacing: '0.5px' }}>Discover more stories</h1>
                <SeparatorBlack className='mt-5' />

                <div className='mt-8 flex flex-col lg:flex-row gap-x-8 gap-y-5'>
                    <div className='flex flex-row lg:flex-col gap-x-2 gap-y-5'>
                        <CommonBlogCard titleClassName='group-hover:bg-teal-200 group-active:bg-teal-200 group-focus-within:bg-teal-200 lg:text-lg'/>
                        <CommonBlogCard titleClassName='group-hover:bg-teal-200 group-active:bg-teal-200 group-focus-within:bg-teal-200 lg:text-lg'/>
                    </div>

                    <CommonBlogCard titleClassName='group-hover:bg-teal-200' />

                    <div className='max-w-none lg:max-w-xs w-full mt-6 lg:mt-0 flex flex-col gap-y-3.5 sm:gap-y-4 md:gap-y-5 lg:gap-y-7'>
                        {sideBarBlogLinsk.map((item, index) => (
                            <div className='flex flex-col justify-start items-start gap-y-2.5 group' key={index}>
                                <h2 className='text-base md:text-lg font-merriweather group-hover:bg-cyan-300 group-active:bg-cyan-300 group-focus-within:bg-cyan-300'>{item.title}</h2>
                                <p className='text-[10px] md:text-xs'>by <span className='hover:font-semibold hover:underline transition-all ease-in duration-200'>{item.author}</span> | {item.minRead} min read</p>
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