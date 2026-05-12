import React from 'react'
import { Separator } from './separator'
import { cn } from '@/lib/utils'

type SeparatorWhiteProps = {
  className? : string
}

const SeparatorWhite = ({className}: SeparatorWhiteProps) => {
  return (
    <div className={cn("relative", className)}>
        <Separator className='bg-white h-0.2 opacity-70' />
        <div className='h-2 bg-white w-0.5 absolute left-1.5 opacity-70 -translate-y-1/2'></div>
        <div className='h-2 bg-white w-0.5 absolute right-1.5 opacity-70 -translate-y-1/2'></div>
    </div>
  )
}

export default SeparatorWhite