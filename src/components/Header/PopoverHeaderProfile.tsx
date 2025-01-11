import { Button } from "@/components/ui/button"
import { Bell, ChevronDownCircle} from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Link from "next/link"

export function PopoverHeaderProfile() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="flex items-center justify-center gap-2 p-2 bg-zinc-100 rounded-2xl">
                    <img alt="avatar" width={30} height={30} className="rounded-full" src={"https://avatars.githubusercontent.com/u/122708313?s=400&u=b263ad642738eb6753e7740922ed85f84dcc3947&v=4"} />
                    <div className="hidden md:flex flex-col items-start ">
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


