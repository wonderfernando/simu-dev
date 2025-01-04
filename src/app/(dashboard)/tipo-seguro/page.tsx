import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import {TableInsureType} from "./TableInsureType"
import {DialogSavaInsureType} from "./DialogSaveInsureType"


export default async function InsureTypePage() {
    
    const categorias =[]
 
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div className=" flex flex-col items-start w-full justify-start max-w-lg r">
                    <h1 className="text-zinc-800 font-extrabold text-lg">Tipo de seguro</h1>
                    <div className="flex relative w-full">
                        <Input className="rounded-xl p-6" placeholder="Procurar" />
                        <SearchIcon size={24} className="text-zinc-500 absolute right-2 -translate-y-1/2 top-1/2"/>
                    </div>

                </div>
                <DialogSavaInsureType>
                    <Button className="bg-[#e67d06] hover:bg-[#a74e0b]">Cadastrar <Plus /></Button>
                </DialogSavaInsureType>
            </div>
            <Card>
                <CardContent>
                    <TableInsureType categories={[]} />
                </CardContent>
            </Card>
        </div>
    )
}