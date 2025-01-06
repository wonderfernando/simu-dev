import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSideBar } from "@/components/Sidebar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Header } from "@/components/Header/Header"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies();
    const getCoockie = cookieStore.get('auth_token');
    if (!getCoockie) {
       redirect('/login');
    }
  
    return (
        <SidebarProvider >
            <AppSideBar />
          {/*   <div className="md:sticky w-1 rounded-full h-[calc(100vh-20px)] hidden bg-[#e67d06] mt-2"></div>
           */}   
                <main className="flex flex-col px-1  w-full gap-8">
                    <Header />
                    {children}
                </main>
       
        </SidebarProvider >
    )
}