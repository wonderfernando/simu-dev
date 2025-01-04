import Link from "next/link";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { User2 } from "lucide-react";
import { menuSideBar } from "@/lib/myUtils";
import MySidebarGroupContent from "./MySideBarContext";

export default function AppSideBar() {

    return (
        <Sidebar variant="floating" collapsible="icon" className="">
            <SidebarHeader>
                <SidebarMenuButton asChild>
                    <Link href={""}>
                        <img src="./logo.png" width={16} />
                        <div className="flex flex-col items-center text-[]">
                            <span className="text-sm font-extrabold text-[#a74e0b]">Confia</span>
                            <span className="text-xs text-[#e67d06]">Seguros</span>
                        </div>
                    </Link>
                </SidebarMenuButton>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <MySidebarGroupContent menuSideBar={menuSideBar}/>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenuButton asChild>
                    <Link href={""}><User2 /> <span>Seguro</span></Link>
                </SidebarMenuButton>
            </SidebarFooter>
        </Sidebar>
    )
}

