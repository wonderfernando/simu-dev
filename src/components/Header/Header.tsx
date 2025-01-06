import { SidebarTrigger } from "../ui/sidebar";
import { PopoverHeaderNotify } from "./PopoverHeaderNotify";
import { PopoverHeaderProfile } from "./PopoverHeaderProfile";

export function Header() {
    return (
        <div className="mt-2 rounded-md shadow-sm  flex items-center justify-between overflow-hidden pr-1">
            <div className="flex gap-2 items-center justify-between h-full">
                <SidebarTrigger className="md:hidden h-full w-10 text-lg " />
                <div className=" flex-col p-1 hidden md:flex">
                    {/*  <SidebarTrigger className="h-full px-1 w-10" /> */}
                    <span className="text-[#e67d06] font-bold">Dashboard</span>
                    <span className="text-xs text-zinc-700">Verifique e mantenha o seu estatuto de seguro</span>
                </div>
            </div>
            <div className="flex items-center gap-2  cursor-pointer">
                <PopoverHeaderNotify />
                <PopoverHeaderProfile />
            </div>
        </div>
    )
}

 