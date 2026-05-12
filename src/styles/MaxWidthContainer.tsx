import React from 'react'
import { cn } from '@/lib/utils'

type MaxWidthContainerProps = {
    children? : React.ReactNode
    className? : string
}

const MaxWidthContainer = ({className, children}: MaxWidthContainerProps) => {
  return (
    <div
    className={cn(
        "max-w-370 w-full mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-2 md:py-4",
        className
    )}
    >
        {children}
    </div>
  )
}

export default MaxWidthContainer