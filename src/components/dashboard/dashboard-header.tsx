import React from 'react'
import { Button } from '../ui/button'
import { HugeiconsIcon } from '@hugeicons/react'
import { Search01Icon } from '@hugeicons/core-free-icons'
import { VscLayoutSidebarLeftDock, VscLayoutSidebarRightDock } from "react-icons/vsc"

interface DashboardHeaderProps {
  isDesktopSidebarOpen: boolean;
  isMobileSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const DashboardHeader = ({
  isDesktopSidebarOpen,
  isMobileSidebarOpen,
  toggleSidebar,
}: DashboardHeaderProps) => {
  return (
    <div className='w-full flex flex-row justify-between items-center px-4 md:px-6 py-5 border-b-2 border-black'>
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar}>
          {isDesktopSidebarOpen || isMobileSidebarOpen ? (
            <VscLayoutSidebarLeftDock size={24} />
          ) : (
            <VscLayoutSidebarRightDock size={24} />
          )}
        </button>

        <h1 className="font-semibold text-lg sm:text-xl md:text-2xl font-merriweather">
          Dashboard
        </h1>
      </div>

      <div className='flex flex-row gap-3 justify-center items-center'>
        <Button className='flex flex-row justify-start items-center gap-1 bg-gray-400/20 px-2 py-1 rounded-md hover:bg-gray-400/20'>
          <HugeiconsIcon icon={Search01Icon} size={12} className='text-neutral-600' />
          <input type="text" placeholder='Search All' className='border-none outline-none placeholder:text-xs hidden lg:block placeholder:text-neutral-600 text-neutral-800' />
        </Button>

        <Button className='cursor-pointer'>
          Subscribe
        </Button>
      </div>
    </div>
  )
}

export default DashboardHeader