import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, SearchIcon } from "lucide-react"
import {TableCategory  } from "./TableCategory"
import {DialogSaveCategory} from "./DialogSaveCategory"
import { Input } from "@/components/ui/input"


export default async function Categoria() {
    
    const categorias =[]
 
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div className=" flex flex-col items-start w-full justify-start max-w-lg r">
                    <h1 className="text-zinc-800 font-extrabold text-lg">Categorias</h1>
                    <div className="flex relative w-full">
                        <Input className="rounded-xl p-6" placeholder="Procurar" />
                        <SearchIcon size={24} className="text-zinc-500 absolute right-2 -translate-y-1/2 top-1/2"/>
                    </div>

                </div>
                <DialogSaveCategory>
                    <Button className="bg-[#e67d06] hover:bg-[#a74e0b]">Cadastrar <Plus /></Button>
                </DialogSaveCategory>
            </div>
            <Card>
                <CardContent>
                    <TableCategory categories={[]} />
                </CardContent>
            </Card>
        </div>
    )
}