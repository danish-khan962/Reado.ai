import React from 'react'
import { cn } from '@/lib/utils'

type PromptBoxItems = {
    className?: string,
}

const PromptBox = ({className}: PromptBoxItems) => {
  return (
    <div className={cn(
        "max-w-7xl w-full backdrop-blur-3xl rounded-3xl md:rounded-4xl rounded-5xl z-99",
        className,
    )}>
        <textarea className='w-full col-span-3 resize-none p-10 bg-black rounded-3xl md:rounded-4xl rounded-5xl  border-2 border-white backdrop-blur-4xl z-99'></textarea>
    </div>
  )
}

export default PromptBox