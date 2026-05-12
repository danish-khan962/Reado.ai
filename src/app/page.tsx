import EditorsChoice from '@/components/home/EditorsChoice'
import FeatureSection from '@/components/home/FeatureSection'
import Hero from '@/components/home/Hero'
import RecentPosts from '@/components/home/RecentPosts'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <FeatureSection />
      <RecentPosts />
      <EditorsChoice />
    </>
  )
}

export default page