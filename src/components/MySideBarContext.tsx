"use client"

import Link from "next/link";
import { SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { menuSideBarProps } from "@/lib/myUtils";
import { usePathname } from "next/navigation";

export default function MySidebarGroupContent({menuSideBar}: {menuSideBar: menuSideBarProps}) {
    const pathName = usePathname();

    return (
        <SidebarGroupContent>
            <SidebarMenu>
                {menuSideBar.map((item, index) => (
                    <SidebarMenuItem key={index}>
                        <SidebarMenuButton className="hover:text-[#bb6c13]" asChild>
                            <Link className={`${pathName === item.link ? "text-[#e67d06]" : "text-zinc-800"} hover:text-[#bb6c13]`} href={item.link} key={item.label}>{item.icon} <span>{item.label}</span></Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroupContent>
    )
    
}