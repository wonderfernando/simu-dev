import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import SidebarApp from "@/components/Sidebar"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Bell, ChevronDown, ChevronDownCircle } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function Layout({ children }: { children: React.ReactNode }) {
        /* const cookieStore = await cookies();
        const getCoockie = cookieStore.get('auth_token');
        if (!getCoockie) {
           redirect('/login');
        }
       */
    return (
        <SidebarProvider>
            <SidebarApp />
            <div className="sticky w-1 rounded-full h-[calc(100vh-20px)] bg-[#e67d06] mt-2"></div>
            <main className="flex flex-col w-full px-4 gap-8">
                <div className="mt-2 rounded-md shadow-sm   flex items-center justify-between">
                    <div className="flex flex-col p-1">
                        {/*  <SidebarTrigger className="h-full px-1 w-10" /> */}
                        <span className="text-[#e67d06] font-bold">Dashboard</span>
                        <span>Verifique e mantenha o seu estatuto de seguro</span>
                    </div>
                    <div className="flex items-center gap-2  cursor-pointer">
                        <PopoverHeaderNotify />
                        <PopoverHeader />
                    </div>
                </div>
                {children}
            </main>
        </SidebarProvider>
    )
}


function PopoverHeader() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="flex items-center justify-center gap-2 p-4 bg-zinc-100 rounded-2xl">
                    <img alt="avatar" width={30} height={30} className="rounded-full" src={"https://avatars.githubusercontent.com/u/122708313?s=400&u=b263ad642738eb6753e7740922ed85f84dcc3947&v=4"} />
                    <div className="flex flex-col items-start">
                        <span className="text-sm text-zinc-500 font-bold">Fernando</span>
                        <span className="text-xs text-zinc-500">fernando@gmail.com</span>
                    </div>
                    <ChevronDownCircle size={16} className="text-zinc-700" />
                </div>
            </PopoverTrigger>
            <PopoverContent className="">
                <div className="gap-4 flex flex-col items-start">
                    <div className="flex items-center gap-2">
                        <Link href="#" className="text-sm ">Meu perfil</Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href="/sair" className="text-sm ">Sair</Link>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

function PopoverHeaderNotify() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant={"ghost"} className="relative">
                    <Bell />
                    <span className="absolute text-red-400 text-xs font-extrabold right-3 bottom-0">2</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="max-w-lg p-0">
                <div className="gap-4 flex flex-col items-start">
                    <div className="flex items-center gap-2 border-b p-2 hover:bg-zinc-100 transition-all">
                        <Link href="#" className="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis!</Link>
                    </div>

                    <div className="flex items-center gap-2 border-b p-2 hover:bg-zinc-100">
                        <Link href="#" className="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus rem laborum soluta aut?</Link>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}