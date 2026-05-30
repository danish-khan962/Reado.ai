import Image from 'next/image'
import React from 'react'

const PaginationBlock = () => {
  return (
    // Pagination
    <div className='w-full flex flex-row justify-between items-center gap-2'>
        {/* Previous Page */}
        <div className='flex flex-row justify-between items-center border border-black p-2.5 hover:rounded group gap-x-3 transition-all ease-in duration-200 max-w-3xs w-full hover:shadow-xl hover:shadow-neutral-600 active:shadow-xl active:shadow-neutral-600 focus-within:shadow-xl focus-within:shadow-neutral-600'>
            <Image
            src={"/images/paginationPrev.jpg"}
            alt="previous blog post"
            height={1000}
            width={1000}
            loading='lazy'
            className="h-12 md:h-14 lg:h-16 w-auto object-cover group-hover:rounded-full transition-all ease-in duration-200 border border-black aspect-square"
            />
            <span className='font-medium font-playfairDisplay text=sm md:text-base lg:text-lg group-hover:bg-fuchsia-100'> Previous Blog </span>
        </div>

        {/* Next Page */}
        <div className='flex flex-row justify-between items-center border border-black p-2.5 hover:rounded group gap-x-3 transition-all ease-in duration-200 max-w-3xs w-full hover:shadow-xl hover:shadow-neutral-600 active:shadow-xl active:shadow-neutral-600 focus-within:shadow-xl focus-within:shadow-neutral-600'>
            <span className='font-medium font-playfairDisplay text=sm md:text-base lg:text-lg group-hover:bg-fuchsia-100'> Next Blog </span>
            <Image
            src={"/images/paginationNext.jpg"}
            alt="previous blog post"
            height={1000}
            width={1000}
            loading='lazy'
            className="h-12 md:h-14 lg:h-16 w-auto object-cover group-hover:rounded-full transition-all ease-in duration-200 border border-black aspect-square"
            />
        </div>
    </div>
  )
}

export default PaginationBlock