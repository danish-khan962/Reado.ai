"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HugeiconsIcon } from '@hugeicons/react'
import { DashboardCircleIcon, ImageUploadIcon, Mic01Icon, AiScanIcon } from '@hugeicons/core-free-icons'
import { usePathname } from 'next/navigation'
import { RiAddCircleFill } from "react-icons/ri"
import { IoMdLogOut, IoMdSettings } from "react-icons/io"

// Dashboard Tabs
const RedirectDashboardTabs = [
  { tabName: "Dashboard", redirectURL: "/dashboard/user", icon: DashboardCircleIcon },
  { tabName: "All Blogs", redirectURL: "/dashboard/user/blogs", icon: ImageUploadIcon },
  { tabName: "All Podcasts", redirectURL: "/dashboard/user/podcasts", icon: Mic01Icon },
  // { tabName: "AI Analytics", redirectURL: "/dashboard/user/analytics", icon: AiScanIcon },
]

interface NewSidebarProps {
  isDesktopSidebarOpen: boolean;
  isMobileSidebarOpen: boolean;
  closeMobileSidebar: () => void;
}


const NewSidebar = ({ isDesktopSidebarOpen, isMobileSidebarOpen, closeMobileSidebar }: NewSidebarProps) => {

  // Sidebar open and close state tracking
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // }

  const pathname = usePathname();
  return (
    <aside
      className={`
    min-h-screen h-full
    flex flex-col justify-between items-stretch
    border-2 border-x-black
    overflow-hidden
    transition-all duration-300
    bg-white

    fixed top-0 left-0 z-50
    ${isMobileSidebarOpen
          ? "translate-x-0"
          : "-translate-x-full"
        }

    lg:static
    lg:translate-x-0
    ${isDesktopSidebarOpen
          ? "lg:w-xs"
          : "lg:w-0"
        }
  `}
    >
      <div className='flex flex-col gap-6'>
        <div className='flex justify-center items-center p-5 sm:p-6 md:p-7 lg:p-8'>
          <Link href={"/"}>
            <Image
              src={"/images/logo.svg"}
              alt='reado.ai'
              height={1000}
              width={1000}
              className='h-fit w-fit'
            />
          </Link>
        </div>

        <ul className="flex flex-col justify-center items-center gap-0.5">
          {RedirectDashboardTabs.map((tab) => (
            <Link key={tab.tabName} href={tab.redirectURL} className="w-full">
              <li
                className={`p-5 border-2 border-black w-full flex items-center gap-5 font-medium font-merriweather transition-colors
          ${pathname === tab.redirectURL
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-100"
                  }
        `}
              >
                <HugeiconsIcon icon={tab.icon} size={20} />
                {tab.tabName}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <div className='p-5 flex justify-center items-center border-y-2 border-black w-full'>
          <Link href={"/dashboard/user/post-new"} className='w-full'>
            <button className='bg-black text-white font-medium tracking-tight w-full py-5 flex flex-row justify-center items-center rounded-full gap-3 hover:shadow-2xl hover:bg-black/90 transition-all ease-in-out duration-200'>
              <RiAddCircleFill className='text-xl' />
              ADD NEW
            </button>
          </Link>
        </div>

        <div className='w-full flex flex-row-reverse justify-between items-center'>
          <div className='p-5 flex flex-row gap-5'>
            <Image
              src={"/images/author-new.jpg"}
              alt='author'
              height={1000}
              width={1000}
              className='h-14 w-14 '
            />
            <div className='flex flex-col leading-snug gap-0.5'>
              <span className='font-semibold tracking-tight'>Danish Khan</span>
              <span className='text-sm text-neutral-700 bg-neutral-300 py-0.5 px-3 rounded-full'>Add Tag</span>
            </div>
          </div>

          <div className='flex flex-col justify-between items-center border-r-2 border-black gap-8 py-2 px-3'>
            <span className='bg-neutral-300 p-2 rounded-full cursor-pointer transition-all ease-in-out duration-200 hover:scale-105 hover:bg-black/15'><IoMdSettings className='text-xl' /></span>
            <span className='bg-red-400 p-2 rounded-full cursor-pointer transition-all ease-in-out duration-200 hover:scale-105 hover:bg-red-500 hover:text-white'><IoMdLogOut className='text-xl' /></span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default NewSidebar