'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'

type SubscribeFormProps = {
    heading?: string,
    subheading?: string,
    placeholder?: string,
}

const SubscribeForm = ({heading, subheading, placeholder}: SubscribeFormProps) => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setLoading(true)
        setStatus('idle')

        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            })

            if (res.ok) {
                setStatus('success')
                setEmail('')
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='bg-white w-full px-4 sm:px-6 md:px-6.5 lg:px-7 py-7 sm:py-8 md:py-9 lg:py-10 flex flex-col gap-y-8 border-4 border-black/50 rounded-xl hover:border-black active:border-black focus-within:border-black transition duration-200 ease-in'>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-col justify-start items-start gap-y-2'>
                    <p className='font-merriweather font-semibold text-xl'> {heading} </p>
                    <p className='font-normal leading-snug text-sm md:text-base'> {subheading} </p>
                </div>
                <Image
                    src={"/images/VbWuHC2vely05QKSElKrUlByNI.svg"}
                    alt='form bar'
                    height={1000}
                    width={1000}
                    className='w-fit h-fit'
                />
            </div>

            <div className='border-2 border-black/15 rounded-md px-2 md:px-5 py-2 w-full flex flex-row justify-between items-center gap-x-1 shrink'>
                <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={`${placeholder}`} 
                    className='placeholder:text-neutral-500 placeholder:text-[14px] sm:placeholder:text-sm text-black md:placeholder:text-base border-none outline-none min-w-0 flex-1' 
                />
                <Button 
                    type="submit"
                    disabled={loading}
                    className='uppercase bg-black text-white cursor-pointer font-semibold disabled:opacity-50'
                >
                    {loading ? '...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
                </Button>
            </div>
        </form>
    )
}

export default SubscribeForm