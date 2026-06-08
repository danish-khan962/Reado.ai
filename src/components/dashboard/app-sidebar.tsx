"use client"

import * as React from "react"

import { NavMain } from "@/components/dashboard/nav-main"
import { NavProjects } from "@/components/dashboard/nav-projects"
import { NavSecondary } from "@/components/dashboard/nav-secondary"
import { NavUser } from "@/components/dashboard/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { HugeiconsIcon } from "@hugeicons/react"
import { ComputerTerminalIcon, RoboticIcon, BookOpen02Icon, Settings05Icon, ChartRingIcon, SentIcon, CropIcon, PieChartIcon, MapsIcon, CommandIcon, TropicalStormTracks01Icon, DashboardSquare01Icon, LeftToRightListDashIcon, UserIcon, Invoice01Icon, CustomerServiceIcon, Message01FreeIcons, NewsIcon, Audio, DashboardSquareEditIcon, DashboardSquareEditFreeIcons, InvoiceIcon, CustomerService01Icon } from "@hugeicons/core-free-icons"

const data = {
  user: {
    name: "Akash Mahajan",
    email: "akashmahajan985@gmail.com",
    avatar: "/avatars/user.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: (
        <HugeiconsIcon icon={DashboardSquareEditFreeIcons} strokeWidth={2} />
      ),
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/dashboard/user",
        },
        {
          title: "Analytics",
          url: "/dashboard/user/analytics",
        },
      ],
    },
    {
      title: "Content",
      url: "#",
      icon: (
        <HugeiconsIcon icon={LeftToRightListDashIcon} strokeWidth={2} />
      ),
      items: [
        {
          title: "My Blogs",
          url: "/dashboard/user/my-blogs",
        },
        {
          title: "My Podcasts",
          url: "/dashboard/user/my-podcasts",
        },
      ],
    },
    {
      title: "Security",
      url: "#",
      icon: (
        <HugeiconsIcon icon={UserIcon} strokeWidth={2} />
      ),
      items: [
        {
          title: "Face Authentication",
          url: "/dashboard/user/face-authentication",
        },
      ],
    },
    {
      title: "Billing",
      url: "#",
      icon: (
        <HugeiconsIcon icon={InvoiceIcon} strokeWidth={2} />
      ),
      items: [
        {
          title: "Plan and Invoice",
          url: "/dashboard/user/plan-and-invoice",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "/dashboard/user/support",
      icon: (
        <HugeiconsIcon icon={CustomerService01Icon} strokeWidth={2} />
      ),
    },
    {
      title: "Feedback",
      url: "/dashboard/user/feedback",
      icon: (
        <HugeiconsIcon icon={Message01FreeIcons} strokeWidth={2} />
      ),
    },
  ],
  projects: [
    {
      name: "Read Latest Blogs",
      url: "/blog",
      icon: (
        <HugeiconsIcon icon={NewsIcon} strokeWidth={2} />
      ),
    },
    {
      name: "Listen Podcasts",
      url: "/podcast",
      icon: (
        <HugeiconsIcon icon={Audio} strokeWidth={2} />
      ),
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="min-h-screen h-full overflow-hidden"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 md:size-9 items-center justify-center rounded-lg bg-linear-to-tl from-[#FFFFFF] via-[#FAFAFA] to-[#F2F2F2] text-black">
                  <HugeiconsIcon icon={TropicalStormTracks01Icon} strokeWidth={2} className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium md:text-base">Reado.ai</span>
                  <span className="truncate text-xs">User Dashboard</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
