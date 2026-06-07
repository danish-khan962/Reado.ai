import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const page = () => {

    const userID = 'userID'

    return (
        <div className='flex flex-col justify-center items-center gap-16'>
            <p className='font-medium text-2xl md:text-3xl lg:text-5xl font-merriweather'>Author's page</p>
            <Link href={`/author/${userID}`}>
                <Button className='cursor-pointer' size={"lg"}>
                    Go to Author slug page
                </Button>
            </Link>
        </div>
    )
}

export default page