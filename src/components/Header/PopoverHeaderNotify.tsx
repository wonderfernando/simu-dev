import { Button } from "@/components/ui/button"
import { Bell} from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Link from "next/link"

export function PopoverHeaderNotify() {
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