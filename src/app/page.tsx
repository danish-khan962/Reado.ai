import EditorsChoice from '@/components/home/EditorsChoice'
import FeatureSection from '@/components/home/FeatureSection'
import FounderCard from '@/components/home/FounderCard'
import Hero from '@/components/home/Hero'
import RecentPosts from '@/components/home/RecentPosts'
import WatchSection from '@/components/home/WatchSection'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <FeatureSection />
      <RecentPosts />
      <EditorsChoice />
      <WatchSection />
      <FounderCard />
    </>
  )
}

export default page