"use client"

import React from "react"
import { FaWindowClose } from "react-icons/fa"
import SeparatorWhite from "../ui/separator-white"

type SummaryModalProps = {
    open: boolean
    onOpenChange: (open: boolean) => void
}

const SummaryModal = ({
    open,
    onOpenChange,
}: SummaryModalProps) => {

    if (!open) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-2 sm:p-4 md:p-6 lg:p-8"
            onClick={() => onOpenChange(false)}
        >
            <div
                className="max-w-6xl relative w-full bg-linear-to-b from-[#0A0A0A] to-[#212121] p-4 sm:p-6 md:p-8 lg:p-10 text-white flex flex-col gap-8 rounded-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col gap-2 md:gap-2.5">
                    <p className="text-sm md:text-base bg-linear-to-bl text-neutral-600">Reado AI Summary</p>
                    <h2 className="font-medium font-merriweather text-xl sm:text-2xl md:text-3xl lg:text-4xl">Best productive hacks for creative freelancers today</h2>
                    <SeparatorWhite className="mt-3" />
                </div>

                <div className="text-sm md:text-base text-neutral-300 bg-neutral-800 p-4 rounded-lg">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt minima vitae reiciendis tempora ea consequatur vel ad suscipit debitis, eos quisquam quasi, dicta beatae enim voluptates maiores. Maxime aliquid sequi in, quidem eaque a. Temporibus aspernatur placeat repudiandae magni fuga.
                </div>

                <div className="flex flex-col gap-2">
                    <p className="font-medium font-merriweather">Key Highlights: </p>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-neutral-300">
                        <li>Build a consistent daily routine.</li>
                        <li>Prioritize important tasks first.</li>
                        <li>Use productivity tools to stay organized.</li>
                        <li>Reduce distractions and context switching.</li>
                        <li>Focus on sustainable long-term habits.</li>
                    </ul>
                </div>

                {/* Close Button */}
                <FaWindowClose
                    onClick={() => onOpenChange(false)}
                    className="absolute top-4 right-4 text-lg md:text-xl lg:text-2xl text-red-400 hover:text-red-500" />
            </div>
        </div>
    )
}

export default SummaryModal