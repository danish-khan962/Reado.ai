import React from 'react'
import { IoSparkles } from "react-icons/io5"
import SeparatorBlack from '../ui/separator-black'

// Insight Stats
const insightStats = [
    { statsName: "sentiment score", score: 78 },
    { statsName: "engagement density", score: 44 },
    { statsName: "retention index", score: 92 },
]

const InsightCardAI = () => {
    return (
        <div className='border-2 border-black p-3 sm:p-3.5 md:p-4 lg:p-5'>
            <h2 className='font-medium text-xl md:text-2xl lg:text-3xl tracking-tight font-merriweather flex flex-row justify-between items-center w-full'>AI Insights  <IoSparkles /></h2>
            <SeparatorBlack className='mt-4' />

            <div className='flex flex-col gap-3 py-6 md:py-8'>
                {insightStats.map((insightResults, index) => (
                    <div
                        key={index}
                        className='flex flex-col gap-2'>
                        <p className='font-medium tracking-tight text-neutral-700 capitalize'>{insightResults.statsName}</p>
                        <div className='flex flex-row justify-between items-center gap-3'>
                            {/* Bar fillup */}
                            <div className='w-full h-8 border border-black'>
                                <div className={`h-full bg-black`} style={{ width: `${insightResults.score}%` }}></div>
                            </div>
                            <p className='font-bold text-sm md:text-base lg:text-lg tracking-tight text-black/90'>{insightResults.score}%</p>
                        </div>
                    </div>
                ))}

                <SeparatorBlack className='mt-6 md:mt-8' />
            </div>

            <div className='flex flex-col justify-center items-center gap-6 md:gap-8'>
                <p className='text-xs md:text-sm lg:text-base leading-snug text-neutral-600 font-medium italic'>
                    "Based on the analysis of your blog posts, your content demonstrates consistent engagement and clear topic relevance. Articles with practical insights and actionable tips tend to attract higher reader interaction and longer session durations. Expanding on these high-performing themes while improving content structure and SEO optimization could further increase audience reach and overall engagement."
                </p>
                <div className='w-full py-2 md:py-2.5 border border-black uppercase text-center cursor-pointer font-medium hover:bg-black/90 hover:text-white/90 active:bg-black/90 active:text-white/90 focus:bg-black/90 focus:text-white/90 transition-all ease-in-out duration-200'>
                    Generate Full Report
                </div>
            </div>
        </div>
    )
}

export default InsightCardAI