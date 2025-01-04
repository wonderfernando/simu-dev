import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, SearchIcon } from "lucide-react"
import DialogSaveCategory from "./DialogSaveOptionGroup"
import { GET_CATEGORIES, GET_GROUP_OPTIN } from "@/app/API"
import { Input } from "@/components/ui/input"
import TableOpcionGroup from "./TableOpcionGroup"
import DialogSaveOptionGroup from "./DialogSaveOptionGroup"


export default async function Categoria() {
    
    const group = await GET_GROUP_OPTIN()
 
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div className=" flex flex-col items-start w-full justify-start max-w-lg r">
                    <h1 className="text-zinc-800 font-extrabold text-lg">Grupo de opções</h1>
                    <div className="flex relative w-full">
                        <Input className="rounded-xl p-6" placeholder="Procurar" />
                        <SearchIcon size={24} className="text-zinc-500 absolute right-2 -translate-y-1/2 top-1/2"/>
                    </div>

                </div>
                <DialogSaveOptionGroup >
                    <Button className="bg-[#e67d06] hover:bg-[#a74e0b]">Cadastrar <Plus /></Button>
                </DialogSaveOptionGroup>
            </div>
            <Card>
                <CardContent>
                    <TableOpcionGroup group={group} />
                </CardContent>
            </Card>
        </div>
    )
}